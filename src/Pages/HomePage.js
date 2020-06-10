import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CharacterModal from "../Components/CharacterModal";

const Button = styled.button`
  background-color: ${({ theme: { colors } }) => colors.green};
  width: 200px;
  padding: 5px 0;
  border: 2px solid ${({ theme: { colors } }) => colors.dark};
  border-radius: 5px;
  a {
    font-size: 20px;
    color: ${({ theme: { colors } }) => colors.dark};
  }
`;

const P = styled.p`
  font-size: 22px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: calc(100vh - 50px);
`;
const HomePage = ({setDisplayModal, isModalVisible, addCharacter, characterList}) => {
  // const [isModalVisible, setDisplayModal] = React.useState(false);

  // const [characterList, setNewCharacter] = React.useState([]);

  // const addCharacter = (e) => {
  //   e.preventDefault();
  //   if (e.target.name.value.length <= 0) {
  //     alert("Please, type a name.");
  //   } else {
  //     const id = e.target.name.value;
  //     setNewCharacter([...characterList, { id }]);
  //     setDisplayModal(false);
  //   }
  // };

  return (
    <div>
      <Container>
        <P>What would you like to do?</P>
        <Button onClick={() => setDisplayModal(true)}>
          Create a character
        </Button>

        {isModalVisible ? (
          <CharacterModal
            setDisplayModal={setDisplayModal}
            createNewCharacter={addCharacter}
          />
        ) : null}

        <ul>
          {characterList.map(({ name, id }) => (
            <li key={id}>
              <Link to={`/characters/${id}`}>{name}</Link>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
};

export default HomePage;
