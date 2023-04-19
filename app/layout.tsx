/* eslint-disable react/jsx-no-undef */
// app/layout.tsx
import axiosClient from "@/api-client/axiosClient";
import Providers from "@/app/Providers";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import useSWR, { SWRConfig } from "swr";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>DashBoard</title>
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
