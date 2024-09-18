"use client";
import React, { useState } from "react";
import { ITemplate } from "./TemplateList";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface IProps {
  slectedTemplete?: ITemplate;
  userFormInput: any;
}

const FromSection = ({ slectedTemplete, userFormInput }: IProps) => {
  const [formData, setFormData] = useState<any>();
  const handleInputChange = (event: any) => {
    const { value, name } = event.target;

    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const onSubmit = (e: any) => {
    e.preventDefault();
    userFormInput(formData);
  };
  return (
    <div className=" p-5 rounded-md border shadow-md bg-white">
      <Image
        src={slectedTemplete?.icon || ""}
        width={70}
        height={70}
        alt="icon"
      />
      <h2 className=" font-semibold text-2xl my-2 text-mainColor ">
        {slectedTemplete?.name}
      </h2>
      <p className=" text-gray-500 text-sm">{slectedTemplete?.desc}</p>

      <form className=" mt-6" onSubmit={onSubmit}>
        {slectedTemplete?.form?.map((item, index) => (
          <div className=" my-2 flex flex-col gap-2 mb-3 " key={index}>
            <label className=" font-semibold">{item.label}</label>
            {item.field == "input" ? (
              <Input
                name={item.name}
                required={item?.required}
                onChange={handleInputChange}
              />
            ) : item.field == "textarea" ? (
              <Textarea
                name={item.name}
                required={item?.required}
                onChange={handleInputChange}
              />
            ) : null}
          </div>
        ))}

        <Button
          type="submit"
          className="w-full bg-mainColor hover:bg-transparent hover:text-mainColor hover:ring-mainColor ring-1 ring-transparent py-5"
        >
          Generate Content
        </Button>
      </form>
    </div>
  );
};

export default FromSection;
