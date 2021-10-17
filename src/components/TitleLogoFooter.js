// dependencies
import React from "react";
import styled from "styled-components";
// components
import { Link } from "react-router-dom";
// assets
import Logo from "../assets/painting-joy-logo-white.jpg";

const StyledTitleLogo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledLogo = styled.img`
    width: 150px;
    height: 150px;
`;

const TitleLogoFooter = () => {
    return (
        <StyledTitleLogo>
            <Link to="/">
                <StyledLogo src={Logo} alt="Painting Joy Mural Co. Logo" />
            </Link>
        </StyledTitleLogo>
    );
};

export default TitleLogoFooter;
