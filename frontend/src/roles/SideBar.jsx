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
  Menu,
  X,
} from "lucide-react";

const SidebarLayout = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(true);

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
    <div className="flex h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100">
      {/* Sidebar */}
      <aside
        className={`bg-gradient-to-b from-purple-700 to-indigo-700 text-white shadow-2xl flex flex-col transition-all duration-300 ${
          isOpen ? "w-64" : "w-16"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-purple-500">
          {isOpen && (
            <span className="text-lg font-semibold tracking-wide">
              Student Portal
            </span>
          )}
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-md hover:bg-purple-600 transition-colors"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Menu */}
        <nav className="flex-1 p-3 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-3 p-2 rounded-lg transition-all duration-200 ${
                location.pathname === item.path
                  ? "bg-white text-purple-700 font-semibold shadow-md"
                  : "hover:bg-purple-600 text-white/90 hover:text-white"
              }`}
            >
              {item.icon}
              {isOpen && <span>{item.name}</span>}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default SidebarLayout;
