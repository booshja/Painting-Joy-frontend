// dependencies
import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
// components
import { TitleLogo, Footer } from "./components";
// containers
import { Header, Homepage } from "./containers";

const Router = () => (
    <>
        <BrowserRouter>
            <Header />
            <main>
                <TitleLogo />
                <Switch>
                    <Route exact path="/">
                        <Homepage />
                    </Route>
                </Switch>
            </main>
            <Footer />
        </BrowserRouter>
    </>
);

export default Router;
