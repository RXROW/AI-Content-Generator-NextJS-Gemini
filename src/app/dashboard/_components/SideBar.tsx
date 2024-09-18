"use client";

import { FileClock, Home, Settings, WalletCards } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import Logo from './Logo';

const MenuList = [
  {
    name: "Home",
    icon: Home,
    path: "/dashboard",
  },
  {
    name: "History",
    icon: FileClock,
    path: "/dashboard/history",
  },
  {
    name: "Billing",
    icon: WalletCards,
    path: "/dashboard/billing",
  },
  {
    name: "Settings",
    icon: Settings,
    path: "/dashboard/settings",
  },
];

const SideBar: React.FC = () => {
  const router = useRouter();
  const path = usePathname();

  return (
    <div className="p-5 border-r h-screen flex flex-col items-center bg-white ">
      {/* Logo Section */}
      <div className="flex justify-center mb-6">
        <Logo />
      </div>

      {/* Menu Items */}
      <div className="w-full">
        {MenuList.map((menu, index) => (
          <div
            key={index}
            onClick={() => router.push(menu.path)}
            className={`flex my-3 items-center gap-3 p-2 rounded-lg cursor-pointer transition-colors duration-200 
              ${path === menu.path ? 'bg-[#8046FD] text-white' : 'text-gray-700 hover:bg-gray-200'}`}
          >
            <menu.icon className={`w-6 h-6 ${path === menu.path ? 'text-white' : 'text-gray-600'}`} />
            <h2 className={`text-lg ${path === menu.path ? 'font-semibold' : 'font-light'}`}>
              {menu.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
