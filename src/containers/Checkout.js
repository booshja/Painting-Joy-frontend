// dependencies
import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
// components
import { CheckoutForm, PageTitle } from "../components";
// context
import CartContext from "../context/CartContext";

const StyledCheckout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 45vh;
`;

const StyledPaymentButton = styled.button`
    background: #207070;
    font-family: Roboto, sans-serif;
    color: #ffffff;
    border-radius: 0;
    border: 0;
    padding: 12px 16px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    display: block;
    transition: all 0.2s ease;
    box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
    width: 100%;

    &:hover {
        filter: contrast(115%);
    }

    &:disabled {
        opacity: 0.5;
        cursor: default;
    }
`;

const StyledCancelButton = styled.button`
    background: #ffffff;
    font-family: Roboto, sans-serif;
    color: #990000;
    border-radius: 0 0 4px 4px;
    border: 2px solid #990000;
    padding: 10px 14px;
    font-size: 14px;
    font-weight: 400;
    cursor: pointer;
    display: block;
    box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
    width: 100%;

    &:hover {
        background: #990000;
        color: #ffffff;
    }
`;

const StyledStripeForm = styled.form`
    width: 100%;
    align-self: center;
    box-shadow: 0px 0px 0px 0.5px rgba(50, 50, 93, 0.1),
        0px 2px 5px 0px rgba(50, 50, 93, 0.1),
        0px 1px 1.5px 0px rgba(0, 0, 0, 0.07);
    border-radius: 7px;
    padding: 20px;
`;

const StyledCardElement = styled(CardElement)`
    border-radius: 4px 4px 0 0;
    padding: 12px;
    border: 1px solid rgba(50, 50, 93, 0.1);
    max-height: 44px;
    font-size: 16px;
    width: 100%;
    background: white;
    box-sizing: border-box;
