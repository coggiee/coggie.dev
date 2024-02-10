"use client";

import React, { useEffect } from "react";
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

export default function TuiEditor({ content = "", editorRef }: EditorProps) {
  const { direction } = useResize();
  const toolbarItems = [
    ["heading", "bold", "italic", "strike"],
    ["code", "codeblock"],
    ["image"],
  ];
  const theme = useTheme().theme;

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.getInstance().removeHook("addImageBlobHook");
      editorRef.current
        .getInstance()
        .addHook("addImageBlobHook", (file: File | Blob, callback: any) => {
          (async () => {
            const form = new FormData();
            form.append("fileUpload", file);

            const response = await fetch("/api/upload", {
              method: "POST",
              body: form,
            });

            const { data } = await response.json();
            const { url } = data;
            callback(url, "image");
          })();

          return false;
        });
    }

    return () => {};
  }, [editorRef]);

  return (
    <div className="flex-grow">
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
            initialValue={" "}
            useCommandShortcut={true}
            toolbarItems={toolbarItems}
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
    </div>
  );
}
