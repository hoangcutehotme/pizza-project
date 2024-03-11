import axios from 'axios'

const baseUrl = "http://localhost:3001";
// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZTkzMTFlMTQyYTMyNTE5ODQzZTFiZSIsImlhdCI6MTcwOTc4MTMzMCwiZXhwIjoxNzE3NTU3MzMwfQ.MZ7sPwxfzCCY_ukYNFKHj5s9YZ_WEGppSWxpxwYkxRM';
const token = localStorage.getItem("token");

const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {
        'Authorization': `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
    }
});

export default axiosInstance;