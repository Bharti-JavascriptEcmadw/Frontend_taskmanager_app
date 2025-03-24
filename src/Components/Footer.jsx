import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-2 ">
      <div className="container mx-auto px-4">
        <p className="text-sm sm:text-base">
          © {new Date().getFullYear()} Task Manager. All rights reserved.
        </p>
        <div className="flex justify-center gap-4 mt-2 text-sm">
          <a href="#" className="hover:text-blue-400 transition">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-blue-400 transition">
            Terms of Service
          </a>
          <a href="#" className="hover:text-blue-400 transition">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
