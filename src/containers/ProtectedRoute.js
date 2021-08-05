import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
// context
import AdminContext from "../context/AdminContext";

const ProtectedRoute = ({ children, ...rest }) => {
    // set up context
    const { admin } = useContext(AdminContext);
    return (
        <Route
            {...rest}
            render={() => (admin ? children : <Redirect to="/" />)}
        />
    );
};

export default ProtectedRoute;
