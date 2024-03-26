import { Spinner } from "@nextui-org/react";

export default function Loading() {
  return (
    <div className="w-full h-full fixed z-[50] flex flex-col justify-center backdrop-blur-sm">
      <Spinner color="success" size="lg" />
    </div>
  );
}
