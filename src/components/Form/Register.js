import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { useForm } from "react-hook-form";
import styled from "styled-components";

import API from "../../utils/api";
import { color } from "../styles";

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;

    input {
        padding: 15px 30px;
        margin: 0 0 10px 0;
        border-radius: 4px;
        border: 1px solid ${color.secondary_light};
        font-size: 18px;
        transition: all 0.5s;

        &:focus {
            outline: 0;
            border-color: ${color.secondary};
        }
    }

    span {
        text-indent: 10px;
        padding: 10px;
        color: red;
    }

    button {
        background-color: ${color.primary};
        color: #ffffff;
        font-size: 20px;
        padding: 15px 20px;
        border-radius: 4px;
        text-decoration: none;
        border: 1px solid ${color.primary_shadow};
        transition: all 0.2s;

        &:hover {
            cursor: pointer;
            background-color: ${color.primary_shadow};
        }
    }
`;

const RegisterForm = ({ history }) => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        axios
            .post(API.BASE_URL + API.REGISTER, data)
            .then(res => {
                const { key } = res.data;
                localStorage.setItem("dungeonKey", key);
                history.push("/play");
            })
            .catch(err => console.log("Error: ", err));
    };

    return (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <input
                name="username"
                placeholder="Username"
                ref={register({ required: true })}
            />
            {errors.username && <span>This field is required</span>}
            <input
                name="password1"
                type="password"
                placeholder="Password"
                ref={register({ required: true })}
            />
            {errors.password1 && <span>This field is required</span>}
            <input
                name="password2"
                type="password"
                placeholder="Confirm password"
                ref={register({ required: true })}
            />
            {errors.password2 && <span>This field is required</span>}

            <button type="submit">Register & Play</button>
        </StyledForm>
    );
};

export default withRouter(RegisterForm);
