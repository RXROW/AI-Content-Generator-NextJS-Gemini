"use client";

import React, { useState } from "react";
import FromSection from "../../_components/FromSection";
import OutputSection from "../../_components/OutputSection";
import { ITemplate } from "../../_components/TemplateList";
import { Templates } from "@/data/data";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { chatSession } from "@/utils/ai";

interface IProps {
  params: {
    slug: string;
  };
}
const CreateContent = (props: IProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [AIResult, setAIResult] = useState<string>("");
  const slectedTemplete: ITemplate | undefined = Templates?.find(
    (item) => item.slug == props.params.slug
  );

  const GenerateAIConetent = async (fromData: any) => {
    setLoading(true);
    const SeledetPrompt = slectedTemplete?.aiPromt;
    const FinalAIPrompt = JSON.stringify(fromData) + ", " + SeledetPrompt;
    const Result = await chatSession.sendMessage(FinalAIPrompt);
    console.log(Result.response.text());
    setAIResult(Result.response.text());
    setLoading(false);
  };

  return (
    <div className="p-10 bg-slate-100">
      <Link href="/dashboard">
        <Button className=" bg-mainColor hover:bg-transparent hover:text-mainColor hover:ring-mainColor ring-1 ring-transparent py-5">
          <ArrowLeft /> Back
        </Button>
      </Link>
      <div className=" grid grid-cols-1 md:grid-cols-3  gap-0 sm:gap-5  py-5 ">
        <FromSection
          loading={loading}
          slectedTemplete={slectedTemplete}
          userFormInput={(v: any) => GenerateAIConetent(v)}
        />
        <div className=" col-span-2 mt-5 sm:mt-0">
          <OutputSection AIResult={AIResult} />
        </div>
      </div>
    </div>
  );
};

export default CreateContent;
