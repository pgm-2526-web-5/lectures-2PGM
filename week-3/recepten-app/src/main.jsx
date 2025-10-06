import "@style/reset.css";
import "@style/index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "@functional/App/App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "@pages/Home/Home.jsx";
import About from "@pages/About/About.jsx";
import RecipeDetail from "@pages/Recipes/RecipeDetail";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="recipes/:slug/:id" element={<RecipeDetail />} />
          <Route path="over" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
