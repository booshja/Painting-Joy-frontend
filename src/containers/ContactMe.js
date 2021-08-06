// dependencies
import React from "react";
import styled from "styled-components";
// components
import { ContactForm, PageTitle } from "../components";

const StyledContactMe = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledMessage = styled.p`
    text-align: center;
    width: 90%;
    font-family: "News Cycle", sans-serif;
    font-size: 1.4rem;
    letter-spacing: 1px;
    line-height: 1.8rem;
    margin-bottom: 2rem;
`;

const ContactMe = () => {
    return (
        <StyledContactMe>
            <PageTitle>Contact Me</PageTitle>
            <StyledMessage>
                Want to inquire about a mural? Anything else you'd like to tell
                me? Send me a message below!
            </StyledMessage>
            <ContactForm />
        </StyledContactMe>
    );
};

export default ContactMe;
