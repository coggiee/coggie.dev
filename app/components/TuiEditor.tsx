import React from 'react';
import { Editor } from '@toast-ui/react-editor';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import 'prismjs/themes/prism.css';
import Prism from 'prismjs';

interface Props {
  content: string;
  editorRef: React.MutableRefObject<any>;
}

export default function TuiEditor({ content = '', editorRef }: Props) {
  const toolbarItems = [
    ['heading', 'bold', 'italic', 'strike'],
    ['hr', 'quote'],
    ['ul', 'ol', 'task', 'indent', 'outdent'],
    ['table', /* "image", */ 'link'],
    ['code', 'codeblock'],
  ];

  return (
    <>
      {editorRef && (
        <Editor
          ref={editorRef}
          height='600px'
          placeholder='Write your content here...'
          previewStyle='tab' // or vertical
          initialEditType='markdown' // or wysiwyg
          hideModeSwitch={true} // 하단 숨기기
          initialValue="Let's Edit!"
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
      )}
    </>
  );
}
