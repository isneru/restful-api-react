import React, { useEffect, useState } from "react";
import axios from "axios";
import { useFetch } from "./hooks/useFetch";

interface Repository {
  full_name: string;
  description: string;
}

export const App: React.FC = () => {
  const { data: repositories, isFetching } =
    useFetch<Repository[]>("users/isneru/repos");

  return (
    <ul>
      {isFetching && <p>Loading...</p>}
      {repositories?.map((repo) => {
        return (
          <li key={repo.full_name}>
            <strong>{repo.full_name}</strong>
            <span>{repo.description}</span>
          </li>
        );
      })}
    </ul>
  );
};
