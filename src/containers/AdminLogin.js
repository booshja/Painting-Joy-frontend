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
    background-color: #ffffff;
    min-height: 100vh;
    width: 100%;

    ${breakpoints("padding", "", [
        { 768: "0 25%" },
        { 1024: "0 31%" },
        { 1280: "0 35%" },
        { 1440: "0 6.6rem" },
    ])}

    ${breakpoints("width", "px", [{ 1440: 600 }])}
`;

const StyledContainer = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
`;

const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledAdminHeader = styled(AdminHeader)`
    width: 100%;
    align-self: flex-start;
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
    // set up auth context/hooks
    const { loginWithRedirect, isLoading, isAuthenticated } = useAuth0();

    // if auth0 loading, display loading spinner
    if (isLoading)
        return (
            <StyledAdminLogin>
                <LoadingSpinner />
            </StyledAdminLogin>
        );

    // if user already authenticated, redirect them to the admin dashboard
    if (isAuthenticated) return <Redirect to="/admin/dashboard" />;

    return (
        <StyledContainer>
            <StyledAdminHeader login={true} />
            <StyledMain>
                <StyledAdminLogin>
                    <AdminPageTitle>Login</AdminPageTitle>
                    <StyledLoginButton onClick={() => loginWithRedirect()}>
                        Click Here To Log In
                    </StyledLoginButton>
                </StyledAdminLogin>
            </StyledMain>
            <footer>
                <StyledP>
                    Copyright &copy; 2021 - Painting Joy Mural Co.
                </StyledP>
            </footer>
        </StyledContainer>
    );
};

export default AdminLogin;
