// dependencies
import React from "react";
import styled from "styled-components";
// components
import { NavLink } from "./index";

const StyledNav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;
`;

const Navbar = () => {
    return (
        <StyledNav>
            <NavLink name="Home" />
            <NavLink name="Murals" />
            <NavLink name="More Art" />
            <NavLink name="Contact Me" />
            <NavLink name="Store" />
        </StyledNav>
    );
};

export default Navbar;
