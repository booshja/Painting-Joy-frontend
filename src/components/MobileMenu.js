// dependencies
import React, { useContext } from "react";
import styled from "styled-components";
// components
import { NavLink } from "react-router-dom";
// assets
import Clouds from "../assets/wall_image_complete.jpg";
// context
import MenuContext from "../context/MenuContext";

const StyledMenu = styled.nav`
    background-image: url(${Clouds});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 100;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    text-align: center;
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.3s ease-in-out;
    transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-100%)")};
`;

const StyledLink = styled(NavLink)`
    font-family: "News Cycle", sans-serif;
    font-weight: 400;
    letter-spacing: 2px;
    font-size: 2rem;
    text-transform: uppercase;
    padding: 1rem 0;
    color: #ffffff;
    transition: color 0.3s linear;

    &.active {
        font-weight: 700;
    }
`;

const MenuWrapper = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
`;

const Menu = () => {
    const { menuOpen, setMenuOpen } = useContext(MenuContext);

    return (
        <StyledMenu open={menuOpen}>
            <MenuWrapper>
                <StyledLink exact to="/" onClick={() => setMenuOpen(false)}>
                    Home
                </StyledLink>
                <StyledLink to="/murals" onClick={() => setMenuOpen(false)}>
                    Murals
                </StyledLink>
                <StyledLink to="/more-art" onClick={() => setMenuOpen(false)}>
                    More Art
                </StyledLink>
                <StyledLink to="/contact" onClick={() => setMenuOpen(false)}>
                    Contact Me
                </StyledLink>
                <StyledLink to="/store" onClick={() => setMenuOpen(false)}>
                    Store
                </StyledLink>
            </MenuWrapper>
        </StyledMenu>
    );
};

export default Menu;
