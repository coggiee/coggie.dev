'use client';

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
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';

interface Props {
  content: string;
  editorRef: React.MutableRefObject<any>;
}

export default function TuiEditor({ content = '', editorRef }: Props) {
  const toolbarItems = [['heading', 'bold', 'italic', 'strike']];
  return (
    <div className='flex-grow'>
      {editorRef && (
        <div className='flex flex-col gap-3 mb-3'>
          <Editor
            ref={editorRef}
            height='800px'
            placeholder='Write your content here...'
            // window.innerWidth는 새로고침하지 않으면 작동하지 않음.
            previewStyle={window.innerWidth > 768 ? 'vertical' : 'tab'}
            // {theme === 'light' ? 'light' : 'dark'}
            theme='light'
            initialEditType='markdown' // or wysiwyg
            hideModeSwitch={true} // 하단 숨기기
            initialValue={''}
            useCommandShortcut={true}
            toolbarItems={toolbarItems}
            // frontMatter={true}
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
