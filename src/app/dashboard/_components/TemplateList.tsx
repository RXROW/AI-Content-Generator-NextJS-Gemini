"use client";
import { Templates } from "@/data/data";
import React, { useEffect, useState } from "react";
import TempleteCard from "./TempleteCard";

export interface ITemplate {
  name: string;
  desc: string;
  icon: string;
  category: string;
  slug: string;
  aiPromt: string;
  form?: IForm[];
}

export interface IForm {
  label: string;
  field: string;
  name: string;
  required?: boolean;
}

const TemplateList = ({ userSearchInput }: any) => {
  const [templeteList, setTempleteList] = useState(Templates);
  useEffect(() => {
    if (userSearchInput) {
      const filterData = Templates.filter((item) =>
        item.name.toLowerCase().includes(userSearchInput.toLowerCase())
      );
      setTempleteList(filterData);
    }
  }, [userSearchInput]);
  return (
    <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5    ">
      {templeteList.map((item: ITemplate, index: number) => (
        <TempleteCard {...item} />
      ))}
    </div>
  );
};

export default TemplateList;
