import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          {/* Logo */}
          <div className="flex space-x-4">
            <Link to="/" className="flex items-center py-4 px-2">
              <span className="font-bold text-2xl text-purple-600">Avatar Ask</span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-1">
              <Link to="/" className="py-4 px-3 text-gray-700 hover:text-purple-600 transition duration-300">Home</Link>
              <Link to="/about" className="py-4 px-3 text-gray-700 hover:text-purple-600 transition duration-300">About</Link>
              <Link to="/products" className="py-4 px-3 text-gray-700 hover:text-purple-600 transition duration-300">Products</Link>
              <Link to="/contact" className="py-4 px-3 text-gray-700 hover:text-purple-600 transition duration-300">Contact</Link>
            </div>
          </div>

          {/* Special action button */}
          <div className="hidden md:flex items-center">
            <Link to="/chat/max" className="mr-4 bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-full transition duration-300">
              Chat with Alex
            </Link>
          </div>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-3">
            <Link to="/login" className="py-2 px-4 border border-gray-300 hover:border-gray-400 text-gray-700 rounded-lg transition duration-300">Login</Link>
            <Link to="/signup" className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition duration-300">Sign Up</Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-gray-100 focus:outline-none"
            >
              <svg className="h-6 w-6 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <Link to="/" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">Home</Link>
        <Link to="/about" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">About</Link>
        <Link to="/products" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">Products</Link>
        <Link to="/contact" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">Contact</Link>
        <div className="flex flex-col space-y-2 p-4">
          <Link to="/chat/max" className="py-2 px-3 bg-purple-600 text-white text-center rounded-full">Chat with Max</Link>
          <Link to="/login" className="py-2 px-3 border border-gray-300 text-gray-700 text-center rounded-lg">Login</Link>
          <Link to="/signup" className="py-2 px-3 bg-indigo-600 text-white text-center rounded-lg">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;