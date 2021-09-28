// dependencies
import React from "react";
import styled from "styled-components";
// components
import { AdminPageTitle, LoadingSpinner } from "../components";
import { AdminHeader } from "../containers";
import { Redirect } from "react-router-dom";
// context
import { useAuth0 } from "@auth0/auth0-react";
// breakpoints
import { breakpoints } from "../breakpoints";

const StyledAdminLogin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${breakpoints("padding", "", [{ 1024: "0 25%" }])}
`;
const StyledP = styled.p`
    text-align: center;
    margin-top: 50vh;
    font-family: "Barlow Condensed", sans-serif;
    font-size: 1rem;
`;

const StyledLoginButton = styled.button`
    border: 2px solid #207070;
    border-radius: 4px;
    padding: 0.5px 8px;
    font-family: "News Cycle", sans-serif;
    font-weight: 700;
    font-size: 1.4rem;
    letter-spacing: 1px;
    cursor: pointer;
    background-color: #207070;
    color: #ffffff;

    &:hover {
        background-color: #ffffff;
        color: #207070;
    }

    ${breakpoints("font-size", "rem", [{ 414: 1.6 }])}
    ${breakpoints("padding", "", [{ 414: "2.5px 10px" }])}
`;

const AdminLogin = () => {
    // set up auth context
    const { loginWithRedirect, isLoading, isAuthenticated } = useAuth0();

    if (isLoading)
        return (
            <StyledAdminLogin>
                <LoadingSpinner />
            </StyledAdminLogin>
        );

    if (isAuthenticated) return <Redirect to="/admin/dashboard" />;

    return (
        <>
            <AdminHeader login={true} />
            <main>
                <StyledAdminLogin>
                    <AdminPageTitle>Login</AdminPageTitle>
                    <StyledLoginButton onClick={() => loginWithRedirect()}>
                        Click Here To Log In
                    </StyledLoginButton>
                </StyledAdminLogin>
            </main>
            <footer>
                <StyledP>
                    Copyright &copy; 2021 - Painting Joy Mural Co.
                </StyledP>
            </footer>
        </>
    );
};

export default AdminLogin;
