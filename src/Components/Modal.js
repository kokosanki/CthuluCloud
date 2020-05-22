import React from "react";
import styled from "styled-components";
const Container = styled.div`
  max-width: 70vw;
  padding: 20px;
  border: 3px solid ${({ theme: { colors } }) => colors.green};
  background-color: #fff;
  border-radius: 5px;
  height: 100px;
  align-items: flex-end;
  transform: translateY(-44px);
`;

const Form = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Input = styled.input`
  border: 2px solid ${({ theme: { colors } }) => colors.green};
  margin-bottom: 10px;
  padding: 5px;
`;

const Button = styled.button`
  color: ${({ theme: { colors } }) => colors.dark};
  background-color: ${({ theme: { colors } }) => colors.green};
  border: none;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 5px;
`;

const Modal = ({setDisplayModal}) => {
  return (
    <Container>
      <Button  onClick={() => setDisplayModal(false)}>X</Button>
      <Form>
        <Input name="name" type="text" placeholder="name" />
        <Button>Sign up</Button>
      </Form>
    </Container>
  );
};

export default Modal;
