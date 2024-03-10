import axiosInstance from './axiosInstance';

export function fetchAllProduct(page) {
    return axiosInstance.get(`/api/product?page=${page}`);
}

export function addNewProduct({ formData }) {
    return axiosInstance.post('/api/product', formData);
}

export function editProduct({ id, data }) {
    return axiosInstance.put(`/api/product/${id}`, data);
}

export function deleteProduct(id) {
    return axiosInstance.delete(`/api/product/${id}`);
}
