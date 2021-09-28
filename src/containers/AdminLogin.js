// dependencies
import React from "react";
import styled from "styled-components";
// components
import { AdminPageTitle, LoadingSpinner } from "../components";
import { AdminHeader } from "../containers";
import { Redirect } from "react-router-dom";
// context
import { useAuth0 } from "@auth0/auth0-react";
// hooks
import { useHistory } from "react-router-dom";

const StyledAdminLogin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
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
`;

const AdminLogin = () => {
    // set up auth context
    const { loginWithRedirect, isLoading, isAuthenticated } = useAuth0();
    // set up history
    const history = useHistory();

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
