const express = require('express');
const router = express.Router();
const {
  getTransactions,
  getTransaction,
  createTransaction,
  updateTransaction,
  deleteTransaction
} = require('../controllers/transactionController');
const { protect } = require('../middleware/authMiddleware');

router.use(protect);

router.route('/')
  .get(getTransactions)
  .post(createTransaction);

router.route('/:id')
  .get(getTransaction)
  .put(updateTransaction)
  .delete(deleteTransaction);

module.exports = router;