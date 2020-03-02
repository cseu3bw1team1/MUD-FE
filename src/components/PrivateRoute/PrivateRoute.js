import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {

    const hasKey = () => Boolean(localStorage.getItem("dungeonKey"));

    return (
        <Route
            {...rest}
            render={props =>
                hasKey() ? <Component {...props} /> : <Redirect to="/login" />
            }
        />
    );
};

export default PrivateRoute;
