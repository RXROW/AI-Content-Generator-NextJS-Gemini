"use client";
import { createContext, Dispatch, SetStateAction } from "react";

 
interface TotalUsageContextType {
  totalUsage: number;
  setTotalUsage: Dispatch<SetStateAction<number>>;
}
 
export const TotalUsageContext = createContext<TotalUsageContextType | null>(null);
