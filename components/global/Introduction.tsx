import React from "react";

export default function Introduction() {
  return (
    <div className="flex justify-center font-aritaburi">
      <aside className="text-7xl dark:text-white px-8 pr-5">;</aside>
      <header className="w-full rounded-lg p-5 pl-4 mb-5 leading-loose dark:text-white">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-semibold mb-3">
            Dev Blog
          </h1>
        </div>
        <p className="dark:text-[rgb(141, 140, 142)]">
          기록을 가까이
        </p>
      </header>
    </div>
  );
}