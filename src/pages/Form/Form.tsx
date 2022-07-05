import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Form: React.FC = () => {
  const [user, setUser] = useState<string>("");
  return (
    <>
      <input
        type="text"
        placeholder="Github User"
        onChange={(e) => {
          setUser(e.currentTarget.value);
        }}
      />
      <a href={`${user}/repos`}>Check</a>
    </>
  );
};
