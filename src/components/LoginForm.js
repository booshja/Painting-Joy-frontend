// dependencies
import React, { useRef, useState } from "react";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import styled from "styled-components";

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const StyledInput = styled.input`
    border: 2px solid #207070;
    border-radius: 4px;
    font-family: "News Cycle", sans-serif;
    font-size: 1.2rem;
    letter-spacing: 1px;
    margin-bottom: 0.5rem;
`;

const StyledButtonContainer = styled.div`
    display: flex;
    align-self: flex-end;
`;

const StyledButton = styled.button`
    border: none;
    border-radius: 4px;
    padding: 0.5px 8px;
    font-family: "News Cycle", sans-serif;
    font-weight: 700;
    font-size: 1.4rem;
    letter-spacing: 1px;
    cursor: pointer;
`;

const StyledLoginButton = styled(StyledButton)`
    background-color: #207070;
    color: #ffffff;
    border: 2px solid #207070;
    margin-left: 0.5rem;

    &:hover {
        background-color: #ffffff;
        color: #207070;
    }
`;

const StyledCancelButton = styled(StyledButton)`
    background-color: #ffffff;
    color: #207070;
    border: 2px solid #207070;

    &:hover {
        background-color: #207070;
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

const LoginForm = () => {
    // set up react-hook-form
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    // set up state
    const [error, setError] = useState(false);
    const [result, setResult] = useState(null);
    // set up history
    const history = useHistory();
    //set up ref
    const reRef = useRef();

    const handleDataSubmit = async (data) => {
        // get recaptcha token
        const token = await reRef.current.executeAsync();
        reRef.current.reset();

        try {
            const res = await axios.post(
                process.env.REACT_APP_BACKEND_URL + "auth/token",
                {
                    ...data,
                    token,
                }
            );
            setResult(res);
        } catch (err) {
            setError(true);
        }

        if (error) {
            history.push("/admin/login");
        }

        console.log("result!!", result);
        // history.push("/admin/dashboard");
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
            <StyledInput
                type="text"
                placeholder="Username"
                id="username"
                {...register("username", { required: "Username is required" })}
            />
            {errors.username && (
                <StyledError>{errors.username.message}</StyledError>
            )}
            <StyledInput
                type="password"
                placeholder="Password"
                id="password"
                {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
                <StyledError>{errors.password.message}</StyledError>
            )}
            {error && <StyledError>Invalid Username/Password</StyledError>}
            <StyledButtonContainer>
                <StyledCancelButton onClick={() => history.push("/")}>
                    Cancel
                </StyledCancelButton>
                <StyledLoginButton type="submit">Login</StyledLoginButton>
            </StyledButtonContainer>
        </StyledForm>
    );
};

export default LoginForm;
