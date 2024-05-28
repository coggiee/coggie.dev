"use client";

import React, { useState } from "react";
import AuthProvider from "../provider/AuthProvider";
import { ThemeProvider } from "../provider/ThemeProvider";
import FramerProvider from "../provider/FramerProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

type Props = {
  children: React.ReactNode;
};

export default function Provider({ children }: Props) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
          },
        },
      }),
  );
  
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}
