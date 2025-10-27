import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  University,
  Building2,
  Layers3,
  Users,
  FileText,
  Bell,
  Settings,
  Menu,
  X,
  LogOut,
} from "lucide-react";

const AdminSidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const menuItems = [
    {
      name: "Dashboard",
      path: "/admin/dashboard",
      icon: <LayoutDashboard size={20} />,
    },
    {
      name: "Institutions & Colleges",
      path: "/admin/institutions-colleges",
      icon: <University size={20} />,
    },
    {
      name: "Departments & Years",
      path: "/admin/departments-years",
      icon: <Layers3 size={20} />,
    },
    {
      name: "Students & Fees",
      path: "/admin/students-fees",
      icon: <Users size={20} />,
    },
    {
      name: "Reports",
      path: "/admin/reports",
      icon: <FileText size={20} />,
    },
    {
      name: "Notifications",
      path: "/admin/notifications",
      icon: <Bell size={20} />,
    },
    {
      name: "Settings",
      path: "/admin/settings",
      icon: <Settings size={20} />,
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
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b text-blue-600">
          {isOpen && <span className="text-xl font-bold">Admin Panel</span>}
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
              className={`flex items-center gap-3 p-2 rounded-lg transition-all duration-200 ${
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

        {/* Logout */}
        <div className="p-4 border-t">
          <button
            className="flex items-center gap-3 text-red-500 hover:text-red-600"
            onClick={() => alert("Logged out")}
          >
            <LogOut size={20} />
            {isOpen && <span>Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminSidebar;
