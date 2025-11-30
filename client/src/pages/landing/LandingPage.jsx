import { Link } from 'react-router-dom';
import { TrendingUp, CreditCard, PieChart, Calculator } from 'lucide-react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

const LandingPage = () => {
  const features = [
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: 'Income Tracking',
      description: 'Easily log and categorize all your sources of income in real-time.',
    },
    {
      icon: <CreditCard className="w-8 h-8 text-primary" />,
      title: 'Expense Monitoring',
      description: 'Keep a close eye on your spending habits with smart expense tracking.',
    },
    {
      icon: <PieChart className="w-8 h-8 text-primary" />,
      title: 'Visual Analytics',
      description: 'Understand your financial health with beautiful, easy-to-read charts.',
    },
    {
      icon: <Calculator className="w-8 h-8 text-primary" />,
      title: 'Budgeting Tools',
      description: 'Set, track, and manage your budgets to stay on top of your financial goals.',
    },
  ];

  return (
    <div className="min-h-screen bg-dark">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-glow-cyan opacity-20 blur-3xl"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            The Future of Your
            <span className="block glow-text">Finances, Visualized</span>
          </h1>
          
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Track income, manage expenses, and achieve your financial goals with
            effortless clarity.
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/register" className="btn-primary">
              Get Started
            </Link>
            <button className="btn-secondary">
              Learn More
            </button>
          </div>

          {/* Dashboard Illustration */}
          <div className="mt-16 relative">
            <div className="glass rounded-2xl p-8 border-2 border-primary/30 shadow-glow-cyan animate-float">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="glass rounded-xl p-6 h-48 flex items-center justify-center">
                  <div className="w-full h-32 bg-gradient-to-r from-primary/20 to-transparent rounded"></div>
                </div>
                <div className="glass rounded-xl p-6 h-48">
                  <div className="space-y-2">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="h-8 bg-primary/20 rounded" style={{ width: `${100 - i * 15}%` }}></div>
                    ))}
                  </div>
                </div>
                <div className="glass rounded-xl p-6 h-48 flex items-center justify-center">
                  <div className="w-24 h-24 border-8 border-primary/30 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              All Your Finances in One Place
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Monitor your income, expenses, and investments with our suite of powerful
              tools designed for clarity and simplicity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="card-hover group"
              >
                <div className="mb-4 transform group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="card text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent-pink/10"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Take Control of Your Finances?
              </h2>
              <p className="text-gray-400 mb-8 text-lg">
                Join FinTrack now and start your journey towards financial clarity and freedom.
              </p>
              <Link to="/register" className="btn-primary inline-block">
                Get Started for Free
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;