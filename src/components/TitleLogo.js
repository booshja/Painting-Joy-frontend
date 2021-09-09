// dependencies
import React from "react";
import styled from "styled-components";
// components
import { Link } from "react-router-dom";
// assets
import Logo from "../assets/Rainbow-logo_not_final.png";
// breakpoints
import { breakpoints } from "../breakpoints";

const StyledTitleLogo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
`;

const StyledTitle = styled.h1`
    font-family: "Barlow Condensed", sans-serif;
    font-weight: 700;
    font-size: 2rem;
    letter-spacing: 1px;

    ${breakpoints("font-size", "rem", [{ 414: 2.3 }, { 768: 2.6 }])}
`;

const StyledLogo = styled.img`
    width: 200px;
    height: 133px;

    ${breakpoints("width", "px", [{ 414: 250 }, { 768: 300 }])}
    ${breakpoints("height", "px", [{ 414: 166 }, { 768: 200 }])}
`;

const TitleLogo = () => {
    return (
        <StyledTitleLogo>
            <Link to="/">
                <StyledLogo src={Logo} alt="Painting Joy Mural Co. Logo" />
            </Link>
            <StyledTitle>Painting Joy Mural Co.</StyledTitle>
        </StyledTitleLogo>
    );
};

export default TitleLogo;
