// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import "./index.css";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home.tsx";
import App from "./App.tsx";
import Shop from "./pages/Shop.tsx";
import StatePanels from "./pages/StatePanels.tsx";
import Books from "./pages/Books.tsx";
import "./sentry.ts";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="state-panels" element={<StatePanels />} />
          <Route path="books" element={<Books />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
  // </StrictMode>,
);
