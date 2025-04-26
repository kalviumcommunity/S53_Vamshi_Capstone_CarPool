import React from "react";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-4 bg-white shadow-sm">
      {/* Left Side - Navigation Links */}
      <div className="flex space-x-8 text-gray-700 text-lg">
        <a href="#" className="hover:text-gray-900">Publish a ride</a>
        <a href="#" className="hover:text-gray-900">About us</a>
        <a href="#" className="hover:text-gray-900">How it works</a>
        <a href="#" className="hover:text-gray-900">Why to choose us</a>
      </div>

      {/* Right Side - Auth Links */}
      <div className="flex items-center space-x-6 text-lg">
        <a href="#" className="text-gray-700 hover:text-gray-900">Sign in</a>
        <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Sign up
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
