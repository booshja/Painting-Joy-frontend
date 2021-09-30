// dependencies
import React, { useContext } from "react";
import styled from "styled-components";
// components
import { Route } from "react-router-dom";
import { Header } from "./";
import { Footer, TitleLogo } from "../components";
// context
import MenuContext from "../context/MenuContext";
// breakpoints
import { breakpoints } from "../breakpoints";

const StyledBackground = styled.div`
    width: 100%;
    min-height: 100vh;

    ${breakpoints("background-color", "", [{ 1024: "#ffffff" }])}
    ${breakpoints("width", "px", [{ 1024: 770 }])}
    ${breakpoints("max-width", "px", [{ 1024: 780 }])}
`;

const StyledMain = styled.main``;

const PublicRoute = ({ children, ...rest }) => {
    // set up context
    const { menuOpen } = useContext(MenuContext);

    return menuOpen ? (
        <Header />
    ) : (
        <StyledBackground>
            <Header />
            <StyledMain>
                <TitleLogo />
                <Route {...rest} render={() => children} />
            </StyledMain>
            <Footer />
        </StyledBackground>
    );
};

export default PublicRoute;
