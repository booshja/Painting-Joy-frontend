// dependencies
import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
// components
import { TitleLogo, Footer } from "./components";
// containers
import {
    Cart,
    Checkout,
    CheckoutCancel,
    ContactMe,
    ContactOops,
    ContactSuccess,
    Header,
    Homepage,
    Murals,
    Mural,
    Store,
    StoreItem,
    CheckoutSuccess,
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
                    <Route exact path="/store">
                        <Store />
                    </Route>
                    <Route exact path="/store/item/:itemId">
                        <StoreItem />
                    </Route>
                    <Route exact path="/cart">
                        <Cart />
                    </Route>
                    <Route exact path="/checkout">
                        <Checkout />
                    </Route>
                    <Route exact path="/store/order/cancel">
                        <CheckoutCancel />
                    </Route>
                    <Route exact path="/store/order/success">
                        <CheckoutSuccess />
                    </Route>
                </Switch>
            </main>
            <Footer />
        </BrowserRouter>
    </>
);

export default Router;
