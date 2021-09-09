// dependencies
import React from "react";
import styled from "styled-components";
// hooks
import { useHistory } from "react-router-dom";
// breakpoints
import { breakpoints } from "../breakpoints";

const StyledDiv = styled.div`
    width: 300px;
    display: flex;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.6);
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.5);
    position: relative;
    margin: 1rem 0;
    cursor: pointer;

    ${breakpoints("width", "px", [{ 414: 345 }, { 768: 300 }])}
`;

const StyledImg = styled.img`
    height: 200px;

    ${breakpoints("height", "px", [{ 414: 230 }])}
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

const NewDisplay = ({ variant, title, image, id }) => {
    const history = useHistory();

    const link = variant === "mural" ? `/murals/${id}` : `/store/item/${id}`;

    const handleClick = () => {
        history.push(link);
    };

    return (
        <StyledDiv onClick={() => handleClick()}>
            <StyledImg src={image} alt={title} />
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
