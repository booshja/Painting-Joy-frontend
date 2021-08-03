// dependencies
import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

const StyledBtn = styled.button`
    outline: none;
    background: transparent;
    color: #207070;
    font-family: "News Cycle", sans-serif;
    font-size: 1.4rem;
    font-weight: 700;
    cursor: pointer;
    border: none;

    i {
        margin-right: 0.5rem;
    }
`;

const GoBack = () => {
    const history = useHistory();
    return (
        <StyledBtn
            onClick={() => {
                history.goBack();
            }}
        >
            <i className="fas fa-long-arrow-alt-left"></i>
            Back
        </StyledBtn>
    );
};

export default GoBack;
