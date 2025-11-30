import { useState, useEffect } from 'react';
import { Plus, Search, Filter, Edit2, Trash2, Calendar } from 'lucide-react';
import { transactionService } from '../../services/transactionService';
import toast from 'react-hot-toast';
import { format } from 'date-fns';

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingTransaction, setEditingTransaction] = useState(null);
  const [filters, setFilters] = useState({
    type: '',
    category: '',
    search: ''
  });

  const [formData, setFormData] = useState({
    description: '',
    amount: '',
    type: 'expense',
    category: '',
    date: new Date().toISOString().split('T')[0],
    notes: ''
  });

  const categories = {
    income: ['Salary', 'Freelance', 'Business', 'Investment', 'Other Income'],
    expense: [
      'Food & Dining',
      'Transportation',
      'Shopping',
      'Entertainment',
      'Bills & Utilities',
      'Healthcare',
      'Education',
      'Travel',
      'Other Expense'
    ]
  };

  useEffect(() => {
    loadTransactions();
  }, [filters]);

  const loadTransactions = async () => {
    try {
      setLoading(true);
      const params = {};
      if (filters.type) params.type = filters.type;
      if (filters.category) params.category = filters.category;

      const data = await transactionService.getAll(params);
      let filteredTransactions = data.transactions || [];

      // Client-side search filter
      if (filters.search) {
        filteredTransactions = filteredTransactions.filter(t =>
          t.description.toLowerCase().includes(filters.search.toLowerCase())
        );
      }

      setTransactions(filteredTransactions);
    } catch (error) {
      console.error('Error loading transactions:', error);
      toast.error('Failed to load transactions');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingTransaction) {
        await transactionService.update(editingTransaction.id, formData);
        toast.success('Transaction updated successfully');
      } else {
        await transactionService.create(formData);
        toast.success('Transaction created successfully');
      }

      setShowModal(false);
      resetForm();
      loadTransactions();
    } catch (error) {
      toast.error(error.response?.data?.error || 'Operation failed');
    }
  };

  const handleEdit = (transaction) => {
    setEditingTransaction(transaction);
    setFormData({
      description: transaction.description,
      amount: transaction.amount,
      type: transaction.type,
      category: transaction.category,
      date: transaction.date,
      notes: transaction.notes || ''
    });
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this transaction?')) {
      return;
    }

    try {
      await transactionService.delete(id);
      toast.success('Transaction deleted successfully');
      loadTransactions();
    } catch (error) {
      toast.error('Failed to delete transaction');
    }
  };

  const resetForm = () => {
    setFormData({
      description: '',
      amount: '',
      type: 'expense',
      category: '',
      date: new Date().toISOString().split('T')[0],
      notes: ''
    });
    setEditingTransaction(null);
  };

  const handleModalClose = () => {
    setShowModal(false);
    resetForm();
  };

  // Calculate totals
  const totalIncome = transactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + parseFloat(t.amount), 0);

  const totalExpenses = transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + parseFloat(t.amount), 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold glow-text">Transactions</h1>
          <p className="text-gray-400 mt-1">Manage your income and expenses</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="btn-primary flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Add Transaction
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card border-l-4 border-green-500">
          <p className="text-gray-400 text-sm mb-1">Total Income</p>
          <h3 className="text-2xl font-bold text-green-500">
            ${totalIncome.toFixed(2)}
          </h3>
        </div>
        <div className="card border-l-4 border-red-500">
          <p className="text-gray-400 text-sm mb-1">Total Expenses</p>
          <h3 className="text-2xl font-bold text-red-500">
            ${totalExpenses.toFixed(2)}
          </h3>
        </div>
        <div className="card border-l-4 border-primary">
          <p className="text-gray-400 text-sm mb-1">Net Balance</p>
          <h3 className="text-2xl font-bold glow-text">
            ${(totalIncome - totalExpenses).toFixed(2)}
          </h3>
        </div>
      </div>

      {/* Filters */}
      <div className="card">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search transactions..."
              value={filters.search}
              onChange={(e) => setFilters({ ...filters, search: e.target.value })}
              className="input pl-12 w-full "
            />
          </div>

          {/* Type Filter */}
          <select
            value={filters.type}
            onChange={(e) => setFilters({ ...filters, type: e.target.value })}
            className="input w-full custom-select"
          >
            <option value="">All Types</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>

          {/* Category Filter */}
          <select
            value={filters.category}
            onChange={(e) => setFilters({ ...filters, category: e.target.value })}
            className="input w-full custom-select"
          >
            <option value="">All Categories</option>
            <optgroup label="Income">
              {categories.income.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </optgroup>
            <optgroup label="Expense">
              {categories.expense.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </optgroup>
          </select>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="card">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Date</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Description</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Category</th>
                <th className="text-right py-3 px-4 text-gray-400 font-medium">Amount</th>
                <th className="text-right py-3 px-4 text-gray-400 font-medium">Type</th>
                <th className="text-right py-3 px-4 text-gray-400 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="6" className="text-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary mx-auto"></div>
                  </td>
                </tr>
              ) : transactions.length === 0 ? (
                <tr>
                  <td colSpan="6" className="text-center py-8 text-gray-400">
                    No transactions found. Create your first transaction!
                  </td>
                </tr>
              ) : (
                transactions.map((transaction) => (
                  <tr
                    key={transaction.id}
                    className="border-b border-white/5 hover:bg-white/5"
                  >
                    <td className="py-3 px-4 text-gray-400">
                      {format(new Date(transaction.date), 'MMM dd, yyyy')}
                    </td>
                    <td className="py-3 px-4">
                      <div>
                        <p className="font-medium">{transaction.description}</p>
                        {transaction.notes && (
                          <p className="text-sm text-gray-400">{transaction.notes}</p>
                        )}
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span className="text-primary text-sm">{transaction.category}</span>
                    </td>
                    <td className={`py-3 px-4 text-right font-semibold ${
                      transaction.type === 'income' ? 'text-green-500' : 'text-red-500'
                    }`}>
                      {transaction.type === 'income' ? '+' : '-'}${parseFloat(transaction.amount).toFixed(2)}
                    </td>
                    <td className="py-3 px-4 text-right">
                      <span className={`px-2 py-1 rounded text-xs ${
                        transaction.type === 'income'
                          ? 'bg-green-500/20 text-green-500'
                          : 'bg-red-500/20 text-red-500'
                      }`}>
                        {transaction.type}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => handleEdit(transaction)}
                          className="p-2 hover:bg-white/10 rounded transition text-primary"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(transaction.id)}
                          className="p-2 hover:bg-white/10 rounded transition text-red-500"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="card max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold mb-6">
              {editingTransaction ? 'Edit Transaction' : 'Add Transaction'}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Type */}
              <div>
                <label className="block text-sm font-medium mb-2">Type</label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="type"
                      value="income"
                      checked={formData.type === 'income'}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value, category: '' })}
                      className="w-4 h-4 text-primary"
                    />
                    <span>Income</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="type"
                      value="expense"
                      checked={formData.type === 'expense'}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value, category: '' })}
                      className="w-4 h-4 text-primary"
                    />
                    <span>Expense</span>
                  </label>
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium mb-2">Description</label>
                <input
                  type="text"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="input w-full custom-select"
                  placeholder="e.g., Grocery shopping"
                  required
                />
              </div>

              {/* Amount & Date */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Amount</label>
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    value={formData.amount}
                    onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                    className="input w-full custom-select"
                    placeholder="0.00"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Date</label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="input w-full custom-select"
                    required
                  />
                </div>
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-medium mb-2">Category</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="input w-full custom-select"
                  required
                >
                  <option value="">Select category</option>
                  {categories[formData.type].map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-sm font-medium mb-2">Notes (Optional)</label>
                <textarea
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="input w-full custom-select"
                  rows="3"
                  placeholder="Additional details..."
                />
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <button type="submit" className="btn-primary flex-1">
                  {editingTransaction ? 'Update' : 'Create'} Transaction
                </button>
                <button
                  type="button"
                  onClick={handleModalClose}
                  className="btn-secondary flex-1"
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

export default Transactions;