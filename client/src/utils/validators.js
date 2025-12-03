// Email validation
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Password validation
export const isValidPassword = (password) => {
  return password.length >= 6;
};

// Amount validation
export const isValidAmount = (amount) => {
  const num = parseFloat(amount);
  return !isNaN(num) && num >= 0;
};

// Required field validation
export const isRequired = (value) => {
  return value !== null && value !== undefined && value.toString().trim() !== '';
};

// Form validation
export const validateTransactionForm = (data) => {
  const errors = {};

  if (!isRequired(data.description)) {
    errors.description = 'Description is required';
  }

  if (!isRequired(data.amount)) {
    errors.amount = 'Amount is required';
  } else if (!isValidAmount(data.amount)) {
    errors.amount = 'Amount must be a valid positive number';
  }

  if (!isRequired(data.type)) {
    errors.type = 'Type is required';
  }

  if (!isRequired(data.category)) {
    errors.category = 'Category is required';
  }

  if (!isRequired(data.date)) {
    errors.date = 'Date is required';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

// Budget form validation
export const validateBudgetForm = (data) => {
  const errors = {};

  if (!isRequired(data.category)) {
    errors.category = 'Category is required';
  }

  if (!isRequired(data.limitAmount)) {
    errors.limitAmount = 'Budget limit is required';
  } else if (!isValidAmount(data.limitAmount)) {
    errors.limitAmount = 'Limit must be a valid positive number';
  }

  if (!isRequired(data.period)) {
    errors.period = 'Period is required';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

// Login form validation
export const validateLoginForm = (data) => {
  const errors = {};

  if (!isRequired(data.email)) {
    errors.email = 'Email is required';
  } else if (!isValidEmail(data.email)) {
    errors.email = 'Invalid email format';
  }

  if (!isRequired(data.password)) {
    errors.password = 'Password is required';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

// Register form validation
export const validateRegisterForm = (data) => {
  const errors = {};

  if (!isRequired(data.name)) {
    errors.name = 'Name is required';
  }

  if (!isRequired(data.email)) {
    errors.email = 'Email is required';
  } else if (!isValidEmail(data.email)) {
    errors.email = 'Invalid email format';
  }

  if (!isRequired(data.password)) {
    errors.password = 'Password is required';
  } else if (!isValidPassword(data.password)) {
    errors.password = 'Password must be at least 6 characters';
  }

  if (data.password !== data.confirmPassword) {
    errors.confirmPassword = 'Passwords do not match';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};