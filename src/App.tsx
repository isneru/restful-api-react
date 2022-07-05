import React from "react";
import { Route, Routes } from "react-router-dom";
import { Repo, Repos } from "./pages";

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Repos />} />
      <Route path="/repos/*" element={<Repo />} />
    </Routes>
  );
};
