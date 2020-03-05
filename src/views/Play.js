import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axios.js";
import styled from "styled-components";
import API from "../utils/api";
import GameCard from "../components/Card/GameCard";

const Play = () => {
    const [gameData, setGameData] = useState(null);
    const [mapData, setMapData] = useState([]);
    const [location, setLocation] = useState(0);

    useEffect(() => {
        axiosWithAuth()
            .get(API.BASE_URL + API.INIT)
            .then(res => setGameData(res.data))
            .catch(err => console.log("Error: ", err.message));

        axiosWithAuth()
            .get(API.BASE_URL + API.MAP)
            .then(res => {
                const data = res.data.map;
                data[0].player = true;
                setMapData(data);
            })
            .catch(err => console.log("Error: ", err.message));
    }, []);

    const handleMovement = e => {
        e.preventDefault();
        let loc = location;
        let tempMap = [...mapData];

        if (e.target.innerText === "Up" || e.key === "ArrowUp") {
            console.log("GOING UP!");
            if (tempMap[loc].n_to) {
                tempMap[loc].player = false;
                tempMap[loc - 3].player = true;
                setLocation(loc - 3);
                setMapData(tempMap);
            } else {
                console.log("Wall!");
            }
        }
        if (e.target.innerText === "Right" || e.key === "ArrowRight") {
            console.log("GOING RIGHT!");
            if (tempMap[loc].e_to) {
                tempMap[loc].player = false;
                tempMap[loc + 1].player = true;
                setLocation(loc + 1);
                setMapData(tempMap);
            } else {
                console.log("Wall!");
            }
        }
        if (e.target.innerText === "Down" || e.key === "ArrowDown") {
            console.log("GOING DOWN!");
            if (tempMap[loc].s_to) {
                tempMap[loc].player = false;
                tempMap[loc + 3].player = true;
                setLocation(loc + 3);
                setMapData(tempMap);
            } else {
                console.log("Wall!");
            }
        }
        if (e.target.innerText === "Left" || e.key === "ArrowLeft") {
            if (tempMap[loc].w_to) {
                console.log("GOING LEFT!");
                tempMap[loc].player = false;
                tempMap[loc - 1].player = true;
                setLocation(loc - 1);
                setMapData(tempMap);
            } else {
                console.log("Wall!");
            }
        }
    };

    return (
        <GameCard>
            <button onClick={handleMovement}>Up</button>
            <button onClick={handleMovement}>Right</button>
            <button onClick={handleMovement}>Down</button>
            <button onClick={handleMovement}>Left</button>
            <Map>
                {mapData.map((cell, idx) => (
                    <Cell
                        key={idx}
                        top={cell.n_to}
                        right={cell.e_to}
                        bottom={cell.s_to}
                        left={cell.w_to}
                        player={cell.player}
                    >
                        {cell.title}
                    </Cell>
                ))}
            </Map>
        </GameCard>
    );
};

export default Play;

const Cell = styled.div`
    padding: 10px;
    ${({ player }) =>
        player === true ? "background: #df00ff;" : "background: white;"}
    ${({ top }) =>
        top === 0
            ? "border-top: 5px inset blue;"
            : "border-top: 5px solid transparent;"}
    ${({ right }) =>
        right === 0
            ? "border-right: 5px inset blue;"
            : "border-right: 5px solid transparent;"}
    ${({ bottom }) =>
        bottom === 0
            ? "border-bottom: 5px inset blue;"
            : "border-bottom: 5px solid transparent;"}
    ${({ left }) =>
        left === 0
            ? "border-left: 5px inset blue;"
            : "border-left: 5px solid transparent;"}

    width: 20px;
    height: 20px;
    text-align: center;

    span {
        display: block;
    }
`;

const Map = styled.div`
    display: flex;
    width: 150px;
    flex-direction: row;
    flex-wrap: wrap;
`;
