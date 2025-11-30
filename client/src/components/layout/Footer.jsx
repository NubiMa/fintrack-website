import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4 glow-text">FinTrack</h3>
            <p className="text-gray-400 text-sm">
              The future of your finances, visualized.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="#" className="text-gray-400 hover:text-primary">Features</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-primary">Pricing</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-primary">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="#" className="text-gray-400 hover:text-primary">Contact</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-primary">Privacy Policy</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-primary">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-primary transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-400">
          <p>© 2024 FinTrack. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;