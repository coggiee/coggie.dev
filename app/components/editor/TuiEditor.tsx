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
import { useTheme } from 'next-themes';
import IconBack from '../../Icons/IconBack';
import { useRouter } from 'next/navigation';

interface Props {
  content: string;
  editorRef: React.MutableRefObject<any>;
  handleOnSave: () => void;
}

export default function TuiEditor({
  content = '',
  editorRef,
  handleOnSave,
}: Props) {
  const toolbarItems = [
    ['heading', 'bold', 'italic', 'strike'],
    ['hr', 'quote'],
    ['ul', 'ol', 'task', 'indent', 'outdent'],
    ['table', 'image', 'link'],
    ['code', 'codeblock']
  ];
  const { theme } = useTheme();
  const router = useRouter();
  
  return (
    <div className='flex-grow'>
      {editorRef && (
        <div className='flex flex-col gap-3 mb-3'>
          <Editor
            ref={editorRef}
            height='950px'
            placeholder='Write your content here...'
            // window.innerWidth는 새로고침하지 않으면 작동하지 않음.
            previewStyle='vertical'
            theme={theme === 'light' ? 'light' : 'dark'}
            initialEditType='markdown' // or wysiwyg
            // hideModeSwitch={true} // 하단 숨기기
            initialValue={content || ''}
            useCommandShortcut={true}
            toolbarItems={toolbarItems}
            frontMatter={true}
            // customHTMLRenderer={{
            //   paragraph(node, { origin, options }) {
            //     const { customProp = {}} = options;
            //     const showFrontMatter = customProp.showFrontMatter && node.customType;
            //     const attributes = {};

            //     // prevent to edit the front matter in WYSIWYG
            //     if (showFrontMatter) {
            //       attributes.contenteditable = false ;
            //     }
            //     return { ...origin(), attributes };
            //   }
            // }}
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
          <div className='flex gap-3 self-end'>
            <button
              className='p-3 flex gap-2 items-center'
              onClick={() => router.back()}
            >
              <IconBack />
              <span>나가기</span>
            </button>
            <button
              className='p-3 rounded-xl bg-[#f7ab0a] drop-shadow-md shadow-md font-notosanskr'
              onClick={handleOnSave}
            >
              출간하기
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
