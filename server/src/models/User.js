const { DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');
const { sequelize } = require('../config/database');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
    validate: {
      notEmpty: { msg: 'Name is required' },
      len: { args: [1, 50], msg: 'Name cannot exceed 50 characters' }
    }
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
    validate: {
      isEmail: { msg: 'Please provide a valid email' },
      notEmpty: { msg: 'Email is required' }
    }
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false,
    validate: {
      notEmpty: { msg: 'Password is required' },
      len: { args: [6, 255], msg: 'Password must be at least 6 characters' }
    }
  },
  avatar: {
    type: DataTypes.STRING(255),
    defaultValue: 'https://ui-avatars.com/api/?name=User'
  },
  currency: {
    type: DataTypes.STRING(3),
    defaultValue: 'USD',
    validate: {
      isIn: {
        args: [['USD', 'EUR', 'GBP', 'JPY', 'INR']],
        msg: 'Invalid currency'
      }
    }
  },
  // resetPasswordToken: {
  //   type: DataTypes.STRING,
  //   allowNull: true
  // },
  // resetPasswordExpire: {
  //   type: DataTypes.DATE,
  //   allowNull: true
  // }
}, {
  tableName: 'users',
  hooks: {
    beforeCreate: async (user) => {
      if (user.password) {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
      }
    },
    beforeUpdate: async (user) => {
      if (user.changed('password')) {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
      }
    }
  }
});

// Instance method to match password
User.prototype.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Don't return password by default
User.prototype.toJSON = function() {
  const values = { ...this.get() };
  delete values.password;
  return values;
};

module.exports = User;