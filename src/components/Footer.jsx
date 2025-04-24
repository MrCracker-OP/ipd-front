export const Footer = () => {
  return (
    <footer className="bg-[#f7f7f9] text-gray-800 text-sm py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        
        {/* Left: Logo and description */}
        <div className="text-center md:text-left">
          <h2 className="text-gray-900 font-semibold">Avatar Ask</h2>
          <p className="text-xs mt-1 text-gray-600">Future of AI interaction with digital humans.</p>
        </div>

        {/* Center: Contributors */}
        <div className="text-center">
          <p className="text-gray-900 font-semibold mb-1">Contributors</p>
          <p className="text-xs text-gray-600">Omkar · Harsh B · Maitri · Harsh J</p>
        </div>

        {/* Right: Contact */}
        <div className="text-center md:text-right">
          <p className="text-gray-900 font-semibold mb-1">Contact Us</p>
          <a href="mailto:info@avatarask.com" className="text-indigo-600 hover:text-indigo-500 text-xs">
            info@avatarask.com
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs mt-4 border-t border-gray-200 pt-2 text-gray-600">
        © {new Date().getFullYear()} Avatar Ask. All rights reserved.
      </div>
    </footer>
  );
};