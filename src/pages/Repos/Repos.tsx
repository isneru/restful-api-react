import React, { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";

export interface Repository {
  full_name: string;
  name: string;
  description: string;
}

export const Repos: React.FC = () => {
  const { user } = useParams();
  const { data: repositories, isFetching } = useQuery<Repository[]>(
    "repos",
    async () => {
      const reponse = await axios.get(
        `https://api.github.com/users/${user}/repos`
      );
      return reponse.data;
    },
    {
      staleTime: 1000 * 60, //1 minute
    }
  );

  return (
    <ul>
      {isFetching && <p>Loading...</p>}
      {repositories?.map((repo) => {
        return (
          <li key={repo.full_name}>
            <Link to={`${repo.name}`}>{repo.full_name}</Link>
            <span>{repo.description}</span>
          </li>
        );
      })}
    </ul>
  );
};
