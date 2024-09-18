"use client";

import React from "react";
import FromSection from "../../_components/FromSection";
import OutputSection from "../../_components/OutputSection";
import { ITemplate } from "../../_components/TemplateList";
import { Templates } from "@/data/data";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface IProps {
  params: {
    slug: string;
  };
}
const CreateContent = (props: IProps) => {
  const slectedTemplete: ITemplate | undefined = Templates?.find(
    (item) => item.slug == props.params.slug
  );
  console.log(props.params.slug);
  return (
    <div className="p-10 bg-slate-100">
      <Link href="/dashboard">
      <Button className=" bg-mainColor hover:bg-transparent hover:text-mainColor hover:ring-mainColor ring-1 ring-transparent py-5"><ArrowLeft/> Back</Button>

      </Link>
    <div className=" grid grid-cols-1 md:grid-cols-3  gap-0 sm:gap-5  py-5 ">
      <FromSection
        slectedTemplete={slectedTemplete}
        userFormInput={(v: any) => console.log(v)}
      />
      <div className=" col-span-2 mt-5 sm:mt-0">
        <OutputSection />
      </div>
    </div>
    </div>
  );
};

export default CreateContent;
