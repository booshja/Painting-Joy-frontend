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
    max-width: 780px;
    min-height: 100vh;

    ${breakpoints("background-color", "", [{ 1024: "#ffffff" }])}
    ${breakpoints("width", "px", [{ 1024: 770 }])}
`;

const PublicRoute = ({ children, ...rest }) => {
    // set up context
    const { menuOpen } = useContext(MenuContext);

    return menuOpen ? (
        <Header />
    ) : (
        <StyledBackground>
            <Header />
            <main>
                <TitleLogo />
                <Route {...rest} render={() => children} />
            </main>
            <Footer />
        </StyledBackground>
    );
};

export default PublicRoute;
