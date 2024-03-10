import axiosInstance from './axiosInstance';

export function fetchAllCategory() {
    return axiosInstance.get('/api/category');
}
