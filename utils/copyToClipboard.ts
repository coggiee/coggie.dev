export const copyToClipboard = (path: string) => {
  const currentPath = window.location.toString();
  if (currentPath.includes('/blog') || currentPath.includes('/post-views')) {
    navigator.clipboard.writeText(currentPath);
  } else {
    const currentPath = window.location.toString() + `blog/${path}`;
    navigator.clipboard.writeText(currentPath);
  }
};
