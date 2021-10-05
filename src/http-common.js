import axios from "axios";

const url = 'https://lapiemyszczyty.pl/'

export const HTTP = axios.create({
    url: url,
    baseURL: url,
    withCredentials: false,
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
    }
})
