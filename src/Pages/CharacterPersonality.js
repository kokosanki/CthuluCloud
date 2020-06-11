import React from "react";

const CharacterPersonality = () => {
  const backstory = [
    { name: "Personal Description", description: "" },
    { name: "Ideology/Beliefs", description: "" },
    { name: "Significant People", description: "" },
    { name: "Meaningful Locations", description: "" },
    { name: "Treasured Possessions", description: "" },
    { name: "Traits", description: "" },
    { name: "Injuries & Scars", description: "" },
    { name: "Phobias & Manias", description: "" },
    { name: "Arcane Tomes, Spells & Artifacs", description: "" },
    { name: "Encounters with Strange Entities", description: "" },
  ];

  const party = [];
  return (
    <>
      <h2>Personality</h2>
      <ul>
        {backstory.map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
    </>
  );
};

export default CharacterPersonality;
