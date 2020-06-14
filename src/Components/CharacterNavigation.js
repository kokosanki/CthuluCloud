import React from "react";
import Button from "./buttons/Button";
import Ul from "./containers/Ul";

const CharacterNavigation = ({ setSite }) => {
  const subPages = ["Stats", "Skills", "Equipment", "Personality", "Journal"];

  const chooseSite = (page) => {
    setSite(page);
  };

  return (
    <div>
      <Ul>
        {subPages.map((page) => (
          <Button key={page} onClick={() => chooseSite(page)}>{page}</Button>
        ))}
      </Ul>
    </div>
  );
};

export default CharacterNavigation;
