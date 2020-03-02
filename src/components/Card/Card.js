import React from "react";
import styled from "styled-components";
import { color } from "../styles";
import image from "./Graphics.jpg";

const StyledCard = styled.div`
    width: 950px;
    display: flex;
    justify-content: space-between;
    background: ${color.white};
    margin: 100px auto;
    padding: 70px;
    border-radius: 10px;
    box-shadow: 0 0 30px ${color.primary_shadow};
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    border-right: 1px solid ${color.light};
    width: 300px;
`;

const Image = styled.img`
    max-width: 600px;
`;

const Card = ({ children }) => {
    return (
        <StyledCard>
            <Content>{children}</Content>
            <Image src={image} />
        </StyledCard>
    );
};

export default Card;
