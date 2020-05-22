import React, {useState}  from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Modal from "../Components/Modal";

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
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: calc(100vh - 50px);
`
const HomePage = () => {

  const [isModalVisible, setDisplayModal] = React.useState(false)  

  return (
    <div>
      <Container>
        <P>What would you like to do?</P>
        <Button onClick={() => setDisplayModal(true)}>Create a character</Button>

        {isModalVisible ? <Modal setDisplayModal={setDisplayModal} /> : null}
      </Container>
    </div>
  );
};

export default HomePage;
