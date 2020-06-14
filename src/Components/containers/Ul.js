import React from "react";
import styled from "styled-components";

const StyledUl = styled.ul`
  padding: 0;
  list-style-type: none;
`;

const Ul = ({ children }) => {
  return <StyledUl>{children}</StyledUl>;
};

export default Ul;
