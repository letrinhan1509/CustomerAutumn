import axios from "axios";
require('dotenv').config()

const AxiosUser = axios.create({
    baseURL: process.env.REACT_APP_API_URL_KHACHHANG,
    headers: {
        "content-type": "application/json"
    }
});
export default AxiosUser;