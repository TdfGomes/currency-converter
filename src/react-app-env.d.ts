/// <reference types="react-scripts" />
declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production" | "test";
    PUBLIC_URL: string;
    REACT_APP_CLIENT_ID: string;
    REACT_APP_CLIENT_ID: string;
    REACT_APP_BASE_URL: string;
    REACT_APP_USERNAME: string;
    REACT_APP_PASSWORD: string;
  }
}
