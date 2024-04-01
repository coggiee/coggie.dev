import { create } from "zustand";

interface PostData {
  postList: any | null;
  cursor: string;
  pageSize: number;
}

interface PostState {
  postState: PostData;
}

interface PostAction {
  setPost: (postState: PostState["postState"]) => void;
  getPost: () => PostState["postState"];
}

export const usePostStore = create<PostState & PostAction>((set, get) => ({
  postState: {
    postList: null,
    cursor: "",
    pageSize: 0,
  },
  setPost: (postState) => set({ postState }),
  getPost: () => get().postState,
}));
