const Transaction = require('../models/Transaction');
const Budget = require('../models/Budget');
const { Op } = require('sequelize');

// @desc    Get all transactions
// @route   GET /api/transactions
// @access  Private
exports.getTransactions = async (req, res, next) => {
  try {
    const { type, category, startDate, endDate, limit = 50, page = 1 } = req.query;

    // Build query
    const where = { userId: req.user.id };

    if (type) where.type = type;
    if (category) where.category = category;
    if (startDate || endDate) {
      where.date = {};
      if (startDate) where.date[Op.gte] = startDate;
      if (endDate) where.date[Op.lte] = endDate;
    }

    const offset = (parseInt(page) - 1) * parseInt(limit);

    const { count, rows: transactions } = await Transaction.findAndCountAll({
      where,
      limit: parseInt(limit),
      offset,
      order: [['date', 'DESC'], ['created_at', 'DESC']]
    });

    res.status(200).json({
      success: true,
      count: transactions.length,
      total: count,
      page: parseInt(page),
      pages: Math.ceil(count / parseInt(limit)),
      transactions
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single transaction
// @route   GET /api/transactions/:id
// @access  Private
exports.getTransaction = async (req, res, next) => {
  try {
    const transaction = await Transaction.findOne({
      where: {
        id: req.params.id,
        userId: req.user.id
      }
    });

    if (!transaction) {
      return res.status(404).json({
        success: false,
        error: 'Transaction not found'
      });
    }

    res.status(200).json({
      success: true,
      transaction
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Create transaction
// @route   POST /api/transactions
// @access  Private
exports.createTransaction = async (req, res, next) => {
  try {
    req.body.userId = req.user.id;

    const transaction = await Transaction.create(req.body);

    // Update budget if expense
    if (transaction.type === 'expense') {
      await updateBudgetSpent(req.user.id, transaction.category, parseFloat(transaction.amount));
    }

    res.status(201).json({
      success: true,
      transaction
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update transaction
// @route   PUT /api/transactions/:id
// @access  Private
exports.updateTransaction = async (req, res, next) => {
  try {
    let transaction = await Transaction.findOne({
      where: {
        id: req.params.id,
        userId: req.user.id
      }
    });

    if (!transaction) {
      return res.status(404).json({
        success: false,
        error: 'Transaction not found'
      });
    }

    // Store old values for budget update
    const oldAmount = parseFloat(transaction.amount);
    const oldCategory = transaction.category;
    const oldType = transaction.type;

    // Update transaction
    await transaction.update(req.body);

    // Update budgets
    if (oldType === 'expense') {
      await updateBudgetSpent(req.user.id, oldCategory, -oldAmount);
    }
    if (transaction.type === 'expense') {
      await updateBudgetSpent(req.user.id, transaction.category, parseFloat(transaction.amount));
    }

    res.status(200).json({
      success: true,
      transaction
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete transaction
// @route   DELETE /api/transactions/:id
// @access  Private
exports.deleteTransaction = async (req, res, next) => {
  try {
    const transaction = await Transaction.findOne({
      where: {
        id: req.params.id,
        userId: req.user.id
      }
    });

    if (!transaction) {
      return res.status(404).json({
        success: false,
        error: 'Transaction not found'
      });
    }

    // Update budget if expense
    if (transaction.type === 'expense') {
      await updateBudgetSpent(req.user.id, transaction.category, -parseFloat(transaction.amount));
    }

    await transaction.destroy();

    res.status(200).json({
      success: true,
      message: 'Transaction deleted'
    });
  } catch (error) {
    next(error);
  }
};

// Helper function to update budget spent
async function updateBudgetSpent(userId, category, amount) {
  const budget = await Budget.findOne({
    where: {
      userId,
      category,
      isActive: true
    }
  });

  if (budget) {
    const newSpent = Math.max(0, parseFloat(budget.spent) + amount);
    await budget.update({ spent: newSpent });
  }
}