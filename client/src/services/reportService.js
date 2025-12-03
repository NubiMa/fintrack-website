import api from './api';

export const reportService = {
  async getSummary(params = {}) {
    const response = await api.get('/reports/summary', { params });
    return response.data;
  },

  async getMonthlyData(year) {
    const response = await api.get('/reports/monthly', { 
      params: { year } 
    });
    return response.data;
  },

  async getCategoryBreakdown(params = {}) {
    const response = await api.get('/reports/categories', { params });
    return response.data;
  },

  async getSavingsTrend(year) {
    const response = await api.get('/reports/savings', { 
      params: { year } 
    });
    return response.data;
  }
};