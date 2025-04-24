import React from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full bg-[#f7f7f9] backdrop-blur-xl sticky top-0 z-30 border-b border-[#ececf0]">
      <div className="max-w-[1700px] mx-auto px-8 md:px-28 py-8 flex items-center justify-start rounded-b-2xl" style={{ minHeight: '116px' }}>
        <div className="flex items-center justify-between w-full">
          {/* Logo - Left Aligned */}
          <Link
            to="/"
            className="font-extrabold text-4xl md:text-5xl text-black select-none tracking-wide drop-shadow-sm"
            style={{
              fontFamily: "Playfair Display, serif",
              letterSpacing: "2px"
            }}
          >
            Avatar&nbsp;<span className="text-indigo-500">Ask</span>
          </Link>
          
          {/* Center Nav */}
          <div className="hidden md:flex justify-center gap-16 flex-1 px-12">
            <Link to="/" className="text-lg font-medium text-gray-900 hover:text-indigo-500 transition-colors">Home</Link>
            <Link to="/about" className="text-lg font-medium text-gray-900 hover:text-indigo-500 transition-colors">About</Link>
            <Link to="/contact" className="text-lg font-medium text-gray-900 hover:text-indigo-500 transition-colors">Contact</Link>
          </div>
          
          {/* Actions - Right Aligned */}
          <div className="flex items-center gap-7">
            <Link
              to="/login"
              className="text-md font-medium text-gray-900 hover:text-indigo-500 px-4 py-2 rounded-xl transition"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;