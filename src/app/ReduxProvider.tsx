"use client";
import React, { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import store from "@/store/store";

interface ReduxProviderProps {
  children: ReactNode;
}
export const ReduxProvider: React.FC<ReduxProviderProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
