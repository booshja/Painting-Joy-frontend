// dependencies
import React from "react";
import styled from "styled-components";
// components
import { StyledP } from "../containers/styles/adminTypography";
import {
    StyledGreenSoloButton,
    StyledOutlineButton,
} from "../containers/styles/adminButtons";
// hooks
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

const StyledUploadForm = styled.form`
    display: flex;
    flex-direction: column;
    border: 2px solid #207070;
    border-radius: 4px;
    background-color: #ffffff;
    padding: 1rem;
    width: 100%;
    margin-bottom: 1rem;
`;

const StyledUploadInput = styled.input`
    font-family: "News Cycle", sans-serif;
    font-size: 1.2rem;
    letter-spacing: 1px;
    margin-bottom: 0.5rem;
`;

const StyledText = styled(StyledP)`
    font-weight: 700;
    margin-bottom: 1rem;
`;

const StyledSubmitBtn = styled(StyledOutlineButton)`
    border-color: #207070;
    color: #207070;
    margin-bottom: 0.5rem;
`;

const StyledContinueBtn = styled(StyledGreenSoloButton)`
    font-size: 1.2rem;
    border: 2px solid #207070;
`;

const StyledImg = styled.img`
    width: 100%;
`;

const AdminHomepageImageForm = ({ handleImageSubmit, image }) => {
    // set up react-hook-form
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    // set up history
    const history = useHistory();

    return (
        <>
            <StyledUploadForm onSubmit={handleSubmit(handleImageSubmit)}>
                <StyledUploadInput
                    type="file"
                    id="upload"
                    name="upload"
                    data-testid="upload"
                    {...register("upload", {
                        required: "Image is required.",
                    })}
                />
                <StyledSubmitBtn type="submit" name="homepage-submit-btn">
                    Submit
                </StyledSubmitBtn>
                <StyledContinueBtn onClick={() => history.go(0)}>
                    Keep Image
                </StyledContinueBtn>
            </StyledUploadForm>
            <StyledText>Current Image:</StyledText>
            <StyledImg src={image} alt="Homepage" />
        </>
    );
};

export default AdminHomepageImageForm;
