import { useState } from 'react';
import { User, Lock, Bell, Palette, Database, LogOut } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { userService } from '../../services/userService';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Settings = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('profile');
  const [loading, setLoading] = useState(false);

  const [profileData, setProfileData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    currency: user?.currency || 'USD'
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [notifications, setNotifications] = useState({
    email: true,
    budgetAlerts: true,
    transactions: false,
    weeklyReports: true
  });

  const tabs = [
    { id: 'profile', name: 'Profile', icon: User },
    // { id: 'security', name: 'Security', icon: Lock },
    { id: 'notifications', name: 'Notifications', icon: Bell },
    { id: 'appearance', name: 'Appearance', icon: Palette },
    { id: 'data', name: 'Data & Privacy', icon: Database },
  ];

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await userService.updateProfile(profileData);
      toast.success('Profile updated successfully');
      
      // Update local storage
      const updatedUser = { ...user, ...profileData };
      localStorage.setItem('user', JSON.stringify(updatedUser));
    } catch (error) {
      toast.error(error.response?.data?.error || 'Failed to update profile');
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    if (passwordData.newPassword.length < 6) {
      toast.error('Password must be at least 6 characters');
      return;
    }

    setLoading(true);

    try {
      await userService.changePassword({
        currentPassword: passwordData.currentPassword,
        newPassword: passwordData.newPassword
      });
      
      toast.success('Password changed successfully');
      setPasswordData({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      });
    } catch (error) {
      toast.error(error.response?.data?.error || 'Failed to change password');
    } finally {
      setLoading(false);
    }
  };

  const handleExportData = async () => {
    try {
      toast.success('Preparing your data export...');
      // Create a simple CSV export
      const timestamp = new Date().toISOString().split('T')[0];
      const data = `FinTrack Data Export\nGenerated: ${timestamp}\n\nUser: ${user.name}\nEmail: ${user.email}\n\nExport your full data from the database for complete records.`;
      
      const blob = new Blob([data], { type: 'text/plain' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `fintrack-export-${timestamp}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
      
      toast.success('Data exported successfully');
    } catch (error) {
      toast.error('Failed to export data');
    }
  };

  const handleClearData = async () => {
    if (!window.confirm('Are you sure you want to clear all your financial data? This action cannot be undone.')) {
      return;
    }

    toast.error('Clear data feature coming soon');
  };

  const handleDeleteAccount = async () => {
    const confirmation = window.prompt(
      'This will permanently delete your account and all data. Type "DELETE" to confirm:'
    );

    if (confirmation !== 'DELETE') {
      toast.error('Account deletion cancelled');
      return;
    }

    try {
      await userService.deleteAccount();
      toast.success('Account deleted successfully');
      logout();
      navigate('/');
    } catch (error) {
      toast.error('Failed to delete account');
    }
  };

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully');
    navigate('/login');
  };

  const handleNotificationToggle = (key) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
    toast.success('Notification preferences updated');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold glow-text">Settings</h1>
        <p className="text-gray-400 mt-1">Manage your account preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="card space-y-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    activeTab === tab.id
                      ? 'bg-primary/20 text-primary border border-primary/30'
                      : 'text-gray-400 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{tab.name}</span>
                </button>
              );
            })}

            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-500 hover:bg-red-500/10 transition-all mt-4 border-t border-white/10"
            >
              <LogOut className="w-5 h-5" />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-3">
          <div className="card">
            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Profile Information</h2>
                <form onSubmit={handleProfileUpdate} className="space-y-6">
                  {/* Avatar */}
                  <div className="flex items-center gap-6">
                    <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center border-2 border-primary/30">
                      <span className="text-3xl font-bold text-primary">
                        {user?.name?.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">
                        Your avatar is generated from your name
                      </p>
                    </div>
                  </div>

                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name</label>
                    <input
                      type="text"
                      value={profileData.name}
                      onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                      className="input w-full"
                      required
                      disabled={loading}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      value={profileData.email}
                      onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                      className="input w-full"
                      required
                      disabled={loading}
                    />
                  </div>

                  {/* Currency */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Default Currency</label>
                    <select
                      value={profileData.currency}
                      onChange={(e) => setProfileData({ ...profileData, currency: e.target.value })}
                      className="input w-full"
                      disabled={loading}
                    >
                      <option value="USD">USD - US Dollar ($)</option>
                      <option value="EUR">EUR - Euro (€)</option>
                      <option value="GBP">GBP - British Pound (£)</option>
                      <option value="JPY">JPY - Japanese Yen (¥)</option>
                      <option value="INR">INR - Indian Rupee (₹)</option>
                    </select>
                  </div>

                  <button type="submit" className="btn-primary" disabled={loading}>
                    {loading ? 'Saving...' : 'Save Changes'}
                  </button>
                </form>
              </div>
            )}

            {/* Security Tab */}
            {/* {activeTab === 'security' && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Security Settings</h2>
                <form onSubmit={handlePasswordChange} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Current Password</label>
                    <input
                      type="password"
                      value={passwordData.currentPassword}
                      onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
                      className="input w-full"
                      required
                      disabled={loading}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">New Password</label>
                    <input
                      type="password"
                      value={passwordData.newPassword}
                      onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                      className="input w-full"
                      required
                      disabled={loading}
                      minLength={6}
                    />
                    <p className="text-xs text-gray-400 mt-1">Minimum 6 characters</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Confirm New Password</label>
                    <input
                      type="password"
                      value={passwordData.confirmPassword}
                      onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                      className="input w-full"
                      required
                      disabled={loading}
                    />
                  </div>

                  <button type="submit" className="btn-primary" disabled={loading}>
                    {loading ? 'Changing...' : 'Change Password'}
                  </button>
                </form>
              </div>
            )} */}

            {/* Notifications Tab */}
            {activeTab === 'notifications' && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Notification Preferences</h2>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">Email Notifications</h3>
                      <p className="text-sm text-gray-400">Receive updates via email</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="sr-only peer" 
                        checked={notifications.email}
                        onChange={() => handleNotificationToggle('email')}
                      />
                      <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">Budget Alerts</h3>
                      <p className="text-sm text-gray-400">Get notified when approaching budget limits</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="sr-only peer" 
                        checked={notifications.budgetAlerts}
                        onChange={() => handleNotificationToggle('budgetAlerts')}
                      />
                      <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">Transaction Notifications</h3>
                      <p className="text-sm text-gray-400">Alert for every transaction</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="sr-only peer" 
                        checked={notifications.transactions}
                        onChange={() => handleNotificationToggle('transactions')}
                      />
                      <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">Weekly Reports</h3>
                      <p className="text-sm text-gray-400">Receive weekly financial summary</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="sr-only peer" 
                        checked={notifications.weeklyReports}
                        onChange={() => handleNotificationToggle('weeklyReports')}
                      />
                      <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Appearance Tab */}
            {activeTab === 'appearance' && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Appearance Settings</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-3">Theme</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="card-hover border-2 border-primary p-4">
                        <div className="h-24 bg-gradient-to-br from-dark to-dark-lighter rounded-lg mb-3"></div>
                        <p className="font-medium text-center">Dark Theme</p>
                        <p className="text-xs text-center text-primary mt-1">Active</p>
                      </div>
                      <div className="card-hover border-2 border-transparent hover:border-white/20 p-4 opacity-50 cursor-not-allowed">
                        <div className="h-24 bg-gradient-to-br from-gray-100 to-gray-300 rounded-lg mb-3"></div>
                        <p className="font-medium text-center">Light Theme</p>
                        <p className="text-xs text-center text-gray-400 mt-1">Coming Soon</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3">Accent Color</h3>
                    <p className="text-sm text-gray-400 mb-4">Choose your preferred accent color</p>
                    <div className="flex gap-4">
                      <button className="w-12 h-12 rounded-full bg-primary border-4 border-white shadow-glow-cyan"></button>
                      <button className="w-12 h-12 rounded-full bg-purple-500 border-2 border-transparent hover:border-white/50 opacity-50 cursor-not-allowed" title="Coming soon"></button>
                      <button className="w-12 h-12 rounded-full bg-pink-500 border-2 border-transparent hover:border-white/50 opacity-50 cursor-not-allowed" title="Coming soon"></button>
                      <button className="w-12 h-12 rounded-full bg-green-500 border-2 border-transparent hover:border-white/50 opacity-50 cursor-not-allowed" title="Coming soon"></button>
                    </div>
                    <p className="text-xs text-gray-500 mt-3">Additional colors coming in future updates</p>
                  </div>
                </div>
              </div>
            )}

            {/* Data & Privacy Tab */}
            {activeTab === 'data' && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Data & Privacy</h2>
                <div className="space-y-6">
                  <div className="card bg-white/5">
                    <h3 className="font-semibold mb-2">Export Your Data</h3>
                    <p className="text-gray-400 mb-4">
                      Download a copy of your account information and financial data
                    </p>
                    <button onClick={handleExportData} className="btn-secondary">
                      Download Data
                    </button>
                  </div>

                  <div className="card bg-orange-500/10 border border-orange-500/30">
                    <h3 className="font-semibold mb-2 text-orange-500">Clear All Data</h3>
                    <p className="text-gray-400 mb-4">
                      Permanently delete all your transactions and budgets (keeps account)
                    </p>
                    <button 
                      onClick={handleClearData}
                      className="border-2 border-orange-500 text-orange-500 px-4 py-2 rounded-lg hover:bg-orange-500/10 transition-all"
                    >
                      Clear Data
                    </button>
                  </div>

                  <div className="card bg-red-500/10 border border-red-500/30">
                    <h3 className="font-semibold mb-2 text-red-500">Delete Account</h3>
                    <p className="text-gray-400 mb-4">
                      Permanently delete your account and all associated data. This action cannot be undone.
                    </p>
                    <button 
                      onClick={handleDeleteAccount}
                      className="border-2 border-red-500 text-red-500 px-4 py-2 rounded-lg hover:bg-red-500/10 transition-all"
                    >
                      Delete Account
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;