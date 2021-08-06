// dependencies
import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
// components
import { TitleLogo, Footer } from "./components";
// containers
import {
    ContactMe,
    ContactOops,
    ContactSuccess,
    Header,
    Homepage,
    Murals,
    Mural,
} from "./containers";

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
                    <Route exact path="/murals">
                        <Murals />
                    </Route>
                    <Route exact path="/murals/:muralId">
                        <Mural />
                    </Route>
                    <Route exact path="/contact">
                        <ContactMe />
                    </Route>
                    <Route exact path="/contact/success">
                        <ContactSuccess />
                    </Route>
                    <Route exact path="/contact/oops">
                        <ContactOops />
                    </Route>
                </Switch>
            </main>
            <Footer />
        </BrowserRouter>
    </>
);

export default Router;
