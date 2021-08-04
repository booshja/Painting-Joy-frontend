// dependencies
import React from "react";
import styled from "styled-components";
// components
import { Link } from "react-router-dom";

const StyledFooter = styled.footer`
    background-color: #012e34;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    color: #ffffff;
    padding: 1rem;
    height: 150px;
`;

const StyledTitle = styled.p`
    font-family: "Barlow Condensed", sans-serif;
    font-weight: 700;
    font-size: 1.4rem;
    letter-spacing: 1px;
`;

const StyledLink = styled(Link)`
    font-family: "News Cycle", sans-serif;
    font-size: 1rem;
    letter-spacing: 1px;
`;

const StyledCopyright = styled.p`
    font-family: "News Cycle", sans-serif;
    font-size: 0.8rem;
    letter-spacing: 1px;
`;

const Footer = () => {
    return (
        <StyledFooter>
            <StyledTitle>Painting Joy Mural Co.</StyledTitle>
            <StyledLink to="/contact">Contact Me</StyledLink>
            <StyledCopyright>
                Copyright &copy; 2021 - Painting Joy Mural Co.
            </StyledCopyright>
        </StyledFooter>
    );
};

export default Footer;
