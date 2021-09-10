// dependencies
import React from "react";
import styled from "styled-components";
// components
import { Link } from "react-router-dom";

const StyledNav = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 125px;
`;

const StyledLink = styled(Link)`
    font-family: "News Cycle", sans-serif;
    font-size: 1.2rem;
    letter-spacing: 1px;
    color: #ffffff;
`;

const NavFooter = () => {
    return (
        <StyledNav>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/murals">Murals</StyledLink>
            {/* <StyledLink to="/more-art">More Art</StyledLink> */}
            <StyledLink to="/contact">Contact</StyledLink>
            <StyledLink to="/store">Store</StyledLink>
        </StyledNav>
    );
};

export default NavFooter;
