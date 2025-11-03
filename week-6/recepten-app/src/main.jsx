import "@style/reset.css";
import "@style/index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "@functional/App/App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "@pages/Home/HomePage.jsx";
import AboutPage from "@pages/About/AboutPage.jsx";
import RecipeDetailPage from "@pages/Recipes/RecipeDetailPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LoginPage from "@pages/Auth/LoginPage";
import AuthProvider from "@functional/Auth/AuthProvider";

const client = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={client}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<HomePage />} />
              <Route path="recipes/:slug/:id" element={<RecipeDetailPage />} />
              <Route path="over" element={<AboutPage />} />
              <Route path="login" element={<LoginPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>
);
