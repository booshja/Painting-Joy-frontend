// dependencies
import React from "react";
import styled from "styled-components";
// components
import { GoBack, PageTitle } from "../components";
// assets
import MailSuccess from "../assets/jess-moe-PbUzvmAmXmk-unsplash.jpg";

const StyledContactSuccess = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledMessage = styled.p`
    font-family: "News Cycle", sans-serif;
    width: 90%;
    font-size: 1.4rem;
    letter-spacing: 1px;
    text-align: center;
`;

const StyledImg = styled.img`
    width: 80%;
`;

const ContactSuccess = () => {
    return (
        <StyledContactSuccess>
            <PageTitle>Contact Me</PageTitle>
            <StyledMessage>
                Thank you for your message! I've got it saved and I'll reply
                just as soon as I get all this paint off my hands!
            </StyledMessage>
            <GoBack to={"/"} />
            <StyledImg
                src={MailSuccess}
                alt="Envelope with dried flowers on a table"
            />
        </StyledContactSuccess>
    );
};

export default ContactSuccess;
