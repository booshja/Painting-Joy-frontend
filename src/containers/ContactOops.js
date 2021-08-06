// dependencies
import React from "react";
import styled from "styled-components";
// components
import { GoBack, PageTitle } from "../components";
// assets
import OopsImage from "../assets/sarah-kilian-52jRtc2S_VE-unsplash.jpg";

const StyledContactOops = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledMessage = styled.p`
    font-family: "News Cycle", sans-serif;
    text-align: center;
    font-size: 1.4rem;
    letter-spacing: 1px;
    width: 90%;
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
