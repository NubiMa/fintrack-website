const Transaction = require('../models/Transaction');
const { Op } = require('sequelize');
const { sequelize } = require('../config/database');

// @desc    Get financial summary
// @route   GET /api/reports/summary
// @access  Private
exports.getSummary = async (req, res, next) => {
  try {
    const { startDate, endDate } = req.query;
    const userId = req.user.id;

    const where = { userId };
    if (startDate || endDate) {
      where.date = {};
      if (startDate) where.date[Op.gte] = startDate;
      if (endDate) where.date[Op.lte] = endDate;
    }

    // Get all transactions
    const transactions = await Transaction.findAll({ where });

    // Calculate totals
    const summary = transactions.reduce(
      (acc, transaction) => {
        const amount = parseFloat(transaction.amount);
        if (transaction.type === 'income') {
          acc.totalIncome += amount;
          acc.incomeCount++;
        } else {
          acc.totalExpenses += amount;
          acc.expenseCount++;
        }
        return acc;
      },
      { totalIncome: 0, totalExpenses: 0, incomeCount: 0, expenseCount: 0 }
    );

    summary.currentBalance = summary.totalIncome - summary.totalExpenses;
    summary.totalTransactions = transactions.length;
    summary.avgIncome = summary.incomeCount > 0 ? summary.totalIncome / summary.incomeCount : 0;
    summary.avgExpense = summary.expenseCount > 0 ? summary.totalExpenses / summary.expenseCount : 0;
    summary.savingsRate = summary.totalIncome > 0 
      ? ((summary.currentBalance / summary.totalIncome) * 100).toFixed(2)
      : 0;

    res.status(200).json({
      success: true,
      summary
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get monthly data (income vs expense)
// @route   GET /api/reports/monthly
// @access  Private
exports.getMonthlyData = async (req, res, next) => {
  try {
    const { year = new Date().getFullYear() } = req.query;
    const userId = req.user.id;

    const transactions = await Transaction.findAll({
      where: {
        userId,
        date: {
          [Op.gte]: `${year}-01-01`,
          [Op.lte]: `${year}-12-31`
        }
      },
      attributes: [
        [sequelize.fn('DATE_FORMAT', sequelize.col('date'), '%Y-%m'), 'month'],
        'type',
        [sequelize.fn('SUM', sequelize.col('amount')), 'total']
      ],
      group: ['month', 'type'],
      raw: true
    });

    // Format data for charts
    const monthlyData = {};
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    months.forEach((month, index) => {
      const monthKey = `${year}-${String(index + 1).padStart(2, '0')}`;
      monthlyData[monthKey] = {
        month,
        income: 0,
        expense: 0
      };
    });

    transactions.forEach(t => {
      if (monthlyData[t.month]) {
        if (t.type === 'income') {
          monthlyData[t.month].income = parseFloat(t.total);
        } else {
          monthlyData[t.month].expense = parseFloat(t.total);
        }
      }
    });

    const result = Object.values(monthlyData);

    res.status(200).json({
      success: true,
      data: result
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get category breakdown
// @route   GET /api/reports/categories
// @access  Private
exports.getCategoryBreakdown = async (req, res, next) => {
  try {
    const { type = 'expense', startDate, endDate } = req.query;
    const userId = req.user.id;

    const where = { userId, type };
    if (startDate || endDate) {
      where.date = {};
      if (startDate) where.date[Op.gte] = startDate;
      if (endDate) where.date[Op.lte] = endDate;
    }

    const categories = await Transaction.findAll({
      where,
      attributes: [
        'category',
        [sequelize.fn('COUNT', sequelize.col('id')), 'count'],
        [sequelize.fn('SUM', sequelize.col('amount')), 'total']
      ],
      group: ['category'],
      raw: true
    });

    // Calculate total for percentages
    const grandTotal = categories.reduce((sum, cat) => sum + parseFloat(cat.total), 0);

    const result = categories.map((cat, index) => ({
      name: cat.category,
      value: parseFloat(cat.total),
      count: parseInt(cat.count),
      percentage: grandTotal > 0 ? ((parseFloat(cat.total) / grandTotal) * 100).toFixed(1) : 0,
      color: getColorForIndex(index)
    }));

    res.status(200).json({
      success: true,
      data: result,
      total: grandTotal
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get savings trend
// @route   GET /api/reports/savings
// @access  Private
exports.getSavingsTrend = async (req, res, next) => {
  try {
    const { year = new Date().getFullYear() } = req.query;
    const userId = req.user.id;

    const transactions = await Transaction.findAll({
      where: {
        userId,
        date: {
          [Op.gte]: `${year}-01-01`,
          [Op.lte]: `${year}-12-31`
        }
      },
      attributes: [
        [sequelize.fn('DATE_FORMAT', sequelize.col('date'), '%Y-%m'), 'month'],
        'type',
        [sequelize.fn('SUM', sequelize.col('amount')), 'total']
      ],
      group: ['month', 'type'],
      raw: true
    });

    // Calculate savings per month
    const savingsData = {};
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    months.forEach((month, index) => {
      const monthKey = `${year}-${String(index + 1).padStart(2, '0')}`;
      savingsData[monthKey] = {
        month,
        income: 0,
        expense: 0,
        savings: 0
      };
    });

    transactions.forEach(t => {
      if (savingsData[t.month]) {
        if (t.type === 'income') {
          savingsData[t.month].income = parseFloat(t.total);
        } else {
          savingsData[t.month].expense = parseFloat(t.total);
        }
      }
    });

    // Calculate savings
    Object.values(savingsData).forEach(month => {
      month.savings = month.income - month.expense;
    });

    res.status(200).json({
      success: true,
      data: Object.values(savingsData)
    });
  } catch (error) {
    next(error);
  }
};

// Helper function for colors
function getColorForIndex(index) {
  const colors = [
    '#00D9FF', '#FF3366', '#A855F7', '#10B981', 
    '#F59E0B', '#EC4899', '#3B82F6', '#14B8A6',
    '#8B5CF6', '#F97316'
  ];
  return colors[index % colors.length];
}