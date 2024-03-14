import axios from 'axios';
import { axiosInstancenotoken } from './axiosInstance.jsx';
const url = "http://localhost:3000";

export function fetchAllProduct(limit) {
    return axiosInstancenotoken.get(`/api/product?limit=${limit}`);

}

export function fetchBestPizza() {
    return axiosInstancenotoken.get(`/api/product/cat/?catName=Pizza&limit=4&page=1`);

}

export function addNewProduct({ formData }) {
    const token = localStorage.getItem("token");
    return axios.post(`${url}/api/product`, formData,

        {
            headers: {
                Authorization: `Bearer ${token}`,
                ContentType: 'multipart/form-data',
            }
        })

        ;

}

export function editProduct({ id, data }) {
    const token = localStorage.getItem("token");
    return axios.put(`${url}/api/product/${id}`, data,

        {
            headers: {
                Authorization: `Bearer ${token}`,
                ContentType: 'multipart/form-data',
            }
        })

        ;
    // return axiosInstance.put(`/api/product/${id}`, data);
}

export function deleteProduct(id) {
    const token = localStorage.getItem("token");
    return axios.delete(`${url}/api/product/${id}`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
                ContentType: 'multipart/form-data',
            }
        }
    );
}

export function getSearchProduct(search) {
    const token = localStorage.getItem("token");
    return axios.get(`${url}/api/product/search?search=${search}`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
                ContentType: 'multipart/form-data',
            }
        }
    );
}

