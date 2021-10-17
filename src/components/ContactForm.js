// dependencies
import React, { useRef } from "react";
import styled from "styled-components";
import axios from "axios";
// components
import ReCAPTCHA from "react-google-recaptcha";
// hooks
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
// breakpoints
import { breakpoints } from "../breakpoints";

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    ${breakpoints("width", "%", [{ 414: 90 }])}
`;

const StyledLabel = styled.label`
    font-family: "News Cycle", sans-serif;
    font-size: 1.4rem;
    letter-spacing: 1px;
    margin-bottom: 0.25rem;
`;

const StyledInput = styled.input`
    border: 2px solid #207070;
    border-radius: 4px;
    font-family: "News Cycle", sans-serif;
    font-size: 1.4rem;
    letter-spacing: 1px;
    margin-bottom: 0.5rem;

    ${breakpoints("width", "%", [{ 414: 95 }])}
`;

const StyledField = styled.textarea`
    border: 2px solid #207070;
    border-radius: 4px;
    font-family: "News Cycle", sans-serif;
    font-size: 1.4rem;
    letter-spacing: 1px;
    margin-bottom: 1rem;
    resize: none;

    ${breakpoints("width", "%", [{ 414: 95 }])}
`;

const StyledButton = styled.button`
    background-color: #207070;
    border: none;
    border-radius: 4px;
    padding: 0.5px 8px;
    color: #ffffff;
    font-family: "News Cycle", sans-serif;
    font-weight: 700;
    font-size: 1.4rem;
    letter-spacing: 1px;
    align-self: flex-end;
    cursor: pointer;
    border: 2px solid #207070;

    &:hover {
        background-color: #ffffff;
        color: #207070;
    }

    ${breakpoints("margin-right", "rem", [{ 414: 0.7 }])}
`;

const StyledError = styled.p`
    color: #990000;
    font-family: "News Cycle", sans-serif;
    font-weight: 700;
    font-size: 1.2rem;
    letter-spacing: 1px;
    padding: 0.5rem;
`;

const ContactForm = () => {
    // set up react-hook-form
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    // set up history
    const history = useHistory();
    // set up ref
    const reRef = useRef();

    const handleDataSubmit = async (data) => {
        // get recaptcha token
        const token = await reRef.current.executeAsync();
        reRef.current.reset();

        try {
            // send data to back end
            await axios.post(process.env.REACT_APP_BACKEND_URL + "messages", {
                ...data,
                token,
            });
            history.push("/contact/success");
        } catch (err) {
            console.log("Message Error:", err);
            history.push("/contact/oops");
        }
    };

    return (
        <StyledForm
            onSubmit={handleSubmit((data) => {
                handleDataSubmit(data);
            })}
        >
            <ReCAPTCHA
                sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                size="invisible"
                ref={reRef}
            />
            <StyledLabel htmlFor="name">Name:</StyledLabel>
            <StyledInput
                type="text"
                placeholder="Name"
                id="name"
                {...register("name", { required: "Name is required" })}
            />
            {errors.name && <StyledError>{errors.name.message}</StyledError>}
            <StyledLabel htmlFor="email">Email:</StyledLabel>
            <StyledInput
                type="text"
                placeholder="Email:"
                id="email"
                {...register("email", { required: "Email is required" })}
            />
            {errors.email && <StyledError>{errors.email.message}</StyledError>}
            <StyledLabel htmlFor="message">Message:</StyledLabel>
            <StyledField
                placeholder="Message"
                id="message"
                maxLength="200"
                rows="4"
                {...register("message", {
                    required: "Message is required",
                    maxLength: {
                        value: 200,
                        message: "Maximum message length 200 characters",
                    },
                })}
            />
            {errors.message && (
                <StyledError>{errors.message.message}</StyledError>
            )}
            <StyledButton type="submit">Submit</StyledButton>
        </StyledForm>
    );
};

export default ContactForm;
