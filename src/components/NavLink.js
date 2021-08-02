// dependencies
import React from "react";
import styled from "styled-components";
// components
import { NavLink as ReactNavLink } from "react-router-dom";

const StyledLink = styled(ReactNavLink)`
    font-family: "News Cycle", sans-serif;
    font-weight: 400;
    font-size: 1.4rem;
    letter-spacing: 2px;

    &.active {
        font-weight: 700;
    }
`;

const NavLink = ({ name }) => {
    return <StyledLink to={`/${name}`}>{name}</StyledLink>;
};

export default NavLink;
