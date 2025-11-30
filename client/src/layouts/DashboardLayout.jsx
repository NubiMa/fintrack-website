import Sidebar from '../components/layout/Sidebar';
import Topbar from '../components/layout/Topbar';

const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-dark">
      <Sidebar />
      <div className="ml-64">
        <Topbar />
        <main className="pt-20 p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;