// icon:globe-2 | Lucide https://lucide.dev/ | Lucide
import * as React from "react";

function IconGlobe(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M21.54 15H17a2 2 0 00-2 2v4.54M7 3.34V5a3 3 0 003 3v0a2 2 0 012 2v0c0 1.1.9 2 2 2v0a2 2 0 002-2v0c0-1.1.9-2 2-2h3.17M11 21.95V18a2 2 0 00-2-2v0a2 2 0 01-2-2v-1a2 2 0 00-2-2H2.05" />
      <path d="M22 12 A10 10 0 0 1 12 22 A10 10 0 0 1 2 12 A10 10 0 0 1 22 12 z" />
    </svg>
  );
}

export default IconGlobe;
