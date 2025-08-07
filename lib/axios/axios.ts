import axios from 'axios';

const baseURL = 'https://randomuser.me/';

const http = axios.create({
    baseURL,
    // headers: {
    //     "Content-Type": "application/json",
    // },
    // withCredentials: true,
});


export default http;
