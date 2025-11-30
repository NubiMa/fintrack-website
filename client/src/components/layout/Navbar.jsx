import { Link } from 'react-router-dom';
import { Wallet } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="glass fixed top-0 left-0 right-0 z-50 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-glow-cyan">
              <Wallet className="w-6 h-6 text-dark" />
            </div>
            <span className="text-xl font-bold glow-text">FinTrack</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link to="#features" className="text-gray-300 hover:text-primary transition">
              Features
            </Link>
            <Link to="#pricing" className="text-gray-300 hover:text-primary transition">
              Pricing
            </Link>
            <Link to="#about" className="text-gray-300 hover:text-primary transition">
              About Us
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/login" className="btn-secondary text-sm px-4 py-2">
              Login
            </Link>
            <Link to="/register" className="btn-primary text-sm px-4 py-2">
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;