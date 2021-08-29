// dependencies
import React from "react";
import styled from "styled-components";
// components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette } from "@fortawesome/free-solid-svg-icons";

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    color: #207070;
    font-size: 5rem;
    margin-top: 2rem;
`;

const StyledP = styled.p`
    font-size: 1.4rem;
    color: #207070;
    font-family: "News Cycle", sans-serif;
    font-weight: 700;
    letter-spacing: 1px;
    margin-top: 1rem;
`;

const LoadingSpinner = () => {
    return (
        <>
            <StyledFontAwesomeIcon icon={faPalette} spin />
            <StyledP>Loading...</StyledP>
        </>
    );
};

export default LoadingSpinner;
