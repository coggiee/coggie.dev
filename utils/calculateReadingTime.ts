export const calculateReadingTime = (text: string) => {
  const wordsPerMinute = 200;
  // Step 3: Calculate the word count
  const noOfWords = text.split(/\s/g).length;
  // Step 4: Calculate the estimated reading time (in minutes)
  const minutes = noOfWords / wordsPerMinute;
  const readTime = Math.ceil(minutes);
  // Step 5: Format the output
  return `${readTime} min read`;
};