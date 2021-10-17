// dependencies
import React, { useContext } from "react";
import styled from "styled-components";
// components
import NavLink from "./NavLink";
// context
import CartContext from "../context/CartContext";
// breakpoints
import { breakpoints } from "../breakpoints";

const StyledNav = styled.nav`
    display: none;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 1rem;
    width: 55%;

    ${breakpoints("display", "", [{ 1024: "flex" }])}
`;

const Navbar = () => {
    // set up context
    const { cart } = useContext(CartContext);

    return (
        <StyledNav>
            <NavLink to="/" name="Home" />
            <NavLink to="/murals" name="Murals" />
            {/* <NavLink to="/more-art" name="More Art" /> */}
            <NavLink to="/contact" name="Contact" />
            <NavLink to="/store" name="Store" />
            {/* <NavLink to="/cart" name={`Cart (${cart.length})`} /> */}
        </StyledNav>
    );
};

export default Navbar;
