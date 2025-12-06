import { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, AlertCircle } from 'lucide-react';
import { budgetService } from '../../services/budgetService';
import toast from 'react-hot-toast';
import currencyService from '../../services/currencyService';

const Budgets = () => {
  const [budgets, setBudgets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingBudget, setEditingBudget] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [userCurrency, setUserCurrency] = useState('USD');

  const [formData, setFormData] = useState({
    category: '',
    limitAmount: '',
    period: 'monthly',
    startDate: new Date().toISOString().split('T')[0]
  });

  const categories = [
    'Food & Dining',
    'Transportation',
    'Shopping',
    'Entertainment',
    'Bills & Utilities',
    'Healthcare',
    'Education',
    'Travel',
    'Other Expense'
  ];

  useEffect(() => {
    loadBudgets();
    setUserCurrency(currencyService.getUserCurrency());
  }, []);

  const loadBudgets = async () => {
    try {
      setLoading(true);
      const data = await budgetService.getAll();
      setBudgets(data.budgets || []);
    } catch (error) {
      console.error('Error loading budgets:', error);
      toast.error('Failed to load budgets');
      setBudgets([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      if (editingBudget) {
        await budgetService.update(editingBudget.id, formData);
        toast.success('Budget updated successfully');
      } else {
        await budgetService.create(formData);
        toast.success('Budget created successfully');
      }

      setShowModal(false);
      resetForm();
      loadBudgets();
    } catch (error) {
      console.error('Budget operation error:', error);
      toast.error(error.response?.data?.error || 'Operation failed');
    } finally {
      setSubmitting(false);
    }
  };

  const handleEdit = (budget) => {
    setEditingBudget(budget);
    setFormData({
      category: budget.category,
      limitAmount: budget.limitAmount || budget.limit_amount,
      period: budget.period,
      startDate: budget.startDate || budget.start_date
    });
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this budget?')) {
      return;
    }

    try {
      await budgetService.delete(id);
      toast.success('Budget deleted successfully');
      loadBudgets();
    } catch (error) {
      console.error('Delete error:', error);
      toast.error('Failed to delete budget');
    }
  };

  const resetForm = () => {
    setFormData({
      category: '',
      limitAmount: '',
      period: 'monthly',
      startDate: new Date().toISOString().split('T')[0]
    });
    setEditingBudget(null);
  };

  const handleModalClose = () => {
    setShowModal(false);
    resetForm();
  };

  const getPercentage = (spent, limit) => {
    const spentNum = parseFloat(spent) || 0;
    const limitNum = parseFloat(limit) || 1;
    return (spentNum / limitNum) * 100;
  };

  const getStatusColor = (percentage) => {
    if (percentage >= 100) return 'red';
    if (percentage >= 80) return 'orange';
    return 'cyan';
  };

  const getStatusText = (percentage) => {
    if (percentage >= 100) return 'Exceeded';
    if (percentage >= 80) return 'Warning';
    return 'Good';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold glow-text">Budgets</h1>
          <p className="text-gray-400 mt-1">Track and manage your spending limits</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="btn-primary flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Add Budget
        </button>
      </div>

      {/* Budgets Grid */}
      {loading ? (
        <div className="flex items-center justify-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      ) : budgets.length === 0 ? (
        <div className="card text-center py-12">
          <AlertCircle className="w-16 h-16 text-gray-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">No budgets yet</h3>
          <p className="text-gray-400 mb-6">
            Create your first budget to start tracking your spending
          </p>
          <button
            onClick={() => setShowModal(true)}
            className="btn-primary inline-flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Create Budget
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {budgets.map((budget) => {
            const limitAmount = parseFloat(budget.limitAmount || budget.limit_amount || 0);
            const spent = parseFloat(budget.spent || 0);
            const percentage = getPercentage(spent, limitAmount);
            const statusColor = getStatusColor(percentage);
            const statusText = getStatusText(percentage);
            const remaining = limitAmount - spent;

            return (
              <div key={budget.id} className="card hover:scale-105 transition-transform">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold">{budget.category}</h3>
                    <p className="text-sm text-gray-400 capitalize">{budget.period}</p>
                  </div>
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      statusColor === 'red'
                        ? 'bg-red-500/20 text-red-500'
                        : statusColor === 'orange'
                        ? 'bg-orange-500/20 text-orange-500'
                        : 'bg-cyan-500/20 text-cyan-500'
                    }`}
                  >
                    {statusText}
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400">Progress</span>
                    <span className="font-semibold">{percentage.toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all ${
                        statusColor === 'red'
                          ? 'bg-red-500'
                          : statusColor === 'orange'
                          ? 'bg-orange-500'
                          : 'bg-primary'
                      }`}
                      style={{ width: `${Math.min(percentage, 100)}%` }}
                    />
                  </div>
                </div>

                {/* Amounts */}
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Spent</span>
                    <span className="font-semibold text-red-500">
                      {currencyService.format(spent, userCurrency)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Limit</span>
                    <span className="font-semibold">
                      {currencyService.format(limitAmount, userCurrency)}
                    </span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-white/10">
                    <span className="text-gray-400">Remaining</span>
                    <span className={`font-semibold ${remaining >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                      {currencyService.format(Math.abs(remaining), userCurrency)}
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-4 border-t border-white/10">
                  <button
                    onClick={() => handleEdit(budget)}
                    className="flex-1 btn-secondary text-sm py-2 flex items-center justify-center gap-2"
                  >
                    <Edit2 className="w-4 h-4" />
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(budget.id)}
                    className="flex-1 border-2 border-red-500 text-red-500 px-4 py-2 rounded-lg hover:bg-red-500/10 transition-all text-sm flex items-center justify-center gap-2"
                  >
                    <Trash2 className="w-4 h-4" />
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="card max-w-md w-full">
            <h2 className="text-2xl font-bold mb-6">
              {editingBudget ? 'Edit Budget' : 'Create Budget'}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Category */}
              <div>
                <label className="block text-sm font-medium mb-2">Category</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="input w-full custom-select"
                  required
                  disabled={submitting}
                >
                  <option value="">Select category</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              {/* Limit Amount */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Budget Limit ({currencyService.CURRENCY_SYMBOLS[userCurrency]})
                </label>
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  value={formData.limitAmount}
                  onChange={(e) => setFormData({ ...formData, limitAmount: e.target.value })}
                  className="input w-full"
                  placeholder="0.00"
                  required
                  disabled={submitting}
                />
              </div>

              {/* Period */}
              <div>
                <label className="block text-sm font-medium mb-2">Period</label>
                <select
                  value={formData.period}
                  onChange={(e) => setFormData({ ...formData, period: e.target.value })}
                  className="input w-full custom-select"
                  required
                  disabled={submitting}
                >
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                  <option value="yearly">Yearly</option>
                </select>
              </div>

              {/* Start Date */}
              <div>
                <label className="block text-sm font-medium mb-2">Start Date</label>
                <input
                  type="date"
                  value={formData.startDate}
                  onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                  className="input w-full"
                  required
                  disabled={submitting}
                />
              </div>

              {/* Buttons */}
              <div className="flex gap-4 pt-2">
                <button 
                  type="submit" 
                  className="btn-primary flex-1"
                  disabled={submitting}
                >
                  {submitting ? 'Saving...' : editingBudget ? 'Update Budget' : 'Create Budget'}
                </button>
                <button
                  type="button"
                  onClick={handleModalClose}
                  className="btn-secondary flex-1"
                  disabled={submitting}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Budgets;