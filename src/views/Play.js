import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import GameCard from "../components/Card/GameCard";

const sampleMap = [
    {
        id: 1,
        to_n: false,
        to_e: true,
        to_s: true,
        to_w: false,
        player: true
    },
    {
        id: 2,
        to_n: false,
        to_e: false,
        to_s: false,
        to_w: true
    },
    {
        id: 3,
        to_n: false,
        to_e: false,
        to_s: true,
        to_w: false
    },
    {
        id: 4,
        to_n: true,
        to_e: true,
        to_s: false,
        to_w: false
    },
    {
        id: 5,
        to_n: false,
        to_e: true,
        to_s: true,
        to_w: true
    },
    {
        id: 6,
        to_n: true,
        to_e: false,
        to_s: false,
        to_w: true
    },
    {
        id: 7,
        to_n: false,
        to_e: true,
        to_s: false,
        to_w: false
    },
    {
        id: 8,
        to_n: true,
        to_e: true,
        to_s: false,
        to_w: true
    },
    {
        id: 9,
        to_n: false,
        to_e: false,
        to_s: false,
        to_w: true
    }
];

const Play = () => {
    const InitEndpoint = "http://127.0.0.1:8000/api/adv/init/";
    const MapEndpoint = "http://127.0.0.1:8000/api/adv/map/";
    const [gameData, setGameData] = useState(null);
    const [mapData, setMapData] = useState([]);
    const [location, setLocation] = useState(0);

    useEffect(() => {
        axios
            .create({
                headers: {
                    Authorization: "Token " + localStorage.getItem("dungeonKey")
                }
            })
            .get(InitEndpoint)
            .then(res => setGameData(res.data))
            .catch(err => console.log("Error: ", err.message));

        axios
            .create({
                headers: {
                    Authorization: "Token " + localStorage.getItem("dungeonKey")
                }
            })
            .get(MapEndpoint)
            .then(res => setMapData(sampleMap))
            .catch(err => console.log("Error: ", err.message));
    }, []);

    const handleMovement = e => {
        let tempMap = [...mapData];

        if (e.target.innerText === "Up") {
            console.log("GOING UP!");
            if (tempMap[location].to_n) {
                tempMap[location].player = false;
                tempMap[location - 3].player = true;
                setLocation(location - 3);
                setMapData(tempMap);
            } else {
                console.log("Wall!");
            }
        }
        if (e.target.innerText === "Right") {
            console.log("GOING RIGHT!");
            if (tempMap[location].to_e) {
                tempMap[location].player = false;
                tempMap[location + 1].player = true;
                setLocation(location + 1);
                setMapData(tempMap);
            } else {
                console.log("Wall!");
            }
        }
        if (e.target.innerText === "Down") {
            console.log("GOING DOWN!");
            if (tempMap[location].to_s) {
                tempMap[location].player = false;
                tempMap[location + 3].player = true;
                setLocation(location + 3);
                setMapData(tempMap);
            } else {
                console.log("Wall!");
            }
        }
        if (e.target.innerText === "Left") {
            if (tempMap[location].to_w) {
                console.log("GOING LEFT!");
                tempMap[location].player = false;
                tempMap[location - 1].player = true;
                setLocation(location - 1);
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
                {sampleMap.map((cell, idx) => (
                    <Row key={idx}>
                        <Cell
                            key={cell.id}
                            top={cell.to_n}
                            right={cell.to_e}
                            bottom={cell.to_s}
                            left={cell.to_w}
                            player={cell.player}
                        >
                            {cell.id}
                        </Cell>
                    </Row>
                ))}
            </Map>
        </GameCard>
    );
};

export default Play;

const Cell = styled.div`
    padding: 10px;
    ${props =>
        props.player === true ? "background: #df00ff;" : "background: white;"}
    border: 1px solid black;
    ${props =>
        props.top === false
            ? "border-top: 5px inset blue;"
            : "border-top: 5px solid transparent;"}
    ${props =>
        props.right === false
            ? "border-right: 5px inset blue;"
            : "border-right: 5px solid transparent;"}
    ${props =>
        props.bottom === false
            ? "border-bottom: 5px inset blue;"
            : "border-bottom: 5px solid transparent;"}
    ${props =>
        props.left === false
            ? "border-left: 5px inset blue;"
            : "border-left: 5px solid transparent;"}

    width: 20px;
    height: 20px;
    text-align: center;

    span {
        display: block;
    }
`;

const Row = styled.div`
    display: flex;
`;

const Map = styled.div`
    display: flex;
    width: 150px;
    flex-direction: row;
    flex-wrap: wrap;
`;
