import React from "react";

const CharacterCharacteristics = () => {
  const characteristics = [
    { name: "Health", type: "number", value: 0 },
    { name: "Luck", type: "number", value: 0 },
    { name: "Sanity", type: "number", value: 0 },
    { name: "Magic Points", type: "number", value: 0 },
    { name: "Major Wound", type: "checkbox", value: 0 },
    { name: "Temporary sanity", type: "checkbox", value: 0 },
    { name: "Indefinite sanity", type: "checkbox", value: 0 },
  ];

  const combat = [
    { name: "Damage Bonus", type: "number", value: 0 },
    { name: "Build", type: "number", value: 0 },
    { name: "Dodge", type: "number", value: 0 },
  ]
  return (
    <div>
      <h2>Characteristics</h2>
      <input type="text" placeholder="Occupation" />
      <ul>
        {characteristics.map((con) => (
          <li key={con.name}>
            <label>{con.name}</label>
            <input type={con.type} />
          </li>
        ))}
      </ul>
      <h3>Combat</h3>
      <ul>
        {combat.map(item => 
          <li key={item.name}>
            <label>{item.name}</label>
            <input type={item.type} placeholder={item.value} />
          </li>)}
      </ul>
    </div>
  );
};

export default CharacterCharacteristics;
