import React from "react";
import { useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import { Repository } from "../Repos";

export const Repo: React.FC = () => {
  const params = useParams();
  const currentRepository = params["*"] as string;

  const queryClient = useQueryClient();

  async function handleRepoChange() {
    const previousRepos = queryClient.getQueryData<Repository[]>("repos");

    if (previousRepos) {
      const nextRepos = previousRepos.map((repo) => {
        if (repo.full_name === currentRepository) {
          return { ...repo, description: "Testing" };
        } else {
          return repo;
        }
      });
      queryClient.setQueryData("repos", nextRepos);
    }
  }

  return (
    <>
      <h1>{currentRepository}</h1>
      <button onClick={handleRepoChange}>Handle repo change</button>
    </>
  );
};
