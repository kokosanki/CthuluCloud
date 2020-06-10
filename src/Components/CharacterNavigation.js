import React from "react";

const CharacterNavigation = ({ setSite }) => {
  const subPages = ["Stats", "Skills", "Equipment", "Personality", "Journal"];

  const chooseSite = (page) => {
    setSite(page);
  };

  return (
    <div>
      <ul>
        {subPages.map((page) => (
          <button onClick={() => chooseSite(page)}>{page}</button>
        ))}
      </ul>
    </div>
  );
};

export default CharacterNavigation;
