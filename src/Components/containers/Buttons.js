import React from "react";
import styled from "styled-components";

const StyledButtons = styled.div`
  height: 50px;
  width: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Buttons = ({ children }) => {
  return <StyledButtons>{children}</StyledButtons>;
};

export default Buttons;
