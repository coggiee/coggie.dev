export const copyToClipboard = () => {
  const currentPath = window.location.toString();
  navigator.clipboard.writeText(currentPath);

};