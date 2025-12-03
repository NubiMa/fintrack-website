const express = require('express');
const router = express.Router();
const {
  getSummary,
  getMonthlyData,
  getCategoryBreakdown,
  getSavingsTrend
} = require('../controllers/reportController');
const { protect } = require('../middleware/authMiddleware');

router.use(protect);

router.get('/summary', getSummary);
router.get('/monthly', getMonthlyData);
router.get('/categories', getCategoryBreakdown);
router.get('/savings', getSavingsTrend);

module.exports = router;