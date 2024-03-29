import IconLink from "@/app/_icons/IconLink";
import { AlertProps } from "@/types/type";

export default function Alert({ title, bgColor = "dodgerblue" }: AlertProps) {
  return (
    <div className="fixed top-5 right-5 z-[999] transition-all duration-300">
      <div
        className={`rounded-lg bg-[${bgColor}] w-52 shadow-lg md:w-96 transition-all ease-in-out duration-1000 p-5 text-xs flex`}
      >
        <IconLink className="text-center" />
        <span>{title}</span>
      </div>
    </div>
  );
}
