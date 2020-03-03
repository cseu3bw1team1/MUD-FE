import React, { useState, useEffect } from "react";
import axios from "axios";

import GameCard from "../components/Card/GameCard";

const Play = () => {
    const InitEndpoint = "https://lambda-mud-test.herokuapp.com/api/adv/init/";
    const [gameData, setGameData] = useState(null);

    useEffect(() => {
        axios
            .create({
                headers: { 'Authorization': 'Token ' + localStorage.getItem("dungeonKey") }
            })
            .get(InitEndpoint)
            .then(res => setGameData(res.data))
            .catch(err => console.log("Error: ", err.message));
    }, []);

    console.log("gameData is: ", gameData);

    return <GameCard>GAME SCREEN</GameCard>;
};

export default Play;
