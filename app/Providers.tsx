"use client";
import axiosClient from "@/api-client/axiosClient";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import React, { FC, ReactNode } from "react";
import { SWRConfig } from "swr";

interface ProvidersProps {
  children: ReactNode;
}
const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <SWRConfig
      value={{
        fetcher: (url) => axiosClient.get(url),
        shouldRetryOnError: false,
      }}
    >
      <CacheProvider>
        <ChakraProvider>{children}</ChakraProvider>
      </CacheProvider>
    </SWRConfig>
  );
};

export default Providers;
