import React from "react";
import { Route, Routes } from "react-router-dom";
import { Form, Repo, Repos } from "./pages";

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/:user/repos" element={<Repos />} />
      <Route path="/:user/repos/:repo" element={<Repo />} />
    </Routes>
  );
};
