"use client"
import { useState } from "react";
import { TotalUsageContext } from "../(context)/TotalUsageContext";
import Header from "./_components/Header";
import SideBar from "./_components/SideBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [totalUsage, setTotalUsage] = useState<number>(0);

  return (
    <TotalUsageContext.Provider value={{totalUsage ,setTotalUsage}}>
      

    <div className="flex justify-between bg-slate-100 h-screen  ">
      <div className="md:w-64 hidden md:block fixed   ">
        <SideBar />
      </div>
      <div className="md:ml-64 w-full ">
        <Header/>
        
        {children}</div>
    </div>
    </TotalUsageContext.Provider>
  );
}
