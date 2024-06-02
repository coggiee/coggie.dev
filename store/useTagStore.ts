import { create } from "zustand";

interface TagState {
  tag: string | null;
}

interface TagAction {
  setTag: (tagState: TagState["tag"]) => void;
  getTag: () => TagState["tag"];
}

export const useTagStore = create<TagState & TagAction>((set, get) => ({
  tag: "All",
  setTag: (tag) => set({ tag }),
  getTag: () => get().tag,
}));
