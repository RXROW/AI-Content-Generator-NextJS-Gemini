import React, { useEffect, useRef, useState } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

interface IProps {
  AIResult: string;
}

const OutputSection = ({ AIResult }: IProps) => {
  const editorRef = useRef<Editor | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const editorInstance = editorRef.current?.getInstance();
    
     
    if (editorInstance && AIResult) {
      editorInstance.setMarkdown(AIResult);
    }
  }, [AIResult]);

  const handleCopy = () => {
    const editorInstance = editorRef.current?.getInstance();
    if (editorInstance) {
      const content = editorInstance.getMarkdown();
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

      <Editor
        ref={editorRef}
        initialValue="Your result will appear here!"
        height="600px"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        onChange={() =>
          console.log(editorRef.current?.getInstance().getMarkdown())
        }
      />
    </div>
  );
};

export default OutputSection;
