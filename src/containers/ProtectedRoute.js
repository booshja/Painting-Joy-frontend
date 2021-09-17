// dependencies
import React from "react";
import styled from "styled-components";
// components
import { Route, Redirect } from "react-router-dom";
import { LoadingSpinner } from "../components";
// hooks
import { useAuth0 } from "@auth0/auth0-react";

const StyledContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

// const ProtectedRoute = ({ component, ...args }) => {
//     // set up context
//     const { menuOpen } = useContext(MenuContext);

//     return menuOpen ? (
//         <AdminHeader />
//     ) : (
//         <>
//             <AdminHeader />
//             <main>
//                 <Route
//                     {...args}
//                     render={(props) => {
//                         const Comp = withAuthenticationRequired(component, {
//                             onRedirecting: () => (
//                                 <StyledContainer>
//                                     <LoadingSpinner />
//                                 </StyledContainer>
//                             ),
//                         });
//                         return <Comp {...props} />;
//                     }}
//                 />
//             </main>
//         </>
//     );
// };

const ProtectedRoute = ({ children, ...rest }) => {
    const { isAuthenticated, isLoading } = useAuth0();

    if (isLoading)
        return (
            <StyledContainer>
                <LoadingSpinner />
            </StyledContainer>
        );

    return (
        <Route {...rest}>
            {isAuthenticated ? children : <Redirect to="/admin/login" />}
        </Route>
    );
};

export default ProtectedRoute;
