
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
//import "./index.css";
import ContextRoot from "./ContextRoot.tsx";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ContextRoot>
      <App />
    </ContextRoot>
  </React.StrictMode>
);
