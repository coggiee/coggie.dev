"use client";

import React from "react";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { motion } from "framer-motion";
import IconHome from "@/app/_icons/IconHome";
import IconCamera from "@/app/_icons/IconCamera";

export default function DashboardSection() {
  return (
    <div className="w-full h-full flex flex-col items-center gap-5">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.8,
            delay: 0.6,
            type: "spring",
            stiffness: 200,
          },
        }}
        className="w-full h-20 flex justify-center gap-5 px-5 shadow-lg backdrop-blur-md items-center"
      >
        <Button
          as={Link}
          isIconOnly
          href="/blog"
          variant="ghost"
          radius="lg"
          className="w-10"
          color="success"
        >
          <IconHome className="text-xl" />
        </Button>
        <Button
          isIconOnly
          as={Link}
          href="/blog"
          variant="ghost"
          radius="lg"
          isDisabled
          className="w-10"
          color="danger"
        >
          <IconCamera className="text-xl" />
        </Button>
      </motion.div>
    </div>
  );
}
