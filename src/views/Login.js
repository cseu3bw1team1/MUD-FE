import React from "react";
import { Link } from "react-router-dom"

import Card from "../components/Card/Card";
import Title from "../components/Title/Title";
import LoginForm from "../components/Form/Login";

const Login = () => {
    return (
        <Card>
            <Title>Dungeon Game</Title>
            <LoginForm />
            New player? <Link to="/register">Register here</Link>
        </Card>
    );
};

export default Login;
