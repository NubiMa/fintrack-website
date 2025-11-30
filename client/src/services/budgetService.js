import api from './api';

export const budgetService = {
  async getAll(params = {}) {
    const response = await api.get('/budgets', { params });
    return response.data;
  },

  async getById(id) {
    const response = await api.get(`/budgets/${id}`);
    return response.data;
  },

  async create(budgetData) {
    const response = await api.post('/budgets', budgetData);
    return response.data;
  },

  async update(id, budgetData) {
    const response = await api.put(`/budgets/${id}`, budgetData);
    return response.data;
  },

  async delete(id) {
    const response = await api.delete(`/budgets/${id}`);
    return response.data;
  },

  async getProgress(id) {
    const response = await api.get(`/budgets/${id}/progress`);
    return response.data;
  }
};