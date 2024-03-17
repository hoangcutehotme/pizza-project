import axios from "axios";

const url = "http://localhost:3000";

export function getAllOrder(params) {
    const token = localStorage.getItem("token");
    return axios.get(`${url}/api/order`, {
        params: params,
        headers: {
            Authorization: `Bearer ${token}`,
            ContentType: 'multipart/form-data',
        }
    });
}

export function getOrderById(id) {
    const token = localStorage.getItem("token");
    return axios.get(`${url}/api/order/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
            ContentType: 'multipart/form-data',
        }
    });
}

