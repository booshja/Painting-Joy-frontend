// dependencies
import React from "react";
import styled from "styled-components";
// components
import { Link } from "react-router-dom";
import TitleLogoFooter from "./TitleLogoFooter";
import NavFooter from "./NavFooter";
// breakpoints
import { breakpoints } from "../breakpoints";

const StyledFooter = styled.footer`
    background-color: #012e34;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    color: #ffffff;
    padding: 1rem;
    min-height: 150px;
    margin-top: 2rem;
`;

const StyledTitle = styled(Link)`
    font-family: "Barlow Condensed", sans-serif;
    font-weight: 700;
    font-size: 1.4rem;
    letter-spacing: 1px;

    ${breakpoints("font-size", "rem", [{ 414: 1.8 }])}
    ${breakpoints("display", "", [{ 1024: "none" }])}
`;

const StyledLink = styled(Link)`
    font-family: "News Cycle", sans-serif;
    font-size: 1.1rem;
    letter-spacing: 1px;

    ${breakpoints("font-size", "rem", [{ 414: 1.4 }])}
    ${breakpoints("display", "", [{ 1024: "none" }])}
`;

const StyledCopyright = styled.p`
    font-family: "News Cycle", sans-serif;
    font-size: 0.6rem;
    letter-spacing: 1px;

    ${breakpoints("font-size", "rem", [{ 414: 0.8 }])}
`;

const StyledTitleLogo = styled(TitleLogoFooter)``;

const StyledNavFooter = styled(NavFooter)``;

const StyledContainer = styled.div`
    margin: 1rem 0 2rem 0;

    ${breakpoints("display", "", [{ 360: "none" }, { 1024: "flex" }])}
    ${breakpoints("justify-content", "", [{ 1024: "space-between" }])}
    ${breakpoints("width", "%", [{ 1024: 60 }])}
`;

const Footer = () => {
    return (
        <StyledFooter>
            <StyledTitle to="/">Painting Joy Mural Co.</StyledTitle>
            <StyledLink to="/contact">Contact Me</StyledLink>
            <StyledContainer>
                <StyledTitleLogo />
                <StyledNavFooter />
            </StyledContainer>
            <StyledCopyright>
                Copyright &copy; 2021 - Painting Joy Mural Co.
            </StyledCopyright>
        </StyledFooter>
    );
};

export default Footer;
