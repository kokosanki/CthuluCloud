import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  max-width: 70vw;
  padding: 20px;
  border: 3px solid ${({ theme: { colors } }) => colors.green};
  background-color: #fff;
  border-radius: 5px;
  height: auto;
  align-items: flex-end;
  transform: translateY(-44px);
`;

const MinorContainer = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default MinorContainer;
