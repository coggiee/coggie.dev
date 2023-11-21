import { Octokit } from 'octokit';

const octokit = new Octokit({
  auth: process.env.NEXT_PUBLIC_GITHUB_TOKEN,
});

// Get the contents of the file
export const getContentsFromGithub = async (path: string) => {
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

  return response.data;
};

// need sha to update the file
export const updateContentFromGithub = async (path: string, content: string) => {};

export const createContentFromGithub = async (title: string, content: string) => {
  const response = await octokit.request(
    'PUT /repos/{owner}/{repo}/contents/{path}',
    {
      owner: 'lunarmoon7',
      repo: 'zentechie-blog',
      path: `posts/${title}.mdx`,
      message: `create ${title}.mdx`,
      committer: {
        name: 'lunarmoon7',
        email: '49crehbgr@gmail.com',
      },
      content: `${btoa(encodeURIComponent(content))}`,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
      },
    }
  );
};
