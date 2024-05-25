import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5500/api', // Your backend base URL
    timeout: 2500,
});

export default axiosInstance;