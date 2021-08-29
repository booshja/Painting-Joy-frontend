// dependencies
import React from "react";
import styled from "styled-components";
// components
import { AdminBurger, AdminMobileMenu } from "../components";
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
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

const AdminHeader = ({ login }) => {
    return (
        <StyledHeader>
            <StyledLink to="/admin/dashboard">
                Painting Joy Mural Co.
            </StyledLink>
            {!login && <AdminBurger openColor="#207070" />}
            {!login && <AdminMobileMenu />}
        </StyledHeader>
    );
};

export default AdminHeader;
