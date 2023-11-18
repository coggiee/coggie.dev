import Giscus from '@giscus/react';

export const Comment = () => {
  return (
    <Giscus
      id='comments'
      repo='lunarmoon7/zentechie-blog'
      repoId='R_kgDOKszKnA='
      category='general'
      categoryId='DIC_kwDOKszKnM4CbDtK'
      mapping='pathname'
      term='Welcome to @giscus/react component!'
      strict='0'
      reactionsEnabled='1'
      emitMetadata='0'
      inputPosition='top'
      theme='light'
      lang='ko'
      loading='lazy'
    />
  );
};
