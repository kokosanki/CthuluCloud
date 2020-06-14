import React from "react";
import styled from "styled-components";

const StyledLabel = styled.label`
  margin-right: 5px;
`;

const Label = ({ children }) => {
  return <StyledLabel>{children}</StyledLabel>;
};

export default Label;
