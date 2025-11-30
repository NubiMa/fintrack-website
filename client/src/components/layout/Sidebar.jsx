import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Receipt, Wallet, BarChart3, Settings, Wallet as WalletIcon } from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { name: 'Transactions', path: '/transactions', icon: Receipt },
    { name: 'Budgets', path: '/budgets', icon: Wallet },
    { name: 'Reports', path: '/reports', icon: BarChart3 },
    { name: 'Settings', path: '/settings', icon: Settings },
  ];

  return (
    <aside className="glass w-64 min-h-screen fixed left-0 top-0 border-r border-white/10">
      <div className="p-6">
        <Link to="/dashboard" className="flex items-center gap-2 mb-8">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-glow-cyan">
            <WalletIcon className="w-6 h-6 text-dark" />
          </div>
          <span className="text-xl font-bold glow-text">FinTrack</span>
        </Link>

        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
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
      </div>
    </aside>
  );
};

export default Sidebar;