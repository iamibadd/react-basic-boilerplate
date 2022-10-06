import axios from 'axios';
import {env} from '../config/environment-config';

const api = axios.create({
    baseURL: env.API_ENDPOINT_URL,
    timeout: 60000
});

// API request interceptor
api.interceptors.request.use(config => {
    return config;
}, error => {
    // Handle request error here
    return Promise.reject(error);
})

// API response interceptor
api.interceptors.response.use((response) => {
    return response.data;
}, (error) => {
    // Handle response error here
    return Promise.reject({message: error?.response?.data?.message || error?.response?.data});
});

export default api;
