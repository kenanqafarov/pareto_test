import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Header from "./components/layout/Header";
import AppRoutes from "./routes/AppRoutues";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <AppRoutes />
  </StrictMode>
);
