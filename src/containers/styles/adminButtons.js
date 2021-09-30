// dependencies
import styled from "styled-components";

export const StyledGreenSoloButton = styled.button`
    background-color: #207070;
    font-family: "News Cycle", sans-serif;
    font-weight: 700;
    font-size: 1rem;
    letter-spacing: 1px;
    padding: 5px 10px;
    border: none;
    border-radius: 4px;
    color: #ffffff;

    &:hover:not(:disabled) {
        color: #207070;
        background-color: #ffffff;
        border: 2px solid #207070;
        padding: 3px 8px;
        cursor: pointer;
    }

    &:disabled {
        background-color: #dadada;
    }
`;

export const StyledOutlineButton = styled.button`
    border-radius: 4px;
    background-color: #ffffff;
    font-family: "News Cycle", sans-serif;
    font-weight: 700;
    font-size: 1.2rem;
    letter-spacing: 1px;
    padding: 2.5px 5px;
    border: 2px solid ${(props) => props.color};
    color: ${(props) => props.color};

    &:hover:not(:disabled) {
        color: #ffffff;
        background-color: ${(props) => props.color};
        cursor: pointer;
    }

    &:disabled {
        color: #dadada;
        border: 2px solid #dadada;
    }
`;
