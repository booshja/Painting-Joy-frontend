// dependencies
import React, { useContext } from "react";
import styled from "styled-components";
import { breakpoints } from "../breakpoints";
// context
import MenuContext from "../context/MenuContext";

const StyledBurger = styled.button`
    /* position: absolute;
    top: 1rem;
    right: 1rem; */
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 101;

    &:focus {
        outline: none;
    }

    div {
        width: 2rem;
        height: 0.3rem;
        background-color: ${({ open }) => (open ? "#ffffff" : "#207070")};
        border-radius: 10px;
        transition: all 0.3s linear;
        position: relative;
        transform-origin: 1px;

        :first-child {
            transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
        }

        :nth-child(2) {
            opacity: ${({ open }) => (open ? "0" : "1")};
            transform: ${({ open }) =>
                open ? "translateX(-20px)" : "translateX(0)"};
        }

        :nth-child(3) {
            transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
        }
    }

    /* @media (min-width: ${breakpoints.desktopSm}px) {
        display: none;
    } */
`;

const Burger = () => {
    // set up context
    const { menuOpen, setMenuOpen } = useContext(MenuContext);
    return (
        <StyledBurger open={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            <div />
            <div />
            <div />
        </StyledBurger>
    );
};

export default Burger;
