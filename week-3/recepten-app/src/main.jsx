import "@style/reset.css";
import "@style/index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "@functional/App/App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "@pages/Home/HomePage.jsx";
import AboutPage from "@pages/About/AboutPage.jsx";
import RecipeDetailPage from "@pages/Recipes/RecipeDetailPage";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="recipes/:slug/:id" element={<RecipeDetailPage />} />
          <Route path="over" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
