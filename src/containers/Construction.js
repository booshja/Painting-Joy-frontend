// dependencies
import React from "react";
import styled from "styled-components";
// breakpoints
import { breakpoints } from "../breakpoints";
// assets
import Logo from "../assets/painting-joy-logo-white.jpg";

const StyledConstruction = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    min-height: 97vh;
`;

const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledImg = styled.img`
    width: 90%;

    ${breakpoints("width", "px", [{ 1024: 400 }])}
`;

const StyledHeadline = styled.h1`
    font-family: "Barlow Condensed";
    font-size: 3rem;
    letter-spacing: 1px;
`;

const StyledText = styled.p`
    font-family: "News Cycle", sans-serif;
    font-size: 1.4rem;
    text-align: center;
    letter-spacing: 1px;

    ${breakpoints("font-size", "rem", [{ 414: 1.6 }])}
`;

const StyledLink = styled.a`
    font-size: 3rem;
    color: #000000;

    ${breakpoints("font-size", "rem", [{ 414: 4 }])}

    &:hover {
        color: #207070;
        transform: translateY(-1px);
    }
`;

const StyledCopyright = styled.p`
    font-size: 1rem;
    justify-self: flex-end;
    text-align: center;
`;

const Construction = () => {
    return (
        <StyledConstruction>
            <StyledContent>
                <StyledHeadline>Coming Soon!</StyledHeadline>
                <StyledImg src={Logo} />
                <StyledText>
                    In the meantime, check out my Instagram!
                </StyledText>
                <StyledLink href="https://www.instagram.com/paintingjoymc/">
                    <i className="fab fa-instagram"></i>
                </StyledLink>
            </StyledContent>
            <StyledCopyright>
                &copy; - 2021 Painting Joy Mural Co.
            </StyledCopyright>
        </StyledConstruction>
    );
};

export default Construction;
