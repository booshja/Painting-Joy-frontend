// dependencies
import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
// components
import { AdminHeader } from "./";
// context
// import AdminContext from "../context/AdminContext";
import MenuContext from "../context/MenuContext";

const ProtectedRoute = ({ children, ...rest }) => {
    // set up context
    // const { admin } = useContext(AdminContext);
    const { menuOpen } = useContext(MenuContext);

    return menuOpen ? (
        <AdminHeader />
    ) : (
        <>
            <AdminHeader />
            <main>
                {/* <Route
                    {...rest}
                    render={() => (admin ? children : <Redirect to="/" />)}
                /> */}
                <Route {...rest} render={() => children} />
            </main>
        </>
    );
};

export default ProtectedRoute;
