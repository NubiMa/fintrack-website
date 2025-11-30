const express = require('express');
const router = express.Router();

const authRoutes = require('./authRoutes');
const userRoutes = require('./userRoutes');
const transactionRoutes = require('./transactionRoutes');
const budgetRoutes = require('./budgetRoutes');

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/transactions', transactionRoutes);
router.use('/budgets', budgetRoutes);

module.exports = router;