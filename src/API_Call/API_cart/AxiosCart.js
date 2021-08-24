import axios from "axios";
require('dotenv').config()

const AxiosCart = axios.create({
    baseURL: process.env.REACT_APP_API_URL_GIOHANG,
    headers: {
        "content-type": "application/json"
    },
    //withCredentials: true
});
export default AxiosCart;