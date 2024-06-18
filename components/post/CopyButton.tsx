import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";
import React from "react";

interface CopyButtonProps {
  onCopy: () => void;
}

export default function CopyButton({ onCopy }: CopyButtonProps) {
  return (
    <Button
      size="icon"
      variant="ghost"
      className="rounded-full w-8 h-8 p-2"
      onClick={onCopy}
    >
      <Link />
    </Button>
  );
}
