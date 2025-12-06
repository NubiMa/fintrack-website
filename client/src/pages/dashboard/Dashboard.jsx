import { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, DollarSign, Wallet } from 'lucide-react';
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { transactionService } from '../../services/transactionService';
import { reportService } from '../../services/reportService';
import { budgetService } from '../../services/budgetService';
import { useAuth } from '../../context/AuthContext';
import currencyService from '../../services/currencyService';

const Dashboard = () => {
  const { user } = useAuth();
  const [transactions, setTransactions] = useState([]);
  const [monthlyData, setMonthlyData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [budgets, setBudgets] = useState([]);
  const [summary, setSummary] = useState({
    totalIncome: 0,
    totalExpenses: 0,
    currentBalance: 0
  });
  const [loading, setLoading] = useState(true);
  const [userCurrency, setUserCurrency] = useState('USD');

  useEffect(() => {
    loadDashboardData();
    setUserCurrency(currencyService.getUserCurrency());
  }, []);

  const loadDashboardData = async () => {
    try {
      setLoading(true);

      // Load recent transactions
      const transData = await transactionService.getAll({ limit: 5 });
      setTransactions(transData.transactions || []);

      // Load summary
      const summaryData = await reportService.getSummary();
      setSummary(summaryData.summary || {
        totalIncome: 0,
        totalExpenses: 0,
        currentBalance: 0
      });

      // Load monthly data for chart
      const currentYear = new Date().getFullYear();
      const monthlyResult = await reportService.getMonthlyData(currentYear);
      setMonthlyData(monthlyResult.data || []);

      // Load category breakdown
      const categoryResult = await reportService.getCategoryBreakdown({ type: 'expense' });
      setCategoryData(categoryResult.data || []);

      // Load budgets
      const budgetResult = await budgetService.getAll();
      setBudgets(budgetResult.budgets || []);

    } catch (error) {
      console.error('Error loading dashboard:', error);
    } finally {
      setLoading(false);
    }
  };

  const calculateTotalSpent = () => {
    return categoryData.reduce((sum, cat) => sum + parseFloat(cat.value), 0);
  };

  const getStatusColor = (percentage) => {
    if (percentage >= 100) return { bar: 'bg-red-500', text: 'text-red-500' };
    if (percentage >= 80) return { bar: 'bg-orange-500', text: 'text-orange-500' };
    return { bar: 'bg-primary', text: 'text-primary' };
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  const totalSpent = calculateTotalSpent();

  return (
    <div className="space-y-6">
      {/* Welcome */}
      <div>
        <h1 className="text-3xl font-bold mb-2">
          Good afternoon, <span className="glow-text">{user?.name}</span>
        </h1>
        <p className="text-gray-400">Here's your financial overview.</p>
      </div>

      {/* Summary Cards */}
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card border-l-4 border-green-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm mb-1">Total Income</p>
              <h3 className="text-2xl font-bold text-green-500">
                {currencyService.format(summary.totalIncome || 0, userCurrency)}
              </h3>
            </div>
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-green-500" />
            </div>
          </div>
        </div>

        <div className="card border-l-4 border-red-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm mb-1">Total Expenses</p>
              <h3 className="text-2xl font-bold text-red-500">
                {currencyService.format(summary.totalExpenses || 0, userCurrency)}
              </h3>
            </div>
            <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
              <TrendingDown className="w-6 h-6 text-red-500" />
            </div>
          </div>
        </div>

        <div className="card border-l-4 border-primary">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm mb-1">Current Balance</p>
              <h3 className="text-2xl font-bold glow-text">
                {currencyService.format(summary.currentBalance || 0, userCurrency)}
              </h3>
            </div>
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-primary" />
            </div>
          </div>
        </div>
      </div> */}

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card border-l-4 border-green-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm mb-1">Total Income</p>
              <h3 className="text-2xl font-bold text-green-500">
                {summary.totalIncome !== undefined 
                  ? currencyService.format(summary.totalIncome, userCurrency)
                  : 'Loading...'}
              </h3>
            </div>
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-green-500" />
            </div>
          </div>
        </div>

        <div className="card border-l-4 border-red-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm mb-1">Total Expenses</p>
              <h3 className="text-2xl font-bold text-red-500">
                {summary.totalExpenses !== undefined
                  ? currencyService.format(summary.totalExpenses, userCurrency)
                  : 'Loading...'}
              </h3>
            </div>
            <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
              <TrendingDown className="w-6 h-6 text-red-500" />
            </div>
          </div>
        </div>

        <div className="card border-l-4 border-primary">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm mb-1">Current Balance</p>
              <h3 className="text-2xl font-bold glow-text">
                {summary.currentBalance !== undefined
                  ? currencyService.format(summary.currentBalance, userCurrency)
                  : 'Loading...'}
              </h3>
            </div>
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-primary" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid - 2 Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          {/* History Table */}
          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">History</h3>
              <a href="/transactions" className="text-primary hover:underline text-sm">
                View All
              </a>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 px-2 text-gray-400 font-medium text-sm">Description</th>
                    <th className="text-left py-3 px-2 text-gray-400 font-medium text-sm">Category</th>
                    <th className="text-right py-3 px-2 text-gray-400 font-medium text-sm">Amount</th>
                    <th className="text-right py-3 px-2 text-gray-400 font-medium text-sm">Type</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.length === 0 ? (
                    <tr>
                      <td colSpan="4" className="text-center py-8 text-gray-400 text-sm">
                        No transactions yet
                      </td>
                    </tr>
                  ) : (
                    transactions.map((transaction) => (
                      <tr key={transaction.id} className="border-b border-white/5 hover:bg-white/5">
                        <td className="py-3 px-2 text-sm">{transaction.description}</td>
                        <td className="py-3 px-2">
                          <span className="text-primary text-xs">{transaction.category}</span>
                        </td>
                        <td
                          className={`py-3 px-2 text-right font-semibold text-sm ${
                            transaction.type === 'income' ? 'text-green-500' : 'text-red-500'
                          }`}
                        >
                          {transaction.type === 'income' ? '+' : '-'}
                          {currencyService.format(transaction.amount, userCurrency)}
                        </td>
                        <td className="py-3 px-2 text-right">
                          <span
                            className={`px-2 py-0.5 rounded text-xs ${
                              transaction.type === 'income'
                                ? 'bg-green-500/20 text-green-500'
                                : 'bg-red-500/20 text-red-500'
                            }`}
                          >
                            {transaction.type}
                          </span>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Expense Chart */}
          <div className="card">
            <h3 className="text-xl font-bold mb-4">Expense</h3>
            {monthlyData.length > 0 ? (
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={monthlyData}>
                  <XAxis dataKey="month" stroke="#888" tick={{ fontSize: 12 }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#1A1A1A',
                      border: '1px solid #2A2A2A',
                      borderRadius: '8px',
                      fontSize: '12px'
                    }}
                  />
                  <Bar dataKey="expense" fill="#FF3366" name="Expense" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <div className="h-48 flex items-center justify-center text-gray-400 text-sm">
                No data available
              </div>
            )}
          </div>

          {/* Recent Transactions List */}
          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">Transactions</h3>
            </div>
            <div className="space-y-3">
              {transactions.slice(0, 3).map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                  <div>
                    <p className="font-medium text-sm">{transaction.description}</p>
                    <p className="text-xs text-gray-400">{transaction.category}</p>
                  </div>
                  <p
                    className={`font-bold text-sm ${
                      transaction.type === 'income' ? 'text-green-500' : 'text-red-500'
                    }`}
                  >
                    {transaction.type === 'income' ? '+' : '-'}
                    {currencyService.format(transaction.amount, userCurrency)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Expenses by Category - Donut Chart */}
          <div className="card">
            <h3 className="text-xl font-bold mb-6">Expenses by Category</h3>
            {categoryData.length > 0 ? (
              <div className="space-y-6">
                {/* Modern Donut Chart */}
                <div className="relative">
                  <ResponsiveContainer width="100%" height={240}>
                    <PieChart>
                      <Pie
                        data={categoryData}
                        cx="50%"
                        cy="50%"
                        innerRadius={75}
                        outerRadius={100}
                        paddingAngle={2}
                        dataKey="value"
                        stroke="none"
                      >
                        {categoryData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  
                  {/* Center Text */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <p className="text-gray-400 text-xs">Total Spent</p>
                    <p className="text-2xl font-bold glow-text">
                      {currencyService.format(totalSpent, userCurrency)}
                    </p>
                  </div>
                </div>

                {/* Legend Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {categoryData.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div
                        className="w-3 h-3 rounded-full flex-shrink-0"
                        style={{ backgroundColor: item.color }}
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium truncate">{item.name}</p>
                        <p className="text-xs text-gray-500">{item.percentage}%</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="h-64 flex items-center justify-center text-gray-400 text-sm">
                No expense data
              </div>
            )}
          </div>

          {/* Budgets Section */}
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold">Budgets</h3>
              <a href="/budgets" className="text-primary hover:underline text-sm">
                View All
              </a>
            </div>

            {budgets.length === 0 ? (
              <div className="text-center py-8 text-gray-400 text-sm">
                <Wallet className="w-10 h-10 mx-auto mb-3 opacity-50" />
                <p>No budgets set yet</p>
              </div>
            ) : (
              <div className="space-y-5">
                {budgets.slice(0, 3).map((budget) => {
                  const limitAmount = parseFloat(budget.limitAmount || budget.limit_amount || 0);
                  const spent = parseFloat(budget.spent || 0);
                  const percentage = (spent / limitAmount) * 100;
                  const colors = getStatusColor(percentage);

                  return (
                    <div key={budget.id} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium text-sm">{budget.category}</h4>
                        <p className="text-xs text-gray-400">
                          {currencyService.format(spent, userCurrency, false)} / {currencyService.format(limitAmount, userCurrency, false)}
                        </p>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-full ${colors.bar} transition-all duration-300`}
                          style={{ width: `${Math.min(percentage, 100)}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;