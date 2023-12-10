export const copyToClipboard = (path: string) => {
  const currentPath = window.location.toString() + `blog/${path}`;
  navigator.clipboard.writeText(currentPath);
};
