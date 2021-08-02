// dependencies
import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
// components
import { Navbar, TitleLogo, NavFooter, NewDisplay } from "./components";
// containers
import { Header } from "./containers";

const Router = () => (
    <>
        <BrowserRouter>
            <Header />
            <main>
                <TitleLogo />
                {/* <Navbar /> */}
                <Switch>
                    <Route exact path="/">
                        {/* <NewDisplay variant="mural" />
                        <NewDisplay variant="store" /> */}
                    </Route>
                </Switch>
                <NavFooter />
            </main>
            {/* <Footer /> */}
        </BrowserRouter>
    </>
);

export default Router;