`;

const StyledSpinner = styled.div`
    color: #ffffff;
    font-size: 22px;
    text-indent: -99999px;
    margin: 0px auto;
    position: relative;
    width: 20px;
    height: 20px;
    box-shadow: inset 0 0 0 2px;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);

    &,
    &:before,
    &:after {
        border-radius: 50%;
    }

    &:before,
    &:after {
        position: absolute;
        content: "";
    }

    &:before {
        width: 10.4px;
        height: 20.4px;
        background: #207070;
        border-radius: 20.4px 0 0 20.4px;
        top: -0.2px;
        left: -0.2px;
        -webkit-transform-origin: 10.4px 10.2px;
        transform-origin: 10.4px 10.2px;
        -webkit-animation: loading 2s infinite ease 1.5s;
        animation: loading 2s infinite ease 1.5s;
    }

    &:after {
        width: 10.4px;
        height: 10.2px;
        background: #207070;
        border-radius: 0 10.2px 10.2px 0;
        top: -0.1px;
        left: 10.2px;
        -webkit-transform-origin: 0px 10.2px;
        transform-origin: 0px 10.2px;
        -webkit-animation: loading 2s infinite ease;
        animation: loading 2s infinite ease;
    }

    @keyframes loading {
        0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
`;

const StyledCardError = styled.div`
    font-family: Roboto, sans-serif;
    color: #990000;
    font-size: 16px;
    line-height: 20px;
    margin-top: 12px;
    text-align: center;
`;

const StyledP = styled.p`
    font-family: "News Cycle", sans-serif;
    font-size: 1.2rem;
    text-align: center;
    width: 85%;
    line-height: 1.2;
    margin-bottom: 2rem;
`;

const StyledLink = styled.a`
    font-family: "News Cycle", sans-serif;
    font-size: 1.2rem;
    line-height: 1.2;
    color: #207070;
    font-weight: 700;
`;

const Checkout = () => {
    // set up states
    const [activeStep, setActiveStep] = useState(0);
    const [totalAmount, setTotalAmount] = useState(null);
    const [transactionId, setTransactionId] = useState("");
    // set up Stripe states
    const [succeeded, setSucceeded] = useState(false);
    const [error, setError] = useState(null);
    const [processing, setProcessing] = useState("");
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState("");
    const [clientEmail, setClientEmail] = useState("");
    // set up history
    const history = useHistory();
    // set up context
    const { cart, setCart, orderId } = useContext(CartContext);
    // set up Stripe
    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
        const generatePaymentIntent = async () => {
            // get payment intent from server
            try {
                const res = await axios.post(
                    process.env.REACT_APP_BACKEND_URL +
                        "orders/create-payment-intent",
                    cart
                );
                setClientSecret(res.data.clientSecret);
                const amount =
                    res.data.amount.slice(0, -2) +
                    "." +
                    res.data.amount.slice(res.data.amount.length - 2);
                // set the total amount calculated from server to state
                setTotalAmount(+amount);
            } catch (err) {
                console.log("Payment Intent Error:", err);
                history.push("/cart");
            }
        };

        if (cart.length === 0) {
            // if nothing in the cart, send user back to the cart page
            history.push("/cart");
        } else {
            // if items in cart, get payment intent from server/stripe
            generatePaymentIntent();
        }
    }, []);

    useEffect(() => {
        const confirmOrder = async () => {
            try {
                await axios.patch(
                    process.env.REACT_APP_BACKEND_URL +
                        `orders/order/${orderId}/confirm`,
                    { transactionId }
                );
            } catch (err) {
                console.log("Confirmation Error:", err);
            }
        };
        // after payment succeeds, clear the cart and send user to success page
        if (succeeded) {
            setCart([]);
            confirmOrder();
            history.push("/store/order/success");
        }
    }, [succeeded]);

    const cardStyle = {
        // styling for stripe
        style: {
            base: {
                color: "#000000",
                fontFamily: "Roboto, sans-serif",
                fontSmoothing: "antialiased",
                fontSize: "16px",
                "::placeholder": {
                    color: "#000000",
                },
            },
            invalid: {
                color: "#990000",
                iconColor: "#990000",
            },
        },
    };

    const nextStep = (email) => {
        // set customer email to state, go to next step of checkout (payment)
        setClientEmail(email);
        setActiveStep(1);
    };

    const handleChange = async (event) => {
        // Listen for changes in the CardElement
        // Display any errors as the customer types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    };

    const handleSubmit = async (ev) => {
        // set processing to true while payment processes
        ev.preventDefault();
        setProcessing(true);

        // send payment to stripe with email for receipt generation
        const payload = await stripe.confirmCardPayment(clientSecret, {
            receipt_email: clientEmail,
            payment_method: {
                card: elements.getElement(CardElement),
            },
        });

        if (payload.error) {
            // if error, set error and stop processing
            setError(`Payment failed ${payload.error.message}`);
            setProcessing(false);
        } else {
            // if no error, clear errors, stop processing animation,
            // set succeded state
            setError(null);
            setTransactionId(payload.paymentIntent.id);
            setProcessing(false);
            setSucceeded(true);
        }
    };

    const handleCancel = async (e) => {
        e.preventDefault();
        try {
            await axios.delete(
                process.env.REACT_APP_BACKEND_URL +
                    `orders/order/${orderId}/abort`
            );
            history.push("/store/order/cancel");
        } catch (err) {
            console.log("Checkout Cancel Abort Error:", err);
            history.push("/store/order/cancel");
        }
    };

    return (
        <StyledCheckout>
            <PageTitle>Checkout</PageTitle>
            {activeStep === 0 ? (
                <CheckoutForm nextStep={nextStep} amount={totalAmount} />
            ) : (
                <>
                    <StyledP>
                        Please fill in your card details for secure payment
                        processing through{" "}
                        <StyledLink
                            href="https://www.stripe.com"
                            target="_blank"
                            rel="noreferer noopener"
                        >
                            Stripe
                        </StyledLink>
                        .
                    </StyledP>
                    <StyledP>Your total: ${totalAmount}</StyledP>
                    <StyledStripeForm id="payment-form" onSubmit={handleSubmit}>
                        <StyledCardElement
                            id="card-element"
                            options={cardStyle}
                            onChange={handleChange}
                        />
                        <StyledPaymentButton
                            disabled={processing || disabled || succeeded}
                            id="submit"
                        >
                            <span id="button-text">
                                {processing ? (
                                    <StyledSpinner id="spinner"></StyledSpinner>
                                ) : (
                                    "Pay Now"
                                )}
                            </span>
                        </StyledPaymentButton>
                        <StyledCancelButton onClick={(e) => handleCancel(e)}>
                            Cancel
                        </StyledCancelButton>
                        {error && (
                            <StyledCardError role="alert">
                                {error}
                            </StyledCardError>
                        )}
                    </StyledStripeForm>
                </>
            )}
        </StyledCheckout>
    );
};

export default Checkout;
