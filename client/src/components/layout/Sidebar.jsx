import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Receipt, Wallet, BarChart3, Settings, LogOut } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import toast from 'react-hot-toast';

const Sidebar = ({ isOpen, close }) => {
  const location = useLocation();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    toast.success("Logged out");
    close();
  };

  const menuItems = [
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { name: 'Transactions', path: '/transactions', icon: Receipt },
    { name: 'Budgets', path: '/budgets', icon: Wallet },
    { name: 'Reports', path: '/reports', icon: BarChart3 },
    { name: 'Settings', path: '/settings', icon: Settings },
  ];

  return (
    <>
      {/* OVERLAY */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-20 md:hidden" onClick={close} />
      )}

      <aside
        className={`
          glass w-64 h-screen fixed top-0 left-0 z-30 border-r border-white/10 
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-64"}
          md:translate-x-0 md:block
        `}
      >
        <div className="p-6 flex flex-col h-full z-10">
          
          {/* Logo */}
         <Link
          to="/dashboard"
          className="flex items-center gap-2 mb-8 invisible md:visible"
        >
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <Wallet />
          </div>
          <span className="text-xl font-bold">FinTrack</span>
        </Link>


          {/* MENU */}
          <nav className="space-y-2 flex-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={close}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    isActive
                      ? 'bg-primary/20 text-primary border border-primary/30'
                      : 'text-gray-400 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* LOGOUT */}
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-white/5 hover:text-white transition"
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Logout</span>
          </button>

        </div>
      </aside>
    </>
  );
};

export default Sidebar;
