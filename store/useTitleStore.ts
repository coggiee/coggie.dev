import { create } from "zustand";

interface TitleState {
  title: string | null;
}

interface TitleAction {
  setTitle: (tagState: TitleState["title"]) => void;
  getTitle: () => TitleState["title"];
}

export const useTitleStore = create<TitleState & TitleAction>((set, get) => ({
  title: null,
  setTitle: (title) => set({ title }),
  getTitle: () => get().title,
}));
