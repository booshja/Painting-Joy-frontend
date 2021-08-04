// dependencies
import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
// components
import {
    Navbar,
    TitleLogo,
    NavFooter,
    NewDisplay,
    AboutMe,
    PageTitle,
    GoBack,
    ContactForm,
} from "./components";
// containers
import { Header, Homepage } from "./containers";

const Router = () => (
    <>
        <BrowserRouter>
            <Header />
            <main>
                <TitleLogo />
                {/* <Navbar /> */}
                <Switch>
                    <Route exact path="/">
                        <Homepage>
                            <GoBack />
                            {/* <NewDisplay variant="mural" />
                        <NewDisplay variant="store" /> */}
                            {/* <AboutMe /> */}
                            <ContactForm />
                        </Homepage>
                    </Route>
                </Switch>
            </main>
            {/* <Footer /> */}
        </BrowserRouter>
    </>
);

export default Router;
