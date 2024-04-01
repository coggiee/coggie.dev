import { persist } from "zustand/middleware";
import { create } from "zustand";

interface EditForm {
  id: string;
  title: string;
  content: string;
  description: string;
  coverImage: any;
  isPinned: boolean;
  tagList: string[];
  tagInput: string;
}

interface FormState {
  form: EditForm;
  isUpdated: boolean;
}

interface FormAction {
  setForm: (form: FormState["form"]) => void;
  setIsUpdated: (flag: FormState["isUpdated"]) => void;
  getForm: () => FormState["form"];
  getIsUpdated: () => FormState["isUpdated"];
}

export const useFormStore = create(
  persist<FormState & FormAction>(
    (set, get) => ({
      form: {
        id: "",
        title: "",
        content: "",
        description: "",
        coverImage: null,
        isPinned: false,
        tagList: [],
        tagInput: "",
      },
      isUpdated: false,
      setForm: (form) => set({ form }),
      getForm: () => get().form,
      setIsUpdated: (flag) => set({ isUpdated: flag }),
      getIsUpdated: () => get().isUpdated,
    }),
    {
      name: "post-store",
    },
  ),
);
