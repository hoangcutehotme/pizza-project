import axios from 'axios'

const baseUrl = "http://localhost:3000";

const token = localStorage.getItem("token");

const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {
        'Authorization': `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
    }
});

export default axiosInstance;