
import axios from "axios";
// import {
//     ,
// } from '@env'

const artBaseURL = 'https://api.artic.edu/api/v1/'

const instanceArt = axios.create({
    baseURL: artBaseURL,
});

// instanceArt.interceptors.response.use(
//     (result) => {
//         console.log(' instanceArt interceptors response 🟢', result);
//         return result
//     },
//     async (error) => {
//         console.log('error instanceArt interceptors 🔴', error);
//     }
// )

export default instanceArt
