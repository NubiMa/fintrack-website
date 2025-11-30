import api from './api';

export const userService = {
  async updateProfile(userData) {
    const response = await api.put('/users/profile', userData);
    return response.data;
  },

  async changePassword(passwordData) {
    const response = await api.put('/users/password', passwordData);
    return response.data;
  },

  async deleteAccount() {
    const response = await api.delete('/users/account');
    return response.data;
  },

  async exportData() {
    const response = await api.get('/users/export', {
      responseType: 'blob'
    });
    return response.data;
  }
};