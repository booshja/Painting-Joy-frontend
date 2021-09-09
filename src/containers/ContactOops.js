// dependencies
import React from "react";
import styled from "styled-components";
// components
import { GoBack, PageTitle } from "../components";
// assets
import OopsImage from "../assets/sarah-kilian-52jRtc2S_VE-unsplash.jpg";
// breakpoints
import { breakpoints } from "../breakpoints";

const StyledContactOops = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledMessage = styled.p`
    font-family: "News Cycle", sans-serif;
    text-align: center;
    font-size: 1.2rem;
    line-height: 1.2;
    letter-spacing: 1px;
    width: 90%;

    ${breakpoints("font-size", "rem", [{ 414: 1.4 }])}
`;

const StyledImg = styled.img`
    width: 80%;
`;

const ContactOops = () => {
    return (
        <StyledContactOops>
            <PageTitle>Contact Me</PageTitle>
            <StyledMessage>
                Uh oh, something went wrong and we didn't get your message!
                Please go back and try again.
            </StyledMessage>
            <GoBack to="/contact" />
            <StyledImg
                src={OopsImage}
                alt="Dropped ice cream cone on the ground"
            />
        </StyledContactOops>
    );
};

export default ContactOops;
