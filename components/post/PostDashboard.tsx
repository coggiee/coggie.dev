"use client";

import MotionVerticalProvider from "@/provider/MotionVerticalProvider";
import React from "react";
import Introduction from "../global/Introduction";
import dynamic from "next/dynamic";
import { Separator } from "@/components/ui/separator";
import SearchBar from "./SearchBar";
import TagSelector from "./TagSelector";

const PostView = dynamic(() => import("./PostView"));

export default function PostDashboard() {
  return (
    <MotionVerticalProvider
      duration={0.7}
      fromY={300}
      toY={0}
      className={"flex flex-col gap-5 grow"}
    >
      <Introduction />
      <Separator />
      <SearchBar />
      <TagSelector />
      <Separator />
      <PostView />
    </MotionVerticalProvider>
  );
}
