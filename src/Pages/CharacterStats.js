import React from "react";

const CharacterStats = () => {
  const conditions = [
    { condition: "Health", type: "number", value: 0 },
    { condition: "Sanity", type: "number", value: 0 },
    { condition: "Magic Points", type: "number", value: 0 },
    { condition: "Major Wound", type: "checkbox", value: 0 },
    { condition: "Temporary sanity", type: "checkbox", value: 0 },
    { condition: "Indefinite sanity", type: "checkbox", value: 0 },
  ];
  return (
    <div>
      <h2>Stats</h2>
      <input type="text" placeholder="Occupation" />
      <ul>
        {conditions.map((con) => (
          <li key={con.condition}>
            <label>{con.condition}</label>
            <input type={con.type} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterStats;
