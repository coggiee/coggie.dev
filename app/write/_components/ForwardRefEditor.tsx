"use client";

import { MDXEditorMethods, MDXEditorProps } from "@mdxeditor/editor";
import dynamic from "next/dynamic";
import { forwardRef, useState } from "react";
// import '@mdxeditor/editor/style.css'
// This is the only place InitializedMDXEditor is imported directly.
const Editor = dynamic(() => import("./InitializedMDXEditor"), {
  // Make sure we turn SSR off
  ssr: false,
});

const Loading = dynamic(() => import("./UploadLoading"));

// This is what is imported by other components. Pre-initialized with plugins, and ready
// to accept other props, including a ref.
export const ForwardRefEditor = forwardRef<MDXEditorMethods, MDXEditorProps>(
  (props, ref) => {
    const [isLoading, setIsLoading] = useState(false);
    const imageUploadHandler = async (file: File | Blob) => {
      setIsLoading(true);
      const form = new FormData();
      form.append("fileUpload", file);

      const response = await fetch("/api/upload", {
        method: "POST",
        body: form,
      });

      const { data } = await response.json();
      const { url } = data;
      setIsLoading(false);
      return url;
    };

    return (
      <div className="grow relative h-full">
        {ref && (
          <div className="flex flex-col gap-3 mb-3">
            <Editor
              {...props}
              editorRef={ref}
              imageUploadHandler={imageUploadHandler}
            />
          </div>
        )}
        {isLoading && <Loading />}
      </div>
    );
  },
);

// TS complains without the following line
ForwardRefEditor.displayName = "ForwardRefEditor";
