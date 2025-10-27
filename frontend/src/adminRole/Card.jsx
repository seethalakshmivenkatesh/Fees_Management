import React from "react";

const Card = ({ title, value }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 w-full md:w-56 text-center">
      <h3 className="text-gray-600 text-sm mb-2">{title}</h3>
      <p className="text-2xl font-bold text-indigo-700">{value}</p>
    </div>
  );
};

export default Card;
