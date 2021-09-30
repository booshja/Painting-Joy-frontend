// dependencies
import React from "react";
import styled from "styled-components";
// breakpoints
import { breakpoints } from "../breakpoints";

const StyledAdminPageTitle = styled.h1`
    font-family: "Barlow Condensed", sans-serif;
    font-size: 2.2rem;
    letter-spacing: 1px;
    padding: 1rem 1rem;
    align-self: flex-start;
`;

const AdminPageTitle = ({ children }) => {
    return <StyledAdminPageTitle>{children}</StyledAdminPageTitle>;
};

export default AdminPageTitle;
