// dependencies
import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
// components
import { Navbar, TitleLogo, NavFooter } from "./components";
// containers
import { Header } from "./containers";

const Router = () => (
    <div className="App">
        <BrowserRouter>
            <Header />
            <main>
                <TitleLogo />
                {/* <Navbar /> */}
                <Switch>
                    <Route exact path="/">
                        {/* <Homepage /> */}
                        <p>hi.</p>
                    </Route>
                </Switch>
                <NavFooter />
            </main>
            {/* <Footer /> */}
        </BrowserRouter>
    </div>
);

export default Router;
