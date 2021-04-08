import axios from "axios";

const url = 'http://localhost:3001'

export const HTTP = axios.create({
    url: url,
    baseURL: url,
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
    }
})
