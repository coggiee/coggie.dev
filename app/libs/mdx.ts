import { serialize } from "next-mdx-remote/serialize";

// <MDXRemote /> now accepts a source prop, instead of accepting the serialized output from next-mdx-remote/serialize
export const serializeMdx = (source: string) => {
  return serialize(source, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
      format: 'mdx',
    }
  })
};