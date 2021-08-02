// dependencies
import React from "react";
import styled from "styled-components";
// components
import { Burger, MobileMenu } from "../components/index";

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    padding: 0 1rem;
    border-bottom: 1px solid #207070;
`;

const StyledP = styled.p`
    font-family: "Barlow Condensed", sans-serif;
    font-size: 1.8rem;
    font-weight: 700;
    letter-spacing: 1px;
    color: #207070;
`;

const Header = () => {
    return (
        <StyledHeader>
            <StyledP>Painting Joy Mural Co.</StyledP>
            <Burger />
            <MobileMenu />
        </StyledHeader>
    );
};

export default Header;
