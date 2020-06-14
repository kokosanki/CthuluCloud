import React from "react";
import ItemModal from "../Components/modals/ItemModal";
import Button from "../Components/buttons/Button";
import Ul from "../Components/containers/Ul";
import Li from "../Components/containers/Li";
import Label from "../Components/text/Label";
import WeaponModal from "../Components/modals/WeaponModal";

const CharacterEquipment = () => {
  const [isItemModalVisible, setDisplayItemModal] = React.useState(false);
  const [isWeaponModalVisible, setDisplayWeaponModal] = React.useState(false);

  const money = [
    { name: "Spending Level", type: "number", value: 0 },
    { name: "Cash", type: "number", value: 0 },
    { name: "Assets", type: "number", value: 0 },
  ];
  return (
    <>
      <h2>Equipment</h2>
      <h3>Money</h3>
      <Ul>
      {money.map(item => 
         <Li key={item.name}>
         <Label>{item.name}</Label>
         <input type={item.type} placeholder={item.value} />
       </Li>)}
      </Ul>
      <h3>Weapon</h3>
      <Button onClick={() => setDisplayWeaponModal(true)}>Add Weapon</Button>
      {isWeaponModalVisible ? <WeaponModal setDisplayWeaponModal={setDisplayWeaponModal} /> : null}
      <h3>Armor</h3>
      <h3>Items</h3>
      <Button onClick={() => setDisplayItemModal(true)}>Add Item</Button>
      {isItemModalVisible ? <ItemModal setDisplayItemModal={setDisplayItemModal} /> : null}
    </>
  );
};

export default CharacterEquipment;
