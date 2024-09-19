"use client";
import React, { useContext, useState, useEffect } from "react";
import { FileClock, Home, User, WalletCards } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import Logo from "./Logo";
import UpgradeTrack from "./UpgradeTrack";
import { SideBarContext } from "@/app/(context)/TotalUsageContext";

// Define the menu items
const MenuList = [
  { name: "Home", icon: Home, path: "/dashboard" },
  { name: "History", icon: FileClock, path: "/dashboard/history" },
  { name: "Pricing", icon: WalletCards, path: "/dashboard/pricing" },
  { name: "Profile", icon: User, path: "/dashboard/profile" },
];

const SideBar: React.FC = () => {
  const router = useRouter();
  const path = usePathname();
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Access the sidebar context
  const sidebarContext = useContext(SideBarContext);

  if (!sidebarContext) {
    return <div>Loading...</div>; // Handle case where context is not available
  }

  const { isSidebarOpen, setIsSidebarOpen }: any = sidebarContext;

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize); // Listen to resize events

    return () => window.removeEventListener("resize", handleResize); // Clean up listener
  }, []);

  const handleMenuClick = (path: string) => {
    router.push(path);
    if (isMobile && isSidebarOpen) { // Close only if on mobile
      setIsSidebarOpen(false);
    }
  };

  // Calculate the class names based on sidebar state
  const sidebarClasses = `p-5 border-r h-screen flex flex-col items-center bg-white transition-transform ${
    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
  }`;

  return (
    <div className={sidebarClasses}>
      <div className="flex justify-center mb-6">
        <Logo />
      </div>

      <div className="w-full">
        {MenuList.map((menu, index) => {
          const isActive = path === menu.path;
          const menuItemClasses = `flex my-3 items-center gap-3 p-2 rounded-lg cursor-pointer transition-colors duration-200 ${
            isActive ? "bg-[#8046FD] text-white" : "text-gray-700 hover:bg-gray-200"
          }`;
          const iconClasses = `w-6 h-6 ${isActive ? "text-white" : "text-gray-600"}`;
          const textClasses = `text-lg ${isActive ? "font-semibold" : "font-light"}`;

          return (
            <div
              key={index}
              onClick={() => handleMenuClick(menu.path)}
              className={menuItemClasses}
            >
              <menu.icon className={iconClasses} />
              <h2 className={textClasses}>{menu.name}</h2>
            </div>
          );
        })}
      </div>
      <div className="absolute bottom-10 left-0 w-full">
        <UpgradeTrack />
      </div>
    </div>
  );
};

export default SideBar;
