import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.15.15.51:3333'
})

export default api;