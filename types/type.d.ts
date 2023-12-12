export interface Toc {
  level: 1 | 2 | 3;
  text: string;
  slug: string;
}

export interface CoverImage {
  url: string;
  handle: string;
  fileName: string;
}
