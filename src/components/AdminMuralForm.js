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
// breakpoints
import { breakpoints } from "../breakpoints";

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 90%;
    max-width: 700px;

    ${breakpoints("align-self", "", [{ 1024: "flex-start" }])}
`;

const StyledLabel = styled.label`
    font-family: "News Cycle", sans-serif;
    font-size: 1.4rem;
    letter-spacing: 1px;
    margin-bottom: 0.5rem;
`;

const StyledInput = styled.input`
    border: 2px solid #207070;
    border-radius: 4px;
    font-family: "News Cycle", sans-serif;
    font-size: 1.4rem;
    letter-spacing: 1px;
    margin-bottom: 0.5rem;
    width: 98%;
`;

const StyledField = styled.textarea`
    border: 2px solid #207070;
    border-radius: 4px;
    font-family: "News Cycle", sans-serif;
    font-size: 1.4rem;
    letter-spacing: 1px;
    margin-bottom: 1rem;
    resize: none;
    width: 98%;
`;

const StyledError = styled.p`
    color: #990000;
    font-family: "News Cycle", sans-serif;
    font-weight: 700;
    font-size: 1.2rem;
    letter-spacing: 1px;
    padding: 0.5rem;
`;

const StyledSoloBtn = styled(StyledGreenSoloButton)`
    border: 2px solid #207070;
`;

const StyledButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-self: flex-end;
    width: 75%;
    align-items: center;

    ${breakpoints("width", "%", [{ 414: 60 }, { 768: 32 }, { 1024: 30 }])}
`;

const AdminMuralForm = ({
    handleDataSubmit,
    handleCancel,
    variant,
    preloadedValues,
}) => {
    // set up react-hook-form
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ defaultValues: preloadedValues });

    return (
        <StyledForm onSubmit={handleSubmit(handleDataSubmit)}>
            <StyledLabel htmlFor="title">Title:</StyledLabel>
            <StyledInput
                type="text"
                placeholder="Title"
                id="title"
                name="title"
                {...register("title", {
                    required: "Title is required",
                })}
            />
            {errors.title && <StyledError>{errors.title.message}</StyledError>}
            <StyledLabel htmlFor="description">Description:</StyledLabel>
            <StyledField
                type="text"
                placeholder="Description"
                id="description"
                name="description"
                {...register("description", {
                    required: "Description is required",
                })}
            />
            {errors.description && (
                <StyledError>{errors.description.message}</StyledError>
            )}
            <StyledButtonContainer>
                <StyledOutlineButton color="#DB9487" onClick={handleCancel}>
                    Cancel
                </StyledOutlineButton>
                <StyledSoloBtn type="submit">
                    {variant === "Add" && "Upload "}
                    {variant === "Edit" && " Edit "}
                    Images
                </StyledSoloBtn>
            </StyledButtonContainer>
        </StyledForm>
    );
};

export default AdminMuralForm;
