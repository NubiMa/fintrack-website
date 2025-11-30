const express = require('express');
const router = express.Router();
const {
  getBudgets,
  getBudget,
  createBudget,
  updateBudget,
  deleteBudget,
  getBudgetProgress
} = require('../controllers/budgetController');
const { protect } = require('../middleware/authMiddleware');

router.use(protect);

router.route('/')
  .get(getBudgets)
  .post(createBudget);

router.route('/:id')
  .get(getBudget)
  .put(updateBudget)
  .delete(deleteBudget);

router.get('/:id/progress', getBudgetProgress);

module.exports = router;