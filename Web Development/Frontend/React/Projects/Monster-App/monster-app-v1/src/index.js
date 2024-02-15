import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "tachyons";
import App from "./Containers/App.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <h1>Hello World!</h1> */}
    <App />
  </React.StrictMode>
);
