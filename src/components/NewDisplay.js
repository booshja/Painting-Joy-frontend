// dependencies
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
    width: 300px;
    display: flex;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.6);
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.5);
    position: relative;
`;

const StyledImg = styled.img`
    height: 200px;
`;

const StyledTextBox = styled.div`
    background-color: rgba(0, 0, 0, 0.6);
    position: absolute;
    padding: 0.5rem;
    bottom: 0;
    right: 0;
`;

const StyledText = styled.p`
    color: #ffffff;
    font-family: "News Cycle", sans-serif;
    font-size: 1.4rem;
    letter-spacing: 1px;
`;

const NewDisplay = ({ variant, object }) => {
    return (
        <StyledDiv>
            <StyledImg src={object.image} alt={object.title} />
            <StyledTextBox>
                <StyledText>
                    {variant == "mural"
                        ? "See my latest mural!"
                        : "See what's new in the store!"}
                </StyledText>
            </StyledTextBox>
        </StyledDiv>
    );
};

export default NewDisplay;
