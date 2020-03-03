import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import generator from "generate-maze";

import GameCard from "../components/Card/GameCard";

const Play = () => {
    const InitEndpoint = "https://lambda-mud-test.herokuapp.com/api/adv/init/";
    const [gameData, setGameData] = useState(null);
    const [maze, setMaze] = useState([]);

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

        const generatedMaze = generator(10, 5);
        setMaze(generatedMaze);
    }, []);

    console.log("gameData is: ", gameData);
    console.log("Maze is: ", maze);

    return (
        <GameCard>
            <Map>
                {maze.map((_, idx) => (
                    <Row key={idx}>
                        {maze[idx].map((cell, cellIdx) => (
                            <Cell 
                                key={cellIdx}
                                top={cell.top}
                                right={cell.right}
                                bottom={cell.bottom}
                                left={cell.left}
                                >
                                {/* <span>x: {cell.x}</span>
                                <span>y: {cell.y}</span> */}
                            </Cell>
                        ))}
                    </Row>
                ))}
            </Map>
        </GameCard>
    );
};

export default Play;

const Cell = styled.div`
    background: white;
    border: 1px solid black;
    ${(props) => props.top === true ? "border-top: 5px inset blue;" : "border-top: 5px solid transparent;"}
    ${(props) => props.right === true ? "border-right: 5px inset blue;" : "border-right: 5px solid transparent;"}
    ${(props) => props.bottom === true ? "border-bottom: 5px inset blue;" : "border-bottom: 5px solid transparent;"}
    ${(props) => props.left === true ? "border-left: 5px inset blue;" : "border-left: 5px solid transparent;"}
    padding: 1px;
    margin: 1px;
    width: 50px;
    height: 50px;

    span {
        display: block;
    }
`;

const Row = styled.div`
    display: flex;
    margin: 2px;
`;

const Map = styled.div`
    display: flex;
    flex-direction: column;
    width: max-content;
`;