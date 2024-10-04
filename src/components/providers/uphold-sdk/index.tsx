import SDK from "@uphold/uphold-sdk-javascript";
import { createContext, ReactNode, useContext, useRef } from "react";

const SdkContext = createContext(null);
SdkContext.displayName = "SdkContext";

interface SdkProviderProps {
  children: ReactNode;
}

export function SdkProvider({ children }: SdkProviderProps) {
  const sdk = useRef(
    new SDK({
      baseUrl: process.env.REACT_APP_BASE_URL,
      clientId: process.env.REACT_APP_CLIENT_ID,
      clientSecret: process.env.REACT_APP_CLIENT_SECRET,
    }),
  );

  return <SdkContext.Provider value={sdk.current}>{children}</SdkContext.Provider>;
}

export function useSdk() {
  const context = useContext(SdkContext);

  if (!context) {
    throw new Error("useSdk must be used withing the SdkContext Provider");
  }

  return context;
}
