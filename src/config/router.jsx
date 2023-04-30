import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeView from "../pages/home";
import DetailView from "../pages/detail";
import CatalogView from "../pages/catalog";

const Router = () => {
  return (
    <Routes>
      <Route path="/:category/search/:keyword" element={<CatalogView />} />
      <Route path="/:category/:id" element={<DetailView />} />
      <Route path="/:category" element={<CatalogView />} />
      <Route path="/" element={<HomeView />} />
    </Routes>
  );
}

export default Router;