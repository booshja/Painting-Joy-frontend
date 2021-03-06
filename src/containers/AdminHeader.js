// dependencies
import React from "react";
import styled from "styled-components";
// components
import { AdminBurger, AdminMobileMenu } from "../components";
import { Link } from "react-router-dom";
// hooks
import { useAuth0 } from "@auth0/auth0-react";
// breakpoints
import { breakpoints } from "../breakpoints";

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    width: 100%;
    padding: 0 1rem;
    border-bottom: 1px solid #207070;
    background-color: #ffffff;
`;

const StyledLink = styled(Link)`
    font-family: "Barlow Condensed", sans-serif;
    font-size: 1.8rem;
    font-weight: 700;
    letter-spacing: 1px;
    color: #000000;
`;

const StyledLogout = styled.a`
    display: none;
    font-family: "News Cycle", sans-serif;
    font-size: 1.4rem;
    letter-spacing: 1px;
    color: #207070;
    cursor: pointer;

    &:hover {
        font-weight: 700;
    }

    ${breakpoints("display", "", [{ 1024: "inline" }])}
`;

const AdminHeader = ({ login }) => {
    // set up auth0 hooks
    const { isAuthenticated, logout } = useAuth0();

    const handleLogout = () => {
        // on click, call auth0 logout api, redirect to homepage
        logout({
            returnTo: "https://paintingjoy.art",
        });
    };

    return (
        <StyledHeader>
            <StyledLink to="/admin/dashboard">
                Painting Joy Mural Co.
            </StyledLink>
            {!login && <AdminBurger openColor="#207070" />}
            {!login && <AdminMobileMenu />}
            {isAuthenticated && (
                <StyledLogout onClick={handleLogout}>Log Out</StyledLogout>
            )}
        </StyledHeader>
    );
};

export default AdminHeader;
