import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100vw;
  height: calc(100vh - 50px);
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  align-items: flex-end;
  transform: translateY(-44px);
  box-sizing: border-box;
  position: absolute;
  top: 94px;
`;

const MajorContainer = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default MajorContainer;
