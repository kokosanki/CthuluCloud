import React from "react";
import styled from "styled-components";
import Button from "../buttons/Button";
import SubmitInput from "../buttons/SubmitInput";
import MinorContainer from "../containers/MinorContainer";

const Form = styled.form`
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Input = styled.input`
  border: 2px solid ${({ theme: { colors } }) => colors.green};
  margin-bottom: 10px;
  padding: 5px;
`;

const CharacterModal = ({setDisplayModal, createNewCharacter}) => {
  return (
    <MinorContainer>
      <Button onClick={() => setDisplayModal(false)}>X</Button>
      <Form onSubmit={createNewCharacter} >
        <Input name="name" type="text" placeholder="name" />
        <SubmitInput type="submit" value="submit" />
      </Form>
    </MinorContainer>
  );
};

export default CharacterModal;
