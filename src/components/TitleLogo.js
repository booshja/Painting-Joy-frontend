// dependencies
import React from "react";
import styled from "styled-components";
// components
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
// assets
import Logo from "../assets/painting-joy-logo-transparent.png";
// breakpoints
import { breakpoints } from "../breakpoints";

const StyledTitleLogo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;

    ${breakpoints("margin-top", "", [{ 1024: 0 }])}
`;

const StyledLogo = styled.img`
    width: 250px;
    height: 250px;

    ${breakpoints("width", "px", [{ 414: 300 }, { 768: 350 }])}
    ${breakpoints("height", "px", [{ 414: 300 }, { 768: 350 }])}
`;

const TitleLogo = () => {
    return (
        <StyledTitleLogo>
            <Link to="/">
                <StyledLogo src={Logo} alt="Painting Joy Mural Co. Logo" />
            </Link>
            <Navbar />
        </StyledTitleLogo>
    );
};

export default TitleLogo;
