// dependencies
import React from "react";
import styled from "styled-components";
// components
import { Link } from "react-router-dom";
import Logo from "../assets/Rainbow-logo_not_final.png";

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
    letter-spacing: 2%;
`;

const StyledLogo = styled.img`
    width: 200px;
    height: 133px;
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
