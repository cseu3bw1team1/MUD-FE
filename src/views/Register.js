import React from "react";

import Card from "../components/Card/Card";
import Title from "../components/Title/Title";
import RegisterForm from "../components/Form/Register";

const Register = () => {
    return (
        <Card>
            <Title>Dungeon Game</Title>
            <RegisterForm />
        </Card>
    );
};

export default Register;
