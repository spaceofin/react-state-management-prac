// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./components/Header.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import UseStateExample from "./pages/use-state";
import Home from "./pages/home";
import UseReducerExample from "./pages/use-reducer/index.tsx";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/use-state" element={<UseStateExample />} />
      <Route path="/use-reducer" element={<UseReducerExample />} />
    </Routes>
  </BrowserRouter>
  // </StrictMode>
);
