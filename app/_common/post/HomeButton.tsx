import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

export default function HomeButton() {
  const router = useRouter();

  return (
    <Button
      variant="outline"
      size="icon"
      className="dark:text-white"
      onClick={() => router.push("/")}
    >
      <Home className="w-4 h-4" />
    </Button>
  );
}
