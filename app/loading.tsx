import { LoaderCircle } from "lucide-react";

export default function Loading() {
  return (
    <div className="w-full h-full fixed z-[50] flex flex-col justify-center items-center">
      <LoaderCircle className="animate-spinner-ease-spin w-7 h-7" />
    </div>
  );
}
