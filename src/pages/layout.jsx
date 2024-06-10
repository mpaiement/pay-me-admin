import React from 'react';
import Sidebar from '../components/sidebar';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar';

const Layout = () => {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <div className="h-[80px] md:pl-56 fixed inset-y-0 w-full z-50">
            <Navbar />
        </div>
        <div className="hidden pt-[85px] md:pt-[85px] md:flex h-full w-56 flex-col inset-y-0">
            <Sidebar />
        </div>

        <main className="flex-grow pt-[85px] p-6 md:overflow-y-auto md:p-8 md:pt-[85px] bg-gray-50">
            <Outlet />
        </main>
    </div>
  );
};

export default Layout;
