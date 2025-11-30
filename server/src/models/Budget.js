const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Budget = sequelize.define('Budget', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'user_id',
    references: {
      model: 'users',
      key: 'id'
    }
  },
  category: {
    type: DataTypes.STRING(50),
    allowNull: false,
    validate: {
      notEmpty: { msg: 'Category is required' },
      isIn: {
        args: [[
          'Food & Dining', 'Transportation', 'Shopping', 'Entertainment',
          'Bills & Utilities', 'Healthcare', 'Education', 'Travel', 'Other Expense'
        ]],
        msg: 'Invalid category'
      }
    }
  },
  limitAmount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    field: 'limit_amount',
    validate: {
      isDecimal: { msg: 'Limit must be a valid number' },
      min: { args: [0], msg: 'Limit must be positive' }
    }
  },
  spent: {
    type: DataTypes.DECIMAL(10, 2),
    defaultValue: 0.00,
    validate: {
      min: { args: [0], msg: 'Spent amount cannot be negative' }
    }
  },
  period: {
    type: DataTypes.ENUM('daily', 'weekly', 'monthly', 'yearly'),
    defaultValue: 'monthly',
    allowNull: false
  },
  startDate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    field: 'start_date',
    defaultValue: DataTypes.NOW
  },
  endDate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    field: 'end_date'
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
    field: 'is_active'
  }
}, {
  tableName: 'budgets',
  indexes: [
    { fields: ['user_id', 'category'] },
    { fields: ['is_active'] }
  ]
});

// Virtual fields
Budget.prototype.getPercentageSpent = function() {
  return this.limitAmount > 0 ? (parseFloat(this.spent) / parseFloat(this.limitAmount)) * 100 : 0;
};

Budget.prototype.getRemaining = function() {
  return Math.max(0, parseFloat(this.limitAmount) - parseFloat(this.spent));
};

// Add virtual fields to JSON output
Budget.prototype.toJSON = function() {
  const values = { ...this.get() };
  values.percentageSpent = this.getPercentageSpent();
  values.remaining = this.getRemaining();
  return values;
};

module.exports = Budget;