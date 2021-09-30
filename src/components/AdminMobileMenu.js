// dependencies
import React, { useContext } from "react";
import styled from "styled-components";
// components
import { NavLink } from "react-router-dom";
// context
import MenuContext from "../context/MenuContext";
// hooks
import { useAuth0 } from "@auth0/auth0-react";
// breakpoints
import { breakpoints } from "../breakpoints";

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

    ${breakpoints("display", "", [{ 1024: "none" }])}
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

const StyledLogoutLink = styled.a`
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
    // set up context
    const { menuOpen, setMenuOpen } = useContext(MenuContext);
    // set up auth0 logout function
    const { logout } = useAuth0();

    const handleLogout = () => {
        setMenuOpen(false);
        logout({
            returnTo: "http://localhost:3000",
        });
    };

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
                    to="/admin/murals"
                    onClick={() => setMenuOpen(false)}
                >
                    Murals
                </StyledLink>
                <StyledLink
                    to="/admin/messages"
                    onClick={() => setMenuOpen(false)}
                >
                    Messages
                </StyledLink>
                <StyledLink
                    to="/admin/items"
                    onClick={() => setMenuOpen(false)}
                >
                    Store Items
                </StyledLink>
                <StyledLink
                    to="/admin/orders"
                    onClick={() => setMenuOpen(false)}
                >
                    Orders
                </StyledLink>
                {/* <StyledLink
                    exact
                    to="/admin/reporting"
                    onClick={() => setMenuOpen(false)}
                >
                    Reporting
                </StyledLink> */}
                {/* <StyledLink
                    exact
                    to="/admin/ig-edit"
                    onClick={() => setMenuOpen(false)}
                >
                    Instagram Feed
                </StyledLink> */}
                <StyledLogoutLink onClick={() => handleLogout()}>
                    Log Out
                </StyledLogoutLink>
            </MenuWrapper>
        </StyledMenu>
    );
};

export default AdminMobileMenu;
