// dependencies
import React from "react";
import styled from "styled-components";
// breakpoints
import { breakpoints } from "../breakpoints";

const StyledTitle = styled.h1`
    text-align: center;
    font-family: "Barlow Condensed", sans-serif;
    font-size: 2.4rem;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding: 1rem 0;

    ${breakpoints("font-size", "rem", [{ 414: 2.8 }])}
`;

const PageTitle = ({ children }) => {
    return <StyledTitle>{children}</StyledTitle>;
};

export default PageTitle;
