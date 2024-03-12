import axiosInstance from './axiosInstance';

export function getAllOrder(params) {
    return axiosInstance.get('/api/order', { params });
}
