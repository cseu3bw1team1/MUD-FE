import React from "react";

import Card from "../components/Card/Card";
import Title from "../components/Title/Title";
import Paragraph from "../components/Paragraph/Paragraph";
import Button from "../components/Button/Button";

const Home = () => {
    return (
        <Card>
            <Title>Dungeon Game</Title>
            <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget tortor facilisis, pellentesque nisi in, molestie justo. Fusce et leo sed nisi tristique accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Paragraph>
            <Button to="/play">Play Game</Button>
        </Card>
    );
};

export default Home;
