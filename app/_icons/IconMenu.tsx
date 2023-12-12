// icon:menu | Lucide https://lucide.dev/ | Lucide
import * as React from "react";

function IconMenu(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M4 12h16M4 6h16M4 18h16" />
    </svg>
  );
}

export default IconMenu;
