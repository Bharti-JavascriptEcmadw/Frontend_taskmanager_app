import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaBars,
  FaCalendarAlt,
  FaChevronDown,
  FaQuestionCircle,
} from "react-icons/fa";

const Header1 = ({ toggleSidebar }) => {
  const navigate = useNavigate();
  const [showCalendar, setShowCalendar] = useState(false);
  const [showHelpPopup, setShowHelpPopup] = useState(false);
  const [question, setQuestion] = useState("");

  return (
    <header className="w-full fixed top-0 left-0 right-0 bg-blue-900 shadow-md z-50 px-4 sm:px-6 py-3 flex items-center justify-between">
      {/* Left: Mobile Menu Icon */}
      <button onClick={toggleSidebar} className="text-white lg:hidden">
        <FaBars className="text-2xl" />
      </button>

      {/* Center: Title */}
      <h1 className="text-white text-xl md:text-2xl font-semibold absolute left-1/2 transform -translate-x-1/2">
        Task Manager
      </h1>

      {/* Right: Icons & Actions */}
      <div className="flex items-center space-x-4 ml-auto">
        {/* Calendar */}
  

        {/* Help */}
        <button
          className="relative text-white hover:text-gray-300 transition"
          onClick={() => setShowHelpPopup(!showHelpPopup)}
        >
          <FaQuestionCircle className="text-xl" />
        </button>

        {/* Profile Section */}
        <div className="relative flex items-center space-x-2 cursor-pointer">
          <img
            src="/assets/23.webp"
            alt="Profile"
            className="w-9 h-9 rounded-full border-2 border-gray-300 object-cover"
          />
          <FaChevronDown className="text-white text-lg hover:text-gray-300 transition" />
        </div>

        {/* Register & Logout (Responsive) */}
        <button
          onClick={() => navigate("/register")}
          className="hidden md:block bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-2 rounded-md transition-all"
        >
          Register
        </button>
        <button
          onClick={() => navigate("/login")}
          className="hidden md:block bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-2 rounded-md transition-all"
        >
          Logout
        </button>
      </div>

      {/* Calendar Popup */}
      {showCalendar && (
        <div className="absolute top-14 right-4 bg-white p-4 rounded-lg shadow-lg w-60">
          <input
            type="date"
            className="w-full border px-3 py-2 rounded-md focus:ring focus:ring-blue-300"
            onChange={() => setShowCalendar(false)}
          />
        </div>
      )}

      {/* Help Popup */}
      {showHelpPopup && (
        <div className="absolute top-14 right-4 bg-white p-4 rounded-lg shadow-lg w-64">
          <h2 className="text-lg font-semibold text-gray-700">Need Help?</h2>
          <input
            type="text"
            placeholder="Type your question..."
            className="w-full border px-3 py-2 rounded-md mt-2 focus:ring focus:ring-blue-300"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <button
            className="mt-2 w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-md transition-all"
            onClick={() => {
              alert(`Your question: "${question}" has been submitted.`);
              setShowHelpPopup(false);
              setQuestion("");
            }}
          >
            Submit
          </button>
          <button
            className="mt-2 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-md transition-all"
            onClick={() => setShowHelpPopup(false)}
          >
            Close
          </button>
        </div>
      )}
    </header>
  );
};

export default Header1;
