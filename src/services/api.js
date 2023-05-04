import axios from 'axios';
const API_URL = "http://localhost:5000/api";
// console.log(API_URL);

export const loginUser = (username, password) => {
  return axios
    .post(`${API_URL}/login`, { username, password })
    .then((response) => response.json());
};

export const registerUser = (username, password, email) => {
  return fetch(`${API_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password, email }),
  }).then((response) => response.json());
};

export const getUser = (userId) => {
  return fetch(`${API_URL}/users/${userId}`).then((response) =>
    response.json()
  );
};

export const addProduct = (product) => {
  return fetch(`${API_URL}/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  }).then((response) => response.json());
};
