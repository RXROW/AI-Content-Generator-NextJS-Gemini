import { Search } from 'lucide-react';
import React from 'react';

const Header = () => {
  return (
    <div className="p-5 shadow-lg border-b-2 flex justify-between items-center bg-white  flex-col md:flex-row">
      {/* Search Bar */}
      <div className="flex items-center p-2 gap-2 border border-gray-200 rounded-sm w-full max-w-xl bg-gray-50">
        <Search className="text-gray-400" />
        <input
          type="text"
          placeholder="Search..."
          className="outline-none bg-transparent placeholder-gray-500 text-gray-700 w-full"
        />
      </div>
      {/* Membership Banner */}
      <div>
        <h2 className="bg-[#8046FD] py-1 mt-5  md:mt-0 px-3 rounded-full text-white text-[14px]">
          Join New Membership from $9.99/Month
        </h2>
      </div>
    </div>
  );
};

export default Header;
