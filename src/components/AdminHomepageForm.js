// dependencies
import React from "react";
import styled from "styled-components";
// components
import {
    StyledGreenSoloButton,
    StyledOutlineButton,
} from "../containers/styles/adminButtons";
// hooks
import { useForm } from "react-hook-form";

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-self: center;
`;

const StyledLabel = styled.label`
    font-family: "News Cycle", sans-serif;
    font-size: 1.2rem;
    font-weight: 700;
    letter-spacing: 1px;
    margin-bottom: 0.5rem;
`;

const StyledInput = styled.input`
    border: 2px solid #207070;
    border-radius: 4px;
    font-family: "News Cycle", sans-serif;
    font-size: 1.2rem;
    letter-spacing: 1px;
    margin-bottom: 0.5rem;
`;

const StyledField = styled.textarea`
    border: 2px solid #207070;
    border-radius: 4px;
    font-family: "News Cycle", sans-serif;
    font-size: 1.2rem;
    letter-spacing: 1px;
    margin-bottom: 1rem;
    resize: none;
    width: 98%;
`;

const StyledError = styled.p`
    color: #990000;
    font-family: "News Cycle", sans-serif;
    font-weight: 700;
    font-size: 1rem;
    letter-spacing: 1px;
    padding: 0.5rem;
`;

const StyledButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 85%;
    align-self: flex-end;
`;

const StyledGreenBtn = styled(StyledGreenSoloButton)`
    border: 2px solid #207070;
`;

const StyledSoloBtn = styled(StyledOutlineButton)`
    border: 2px solid #207070;
    padding-left: 7.5px;
    padding-right: 7.5px;
`;

const AdminHomepageForm = ({ preloadedValues, handleDataSubmit, setStep }) => {
    // set up react-hook-form
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ defaultValues: preloadedValues });

    return (
        <StyledForm onSubmit={handleSubmit(handleDataSubmit)}>
            <StyledLabel htmlFor="greeting">Greeting:</StyledLabel>
            <StyledInput
                type="text"
                placeholder="Greeting"
                id="greeting"
                name="greeting"
                {...register("greeting", { required: "Greeting is required." })}
            />
            {errors.greeting && (
                <StyledError>{errors.greeting.message}</StyledError>
            )}
            <StyledLabel htmlFor="message">Message:</StyledLabel>
            <StyledField
                type="text"
                placeholder="Message"
                id="message"
                name="message"
                {...register("message", { required: "Message is required." })}
            />
            {errors.message && (
                <StyledError>{errors.message.message}</StyledError>
            )}
            <StyledButtonContainer>
                <StyledGreenBtn onClick={() => setStep(1)}>
                    Only Update Image
                </StyledGreenBtn>
                <StyledSoloBtn color="#207070" type="submit">
                    Save
                </StyledSoloBtn>
            </StyledButtonContainer>
        </StyledForm>
    );
};

export default AdminHomepageForm;
