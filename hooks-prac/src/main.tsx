// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Header from "./components/Header.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import UseStateExample from "./components/UseStateExample.tsx";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/use-state" element={<UseStateExample />} />
    </Routes>
  </BrowserRouter>
  // </StrictMode>
);
