// dependencies
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
// components
import { AdminMuralForm, AdminPageTitle, LoadingSpinner } from "../components";
import AdminHeader from "./AdminHeader";
import {
    StyledGreenSoloButton,
    StyledOutlineButton,
} from "./styles/adminButtons";
import { StyledP } from "./styles/adminTypography";
// hooks
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";
import { useAuth0 } from "@auth0/auth0-react";
// context
import MenuContext from "../context/MenuContext";
// breakpoints
import { breakpoints } from "../breakpoints";

const StyledAdminMural = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: calc(100vh - 60px);
    background-color: #f6f7f1;
    width: 100%;
    padding: 0 1rem;

    ${breakpoints("align-items", "", [{ 1024: "flex-start" }])}
    ${breakpoints("padding-left", "rem", [{ 1024: 2 }])}
`;

const StyledSubmitBtn = styled(StyledGreenSoloButton)`
    margin: 1rem 0 0.5rem 0;
`;

const StyledContinueBtn = styled(StyledOutlineButton)`
    font-size: 1rem;
    margin-bottom: 0.5rem;
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
    max-width: 500px;
    margin-bottom: 1rem;
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

const StyledImg = styled.img`
    width: 90%;
    max-width: 500px;
`;

const StyledError = styled.p`
    color: #990000;
    font-family: "News Cycle", sans-serif;
    font-weight: 700;
    font-size: 1.2rem;
    letter-spacing: 1px;
    padding: 0.5rem;
    text-align: center;
`;

const AdminMural = ({ variant }) => {
    // get params
    const { id } = useParams();
    // set up states
    const [loading, setLoading] = useState(false);
    const [step, setStep] = useState(0);
    const [muralId, setMuralId] = useState(id);
    const [preloadedValues, setPreloadedValues] = useState(null);
    const [error, setError] = useState(null);
    // set up react-hook-form
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    // set up history
    const history = useHistory();
    // set up hooks
    const { isLoading, getAccessTokenSilently } = useAuth0();
    // set up context
    const { menuOpen } = useContext(MenuContext);

    useEffect(() => {
        async function getMuralData() {
            // on component mount get Mural data if editing
            setLoading(true);
            try {
                const res = await axios.get(
                    process.env.REACT_APP_BACKEND_URL +
                        `murals/mural/${muralId}`
                );
                // set preloadedValues for edit form
                setPreloadedValues({
                    title: res.data.mural.title,
                    description: res.data.mural.description,
                });
                setLoading(false);
            } catch (err) {
                console.log("Mural retrieval error", err);
                history.get(0);
            }
        }

        if (variant === "Edit") getMuralData();
    }, []);

    const handleDataSubmit = async (data) => {
        // on form submit, send data to API, move to next step
        setLoading(true);
        try {
            const token = await getAccessTokenSilently();

            if (variant === "Add") {
                const res = await axios.post(
                    process.env.REACT_APP_BACKEND_URL + "murals/",
                    {
                        title: data.title,
                        description: data.description,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                const id = res.data.mural.id;
                setMuralId(id);
            } else if (variant === "Edit") {
                await axios.patch(
                    process.env.REACT_APP_BACKEND_URL +
                        `murals/mural/${muralId}`,
                    data,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
            }
            setError(null);
            setStep(1);
        } catch (err) {
            setError("Error uploading data, please try again.");
            console.log("Mural data upload error", err);
            setLoading(false);
        }

        setLoading(false);
    };

    const handleImageSubmit = async (data) => {
        // on image submit, send photo to API, move to next step
        setLoading(true);
        const formData = new FormData();
        formData.append("upload", data.upload[0]);
        let res;

        try {
            const token = await getAccessTokenSilently();

            res = await axios.post(
                process.env.REACT_APP_BACKEND_URL +
                    `murals/upload/${muralId}/image/${step}`,
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            if (step < 3) {
                reset("", { keepValues: false });
            } else if (step === 3) {
                history.push("/admin/murals");
            }
            setStep((prevStep) => prevStep + 1);
            setLoading(false);
        } catch (err) {
            setError(
                "Image upload error. Check that file is not over 5mb and try again."
            );
            console.log("Image upload error!", err);
            setLoading(false);
        }
    };

    const handleContinue = () => {
        // on continue click go to next step or send admin back to murals page
        if (step < 3) {
            setStep((prevStep) => prevStep + 1);
        } else if (step === 3) {
            history.push("/admin/murals");
        }
    };

    const handleCancel = async () => {
        // on cancel, delete current mural in progress,
        // push admin to Admin Murals page
        setLoading(true);
        try {
            const token = await getAccessTokenSilently();

            if (step > 0) {
                await axios.delete(
                    process.env.REACT_APP_BACKEND_URL +
                        `murals/mural/${muralId}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
            }
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
            {error && <StyledError>{error}</StyledError>}
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
                    preloadedValues={preloadedValues}
                />
            )}
            {step > 0 && (
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
                        {variant === "Edit" && (
                            <StyledContinueBtn
                                onClick={handleContinue}
                                color="#207070"
                            >
                                Keep Image
                            </StyledContinueBtn>
                        )}
                        <StyledCancelBtn color="#DB9487" onClick={handleCancel}>
                            Cancel (Deletes Mural)
                        </StyledCancelBtn>
                    </StyledUploadForm>
                </>
            )}
            {step > 0 && variant === "Edit" && (
                <>
                    <StyledText>Current Image:</StyledText>
                    <StyledImg
                        src={
                            process.env.REACT_APP_BACKEND_URL +
                            `murals/mural/${muralId}/image/${step}`
                        }
                        alt="Mural"
                    />
                </>
            )}
        </StyledAdminMural>
    );
};

export default AdminMural;
