import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  CreditCard,
  BookOpen,
  Clock,
  Gift,
  Bell,
  LifeBuoy,
  User,
  Menu, // Hamburger icon
  X, // Close icon
} from "lucide-react";

const SidebarLayout = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(true); // sidebar open/close state

  const toggleSidebar = () => setIsOpen(!isOpen);

  const menuItems = [
    {
      name: "Dashboard",
      path: "/students/dashboard",
      icon: <LayoutDashboard size={20} />,
    },
    {
      name: "Pay Fees page",
      path: "/students/pay-fee",
      icon: <CreditCard size={20} />,
    },
    {
      name: "Payment History",
      path: "/students/payment-history",
      icon: <Clock size={20} />,
    },
    {
      name: "Fee Structure",
      path: "/students/fee-structure",
      icon: <BookOpen size={20} />,
    },

    {
      name: "Scholarship",
      path: "/students/scholarship",
      icon: <Gift size={20} />,
    },
    {
      name: "Notifications",
      path: "/students/notifications",
      icon: <Bell size={20} />,
    },
    {
      name: "Support",
      path: "/students/support",
      icon: <LifeBuoy size={20} />,
    },
    {
      name: "Profile Settings",
      path: "/students/profile",
      icon: <User size={20} />,
    },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`bg-white shadow-lg flex flex-col transition-all duration-300 ${
          isOpen ? "w-64" : "w-16"
        }`}
      >
        {/* Top: Logo + Toggle Button */}
        <div className="flex items-center justify-between p-4 border-b text-blue-600">
          {isOpen && <span className="text-xl font-bold">Student Portal</span>}
          <button
            onClick={toggleSidebar}
            className="p-1 rounded hover:bg-gray-200"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Menu */}
        <nav className="flex-1 p-2 space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-3 p-2 rounded-lg transition ${
                location.pathname === item.path
                  ? "bg-blue-100 text-blue-700 font-semibold"
                  : "text-gray-700 hover:bg-blue-50"
              }`}
            >
              {item.icon}
              {isOpen && <span>{item.name}</span>}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default SidebarLayout;
