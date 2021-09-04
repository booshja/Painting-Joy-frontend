// dependencies
import React, { useContext } from "react";
import styled from "styled-components";
// components
import { NavLink } from "react-router-dom";
// context
import MenuContext from "../context/MenuContext";

const StyledMenu = styled.nav`
    z-index: 100;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
    color: #207070;
    transition: color 0.3s linear;

    &.active {
        font-weight: 700;
    }
`;

const MenuWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
`;

const AdminMobileMenu = () => {
    const { menuOpen, setMenuOpen } = useContext(MenuContext);

    return (
        <StyledMenu open={menuOpen}>
            <MenuWrapper>
                <StyledLink
                    exact
                    to="/admin/dashboard"
                    onClick={() => setMenuOpen(false)}
                >
                    Dashboard
                </StyledLink>
                <StyledLink
                    exact
                    to="/admin/murals"
                    onClick={() => setMenuOpen(false)}
                >
                    Murals
                </StyledLink>
                <StyledLink
                    exact
                    to="/admin/messages"
                    onClick={() => setMenuOpen(false)}
                >
                    Messages
                </StyledLink>
                <StyledLink
                    exact
                    to="/admin/items"
                    onClick={() => setMenuOpen(false)}
                >
                    Store Items
                </StyledLink>
                <StyledLink
                    exact
                    to="/admin/orders"
                    onClick={() => setMenuOpen(false)}
                >
                    Orders
                </StyledLink>
                <StyledLink
                    exact
                    to="/admin/reporting"
                    onClick={() => setMenuOpen(false)}
                >
                    Reporting
                </StyledLink>
                {/* <StyledLink
                    exact
                    to="/admin/ig-edit"
                    onClick={() => setMenuOpen(false)}
                >
                    Instagram Feed
                </StyledLink> */}
            </MenuWrapper>
        </StyledMenu>
    );
};

export default AdminMobileMenu;
