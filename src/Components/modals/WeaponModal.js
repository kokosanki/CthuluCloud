import React from "react";
import styled from "styled-components";
import Button from "../buttons/Button";
import SubmitInput from "../buttons/SubmitInput";
import Ul from "../containers/Ul";
import Label from "../text/Label";
import Li from "../containers/Li";
import Panel from "../containers/Panel";
import Buttons from "../containers/Buttons";
import MajorContainer from "../containers/MajorContainer";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const weapon = [
  { name: "Name", type: "text", value: "" },
  { name: "Regular", type: "number", value: 0 },
  { name: "Hard", type: "number", value: 0 },
  { name: "Extreme", type: "number", value: 0 },
  { name: "Damage", type: "text", value: 0 },
  { name: "Range", type: "number", value: 0 },
  { name: "Attacks", type: "number", value: 0 },
  { name: "Ammo", type: "number", value: 0 },
  { name: "Malfunction", type: "number", value: 0 },
];

const WeaponModal = ({ setDisplayWeaponModal }) => {
  return (
    <MajorContainer>
      <Panel>
        <h2>New Weapon</h2>
        <Buttons>
          <Button>Remove</Button>
          <Button onClick={() => setDisplayWeaponModal(false)}>X</Button>
        </Buttons>
      </Panel>
      <Form>
        <Ul>
          {weapon.map((item) => (
            <Li key={item.name}>
              <Label>{item.name}</Label>
              <input type={item.type} placeholder={item.value} />
            </Li>
          ))}
        </Ul>
        <SubmitInput type="submit" value="submit" />
      </Form>
    </MajorContainer>
  );
};

export default WeaponModal;
