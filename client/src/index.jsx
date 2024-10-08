import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./Root";
import reportWebVitals from "./reportWebVitals";
import { register } from "serviceWorkerResgistration";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
);

//register service worker
register();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
