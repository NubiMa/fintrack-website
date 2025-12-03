import { Search, Bell } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const Topbar = ({ toggleSidebar }) => {
  const { user } = useAuth();

  return (
    <div className="glass h-16 border-b border-white/10 fixed top-0 right-0 left-0 md:left-64 z-40 backdrop-blur-lg">
      <div className="h-full px-4 flex items-center justify-between">

        {/* BURGER BUTTON MOBILE */}
        <button 
          onClick={toggleSidebar}
          className="md:hidden p-2 mr-3 hover:bg-white/5 rounded-lg"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* SEARCH */}
        <div className="flex-1 max-w-2xl">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search transactions..."
              className="input pl-12 w-full"
            />
          </div>
        </div>

        {/* USER INFO */}
        <div className="flex items-center gap-4">

          <button className="relative p-2 hover:bg-white/5 rounded-lg transition">
            <Bell className="w-5 h-5 text-gray-400" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
          </button>

          <div className="hidden md:flex items-center gap-3 border-l border-white/10 pl-4">
            <div className="text-right">
              <p className="text-sm font-medium">{user?.name}</p>
              <p className="text-xs text-gray-400">{user?.email}</p>
            </div>

            <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center border border-primary/30">
              <span className="text-primary font-bold">
                {user?.name?.charAt(0).toUpperCase()}
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Topbar;
