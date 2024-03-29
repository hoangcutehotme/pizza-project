import axios from 'axios';
const url = "http://localhost:3000";

export function fetchAllProduct(page) {
    const token = localStorage.getItem("token");
    return axios.get(`${url}/api/product?page=${page}`,

        {
            headers: {
                Authorization: `Bearer ${token}`,
                ContentType: 'multipart/form-data',
            }
        });
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

