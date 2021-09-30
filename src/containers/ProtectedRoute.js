// dependencies
import React, { useContext } from "react";
import styled from "styled-components";
// components
import { Route, Redirect } from "react-router-dom";
import { AdminNav, LoadingSpinner } from "../components";
// hooks
import { useAuth0 } from "@auth0/auth0-react";
import AdminHeader from "./AdminHeader";
// context
import MenuContext from "../context/MenuContext";
// breakpoints
import { breakpoints } from "../breakpoints";

const StyledMain = styled.main`
    height: 100%;
    min-height: calc(100vh - 60px);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f6f7f1;

    ${breakpoints("flex-direction", "", [{ 1024: "row" }])}
    ${breakpoints("align-items", "", [{ 1024: "normal" }])};
`;

const StyledLoadingMain = styled.main`
    height: 100%;
    min-height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ProtectedRoute = ({ children, ...rest }) => {
    // set up hooks
    const { isAuthenticated, isLoading } = useAuth0();
    // set up context
    const { menuOpen } = useContext(MenuContext);

    if (isLoading)
        return (
            <StyledLoadingMain>
                <LoadingSpinner />
            </StyledLoadingMain>
        );

    return (
        <>
            {!isAuthenticated && <Redirect to="/admin/login" />}
            <>
                {isAuthenticated && !menuOpen && (
                    <>
                        <AdminHeader />
                        <StyledMain>
                            <AdminNav />
                            <Route {...rest}>{children}</Route>
                        </StyledMain>
                    </>
                )}
                {isAuthenticated && menuOpen && <AdminHeader />}
            </>
        </>
    );
};

export default ProtectedRoute;
