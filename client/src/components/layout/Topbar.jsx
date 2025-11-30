import { Search, Bell, LogOut } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Topbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully');
    navigate('/login');
  };

  return (
    <div className="glass h-16 border-b border-white/10 fixed top-0 right-0 left-64 z-40 backdrop-blur-lg">
      <div className="h-full px-6 flex items-center justify-between">
        <div className="flex-1 max-w-2xl">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search transactions..."
              className="input pl-12 w-full"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="relative p-2 hover:bg-white/5 rounded-lg transition">
            <Bell className="w-5 h-5 text-gray-400" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
          </button>

          <div className="flex items-center gap-3 border-l border-white/10 pl-4">
            <div className="text-right">
              <p className="text-sm font-medium">{user?.name}</p>
              <p className="text-xs text-gray-400">{user?.email}</p>
            </div>
            <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center border border-primary/30">
              <span className="text-primary font-bold">
                {user?.name?.charAt(0).toUpperCase()}
              </span>
            </div>
            <button
              onClick={handleLogout}
              className="p-2 hover:bg-white/5 rounded-lg transition text-gray-400 hover:text-primary"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;