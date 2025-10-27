import React from "react";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Welcome, Ananya 👋</h1>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <button className="bg-blue-600 text-white p-4 rounded-lg shadow hover:bg-blue-700">
          💰 Quick Pay Fees
        </button>
        <button className="bg-green-600 text-white p-4 rounded-lg shadow hover:bg-green-700">
          📄 Fee Structure
        </button>
        <button className="bg-yellow-500 text-white p-4 rounded-lg shadow hover:bg-yellow-600">
          🎓 Apply Scholarship
        </button>
        <button className="bg-purple-600 text-white p-4 rounded-lg shadow hover:bg-purple-700">
          🧾 Download Receipts
        </button>
      </div>

      {/* Notifications */}
      <div className="bg-white p-4 rounded-xl shadow space-y-2">
        <h2 className="text-lg font-semibold mb-2">Notifications</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>💡 Semester 5 exams start on 10th Nov</li>
          <li>📌 Submit scholarship applications before 20th Nov</li>
          <li>⚠️ Library dues must be cleared before 15th Nov</li>
        </ul>
      </div>

      {/* Quick Links */}
      <div className="bg-white p-4 rounded-xl shadow space-y-2">
        <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>📝 Download Timetable</li>
          <li>📂 Access Forms</li>
          <li>📚 Library Portal</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
