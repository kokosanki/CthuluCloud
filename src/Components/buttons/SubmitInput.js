import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  color: ${({ theme: { colors } }) => colors.dark};
  background-color: ${({ theme: { colors } }) => colors.green};
  border: none;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 20px;
  height: 32px;
`;

const SubmitInput = () => {
  return <StyledInput type="submit" value="submit" />;
};

export default SubmitInput;
