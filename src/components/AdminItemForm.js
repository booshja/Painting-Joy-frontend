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
    width: 90%;
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
    margin-left: 1rem;
`;

const StyledButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-self: flex-end;
    align-items: center;
`;

const AdminItemForm = ({
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
            <StyledLabel htmlFor="name">Name:</StyledLabel>
            <StyledInput
                type="text"
                placeholder="Name"
                id="name"
                name="name"
                {...register("name", { required: "Name is required." })}
            />
            {errors.title && <StyledError>{errors.name.message}</StyledError>}
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
            <StyledLabel htmlFor="quantity">Quantity:</StyledLabel>
            <StyledInput
                type="number"
                id="quantity"
                name="quantity"
                {...register("quantity", { required: "Quantity is required" })}
            />
            {errors.quantity && (
                <StyledError>{errors.quantity.message}</StyledError>
            )}
            <StyledLabel htmlFor="price">Price:</StyledLabel>
            <StyledInput
                type="text"
                id="price"
                name="price"
                {...register("price", { required: "Price is required" })}
            />
            {errors.price && <StyledError>{errors.price.message}</StyledError>}
            <StyledLabel htmlFor="price">Shipping:</StyledLabel>
            <StyledInput
                type="text"
                id="shipping"
                name="shipping"
                {...register("shipping", { required: "Shipping is required" })}
            />
            {errors.shipping && (
                <StyledError>{errors.shipping.message}</StyledError>
            )}
            <StyledButtonContainer variant={variant}>
                <StyledOutlineButton color="#db9487" onClick={handleCancel}>
                    Cancel
                </StyledOutlineButton>
                <StyledSoloBtn type="submit">
                    {variant === "Add" && "Upload "}
                    {variant === "Edit" && " Edit "}
                    Image
                </StyledSoloBtn>
            </StyledButtonContainer>
        </StyledForm>
    );
};

export default AdminItemForm;
