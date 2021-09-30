// dependencies
import React from "react";
import styled from "styled-components";
// components
import { NavLink } from "react-router-dom";
// breakpoints
import { breakpoints } from "../breakpoints";

const StyledNav = styled.nav`
    display: none;
    background-color: #ffffff;
    min-height: calc(100vh - 60px);
    height: fill;
    width: 300px;
    align-self: stretch;
    border-right: 2px solid #207070;

    ${breakpoints("display", "", [{ 1024: "flex" }])}
    ${breakpoints("flex-direction", "", [{ 1024: "column" }])}
`;

const StyledLink = styled(NavLink)`
    font-family: "News Cycle", sans-serif;
    font-size: 1.4rem;
    letter-spacing: 1px;
    padding: 1rem 1rem;
    border-bottom: 1px solid #207070;

    &.active {
        font-weight: 700;
        color: #ffffff;
        background-color: #a1c9c9;
        border-left: 4px solid #207070;
    }
`;

const AdminNav = () => {
    return (
        <StyledNav>
            <StyledLink exact to="/admin/dashboard">
                <i className="fas fa-home"></i> Dashboard
            </StyledLink>
            <StyledLink to="/admin/murals">
                <i className="fas fa-paint-roller"></i> Murals
            </StyledLink>
            <StyledLink to="/admin/messages">
                <i className="far fa-envelope"></i> Messages
            </StyledLink>
            <StyledLink to="/admin/items">
                <i className="fas fa-tag"></i> Store Items
            </StyledLink>
            <StyledLink to="/admin/orders">
                <i className="fas fa-truck"></i> Orders
            </StyledLink>
        </StyledNav>
    );
};

export default AdminNav;
