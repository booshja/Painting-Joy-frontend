// dependencies
import React, { useContext } from "react";
import { Route } from "react-router-dom";
// components
import { Header } from "./";
import { Footer, TitleLogo } from "../components";
// context
import MenuContext from "../context/MenuContext";

const PublicRoute = ({ children, ...rest }) => {
    // set up context
    const { menuOpen } = useContext(MenuContext);

    return menuOpen ? (
        <Header />
    ) : (
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
