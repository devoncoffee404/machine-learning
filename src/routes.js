import React from "react";
import { Routes, Route } from "react-router-dom";
// import Body from "./components/Body/Body";
import BlogPage from "./components/BlogPage/BlogPage";
import LinearRegression from "./components/LinearRegression/LinearRegression";
import LogisticRegression from "./components/LogisticRegression/LogisticRegression";

const RoutesConfig = () => (
  <Routes>
    <Route path="/" element={<BlogPage />} />
    <Route path="/linear-regression" element={<LinearRegression />} />
    <Route path="/logistic-regression" element={<LogisticRegression />} />
  </Routes>
);

export default RoutesConfig;
