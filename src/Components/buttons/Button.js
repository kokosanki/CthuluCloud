import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  color: ${({ theme: { colors } }) => colors.dark};
  background-color: ${({ theme: { colors } }) => colors.green};
  border: none;
  font-weight: bold;
  padding: 5px 10px;
  margin: 2.5px;
  border-radius: 5px;
  font-size: 20px;
  height: 32px;
  &:focus {
    outline: none;
  }
`;

const Button = ({ children, className, onClick }) => {
  return (
    <StyledButton className={className} onClick={onClick} type="submit">
      {children}
    </StyledButton>
  );
};

export default Button;
