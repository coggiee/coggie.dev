export const copyToClipboard = (e: any) => {
  const currentPath = window.location.toString();
  navigator.clipboard.writeText(currentPath);
  
};
