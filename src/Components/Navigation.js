import React from 'react';
import Logo from './Logo';
import styled from "styled-components";

const StyledNavigation = styled.div`
    background-color: ${({ theme: { colors } }) => colors.dark};
    width: 100%;
    height: 50px;
    padding: 10px;
    box-sizing: border-box;
`

const Navigation = () => {
    return ( 
        <StyledNavigation>
            <Logo />
        </StyledNavigation>
     );
}
 
export default Navigation;