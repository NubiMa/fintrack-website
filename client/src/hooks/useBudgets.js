import { useState, useEffect } from 'react';
import { budgetService } from '../services/budgetService';
import toast from 'react-hot-toast';

export const useBudgets = () => {
  const [budgets, setBudgets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadBudgets = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await budgetService.getAll();
      setBudgets(data.budgets || []);
    } catch (err) {
      setError(err.message);
      toast.error('Failed to load budgets');
    } finally {
      setLoading(false);
    }
  };

  const createBudget = async (budgetData) => {
    try {
      await budgetService.create(budgetData);
      toast.success('Budget created successfully');
      await loadBudgets();
      return true;
    } catch (err) {
      toast.error(err.response?.data?.error || 'Failed to create budget');
      return false;
    }
  };

  const updateBudget = async (id, budgetData) => {
    try {
      await budgetService.update(id, budgetData);
      toast.success('Budget updated successfully');
      await loadBudgets();
      return true;
    } catch (err) {
      toast.error(err.response?.data?.error || 'Failed to update budget');
      return false;
    }
  };

  const deleteBudget = async (id) => {
    try {
      await budgetService.delete(id);
      toast.success('Budget deleted successfully');
      await loadBudgets();
      return true;
    } catch (err) {
      toast.error('Failed to delete budget');
      return false;
    }
  };

  useEffect(() => {
    loadBudgets();
  }, []);

  return {
    budgets,
    loading,
    error,
    createBudget,
    updateBudget,
    deleteBudget,
    refreshBudgets: loadBudgets,
  };
};