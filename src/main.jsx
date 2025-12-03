import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import router from "./router/router.jsx";
import AuthProvider from "./context/AuthContext/AuthProvider.jsx";
import { RouterProvider } from "react-router";
import "./App.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
