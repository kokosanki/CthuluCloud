import React from "react";
import styled from "styled-components";

const StyledLi = styled.li`
  margin: 5px 0;
`;

const Li = ({ children }) => {
  return <StyledLi>{children}</StyledLi>;
};

export default Li;
