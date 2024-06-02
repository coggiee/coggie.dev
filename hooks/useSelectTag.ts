import { useTagStore } from "@/store/useTagStore";

export const useSelectTag = () => {
  const { tag, setTag } = useTagStore();

  const handleOnSelect = (tag: string) => {
    setTag(tag);
  };

  return { tag, handleOnSelect };
};
