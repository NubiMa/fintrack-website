import { useState } from 'react';
import { Download, Calendar, TrendingUp, TrendingDown, DollarSign } from 'lucide-react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Reports = () => {
  const [dateRange, setDateRange] = useState({
    startDate: '2024-01-01',
    endDate: '2024-12-31'
  });

  // Mock data - replace with actual API data
  const monthlyData = [
    { month: 'Jan', income: 3000, expense: 2200 },
    { month: 'Feb', income: 3200, expense: 2400 },
    { month: 'Mar', income: 2800, expense: 2100 },
    { month: 'Apr', income: 3500, expense: 2600 },
    { month: 'May', income: 3300, expense: 2150 },
    { month: 'Jun', income: 3700, expense: 2800 },
    { month: 'Jul', income: 3400, expense: 2500 },
    { month: 'Aug', income: 3600, expense: 2700 },
    { month: 'Sep', income: 3100, expense: 2300 },
    { month: 'Oct', income: 3800, expense: 2900 },
    { month: 'Nov', income: 3500, expense: 2600 },
  ];

  const categoryData = [
    { name: 'Food & Dining', value: 1250, color: '#00D9FF' },
    { name: 'Transportation', value: 890, color: '#FF3366' },
    { name: 'Bills & Utilities', value: 1520, color: '#A855F7' },
    { name: 'Shopping', value: 740, color: '#10B981' },
    { name: 'Entertainment', value: 450, color: '#F59E0B' },
    { name: 'Healthcare', value: 320, color: '#EC4899' },
  ];

  const trendData = [
    { month: 'Jan', value: 800 },
    { month: 'Feb', value: 800 },
    { month: 'Mar', value: 700 },
    { month: 'Apr', value: 900 },
    { month: 'May', value: 1150 },
    { month: 'Jun', value: 900 },
    { month: 'Jul', value: 900 },
    { month: 'Aug', value: 900 },
    { month: 'Sep', value: 800 },
    { month: 'Oct', value: 900 },
    { month: 'Nov', value: 900 },
  ];

  const summary = {
    totalIncome: 38900,
    totalExpenses: 28200,
    netSavings: 10700,
    savingsRate: 27.5,
    avgMonthlyIncome: 3536,
    avgMonthlyExpense: 2564
  };

  const handleExport = () => {
    // Implement export to CSV/PDF functionality
    alert('Export functionality coming soon!');
  };

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
                onChange={(e) => setDateRange({ ...dateRange, startDate: e.target.value })}
                className="input"
              />
            </div>
            <div className="flex items-center gap-2">
              <label className="text-sm text-gray-400">To:</label>
              <input
                type="date"
                value={dateRange.endDate}
                onChange={(e) => setDateRange({ ...dateRange, endDate: e.target.value })}
                className="input"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="card border-l-4 border-green-500">
          <div className="flex items-center justify-between mb-2">
            <p className="text-gray-400 text-sm">Total Income</p>
            <TrendingUp className="w-5 h-5 text-green-500" />
          </div>
          <h3 className="text-2xl font-bold text-green-500">
            ${summary.totalIncome.toLocaleString()}
          </h3>
          <p className="text-sm text-gray-400 mt-1">
            Avg: ${summary.avgMonthlyIncome.toLocaleString()}/mo
          </p>
        </div>

        <div className="card border-l-4 border-red-500">
          <div className="flex items-center justify-between mb-2">
            <p className="text-gray-400 text-sm">Total Expenses</p>
            <TrendingDown className="w-5 h-5 text-red-500" />
          </div>
          <h3 className="text-2xl font-bold text-red-500">
            ${summary.totalExpenses.toLocaleString()}
          </h3>
          <p className="text-sm text-gray-400 mt-1">
            Avg: ${summary.avgMonthlyExpense.toLocaleString()}/mo
          </p>
        </div>

        <div className="card border-l-4 border-primary">
          <div className="flex items-center justify-between mb-2">
            <p className="text-gray-400 text-sm">Net Savings</p>
            <DollarSign className="w-5 h-5 text-primary" />
          </div>
          <h3 className="text-2xl font-bold glow-text">
            ${summary.netSavings.toLocaleString()}
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
            Above average 📈
          </p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Income vs Expense Trend */}
        <div className="card">
          <h3 className="text-xl font-bold mb-4">Income vs Expense Trend</h3>
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
        </div>

        {/* Category Breakdown */}
        <div className="card">
          <h3 className="text-xl font-bold mb-4">Expense by Category</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1A1A1A',
                  border: '1px solid #2A2A2A',
                  borderRadius: '8px'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Savings Trend */}
        <div className="card lg:col-span-2">
          <h3 className="text-xl font-bold mb-4">Monthly Savings Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={trendData}>
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
                dataKey="value"
                stroke="#00D9FF"
                strokeWidth={3}
                name="Savings"
                dot={{ fill: '#00D9FF', r: 5 }}
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Detailed Breakdown */}
      <div className="card">
        <h3 className="text-xl font-bold mb-4">Category Breakdown</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Category</th>
                <th className="text-right py-3 px-4 text-gray-400 font-medium">Amount</th>
                <th className="text-right py-3 px-4 text-gray-400 font-medium">Percentage</th>
                <th className="text-right py-3 px-4 text-gray-400 font-medium">Transactions</th>
              </tr>
            </thead>
            <tbody>
              {categoryData.map((cat, index) => {
                const percentage = (cat.value / categoryData.reduce((sum, c) => sum + c.value, 0)) * 100;
                return (
                  <tr key={index} className="border-b border-white/5 hover:bg-white/5">
                    <td className="py-3 px-4 flex items-center gap-3">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: cat.color }}
                      />
                      <span>{cat.name}</span>
                    </td>
                    <td className="py-3 px-4 text-right font-semibold">
                      ${cat.value.toLocaleString()}
                    </td>
                    <td className="py-3 px-4 text-right text-gray-400">
                      {percentage.toFixed(1)}%
                    </td>
                    <td className="py-3 px-4 text-right text-gray-400">
                      {Math.floor(Math.random() * 20) + 5}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Reports;