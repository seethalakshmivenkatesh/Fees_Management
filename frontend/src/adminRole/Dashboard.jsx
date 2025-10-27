import React from "react";
import Card from "./Card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const Dashboard = () => {
  const chartData = [
    { name: "Engineering", paid: 420, pending: 180 },
    { name: "Nursing", paid: 300, pending: 120 },
    { name: "Pharmacy", paid: 380, pending: 90 },
    { name: "Arts & Science", paid: 270, pending: 150 },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <h1 className="text-2xl font-bold text-gray-700 mb-6">
        Dashboard Overview
      </h1>

      {/* Summary Cards */}
      <div className="flex flex-wrap gap-4 mb-8">
        <Card title="Total Institutions" value="3" />
        <Card title="Total Colleges" value="8" />
        <Card title="Total Students" value="4,532" />
        <Card title="Total Fees Collected" value="₹12.4 Cr" />
      </div>

      {/* Fee Collection Chart */}
      <div className="bg-white shadow-md rounded-2xl p-6">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">
          Fee Collection Overview
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="paid" fill="#3b82f6" name="Paid Fees" />
            <Bar dataKey="pending" fill="#f87171" name="Pending Fees" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Upcoming Fee Reminders */}
      <div className="bg-white shadow-md rounded-2xl p-6 mt-6">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">
          Upcoming Fee Reminders
        </h2>
        <ul className="space-y-3 text-gray-600">
          <li>• CSE 3rd Year – 12 students pending (₹2.8L)</li>
          <li>• ECE 2nd Year – 8 students pending (₹1.9L)</li>
          <li>• IT Final Year – 5 students pending (₹1.2L)</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
