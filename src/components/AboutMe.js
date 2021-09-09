// dependencies
import React from "react";
import styled from "styled-components";

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
    line-height: 1.8rem;
    letter-spacing: 1px;
    width: 95%;
    align-self: center;
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

const AboutMe = ({ greeting, message, image }) => {
    return (
        <StyledContainer>
            <StyledTextDiv>
                <StyledGreeting>{greeting}</StyledGreeting>
                <StyledText>{message}</StyledText>
            </StyledTextDiv>
            <StyledImage src={image} alt="Hello!" />
        </StyledContainer>
    );
};

export default AboutMe;
