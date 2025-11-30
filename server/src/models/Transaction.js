const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Transaction = sequelize.define('Transaction', {
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
  description: {
    type: DataTypes.STRING(200),
    allowNull: false,
    validate: {
      notEmpty: { msg: 'Description is required' },
      len: { args: [1, 200], msg: 'Description cannot exceed 200 characters' }
    }
  },
  amount: {
    type: DataTypes.DECIMAL(15, 2),
    allowNull: false,
    validate: {
      isDecimal: { msg: 'Amount must be a valid number' },
      min: { args: [0], msg: 'Amount must be positive' }
    }
  },
  type: {
    type: DataTypes.ENUM('income', 'expense'),
    allowNull: false,
    validate: {
      notEmpty: { msg: 'Type is required' },
      isIn: {
        args: [['income', 'expense']],
        msg: 'Type must be either income or expense'
      }
    }
  },
  category: {
    type: DataTypes.STRING(50),
    allowNull: false,
    validate: {
      notEmpty: { msg: 'Category is required' },
      isIn: {
        args: [[
          'Salary', 'Freelance', 'Business', 'Investment', 'Other Income',
          'Food & Dining', 'Transportation', 'Shopping', 'Entertainment',
          'Bills & Utilities', 'Healthcare', 'Education', 'Travel', 'Other Expense'
        ]],
        msg: 'Invalid category'
      }
    }
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  notes: {
    type: DataTypes.TEXT,
    allowNull: true,
    validate: {
      len: { args: [0, 500], msg: 'Notes cannot exceed 500 characters' }
    }
  }
}, {
  tableName: 'transactions',
  indexes: [
    { fields: ['user_id', 'date'] },
    { fields: ['user_id', 'category'] },
    { fields: ['type'] }
  ]
});

module.exports = Transaction;