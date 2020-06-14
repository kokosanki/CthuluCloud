import React from 'react';
import styled from "styled-components";
import Button from '../buttons/Button';
import SubmitInput from '../buttons/SubmitInput';
import Panel from '../containers/Panel';
import Buttons from '../containers/Buttons';
import MajorContainer from '../containers/MajorContainer';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Input = styled.input`
  border: 2px solid ${({ theme: { colors } }) => colors.green};
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 5px;
`;

const Textarea = styled.textarea`
  border: 2px solid ${({ theme: { colors } }) => colors.green};
  border-radius: 5px;
  height: 32px;
  margin-bottom: 10px;
  padding: 5px;
`

const ItemModal = ({setDisplayItemModal}) => {
    return ( 
        <MajorContainer>
           <Panel>
            <h2>New item</h2>
            <Buttons>
            <Button>Remove</Button>
           <Button onClick={() => setDisplayItemModal(false)}>X</Button>
           </Buttons>
           </Panel>
           
      <Form >
        <Input name="name" type="text" placeholder="name" />
        <Input name="quantity" type="number" placeholder="0" />
        <Textarea name="description" placeholder="description" />
        <SubmitInput />
      </Form>
        </MajorContainer>
     );
}
 
export default ItemModal;