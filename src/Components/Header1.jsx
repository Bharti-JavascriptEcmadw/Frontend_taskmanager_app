import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars, FaChevronDown, FaQuestionCircle } from "react-icons/fa";

const Header1 = ({ toggleSidebar }) => {
  const navigate = useNavigate();
  const [showHelpPopup, setShowHelpPopup] = useState(false);
  const [question, setQuestion] = useState("");

  return (
    <header className="w-full fixed top-0 left-0 right-0 bg-blue-900 shadow-md z-50 px-4 sm:px-6 py-3 flex items-center justify-between">
     

      {/* Center: Title (Wrapped in a div to prevent overlapping) */}
      <div className="flex-1 flex justify-center md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
        <h1 className="text-white text-lg sm:text-xl md:text-xl font-semibold">
          Task Manager
        </h1>
      </div>

      {/* Right: Icons & Actions */}
      <div className="flex items-center space-x-2 sm:space-x-4 ml-auto flex-wrap">
        {/* Help Button */}
        <button
          className="text-white hover:text-gray-300 transition"
          onClick={() => setShowHelpPopup(!showHelpPopup)}
        >
          <FaQuestionCircle className="text-lg sm:text-xl" />
        </button>

        {/* Profile Section */}
        <div className="relative flex items-center space-x-1 sm:space-x-2 cursor-pointer">
          <img
            src="/assets/23.webp"
            alt="Profile"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-gray-300 object-cover"
          />
          <FaChevronDown className="text-white text-base sm:text-lg hover:text-gray-300 transition" />
        </div>

        {/* Register & Logout (Now Always Visible & Wrapped for Small Screens) */}
        <div className="flex space-x-2 mt-2 sm:mt-0">
          <button
            onClick={() => navigate("/register")}
            className="bg-green-500 hover:bg-green-600 text-white text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-2 rounded-md transition-all"
          >
            Register
          </button>
          <button
            onClick={() => navigate("/login")}
            className="bg-red-500 hover:bg-red-600 text-white text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-2 rounded-md transition-all"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Help Popup */}
      {showHelpPopup && (
        <div className="absolute top-14 right-2 sm:right-4 bg-white p-4 rounded-lg shadow-lg w-60 sm:w-64">
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
