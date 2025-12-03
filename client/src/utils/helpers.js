// Get category color
export const getCategoryColor = (category) => {
  const colors = {
    // Income
    'Salary': '#00D9FF',
    'Freelance': '#10B981',
    'Business': '#3B82F6',
    'Investment': '#A855F7',
    'Other Income': '#6B7280',
    // Expense
    'Food & Dining': '#FF3366',
    'Transportation': '#F59E0B',
    'Shopping': '#EC4899',
    'Entertainment': '#8B5CF6',
    'Bills & Utilities': '#EF4444',
    'Healthcare': '#06B6D4',
    'Education': '#3B82F6',
    'Travel': '#14B8A6',
    'Other Expense': '#6B7280',
  };
  return colors[category] || '#6B7280';
};

// Calculate percentage
export const calculatePercentage = (value, total) => {
  if (total === 0) return 0;
  return (value / total) * 100;
};

// Get budget status
export const getBudgetStatus = (spent, limit) => {
  const percentage = calculatePercentage(spent, limit);
  if (percentage >= 100) return 'exceeded';
  if (percentage >= 80) return 'warning';
  return 'good';
};

// Group transactions by date
export const groupTransactionsByDate = (transactions) => {
  return transactions.reduce((groups, transaction) => {
    const date = transaction.date;
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(transaction);
    return groups;
  }, {});
};

// Calculate total income and expenses
export const calculateTotals = (transactions) => {
  return transactions.reduce(
    (totals, transaction) => {
      const amount = parseFloat(transaction.amount);
      if (transaction.type === 'income') {
        totals.income += amount;
      } else {
        totals.expenses += amount;
      }
      return totals;
    },
    { income: 0, expenses: 0 }
  );
};

// Get transaction icon
export const getTransactionIcon = (type) => {
  return type === 'income' ? '↑' : '↓';
};

// Generate random color
export const generateColor = (index) => {
  const colors = [
    '#00D9FF', '#FF3366', '#A855F7', '#10B981', 
    '#F59E0B', '#EC4899', '#3B82F6', '#14B8A6'
  ];
  return colors[index % colors.length];
};

// Debounce function
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Deep clone object
export const deepClone = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};

// Check if object is empty
export const isEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};

// Sort array by date
export const sortByDate = (array, key = 'date', order = 'desc') => {
  return [...array].sort((a, b) => {
    const dateA = new Date(a[key]);
    const dateB = new Date(b[key]);
    return order === 'desc' ? dateB - dateA : dateA - dateB;
  });
};

// Filter transactions by date range
export const filterByDateRange = (transactions, startDate, endDate) => {
  return transactions.filter(transaction => {
    const date = new Date(transaction.date);
    const start = new Date(startDate);
    const end = new Date(endDate);
    return date >= start && date <= end;
  });
};