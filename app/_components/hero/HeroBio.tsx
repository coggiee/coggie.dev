import { bio } from "@/app/_data/bio";
import React from "react";

export default function HeroBio() {
  return (
    <div className="border-b border-b-item-border-light pb-5 dark:border-b-item-border-dark">
      <h1 className=" mb-3 text-2xl font-amaranth">Bio</h1>
      <ul className="font-thin text-sm flex flex-col gap-2">
        {bio.map((item) => (
          <li className="flex gap-2" key={item.title}>
            <span className="text-xs">{item.duration}</span>
            <span className="font-bold text-xs">{item.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
