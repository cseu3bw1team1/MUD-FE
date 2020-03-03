import React from "react";
import styled from "styled-components";
import { color } from "../styles";

const StyledGameCard = styled.div`
    width: 950px;
    height: 450px;
    background: ${color.white};
    margin: 100px auto;
    padding: 70px;
    border-radius: 10px;
    box-shadow: 0 0 30px ${color.primary_shadow};
`;

const GameCard = ({ children }) => {
    return <StyledGameCard>{children}</StyledGameCard>;
};

export default GameCard;
