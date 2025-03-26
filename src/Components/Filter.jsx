import React, { useState } from "react";
import { FaEllipsisH } from "react-icons/fa";

const Filter = ({ onFilterChange }) => {
  const [priority, setPriority] = useState("");
  const [title, setTitle] = useState("");

  const handleFilterChange = () => {
    if (onFilterChange) {
      onFilterChange({ priority, title });
    } else {
      console.error("onFilterChange function is missing!");
    }
  };

  return (
    <div className="w-full bg-blue-600 py-3 shadow-md">
      <div className="container max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-6">
        {/* Sort by Priority */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2 w-full md:w-auto">
          <label className="text-white font-medium text-sm md:text-base">
            Sort by Priority:
          </label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="w-full sm:w-auto px-3 py-2 bg-gray-100 text-gray-700 rounded-md focus:outline-none border border-gray-300 shadow-sm"
          >
            <option value="">All</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        {/* Sort by Title */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2 w-full md:w-auto">
          <label className="text-white font-medium text-sm md:text-base">
            Sort by Title:
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Search by Title"
            className="w-full sm:w-auto px-3 py-2 bg-gray-100 text-gray-700 rounded-md focus:outline-none border border-gray-300 shadow-sm"
          />
        </div>

        {/* Apply Filters Button */}
        <button
          onClick={handleFilterChange}
          className="w-full sm:w-auto px-5 py-2 bg-gray-900 text-white rounded-md hover:bg-blue-800 transition-all shadow-md"
        >
          Apply Filters
        </button>
      

        {/* Ellipsis Icon for Mobile */}
        <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-all md:hidden">
          <FaEllipsisH className="text-lg" />
        </button>
      </div>
    </div>
  );
};

export default Filter;
