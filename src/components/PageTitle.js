// dependencies
import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h1`
    text-align: center;
    font-family: "Barlow Condensed", sans-serif;
    font-size: 2.4rem;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding: 1rem 0;
`;

const PageTitle = ({ children }) => {
    return <StyledTitle>{children}</StyledTitle>;
};

export default PageTitle;
