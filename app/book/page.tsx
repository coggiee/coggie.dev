'use client';
import { Octokit } from 'octokit';
import { useRef } from 'react';
import TuiEditor from '../components/TuiEditor';

export default function Book() {
  const octokit = new Octokit({
    auth: process.env.NEXT_PUBLIC_GITHUB_TOKEN,
  });
  const innerContent =
    '# This is a test file\n' + '## Would it work?\n' + '### I hope so\n';

  function decodeUnicode(str: string) {
    // Going backwards: from bytestream, to percent-encoding, to original string.
    return decodeURIComponent(
      atob(str)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );
  }

  const handleOnClick = async () => {
    // Get the contents of the file
    const response = await octokit.request(
      'GET /repos/{owner}/{repo}/contents/{path}',
      {
        owner: 'lunarmoon7',
        repo: 'zentechie-blog',
        path: 'posts/devcourse.mdx',
        headers: {
          'X-GitHub-Api-Version': '2022-11-28',
        },
      }
    );

    // Create a new file
    // const response = await octokit.request(
    //   'PUT /repos/{owner}/{repo}/contents/{path}',
    //   {
    //     owner: 'lunarmoon7',
    //     repo: 'zentechie-blog',
    //     path: 'posts/test.mdx',
    //     message: 'create test.mdx',
    //     committer: {
    //       name: 'lunarmoon7',
    //       email: '49crehbgr@gmail.com',
    //     },
    //     content: `${btoa(encodeURIComponent(innerContent))}`,
    //     headers: {
    //       'X-GitHub-Api-Version': '2022-11-28',
    //     },
    //   }
    // );
    const data = await response.data;
  };
  const ref = useRef<any>(null);
  return (
    <div className='dark:text-[#fff]'>
      {/* <button className='border-2 p-3 rounded-lg' onClick={handleOnClick}>
        Create File on Github
      </button> */}
      <TuiEditor content={''} editorRef={ref} />
    </div>
  );
}
