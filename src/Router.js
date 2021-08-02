// dependencies
import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
// protected route wrapper
// import ProtectedRoute from "./containers/ProtectedRoute/ProtectedRoute";
// routes
// import Homepage from "./containers/Hompage/Homepage";
// import Murals from "./containers/Murals/Murals";
// import Mural from "./containers/Mural/Mural";
// import MoreArt from "./containers/MoreArt/MoreArt";
// import ContactMe from "./containers/ContactMe/ContactMe";
// import Store from "./containers/Store/Store";
// import Item from "./containers/Item/Item";
// import Cart from "./containers/Cart/Cart";
// import Checkout from "./containers/Checkout/Checkout";
// components
import { Navbar, TitleLogo, TitleLogoFooter } from "./components";
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
                <TitleLogoFooter />
            </main>
            {/* <Footer /> */}
        </BrowserRouter>
    </div>
);

export default Router;
