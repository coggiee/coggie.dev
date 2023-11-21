'use client';

import React from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Viewer } from '@toast-ui/react-editor';
import 'prismjs/themes/prism.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import Prism from 'prismjs';
import { vi } from 'date-fns/locale';

interface Props {
  content: string;
  viewerRef: React.MutableRefObject<any>;
}

export default function TuiViewer({ content = '', viewerRef }: Props) {
  return (
    <div>
      {viewerRef && (
        <Viewer
          ref={viewerRef}
          initialValue={content || '# Hello'}
          height='950px'
          plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
        />
      )}
    </div>
  );
}
