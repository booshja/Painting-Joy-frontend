// dependencies
import React, { useContext, useRef } from "react";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
// context
import CartContext from "../context/CartContext";
// assets
import stateCodes from "../assets/stateCodes.js";

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
    margin-bottom: 1rem;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    &[type="number"] {
        -moz-appearance: textfield;
    }
`;

const StyledSelect = styled.select`
    font-family: "News Cycle", sans-serif;
    font-size: 1.4rem;
    letter-spacing: 1px;
    border: 2px solid #207070;
    border-radius: 4px;
    width: 100%;
    margin-bottom: 1rem;
`;

const StyledBtnContainer = styled.div`
    display: flex;
    align-items: center;
    align-self: flex-end;
    margin-top: 1rem;
`;

const StyledContBtn = styled.button`
    background-color: #207070;
    border: none;
    border-radius: 4px;
    padding: 0.5px 8px;
    color: #ffffff;
    font-family: "News Cycle", sans-serif;
    font-weight: 700;
    font-size: 1.4rem;
    letter-spacing: 1px;
    cursor: pointer;
    border: 2px solid #207070;
    margin-left: 1rem;

    &:hover {
        background-color: #ffffff;
        color: #207070;
    }
`;

const StyledCancelBtn = styled.button`
    background-color: #ffffff;
    border: 2px solid #990000;
    border-radius: 4px;
    padding: 0.5px 8px;
    color: #990000;
    font-family: "News Cycle", sans-serif;
    font-weight: 700;
    font-size: 1.4rem;
    letter-spacing: 1px;
    cursor: pointer;
    border: 2px solid #990000;

    &:hover {
        background-color: #990000;
        color: #ffffff;
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

const CheckoutForm = ({ nextStep, amount }) => {
    // set up react-hook-form
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    // set up history
    const history = useHistory();
    // set up context
    const { orderId } = useContext(CartContext);
    // set up ref
    const reRef = useRef();

    const handleDataSubmit = async (data) => {
        // get recaptcha token
        const token = await reRef.current.executeAsync();
        reRef.current.reset();

        // when form submits, send data to back end, trigger next step
        try {
            await axios.post(
                process.env.REACT_APP_BACKEND_URL +
                    `orders/order/${orderId}/info`,
                {
                    name: data.fullName,
                    email: data.email,
                    street: data.street,
                    unit: data.unit,
                    city: data.city,
                    stateCode: data.stateCode,
                    zipcode: +data.zipcode,
                    phone: +data.phone,
                    amount: +amount,
                    token,
                }
            );
            nextStep(data.email);
        } catch (err) {
            console.log("Checkout Error:", err);
            // history.push("/store/order/cancel");
        }
    };

    const handleCancel = async (e) => {
        // on cancel, abort order and send user to order cancelled page
        e.preventDefault();
        try {
            await axios.delete(
                process.env.REACT_APP_BACKEND_URL +
                    `orders/order/${orderId}/abort`
            );
            history.push("/store/order/cancel");
        } catch (err) {
            console.log("Checkout Abort Error:", err);
            history.push("/store/order/cancel");
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
            <StyledLabel htmlFor="fullName">Name:</StyledLabel>
            <StyledInput
                type="text"
                placeholder="Full Name"
                id="fullName"
                required
                {...register("fullName", { required: "Name is required" })}
            />
            {errors.name && (
                <StyledError>{errors.fullName.message}</StyledError>
            )}
            <StyledLabel htmlFor="email">Email Address:</StyledLabel>
            <StyledInput
                type="text"
                placeholder="Email Address"
                id="email"
                required
                {...register("email", {
                    required: "Email address is required",
                    type: "email",
                })}
            />
            {errors.email && <StyledError>{errors.email.message}</StyledError>}
            <StyledLabel htmlFor="street">Street:</StyledLabel>
            <StyledInput
                type="text"
                placeholder="Street"
                id="street"
                required
                {...register("street", {
                    required: "Street address is required",
                })}
            />
            {errors.unit && <StyledError>{errors.unit.message}</StyledError>}
            <StyledLabel htmlFor="street">Unit:</StyledLabel>
            <StyledInput
                type="text"
                placeholder="Unit (Optional)"
                id="unit"
                {...register("unit")}
            />
            <StyledLabel htmlFor="city">City:</StyledLabel>
            <StyledInput
                type="text"
                placeholder="City"
                id="city"
                required
                {...register("city", {
                    required: "City is required",
                })}
            />
            {errors.city && <StyledError>{errors.city.message}</StyledError>}
            <StyledLabel htmlFor="stateCode">State:</StyledLabel>
            <StyledSelect {...register("stateCode")}>
                {stateCodes.map(({ code, state }) => (
                    <option value={code} key={code}>
                        {state}
                    </option>
                ))}
                {errors.stateCode && (
                    <StyledError>{errors.stateCode.message}</StyledError>
                )}
            </StyledSelect>
            <StyledLabel htmlFor="zipcode">Zipcode: (ex: 98101)</StyledLabel>
            <StyledInput
                type="number"
                placeholder="Zipcode"
                id="zipcode"
                max="99999"
                min="10000"
                pattern={/ \d{5} /}
                required
                {...register("zipcode", {
                    required: "Zipcode is required",
                    max: "Zipcode must be 5 digits",
                    min: "Zipcode must be 5 digits",
                    pattern: "Zipcode must be 5 digits",
                })}
            />
            {errors.zipcode && (
                <StyledError>{errors.zipcode.message}</StyledError>
            )}
            <StyledLabel htmlFor="phone">
                Phone Number: (ex: 5555555555)
            </StyledLabel>
            <StyledInput
                type="number"
                placeholder="Phone Number"
                id="phone"
                min="1000000000"
                max="9999999999"
                pattern={/ \d{10} /}
                required
                {...register("phone", {
                    required: "Phone number is required",
                    pattern: "Phone number must be 10 digits",
                    min: "Phone number must be 10 digits",
                    max: "Phone number must be 10 digits",
                })}
            />
            {errors.phone && <StyledError>{errors.phone.message}</StyledError>}
            <StyledBtnContainer>
                <StyledCancelBtn onClick={(e) => handleCancel(e)}>
                    Cancel
                </StyledCancelBtn>
                <StyledContBtn type="submit">Continue</StyledContBtn>
            </StyledBtnContainer>
        </StyledForm>
    );
};

export default CheckoutForm;
