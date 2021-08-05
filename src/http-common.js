import axios from "axios";

const url = 'http://lapiemyszczyty.ct8.pl'

export const HTTP = axios.create({
    url: url,
    baseURL: url,
    withCredentials: false,
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
    }
})
