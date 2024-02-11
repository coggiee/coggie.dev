import { MDXRemoteSerializeResult } from "next-mdx-remote";

interface Toc {
  level: 1 | 2 | 3;
  text: string;
  slug: string;
}
interface CoverImage {
  url: string;
  handle: string;
  fileName: string;
}

interface Skill {
  title: string;
}

interface PostDetailProps {
  post: any;
  mdx: MDXRemoteSerializeResult;
  toc: any;
  isFullSize?: boolean;
}

interface PostCardProps {
  date: string;
  time: string;
  title: string;
  description: string;
  path: string;
  tags: string[];
  coverImage?: CoverImage;
  readTimeMinutes: string;
}

interface MotionProviderProps {
  children: React.ReactNode;
  duration: number;
  className?: string;
  delay?: number;
}
interface MotionVerticalProviderProps extends MotionProviderProps {
  fromY?: number;
  toY?: number;
}

interface MotionHorizontalProviderProps extends MotionProviderProps {
  fromX: number;
  toX: number;
}

interface MainPostProps {
  hotPosts: any[];
  recentPosts: any[];
}

interface MainPageSectionProps extends MainPostProps {}
interface PostShowSectionProps extends MainPostProps {}

interface BlogSectionProps {
  posts: any;
  uniqueTags: string[];
  cursor: string;
  totalPostSize: number;
}

interface TagFilterProps {
  tags: string[];
  handleOnClickTag: (tag: string) => void;
}

interface ReCheckModalkProps {
  isOpen: boolean;
  onOpenChange: () => void;
  handleOnTypeDesc: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleOnToggleHotPost: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleOnClickSaveBtn: () => void;
  handleOnFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface EditTitleProps {
  title: string;
  handleOnTypeTitle: (value: string) => void;
}

interface EditorProps {
  content: string;
  editorRef: React.MutableRefObject<any>;
}

interface AlertProps {
  title: string;
  bgColor: string;
}

interface AvatarProps {
  src: string;
  width?: number;
  height?: number;
}

interface ModalProps {
  isOpen: boolean;
  onClick: (isSubmit: boolean) => void;
}

interface DividerProps {
  isHorizontal: boolean;
  bgColor: string;
  darkBgColor: string;
  width?: "full" | string;
  height?: "full" | string;
}

interface DropDownProps {
  handleOnLogin: () => void;
  session: any;
}

interface GithubLoginProps {
  handleOnLogin: () => void;
}

interface SearchBarProps {
  handleOnSearch: (e: ChangeEvent) => void;
  handleOnPressEnter: (e: any) => void;
}

interface SocialGroupProps {
  fontSize: string;
  display: string;
  justify?: string;
  align?: string;
  direction?: string;
  gap?: number;
}

interface ProjectItemProps {
  projectTitle: string;
  projectDescription: string;
  projectGithubLink: string;
  projectDemoLink: string;
}
