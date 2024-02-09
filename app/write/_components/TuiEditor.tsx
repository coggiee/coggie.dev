"use client";

import React, { useEffect, useState } from "react";
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

export default function TuiEditor({ content = "", editorRef }: EditorProps) {
  const [direction, setDirection] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth > 768 ? "vertical" : "tab";
    }
  });

  const toolbarItems = [["heading", "bold", "italic", "strike"]];
  const theme = useTheme().theme;
  useEffect(() => {
    if (window.innerWidth > 768) {
      setDirection("vertical");
    } else {
      setDirection("tab");
    }
  }, [window.innerWidth]);
  
  return (
    <div className="flex-grow">
      {editorRef && (
        <div className="flex flex-col gap-3 mb-3">
          <Editor
            ref={editorRef}
            height="800px"
            placeholder="Write your content here..."
            previewStyle={window.innerWidth > 768 ? "vertical" : "tab"}
            theme={`${theme === "light" ? "light" : "dark"}`}
            initialEditType="markdown"
            hideModeSwitch={true}
            initialValue={""}
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
