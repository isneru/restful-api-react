import React from "react";
import { useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import { Repository } from "../Repos";

export const Repo: React.FC = () => {
  const { repo } = useParams();

  const queryClient = useQueryClient();

  async function handleRepoChange() {
    const previousRepos = queryClient.getQueryData<Repository[]>("repos");

    if (previousRepos) {
      const nextRepos = previousRepos.map((repository) => {
        if (repository.name === repo) {
          return { ...repository, description: "Testing" };
        } else {
          return repository;
        }
      });
      queryClient.setQueryData("repos", nextRepos);
    }
  }

  return (
    <>
      <h1>{repo}</h1>
      <button onClick={handleRepoChange}>Handle repo change</button>
    </>
  );
};
