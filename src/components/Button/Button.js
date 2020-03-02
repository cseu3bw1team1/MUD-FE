import styled from "styled-components";
import { Link } from "react-router-dom";
import { color } from "../styles";

const Button = styled(Link)`
    background-color: ${color.primary};
    color: ${color.white};
    font-size: 20px;
    text-align: center;
    padding: 15px 20px;
    border-radius: 4px;
    text-decoration: none;
    border: 1px solid ${color.primary_shadow};
    transition: all 0.2s;

    &:hover {
        cursor: pointer;
        background-color: ${color.primary_shadow};
    }
`;

export default Button;
