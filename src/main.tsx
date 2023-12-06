import React from "react";
import ReactDOM from "react-dom/client";
import ContextRoot from "./ContextRoot.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./RouteConfig.jsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ContextRoot>
      <RouterProvider router={router} />
    </ContextRoot>
  </React.StrictMode>
);
