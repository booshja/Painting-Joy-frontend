// dependencies
import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
// components
import { Elements } from "@stripe/react-stripe-js";
// containers
import {
    AdminItem,
    AdminItems,
    AdminLogin,
    AdminMessages,
    AdminMural,
    AdminMurals,
    Cart,
    CartError,
    Checkout,
    CheckoutCancel,
    CheckoutSuccess,
    ContactMe,
    ContactOops,
    ContactSuccess,
    Homepage,
    Murals,
    Mural,
    ProtectedRoute,
    PublicRoute,
    Store,
    StoreItem,
} from "./containers";

const promise = loadStripe(process.env.REACT_APP_STRIPE_API_KEY);

const Router = () => (
    <>
        <BrowserRouter>
            <Switch>
                <PublicRoute exact path="/">
                    <Homepage />
                </PublicRoute>
                <PublicRoute exact path="/murals">
                    <Murals />
                </PublicRoute>
                <PublicRoute exact path="/murals/:muralId">
                    <Mural />
                </PublicRoute>
                <PublicRoute exact path="/contact">
                    <ContactMe />
                </PublicRoute>
                <PublicRoute exact path="/contact/success">
                    <ContactSuccess />
                </PublicRoute>
                <PublicRoute exact path="/contact/oops">
                    <ContactOops />
                </PublicRoute>
                <PublicRoute exact path="/store">
                    <Store />
                </PublicRoute>
                <PublicRoute exact path="/store/item/:itemId">
                    <StoreItem />
                </PublicRoute>
                <PublicRoute exact path="/cart">
                    <Cart />
                </PublicRoute>
                <Route exact path="/checkout">
                    <Elements stripe={promise}>
                        <Checkout />
                    </Elements>
                </Route>
                <PublicRoute exact path="/store/order/cancel">
                    <CheckoutCancel />
                </PublicRoute>
                <PublicRoute exact path="/store/order/success">
                    <CheckoutSuccess />
                </PublicRoute>
                <PublicRoute exact path="/cart/error">
                    <CartError />
                </PublicRoute>
                <Route exact path="/admin/login">
                    <AdminLogin />
                </Route>
                <ProtectedRoute exact path="/admin/messages">
                    <AdminMessages />
                </ProtectedRoute>
                <ProtectedRoute exact path="/admin/murals">
                    <AdminMurals />
                </ProtectedRoute>
                <ProtectedRoute exact path="/admin/murals/new">
                    <AdminMural variant="Add" />
                </ProtectedRoute>
                <ProtectedRoute exact path="/admin/murals/edit/:id">
                    <AdminMural variant="Edit" />
                </ProtectedRoute>
                <ProtectedRoute exact path="/admin/items">
                    <AdminItems />
                </ProtectedRoute>
                <ProtectedRoute exact path="/admin/items/new">
                    <AdminItem variant="Add" />
                </ProtectedRoute>
                <ProtectedRoute exact path="/admin/items/edit/:id">
                    <AdminItem variant="Edit" />
                </ProtectedRoute>
                {/* <Route>
                    <Redirect to="/" />
                </Route> */}
            </Switch>
        </BrowserRouter>
    </>
);

export default Router;
