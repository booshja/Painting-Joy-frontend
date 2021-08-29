// dependencies
import React from "react";
import styled from "styled-components";
// components
import { AdminPageTitle, LoginForm } from "../components";
import { AdminHeader } from "../containers";

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

const AdminLogin = () => {
    return (
        <>
            <AdminHeader login={true} />
            <main>
                <StyledAdminLogin>
                    <AdminPageTitle>Login</AdminPageTitle>
                    <LoginForm />
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
