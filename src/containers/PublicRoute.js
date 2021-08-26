// dependencies
import React from "react";
import { Route } from "react-router-dom";
// components
import { Header } from "./";
import { Footer, TitleLogo } from "../components";

const PublicRoute = ({ children, ...rest }) => {
    return (
        <>
            <Header />
            <main>
                <TitleLogo />
                <Route {...rest} render={() => children} />
            </main>
            <Footer />
        </>
    );
};

export default PublicRoute;
