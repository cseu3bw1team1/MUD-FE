import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./views/Home";
import Register from "./views/Register";
import Login from "./views/Login";
import Play from "./views/Play";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
    return (
        <Switch>
            <Route path="/register">
                <Register />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            <PrivateRoute path="/play" component={Play} />
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    );
}

export default App;
