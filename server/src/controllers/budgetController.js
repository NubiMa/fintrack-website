const Budget = require('../models/Budget');
const Transaction = require('../models/Transaction');
const { Op } = require('sequelize');

// @desc    Get all budgets
// @route   GET /api/budgets
// @access  Private
exports.getBudgets = async (req, res, next) => {
  try {
    const budgets = await Budget.findAll({
      where: { userId: req.user.id },
      order: [['created_at', 'DESC']]
    });

    res.status(200).json({
      success: true,
      count: budgets.length,
      budgets
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single budget
// @route   GET /api/budgets/:id
// @access  Private
exports.getBudget = async (req, res, next) => {
  try {
    const budget = await Budget.findOne({
      where: {
        id: req.params.id,
        userId: req.user.id
      }
    });

    if (!budget) {
      return res.status(404).json({
        success: false,
        error: 'Budget not found'
      });
    }

    res.status(200).json({
      success: true,
      budget
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Create budget
// @route   POST /api/budgets
// @access  Private
exports.createBudget = async (req, res, next) => {
  try {
    req.body.userId = req.user.id;

    // Set end date based on period
    const startDate = req.body.startDate ? new Date(req.body.startDate) : new Date();
    let endDate = new Date(startDate);

    switch (req.body.period) {
      case 'daily':
        endDate.setDate(endDate.getDate() + 1);
        break;
      case 'weekly':
        endDate.setDate(endDate.getDate() + 7);
        break;
      case 'monthly':
        endDate.setMonth(endDate.getMonth() + 1);
        break;
      case 'yearly':
        endDate.setFullYear(endDate.getFullYear() + 1);
        break;
    }

    req.body.startDate = startDate;
    req.body.endDate = endDate;

    // Calculate current spent
    const transactions = await Transaction.findAll({
      where: {
        userId: req.user.id,
        type: 'expense',
        category: req.body.category,
        date: {
          [Op.between]: [startDate, endDate]
        }
      }
    });

    const spent = transactions.reduce((sum, t) => sum + parseFloat(t.amount), 0);
    req.body.spent = spent;

    const budget = await Budget.create(req.body);

    res.status(201).json({
      success: true,
      budget
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update budget
// @route   PUT /api/budgets/:id
// @access  Private
exports.updateBudget = async (req, res, next) => {
  try {
    let budget = await Budget.findOne({
      where: {
        id: req.params.id,
        userId: req.user.id
      }
    });

    if (!budget) {
      return res.status(404).json({
        success: false,
        error: 'Budget not found'
      });
    }

    await budget.update(req.body);

    res.status(200).json({
      success: true,
      budget
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete budget
// @route   DELETE /api/budgets/:id
// @access  Private
exports.deleteBudget = async (req, res, next) => {
  try {
    const budget = await Budget.findOne({
      where: {
        id: req.params.id,
        userId: req.user.id
      }
    });

    if (!budget) {
      return res.status(404).json({
        success: false,
        error: 'Budget not found'
      });
    }

    await budget.destroy();

    res.status(200).json({
      success: true,
      message: 'Budget deleted'
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get budget progress
// @route   GET /api/budgets/:id/progress
// @access  Private
exports.getBudgetProgress = async (req, res, next) => {
  try {
    const budget = await Budget.findOne({
      where: {
        id: req.params.id,
        userId: req.user.id
      }
    });

    if (!budget) {
      return res.status(404).json({
        success: false,
        error: 'Budget not found'
      });
    }

    const percentageSpent = budget.getPercentageSpent();
    const remaining = budget.getRemaining();

    const progress = {
      category: budget.category,
      limit: budget.limitAmount,
      spent: budget.spent,
      remaining,
      percentage: percentageSpent,
      status: percentageSpent >= 100 ? 'exceeded' : 
              percentageSpent >= 80 ? 'warning' : 'good',
      period: budget.period,
      startDate: budget.startDate,
      endDate: budget.endDate
    };

    res.status(200).json({
      success: true,
      progress
    });
  } catch (error) {
    next(error);
  }
};