import React, { useRef } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";

import { Editor } from "@toast-ui/react-editor";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
const OutputSection = () => {
  const editorRef:any = useRef()
  return (
    <div className=" bg-white border  shadow-md rounded-md">
      <div className=" flex items-center justify-between p-5 ">
        <h2 className=" font-medium text-lg ">Your Result</h2>
        <Button className=" flex items-center gap-1 bg-mainColor hover:bg-transparent hover:text-mainColor hover:ring-mainColor ring-1 ring-transparent py-5">
          <Copy className="mr-1" />
          Copy
        </Button>
      </div>

      <Editor
      ref={editorRef}
        initialValue="Your Result will apear here!"
        height="600px"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        onChange={()=>console.log(editorRef.current.getInstance().getMarkdown())}
      />
    </div>
  );
};

export default OutputSection;
