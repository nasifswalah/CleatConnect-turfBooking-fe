import axios from "axios";

const AxiosInstance = axios.create({
    baseURL: process.env.BASE_URL
});

AxiosInstance.interceptors.request.use((request) => {
    const token = localStorage.getItem('token');
    request.headers['Authorization'] = token;
    return request;
});

AxiosInstance.interceptors.response.use((response) => {
    return response;
},
(error) => {
    if(error.response && error.response.status === 401){
        window.location.href = '/';
        localStorage.clear();
        console.log("Unauthorized user");
    }
    return Promise.reject(error);
})

export default AxiosInstance;

