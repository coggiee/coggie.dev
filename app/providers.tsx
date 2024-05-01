"use client";

import React from "react";
import AuthProvider from "../provider/AuthProvider";
import { ThemeProvider } from "../provider/ThemeProvider";
import FramerProvider from "../provider/FramerProvider";

type Props = {
  children: React.ReactNode;
};

export default function Providers({ children }: Props) {
  return (
    <AuthProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <FramerProvider>{children}</FramerProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}
