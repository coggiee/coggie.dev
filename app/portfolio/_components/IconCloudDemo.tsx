import IconCloud from "@/components/magicui/icon-cloud";
import { cn } from "@/lib/utils";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nextdotjs",
  "firebase",
  "supabase",
  "vercel",
  "git",
  "github",
  "visualstudiocode",
  "figma",
  "reactquery",
  "notion",
  "slack",
  "tailwindcss",
];

export function IconCloudDemo({ className }: { className?: string }) {
  return (
    <aside
      className={cn(
        "w-full max-w-sm flex relative justify-center items-center rounded-lg",
        className,
      )}
    >
      <IconCloud iconSlugs={slugs} />
    </aside>
  );
}
