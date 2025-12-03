import Sidebar from '../components/layout/Sidebar';
import Topbar from '../components/layout/Topbar';
import { useState } from "react";

const DashboardLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(prev => !prev);
  const closeSidebar = () => setIsOpen(false);

  return (
    <div className="min-h-screen bg-dark">
     <Sidebar isOpen={isOpen} close={closeSidebar} />
      <div className="md:ml-64">
        <Topbar toggleSidebar={toggleSidebar} />
        <main className="pt-20 p-6">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
