import axios from 'axios';
import {env} from '../config/environment-config';

const service = axios.create({
    baseURL: env.API_ENDPOINT_URL,
    timeout: 60000
});

// API request interceptor
service.interceptors.request.use(config => {
    return config;
}, error => {
    // Do something with request error here
    return Promise.reject(error);
})

// API response interceptor
service.interceptors.response.use((response) => {
    return response.data;
}, (error) => {
    let notificationParam = {
        message: '',
        duration: 3
    }
    if (error) {
        notificationParam.message = 'Api Failure';
        notificationParam.description = error?.response?.data?.message || error?.response?.data;
    }
    // Do something with request error here
    return Promise.reject(error);
});

export default service;
