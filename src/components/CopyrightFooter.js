// dependencies
import React from "react";
import styled from "styled-components";

const StyledP = styled.p`
    font-family: "Barlow Condensed", sans-serif;
    color: #ffffff;
    font-size: 1rem;
`;

const CopyrightFooter = () => {
    return <StyledP>Copyright &copy; 2021 - Painting Joy Mural Co.</StyledP>;
};

export default CopyrightFooter;
