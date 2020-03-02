import styled from "styled-components";
import { Link } from "react-router-dom";
import { color } from "../styles";

const Button = styled(Link)`
    background-color: ${color.primary};
    color: #ffffff;
    font-size: 20px;
    width: max-content;
    padding: 15px 20px;
    border-radius: 4px;
    text-decoration: none;
`;

export default Button;
