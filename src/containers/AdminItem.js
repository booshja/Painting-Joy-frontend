// dependencies
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
// components
import { AdminItemForm, AdminPageTitle, LoadingSpinner } from "../components";
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

const StyledAdminItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 91.75vh;
    background-color: #f6f7f1;
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

const AdminItem = ({ variant }) => {
    // get params
    const { id } = useParams();
    // set up states
    const [loading, setLoading] = useState(false);
    const [step, setStep] = useState(0);
    const [itemId, setItemId] = useState(id);
    const [preloadedValues, setPreloadedValues] = useState(null);
    const [error, setError] = useState(null);
    // set up react-hook-form
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    // set up history
    const history = useHistory();
    // set up hooks
    const { isLoading, getAccessTokenSilently } = useAuth0();
    // set up context
    const { menuOpen } = useContext(MenuContext);

    useEffect(() => {
        const source = axios.CancelToken.source();

        async function getItemData() {
            // on component mount get Item data if editing
            setLoading(true);
            try {
                const res = await axios.get(
                    process.env.REACT_APP_BACKEND_URL + `items/item/${itemId}`,
                    { cancelToken: source.token }
                );
                // set preloadedValues for edit form
                setPreloadedValues({
                    ...res.data.item,
                });
                setLoading(false);
            } catch (err) {
                console.log("Item retrieval error", err);
                history.get(0);
            }
        }

        if (variant === "Edit") getItemData();

        return function cleanup() {
            source.cancel();
        };
    }, []);

    const handleDataSubmit = async (data) => {
        // on form submit, send data to API, move to next step
        setLoading(true);
        try {
            const token = await getAccessTokenSilently();

            if (variant === "Add") {
                const res = await axios.post(
                    process.env.REACT_APP_BACKEND_URL + "items/",
                    {
                        name: data.name,
                        description: data.description,
                        quantity: +data.quantity,
                        price: +data.price,
                        shipping: +data.shipping,
                        isSold: data.shipping > 0 ? false : true,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                const id = res.data.item.id;
                setItemId(id);
            } else if (variant === "Edit") {
                await axios.patch(
                    process.env.REACT_APP_BACKEND_URL +
                        `items/update/${itemId}`,
                    {
                        name: data.name,
                        description: data.description,
                        quantity: +data.quantity,
                        price: +data.price,
                        shipping: +data.shipping,
                        isSold: data.shipping > 0 ? false : true,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                setError(null);
            }
            setStep(1);
        } catch (err) {
            setError("Error uploading data, please try again.");
            console.log("Item data upload error", err);
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
                process.env.REACT_APP_BACKEND_URL + `items/upload/${itemId}`,
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            history.push("/admin/items");
        } catch (err) {
            setError(
                "Image upload error. Check that file is not over 5mb and try again."
            );
            console.log("Image upload error", err);
            setLoading(false);
        }
    };

    const handleContinue = () => {
        // on continue go to next step or send admin back to items page
        history.push("/admin/items");
    };

    const handleCancel = async () => {
        // on cancel, delete current item in progress,
        // push admin to Admin Items page
        setLoading(true);
        try {
            const token = await getAccessTokenSilently();

            await axios.delete(
                process.env.REACT_APP_BACKEND_URL + `items/delete/${itemId}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            history.push("/admin/items");
        } catch (err) {
            console.log("Cancel Error", err);
            history.push("/admin/items");
        }
    };

    // if data is loading, display loading spinner
    if (loading)
        return (
            <StyledAdminItem>
                <LoadingSpinner />
            </StyledAdminItem>
        );

    return menuOpen ? (
        <AdminHeader />
    ) : (
        <>
            {" "}
            <AdminHeader />{" "}
            <main>
                <StyledAdminItem>
                    <AdminPageTitle>{variant} Item</AdminPageTitle>
                    {step > 0 && <StyledText>Upload Photo</StyledText>}
                    {error && <StyledError>{error}</StyledError>}
                    {step === 0 && variant === "Add" && (
                        <AdminItemForm
                            handleDataSubmit={handleDataSubmit}
                            handleCancel={handleCancel}
                            variant={variant}
                        />
                    )}
                    {step === 0 && variant === "Edit" && (
                        <AdminItemForm
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
                                <StyledCancelBtn
                                    color="#db9487"
                                    onClick={handleCancel}
                                >
                                    Cancel (Deletes Item)
                                </StyledCancelBtn>
                            </StyledUploadForm>
                        </>
                    )}
                    {step === 1 && variant === "Edit" && (
                        <>
                            <StyledText>Current Image:</StyledText>
                            <StyledImg
                                src={
                                    process.env.REACT_APP_BACKEND_URL +
                                    `items/item/${itemId}/image`
                                }
                                alt="Item"
                            />
                        </>
                    )}
                </StyledAdminItem>
            </main>
        </>
    );
};

export default AdminItem;
