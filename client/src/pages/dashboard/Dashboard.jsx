import { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, DollarSign, ArrowUpRight } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { transactionService } from '../../services/transactionService';
import { useAuth } from '../../context/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTransactions();
  }, []);

  const loadTransactions = async () => {
    try {
      const data = await transactionService.getAll({ limit: 10 });
      setTransactions(data.transactions || []);
    } catch (error) {
      console.error('Error loading transactions:', error);
    } finally {
      setLoading(false);
    }
  };

  // Calculate summary
  const totalIncome = transactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpenses = transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);

  const currentBalance = totalIncome - totalExpenses;

  // Mock chart data
  const monthlyData = [
    { month: 'Jan', income: 3000, expense: 2200 },
    { month: 'Feb', income: 3200, expense: 2400 },
    { month: 'Mar', income: 2800, expense: 2100 },
    { month: 'Apr', income: 3500, expense: 2600 },
    { month: 'May', income: 3300, expense: 2150 },
    { month: 'Jun', income: 3700, expense: 2800 },
  ];

  const categoryData = [
    { name: 'Food & Dining', value: 450, color: '#00D9FF' },
    { name: 'Transportation', value: 280, color: '#FF3366' },
    { name: 'Bills & Utilities', value: 520, color: '#A855F7' },
    { name: 'Shopping', value: 340, color: '#10B981' },
  ];

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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card border-l-4 border-green-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm mb-1">Total Income</p>
              <h3 className="text-2xl font-bold">${parseFloat(totalIncome).toFixed(2)}</h3>
              <p className="text-green-500 text-sm mt-1">+8.1% vs last month</p>
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
              <h3 className="text-2xl font-bold">${parseFloat(totalExpenses).toFixed(2)}</h3>
              <p className="text-red-500 text-sm mt-1">+8.1% vs last month</p>
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
              <h3 className="text-2xl font-bold glow-text">${currentBalance.toFixed(2)}</h3>
              <p className="text-primary text-sm mt-1">-1.5% vs last month</p>
            </div>
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-primary" />
            </div>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="text-xl font-bold mb-4">Income vs Expense</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2A2A2A" />
              <XAxis dataKey="month" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1A1A1A', border: '1px solid #2A2A2A' }}
              />
              <Legend />
              <Bar dataKey="income" fill="#00D9FF" />
              <Bar dataKey="expense" fill="#FF3366" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <h3 className="text-xl font-bold mb-4">Expenses by Category</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ backgroundColor: '#1A1A1A', border: '1px solid #2A2A2A' }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {categoryData.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                <span className="text-sm text-gray-400">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold">Transaction History</h3>
          <button className="text-primary hover:underline text-sm">View All</button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Description</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Category</th>
                <th className="text-right py-3 px-4 text-gray-400 font-medium">Amount</th>
                <th className="text-right py-3 px-4 text-gray-400 font-medium">Type</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="4" className="text-center py-8 text-gray-400">
                    Loading...
                  </td>
                </tr>
              ) : transactions.length === 0 ? (
                <tr>
                  <td colSpan="4" className="text-center py-8 text-gray-400">
                    No transactions yet
                  </td>
                </tr>
              ) : (
                transactions.slice(0, 5).map((transaction,index) => (
                  <tr  key={transaction._id || `trx-${index}`}  className="border-b border-white/5 hover:bg-white/5">
                    <td className="py-3 px-4">{transaction.description}</td>
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
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;