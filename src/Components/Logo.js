import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const H1 = styled.h1`
    text-decoration: none;
    margin: 0;
    color: ${({ theme: { colors } }) => colors.white};
    font-family: 'Cormorant', serif;
`

const Logo = () => {
  return (
    <NavLink to={"/"} exact>
      <H1>CthulhuCloud</H1>
    </NavLink>
  );
};

export default Logo;
