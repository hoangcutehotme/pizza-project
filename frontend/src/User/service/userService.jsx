import axios from "axios";
//
const url = "http://localhost:3000";

//Auth

const loginAPI = async (formData) => {
  return axios.post(`${url}/api/auth/login`, formData);
}

const forgotPass = (formData) => {
  return axios.post(`${url}/api/auth/forgot-password`, formData);
}

const verifyEmail = (email, token) => {
  return axios.post(`${url}/api/auth/verify-token/${email}`, { token: token });
}

const resetPass = (email, formData) => {
  return axios.post(`${url}/api/auth/reset-password/${email}`, formData)
}

const signupUser = (formData) => {
  return axios.post(`${url}/api/user`, formData);
}
//UpdateUser

const updateUser = (formData, id) => {
  const token = localStorage.getItem("token");
  return axios.patch(`${url}/api/user/${id}`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      ContentType: 'multipart/form-data',
    }
  });
}

const changePass = (formData, id) => {
  const token = localStorage.getItem("token");
  return axios.post(`${url}/api/user/change-pass/${id}`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      ContentType: 'multipart/form-data',
    }
  });
}

const updateContact = (formData, idContact) => {
  const token = localStorage.getItem("token");
  const decodedToken = JSON.parse(atob(token.split(".")[1]));
  return axios.patch(`${url}/api/user/${decodedToken.id}/contact/${idContact}`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      ContentType: 'multipart/form-data',
    }
  });
}

const deleteContact = async (idContact, idUser) => {
  const token = localStorage.getItem("token");
  const api = `${url}/api/user/del-contact/${idUser}/${idContact}`
  return axios.delete(api, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

}

const addContact = async (formData) => {
  const token = localStorage.getItem("token");
  const decodedToken = JSON.parse(atob(token.split(".")[1]));
  return axios.put(`${url}/api/user/add-contact/${decodedToken.id}`, formData, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

const updateDefaultContact = async (id) => {
  const token = localStorage.getItem("token");
  const decodedToken = JSON.parse(atob(token.split(".")[1]));
  return axios.post(`${url}/api/user/set-default-contact/${decodedToken.id}/${id}`, {}, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}

// Order

const getOrderByUserId = () => {
  const token = localStorage.getItem("token");
  const decodedToken = JSON.parse(atob(token.split(".")[1]));
  return axios.get(`${url}/api/order/user/${decodedToken.id}?sort=-dateOrdered&limit=10&page=1`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}

//Product

const getProductById = (id) => {
  return axios.get(`${url}/api/product/${id}`);
}


export {
  loginAPI, forgotPass, verifyEmail, resetPass, signupUser,
  updateUser, changePass, updateContact, deleteContact, addContact, updateDefaultContact,
  getOrderByUserId,
  getProductById
}
