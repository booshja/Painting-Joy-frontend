// dependencies
import React from "react";
import styled from "styled-components";

import image from "../images/Selection_002.png";
const homepage = {
    greeting: "Hi! I'm Beth!",
    message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pharetra, velit nec aliquam pellentesque, eros velit laoreet massa, id consequat neque dolor sit amet sapien. Donec fermentum porta mi.",
};

const StyledContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
    width: 90%;
`;

const StyledGreeting = styled.h2`
    text-align: center;
    font-family: "News Cycle", sans-serif;
    font-weight: 700;
    font-size: 2rem;
    letter-spacing: 1px;
    margin-bottom: 1rem;
`;

const StyledText = styled.p`
    text-align: center;
    font-family: "News Cycle", sans-serif;
    font-size: 1.4rem;
    letter-spacing: 1px;
`;

const StyledImage = styled.img`
    height: 300px;
    width: 300px;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
`;

const StyledTextDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 1rem;
`;

const AboutMe = () => {
    return (
        <StyledContainer>
            <StyledTextDiv>
                <StyledGreeting>{homepage.greeting}</StyledGreeting>
                <StyledText>{homepage.message}</StyledText>
            </StyledTextDiv>
            <StyledImage src={image} alt="Beth" />
        </StyledContainer>
    );
};

export default AboutMe;
