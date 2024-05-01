"use client";

import type { ForwardedRef } from "react";
import {
  headingsPlugin,
  listsPlugin,
  quotePlugin,
  thematicBreakPlugin,
  markdownShortcutPlugin,
  MDXEditor,
  UndoRedo,
  BoldItalicUnderlineToggles,
  toolbarPlugin,
  CodeToggle,
  InsertCodeBlock,
  Separator,
  codeMirrorPlugin,
  type MDXEditorMethods,
  type MDXEditorProps,
  codeBlockPlugin,
  ConditionalContents,
  ChangeCodeMirrorLanguage,
  InsertImage,
  InsertTable,
  CreateLink,
  diffSourcePlugin,
  linkPlugin,
  linkDialogPlugin,
  DiffSourceToggleWrapper,
  imagePlugin,
  tablePlugin,
} from "@mdxeditor/editor";

interface ImageHandlerProps {
  imageUploadHandler: (image: File) => Promise<string>;
}
// Only import this to the next file
export default function InitializedMDXEditor({
  editorRef,
  ...props
}: { editorRef: ForwardedRef<MDXEditorMethods> | null } & MDXEditorProps &
  ImageHandlerProps) {
  return (
    <MDXEditor
      className="w-full"
      contentEditableClassName="mdxEditor"
      {...props}
      ref={editorRef}
      plugins={[
        headingsPlugin(),
        listsPlugin(),
        linkPlugin(),
        quotePlugin(),
        thematicBreakPlugin(),
        codeBlockPlugin({
          defaultCodeBlockLanguage: "tsx",
        }),
        codeMirrorPlugin({
          codeBlockLanguages: {
            js: "JavaScript",
            css: "CSS",
            txt: "text",
            tsx: "TypeScript",
          },
        }),
        diffSourcePlugin({
          diffMarkdown: "An older version",
          viewMode: "rich-text",
        }),
        linkPlugin(),
        linkDialogPlugin(),
        tablePlugin(),
        imagePlugin({ imageUploadHandler: props.imageUploadHandler }),
        toolbarPlugin({
          toolbarContents: () => (
            <DiffSourceToggleWrapper>
              <UndoRedo />
              <Separator />
              <BoldItalicUnderlineToggles />
              <CodeToggle />
              <Separator />
              <CreateLink />
              <InsertImage />
              <InsertTable />
              <Separator />
              <ConditionalContents
                options={[
                  {
                    when: (editor) => editor?.editorType === "codeblock",
                    contents: () => <ChangeCodeMirrorLanguage />,
                  },
                  {
                    fallback: () => <InsertCodeBlock />,
                  },
                ]}
              />
              <Separator />
            </DiffSourceToggleWrapper>
          ),
        }),
        markdownShortcutPlugin(),
      ]}
    />
  );
}
