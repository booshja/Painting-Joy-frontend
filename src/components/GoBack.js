// dependencies
import React from "react";
import styled from "styled-components";
// hooks
import { useHistory } from "react-router";

const StyledBtn = styled.button`
    outline: none;
    background: transparent;
    color: #207070;
    font-family: "News Cycle", sans-serif;
    font-size: 1.4rem;
    font-weight: 700;
    cursor: pointer;
    border: none;
    align-self: flex-start;
    margin: 0.5rem 0 0.5rem 7.5%;

    i {
        margin-right: 0.5rem;
    }
`;

const GoBack = ({ to }) => {
    // set up history
    const history = useHistory();

    return (
        <StyledBtn
            onClick={() => {
                history.push(to);
            }}
        >
            <i className="fas fa-long-arrow-alt-left"></i>
            Back
        </StyledBtn>
    );
};

export default GoBack;
