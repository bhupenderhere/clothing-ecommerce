import "./index.css";
import { Routes } from "./routes";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ShopContextProvider from "./context/ShopContext";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ShopContextProvider>
      <Routes />
    </ShopContextProvider>
  </BrowserRouter>
);
