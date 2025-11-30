import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';
import { useAuth } from './context/AuthContext';

// Pages
import LandingPage from './pages/landing/LandingPage';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Dashboard from './pages/dashboard/Dashboard';
import Transactions from './pages/dashboard/Transactions';
import Budgets from './pages/dashboard/Budgets';
import Reports from './pages/dashboard/Reports';
import Settings from './pages/dashboard/Settings';

// Layouts
import PublicLayout from './layouts/PublicLayout';
import DashboardLayout from './layouts/DashboardLayout';

// Loading Component
const LoadingScreen = () => (
  <div className="min-h-screen bg-dark flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto mb-4"></div>
      <p className="text-gray-400">Loading...</p>
    </div>
  </div>
);

// Protected Route Component
const PrivateRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <LoadingScreen />;
  }

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

// Public Route (redirect if authenticated)
const PublicRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <LoadingScreen />;
  }

  return !isAuthenticated ? children : <Navigate to="/dashboard" replace />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: '#1A1A1A',
              color: '#fff',
              border: '1px solid rgba(0, 217, 255, 0.3)',
            },
            success: {
              iconTheme: {
                primary: '#00D9FF',
                secondary: '#1A1A1A',
              },
            },
            error: {
              iconTheme: {
                primary: '#FF3366',
                secondary: '#1A1A1A',
              },
            },
          }}
        />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<PublicLayout><LandingPage /></PublicLayout>} />
          <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
          <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />

          {/* Protected Routes */}
          <Route 
            path="/dashboard" 
            element={
              <PrivateRoute>
                <DashboardLayout><Dashboard /></DashboardLayout>
              </PrivateRoute>
            } 
          />
          <Route 
            path="/transactions" 
            element={
              <PrivateRoute>
                <DashboardLayout><Transactions /></DashboardLayout>
              </PrivateRoute>
            } 
          />
          <Route 
            path="/budgets" 
            element={
              <PrivateRoute>
                <DashboardLayout><Budgets /></DashboardLayout>
              </PrivateRoute>
            } 
          />
          <Route 
            path="/reports" 
            element={
              <PrivateRoute>
                <DashboardLayout><Reports /></DashboardLayout>
              </PrivateRoute>
            } 
          />
          <Route 
            path="/settings" 
            element={
              <PrivateRoute>
                <DashboardLayout><Settings /></DashboardLayout>
              </PrivateRoute>
            } 
          />

          {/* 404 */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;