import { useState, useEffect } from 'react';
import { transactionService } from '../services/transactionService';
import toast from 'react-hot-toast';

export const useTransactions = (filters = {}) => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadTransactions = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await transactionService.getAll(filters);
      setTransactions(data.transactions || []);
    } catch (err) {
      setError(err.message);
      toast.error('Failed to load transactions');
    } finally {
      setLoading(false);
    }
  };

  const createTransaction = async (transactionData) => {
    try {
      await transactionService.create(transactionData);
      toast.success('Transaction created successfully');
      await loadTransactions();
      return true;
    } catch (err) {
      toast.error(err.response?.data?.error || 'Failed to create transaction');
      return false;
    }
  };

  const updateTransaction = async (id, transactionData) => {
    try {
      await transactionService.update(id, transactionData);
      toast.success('Transaction updated successfully');
      await loadTransactions();
      return true;
    } catch (err) {
      toast.error(err.response?.data?.error || 'Failed to update transaction');
      return false;
    }
  };

  const deleteTransaction = async (id) => {
    try {
      await transactionService.delete(id);
      toast.success('Transaction deleted successfully');
      await loadTransactions();
      return true;
    } catch (err) {
      toast.error('Failed to delete transaction');
      return false;
    }
  };

  useEffect(() => {
    loadTransactions();
  }, [JSON.stringify(filters)]);

  return {
    transactions,
    loading,
    error,
    createTransaction,
    updateTransaction,
    deleteTransaction,
    refreshTransactions: loadTransactions,
  };
};