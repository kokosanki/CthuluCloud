import React from "react";
import styled from "styled-components";

const StyledPanel = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Panel = ({ children }) => {
  return <StyledPanel>{children}</StyledPanel>;
};

export default Panel;
