"use client";

import React from "react";
import dynamic from "next/dynamic";
import { Editor } from "@toast-ui/react-editor";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";
import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import "prismjs/themes/prism.css";
import Prism from "prismjs";
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";
import { EditorProps } from "@/types/type";
import { useTheme } from "next-themes";
import { useResize } from "@/app/_hooks/useResize";

const UploadLoading = dynamic(() => import("./UploadLoading"));

const TuiEditor = React.forwardRef(
  ({ content = " ", onChange, editorRef }: EditorProps, ref) => {
    const { direction } = useResize();
    const toolbarItems = [
      ["heading", "bold", "italic", "strike"],
      ["code", "codeblock"],
      ["image"],
    ];
    const [isLoading, setIsLoading] = React.useState<boolean>(false);

    const theme = useTheme().theme;

    const handleAddImageBlob = async (file: File | Blob, callback: any) => {
      setIsLoading(true);
      const form = new FormData();
      form.append("fileUpload", file);

      const response = await fetch("/api/upload", {
        method: "POST",
        body: form,
      });

      const { data } = await response.json();
      const { url } = data;
      callback(url, "image");
      setIsLoading(false);
      return false;
    };

    return (
      <div className="flex-grow relative">
        {editorRef && (
          <div className="flex flex-col gap-3 mb-3">
            <Editor
              ref={editorRef}
              height="800px"
              placeholder="포스트 내용을 채워주세요!"
              previewStyle={direction}
              theme={`${theme === "light" ? "light" : "dark"}`}
              initialEditType="markdown"
              hideModeSwitch={true}
              initialValue={content}
              useCommandShortcut={true}
              toolbarItems={toolbarItems}
              onChange={onChange}
              hooks={{
                addImageBlobHook: handleAddImageBlob,
              }}
              plugins={[
                [
                  codeSyntaxHighlight,
                  {
                    highlighter: Prism,
                  },
                ],
                colorSyntax,
              ]}
            />
          </div>
        )}
        {isLoading && <UploadLoading />}
      </div>
    );
  },
);

TuiEditor.displayName = "TuiEditor";

export default TuiEditor;
