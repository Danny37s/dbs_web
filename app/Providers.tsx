"use client";
import axiosClient from "@/api-client/axiosClient";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import React, { FC, ReactNode } from "react";
import { SWRConfig } from "swr";
import { SessionProvider } from "next-auth/react";
import Navbar from "@/components/ui/Navbar";
import { QueryClient, QueryClientProvider } from "react-query";

interface ProvidersProps {
  children: ReactNode;
}
const queryClient = new QueryClient();
const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <CacheProvider>
        <ChakraProvider>
          <SessionProvider
          //  refetchInterval={5 * 60}
          >
            <Navbar></Navbar>
            {children}
          </SessionProvider>
        </ChakraProvider>
      </CacheProvider>
    </QueryClientProvider>
  );
};
export default Providers;
