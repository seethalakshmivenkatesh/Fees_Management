import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  ArrowDownTrayIcon,
  CurrencyRupeeIcon,
} from "@heroicons/react/24/solid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PayFeesPage = () => {
  const [fees, setFees] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch fees from backend
  const fetchFees = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/fees");
      setFees(res.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching fees:", error);
      toast.error("Failed to load fees data");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFees();
  }, []);

  // ✅ Pay Fee
  const handlePay = async (feeId) => {
    try {
      await axios.put(`http://localhost:5000/api/fees/pay/${feeId}`);
      toast.success("Payment successful!");
      fetchFees();
    } catch (error) {
      console.error("Payment error:", error);
      toast.error("Payment failed");
    }
  };

  // ✅ Download Receipt
  const handleDownloadReceipt = async (feeId) => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/fees/receipt/${feeId}`
      );
      toast.info(`Receipt: ${res.data.message}`);
    } catch (error) {
      console.error("Download error:", error);
      toast.error("Failed to download receipt");
    }
  };

  const totalFees = fees.reduce((acc, f) => acc + f.amount, 0);
  const pendingFees = fees
    .filter((f) => f.status === "Pending")
    .reduce((acc, f) => acc + f.amount, 0);
  const paidFees = fees
    .filter((f) => f.status === "Paid")
    .reduce((acc, f) => acc + f.amount, 0);

  if (loading)
    return (
      <p className="text-center mt-20 text-gray-500 text-lg font-medium">
        Loading fees...
      </p>
    );

  return (
    <div className="min-h-screen px-4 sm:px-6 md:px-12 py-8 bg-gradient-to-b from-blue-50 to-blue-100">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0D1B2A] mb-8 text-center">
        Fee Dashboard
      </h2>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {/* Total */}
        <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
          <div className="flex items-center gap-3">
            <CurrencyRupeeIcon className="w-6 h-6 text-blue-500" />
            <p className="text-gray-500 font-semibold">Total Fees</p>
          </div>
          <p className="text-2xl sm:text-3xl font-bold mt-3 text-[#0D1B2A]">
            ₹{totalFees}
          </p>
        </div>

        {/* Pending */}
        <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
          <div className="flex items-center gap-3">
            <ExclamationCircleIcon className="w-6 h-6 text-yellow-500" />
            <p className="text-gray-500 font-semibold">Pending Fees</p>
          </div>
          <p className="text-2xl sm:text-3xl font-bold mt-3 text-yellow-700">
            ₹{pendingFees}
          </p>
        </div>

        {/* Paid */}
        <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
          <div className="flex items-center gap-3">
            <CheckCircleIcon className="w-6 h-6 text-green-500" />
            <p className="text-gray-500 font-semibold">Paid Fees</p>
          </div>
          <p className="text-2xl sm:text-3xl font-bold mt-3 text-green-700">
            ₹{paidFees}
          </p>
        </div>
      </div>

      {/* Fee Table */}
      <div className="overflow-x-auto bg-white rounded-2xl shadow-lg">
        <table className="min-w-full text-sm sm:text-base">
          <thead className="bg-blue-200 text-gray-800">
            <tr>
              <th className="py-3 px-4 sm:px-6 text-left">Semester</th>
              <th className="py-3 px-4 sm:px-6 text-left">Fee Type</th>
              <th className="py-3 px-4 sm:px-6 text-right">Amount (₹)</th>
              <th className="py-3 px-4 sm:px-6 text-center">Status</th>
              <th className="py-3 px-4 sm:px-6 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {fees.map((fee) => (
              <tr
                key={fee._id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="py-3 px-4 sm:px-6">{fee.semester}</td>
                <td className="py-3 px-4 sm:px-6">{fee.feeType}</td>
                <td className="py-3 px-4 sm:px-6 text-right font-semibold">
                  {fee.amount}
                </td>
                <td className="py-3 px-4 sm:px-6 text-center">
                  <span
                    className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${
                      fee.status === "Paid"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {fee.status === "Paid" ? (
                      <CheckCircleIcon className="w-4 h-4" />
                    ) : (
                      <ExclamationCircleIcon className="w-4 h-4" />
                    )}
                    {fee.status}
                  </span>
                </td>
                <td className="py-3 px-4 sm:px-6 text-center">
                  <div className="flex justify-center">
                    {fee.status === "Paid" ? (
                      <button
                        onClick={() => handleDownloadReceipt(fee._id)}
                        className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-3 sm:px-4 py-2 rounded-xl shadow-md text-sm sm:text-base transition"
                      >
                        <ArrowDownTrayIcon className="w-4 sm:w-5 h-4 sm:h-5" />
                        Receipt
                      </button>
                    ) : (
                      <button
                        onClick={() => handlePay(fee._id)}
                        className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-3 sm:px-4 py-2 rounded-xl shadow-md text-sm sm:text-base transition"
                      >
                        Pay Now
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ToastContainer theme="colored" position="top-center" autoClose={3000} />
    </div>
  );
};

export default PayFeesPage;
