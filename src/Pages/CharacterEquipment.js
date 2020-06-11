import React from "react";

const CharacterEquipment = () => {
  const money = [
    { name: "Spending Level", type: "number", value: 0 },
    { name: "Cash", type: "number", value: 0 },
    { name: "Assets", type: "number", value: 0 },
  ];
  return (
    <>
      <h2>Equipment</h2>
      <h3>Money</h3>
      <ul>
      {money.map(item => 
         <li key={item.name}>
         <label>{item.name}</label>
         <input type={item.type} placeholder={item.value} />
       </li>)}
      </ul>
      <h3>Weapon</h3>
      <h3>Armor</h3>
      <h3>Items</h3>
    </>
  );
};

export default CharacterEquipment;
