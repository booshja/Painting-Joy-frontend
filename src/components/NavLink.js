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

    &:hover:not(.active) {
        transform: translateY(-1px);
    }

    &.active {
        font-weight: 700;
        color: #207070;
    }
`;

const NavLink = ({ to, name }) => {
    return (
        <StyledLink exact={to === "/" ? true : false} to={`${to}`}>
            {name}
        </StyledLink>
    );
};

export default NavLink;
