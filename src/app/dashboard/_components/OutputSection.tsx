import React, { useEffect, useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill's CSS
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

interface IProps {
  AIResult: string;
}

const OutputSection = ({ AIResult }: IProps) => {
  const quillRef = useRef<ReactQuill | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (quillRef.current) {
      const editor = quillRef.current.getEditor();
      editor.setContents(editor.clipboard.convert(AIResult));
    }
  }, [AIResult]);

  const handleCopy = () => {
    if (quillRef.current) {
      const editor = quillRef.current.getEditor();
      const content = editor.root.innerHTML;
      navigator.clipboard.writeText(content);
      
      setCopied(true);
      setTimeout(() => setCopied(false), 5000);
    }
  };

  return (
    <div className="bg-white border shadow-md rounded-md">
      <div className="flex items-center justify-between p-5">
        <h2 className="font-medium text-lg">Your Result</h2>
        <Button
          onClick={handleCopy}
          className="flex items-center gap-1 bg-mainColor hover:bg-transparent hover:text-mainColor hover:ring-mainColor ring-1 ring-transparent py-5"
        >
          <Copy className="mr-1" />
          {copied ? "Copied" : "Copy"}
        </Button>
      </div>

      <ReactQuill
        ref={quillRef}
        value={AIResult}
        onChange={() => console.log(quillRef.current?.getEditor().root.innerHTML)}
        theme="snow"
        style={{ height: "600px" }}
      />
    </div>
  );
};

export default OutputSection;
