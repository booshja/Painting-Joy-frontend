// dependencies
import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
// components
import { AdminMuralForm, AdminPageTitle, LoadingSpinner } from "../components";
import {
    StyledGreenSoloButton,
    StyledOutlineButton,
} from "./styles/adminButtons";
import { StyledP } from "./styles/adminTypography";
// hooks
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";

const StyledAdminMural = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 91.75vh;
    background-color: #f6f7f1;
`;

const StyledSubmitBtn = styled(StyledGreenSoloButton)`
    margin: 1rem 0 0.5rem 0;
`;

const StyledCancelBtn = styled(StyledOutlineButton)`
    font-size: 1rem;
`;

const StyledUploadForm = styled.form`
    display: flex;
    flex-direction: column;
    border: 2px solid #207070;
    border-radius: 4px;
    background-color: #ffffff;
    padding: 1rem;
    width: 85%;
`;

const StyledUploadInput = styled.input`
    font-family: "News Cycle", sans-serif;
    font-size: 1.2rem;
    letter-spacing: 1px;
`;

const StyledText = styled(StyledP)`
    font-weight: 700;
    margin-bottom: 1rem;
`;

const AdminMural = ({ variant }) => {
    // set up states
    const [loading, setLoading] = useState(false);
    const [step, setStep] = useState(0);
    const [muralId, setMuralId] = useState(null);
    // set up react-hook-form
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    // set up history
    const history = useHistory();

    const handleDataSubmit = async (data) => {
        // on form submit, send data to API, move to next step
        setLoading(true);
        try {
            const res = await axios.post(
                process.env.REACT_APP_BACKEND_URL + "murals/",
                {
                    title: data.title,
                    description: data.description,
                }
            );
            const id = res.data.mural.id;
            setMuralId(() => id);
            setStep(1);
        } catch (err) {
            console.log("ERRRORRRRRR", err);
        }

        setLoading(false);
    };

    const handleImageSubmit = async (data) => {
        // on image submit, send photo to API, move to next step
        setLoading(true);
        const formData = new FormData();
        formData.append("upload", data.upload[0]);

        try {
            await axios.post(
                process.env.REACT_APP_BACKEND_URL +
                    `murals/upload/${muralId}/image/${step}`,
                formData
            );
            if (step < 3) {
                reset("", { keepValues: false });
            } else if (step === 3) {
                history.push("/admin/murals");
            }
            setStep((prevStep) => prevStep + 1);
            setLoading(false);
        } catch (err) {
            console.log("Image upload error!", err);
        }
    };

    const handleCancel = async () => {
        // on cancel, delete current mural in progress,
        // push admin to Admin Murals page
        setLoading(true);
        try {
            await axios.delete(
                process.env.REACT_APP_BACKEND_URL + `murals/mural/${muralId}`
            );
            history.push("/admin/murals");
        } catch (err) {
            console.log("Cancel Error", err);
            history.push("/admin/murals");
        }
    };

    // if data is loading, display loading spinner
    if (loading)
        return (
            <StyledAdminMural>
                <LoadingSpinner />
            </StyledAdminMural>
        );

    return (
        <StyledAdminMural>
            <AdminPageTitle>{variant} Mural</AdminPageTitle>
            {step > 0 && <StyledText>Upload Photo #{step} of 3</StyledText>}
            {step === 0 && variant === "Add" && (
                <AdminMuralForm
                    handleDataSubmit={handleDataSubmit}
                    handleCancel={handleCancel}
                    variant={variant}
                />
            )}
            {step === 0 && variant === "Edit" && (
                <AdminMuralForm
                    handleDataSubmit={handleDataSubmit}
                    handleCancel={handleCancel}
                    variant={variant}
                />
            )}
            {step > 0 && variant === "Add" && (
                <>
                    <StyledUploadForm
                        onSubmit={handleSubmit(handleImageSubmit)}
                    >
                        <StyledUploadInput
                            type="file"
                            id="upload"
                            name="upload"
                            {...register("upload", {
                                required: "Image is required",
                            })}
                        />
                        <StyledSubmitBtn>Submit</StyledSubmitBtn>
                        <StyledCancelBtn color="#DB9487" onClick={handleCancel}>
                            Cancel (Deletes Mural)
                        </StyledCancelBtn>
                    </StyledUploadForm>
                </>
            )}
        </StyledAdminMural>
    );
};

export default AdminMural;
