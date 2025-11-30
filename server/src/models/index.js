const { sequelize } = require('../config/database');

// Import models directly - NO destructuring to avoid circular dependency
const User = require('./User');
const Transaction = require('./Transaction');
const Budget = require('./Budget');

// Define relationships AFTER all models are loaded
User.hasMany(Transaction, {
  foreignKey: 'userId',
  as: 'transactions',
  onDelete: 'CASCADE'
});

Transaction.belongsTo(User, {
  foreignKey: 'userId',
  as: 'user'
});

User.hasMany(Budget, {
  foreignKey: 'userId',
  as: 'budgets',
  onDelete: 'CASCADE'
});

Budget.belongsTo(User, {
  foreignKey: 'userId',
  as: 'user'
});

// Export everything
module.exports = {
  sequelize,
  User,
  Transaction,
  Budget
};