// dependencies
import React from "react";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import axios from "axios";

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
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
`;

const StyledField = styled.textarea`
    border: 2px solid #207070;
    border-radius: 4px;
    font-family: "News Cycle", sans-serif;
    font-size: 1.4rem;
    letter-spacing: 1px;
    margin-bottom: 1rem;
`;

const StyledButton = styled.button`
    background-color: #207070;
    border: none;
    border-radius: 4px;
    padding: 2.5px 10px;
    color: #ffffff;
    font-family: "News Cycle", sans-serif;
    font-weight: 700;
    font-size: 1.4rem;
    letter-spacing: 1px;
    align-self: flex-end;

    &::hover {
        background-color: #ffffff;
        color: #207070;
    }
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
    // TODO: HANDLE POST REQUEST
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const history = useHistory();

    const handleDataSubmit = async (data) => {
        try {
            const res = await axios.post(
                process.env.REACT_APP_BACKEND_URL + "/messages",
                data
            );
            console.log("RESSSS", res);
        } catch (err) {
            console.log("ERRORRRRR", err);
        }
    };
    return (
        <StyledForm
            onSubmit={handleSubmit((data) => {
                handleDataSubmit(data);
            })}
        >
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
