import axios from "axios";

export const axiosWithAuth = () => {
    return axios.create({
        headers: {
            'Content-Type': 'application/json',
            Authorization: "Token " + localStorage.getItem("dungeonKey")
        }
    });
};
