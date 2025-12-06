import { useState, useEffect } from 'react';
import { Download, Calendar, TrendingUp, TrendingDown, DollarSign } from 'lucide-react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { reportService } from '../../services/reportService';
import toast from 'react-hot-toast';
import currencyService from '../../services/currencyService';

const Reports = () => {
  const [dateRange, setDateRange] = useState({
    startDate: `${new Date().getFullYear()}-01-01`,
    endDate: new Date().toISOString().split('T')[0]
  });
  const [summary, setSummary] = useState(null);
  const [monthlyData, setMonthlyData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [savingsData, setSavingsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userCurrency, setUserCurrency] = useState('USD');

  useEffect(() => {
    loadReports();
    setUserCurrency(currencyService.getUserCurrency());
  }, [dateRange]);

  const loadReports = async () => {
    try {
      setLoading(true);

      // Load summary
      const summaryRes = await reportService.getSummary(dateRange);
      setSummary(summaryRes.summary);

      // Load monthly data
      const year = new Date(dateRange.startDate).getFullYear();
      const monthlyRes = await reportService.getMonthlyData(year);
      setMonthlyData(monthlyRes.data || []);

      // Load category breakdown
      const categoryRes = await reportService.getCategoryBreakdown({
        type: 'expense',
        ...dateRange
      });
      setCategoryData(categoryRes.data || []);

      // Load savings trend
      const savingsRes = await reportService.getSavingsTrend(year);
      setSavingsData(savingsRes.data || []);

    } catch (error) {
      console.error('Error loading reports:', error);
      toast.error('Failed to load reports');
    } finally {
      setLoading(false);
    }
  };

  const handleExport = () => {
    try {
      const data = `FinTrack Financial Report
Generated: ${new Date().toLocaleDateString()}
Period: ${dateRange.startDate} to ${dateRange.endDate}
Currency: ${userCurrency}

SUMMARY
Total Income: ${currencyService.format(summary?.totalIncome || 0, userCurrency)}
Total Expenses: ${currencyService.format(summary?.totalExpenses || 0, userCurrency)}
Current Balance: ${currencyService.format(summary?.currentBalance || 0, userCurrency)}
Savings Rate: ${summary?.savingsRate || 0}%

CATEGORY BREAKDOWN
${categoryData.map(cat => `${cat.name}: ${currencyService.format(cat.value, userCurrency)}`).join('\n')}
`;

      const blob = new Blob([data], { type: 'text/plain' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `fintrack-report-${new Date().toISOString().split('T')[0]}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);

      toast.success('Report exported successfully');
    } catch (error) {
      toast.error('Failed to export report');
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  const calculateTotalSpent = () => {
    return categoryData.reduce((sum, cat) => sum + parseFloat(cat.value), 0);
  };

  const totalSpent = calculateTotalSpent();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold glow-text">Financial Reports</h1>
          <p className="text-gray-400 mt-1">Analyze your financial performance</p>
        </div>
        <button
          onClick={handleExport}
          className="btn-primary flex items-center gap-2"
        >
          <Download className="w-5 h-5" />
          Export Report
        </button>
      </div>

      {/* Date Range Filter */}
      <div className="card">
        <div className="flex items-center gap-4">
          <Calendar className="w-5 h-5 text-primary" />
          <div className="flex items-center gap-4 flex-1">
            <div className="flex items-center gap-2">
              <label className="text-sm text-gray-400">From:</label>
              <input
                type="date"
                value={dateRange.startDate}
                onChange={(e) =>
                  setDateRange({ ...dateRange, startDate: e.target.value })
                }
                className="input"
              />
            </div>
            <div className="flex items-center gap-2">
              <label className="text-sm text-gray-400">To:</label>
              <input
                type="date"
                value={dateRange.endDate}
                onChange={(e) =>
                  setDateRange({ ...dateRange, endDate: e.target.value })
                }
                className="input"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      {summary && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="card border-l-4 border-green-500">
            <div className="flex items-center justify-between mb-2">
              <p className="text-gray-400 text-sm">Total Income</p>
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-green-500">
              {currencyService.format(summary.totalIncome, userCurrency)}
            </h3>
            <p className="text-sm text-gray-400 mt-1">
              Avg: {currencyService.format(summary.avgIncome || 0, userCurrency)}
            </p>
          </div>

          <div className="card border-l-4 border-red-500">
            <div className="flex items-center justify-between mb-2">
              <p className="text-gray-400 text-sm">Total Expenses</p>
              <TrendingDown className="w-5 h-5 text-red-500" />
            </div>
            <h3 className="text-2xl font-bold text-red-500">
              {currencyService.format(summary.totalExpenses, userCurrency)}
            </h3>
            <p className="text-sm text-gray-400 mt-1">
              Avg: {currencyService.format(summary.avgExpense || 0, userCurrency)}
            </p>
          </div>

          <div className="card border-l-4 border-primary">
            <div className="flex items-center justify-between mb-2">
              <p className="text-gray-400 text-sm">Net Savings</p>
              <DollarSign className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-2xl font-bold glow-text">
              {currencyService.format(summary.currentBalance, userCurrency)}
            </h3>
            <p className="text-sm text-gray-400 mt-1">
              {summary.savingsRate}% of income
            </p>
          </div>

          <div className="card border-l-4 border-purple-500">
            <div className="flex items-center justify-between mb-2">
              <p className="text-gray-400 text-sm">Savings Rate</p>
              <TrendingUp className="w-5 h-5 text-purple-500" />
            </div>
            <h3 className="text-2xl font-bold text-purple-500">
              {summary.savingsRate}%
            </h3>
            <p className="text-sm text-gray-400 mt-1">
              {summary.savingsRate > 20 ? 'Great!' : 'Can improve'}
            </p>
          </div>
        </div>
      )}

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Income vs Expense Trend */}
        <div className="card">
          <h3 className="text-xl font-bold mb-4">Income vs Expense Trend</h3>
          {monthlyData.length > 0 ? (
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2A2A2A" />
                <XAxis dataKey="month" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1A1A1A',
                    border: '1px solid #2A2A2A',
                    borderRadius: '8px'
                  }}
                />
                <Legend />
                <Bar dataKey="income" fill="#00D9FF" name="Income" />
                <Bar dataKey="expense" fill="#FF3366" name="Expense" />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <div className="h-72 flex items-center justify-center text-gray-400">
              No data available
            </div>
          )}
        </div>

        {/* Category Breakdown with Modern Donut Chart */}
        <div className="card">
          <h3 className="text-xl font-bold mb-4">Expenses by Category</h3>
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
            <div className="h-72 flex items-center justify-center text-gray-400">
              No expense data
            </div>
          )}
        </div>

        {/* Savings Trend */}
        <div className="card lg:col-span-2">
          <h3 className="text-xl font-bold mb-4">Monthly Savings Trend</h3>
          {savingsData.length > 0 ? (
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={savingsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2A2A2A" />
                <XAxis dataKey="month" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1A1A1A',
                    border: '1px solid #2A2A2A',
                    borderRadius: '8px'
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="savings"
                  stroke="#00D9FF"
                  strokeWidth={3}
                  name="Savings"
                  dot={{ fill: '#00D9FF', r: 5 }}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          ) : (
            <div className="h-72 flex items-center justify-center text-gray-400">
              No savings data
            </div>
          )}
        </div>
      </div>

      {/* Detailed Breakdown */}
      {categoryData.length > 0 && (
        <div className="card">
          <h3 className="text-xl font-bold mb-4">Category Breakdown</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">
                    Category
                  </th>
                  <th className="text-right py-3 px-4 text-gray-400 font-medium">
                    Amount
                  </th>
                  <th className="text-right py-3 px-4 text-gray-400 font-medium">
                    Percentage
                  </th>
                  <th className="text-right py-3 px-4 text-gray-400 font-medium">
                    Transactions
                  </th>
                </tr>
              </thead>
              <tbody>
                {categoryData.map((cat, index) => (
                  <tr
                    key={index}
                    className="border-b border-white/5 hover:bg-white/5"
                  >
                    <td className="py-3 px-4 flex items-center gap-3">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: cat.color }}
                      />
                      <span>{cat.name}</span>
                    </td>
                    <td className="py-3 px-4 text-right font-semibold">
                      {currencyService.format(cat.value, userCurrency)}
                    </td>
                    <td className="py-3 px-4 text-right text-gray-400">
                      {cat.percentage}%
                    </td>
                    <td className="py-3 px-4 text-right text-gray-400">
                      {cat.count}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reports;