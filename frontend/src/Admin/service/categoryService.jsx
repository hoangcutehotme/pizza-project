import axios from 'axios';

const url = "http://localhost:3000";

export function fetchAllCategory() {
    const token = localStorage.getItem("token");
    return axios.get(`${url}/api/category`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
                ContentType: 'multipart/form-data',
            }
        });
}
