import axios from 'axios';

axios.defaults.baseURL = 'https://6442bb2376540ce225942d8c.mockapi.io/api/v1/';

export const getUsers = async () => {
  const response = await axios.get(`users`);
  return response.data;
};

export const updateUser = async (id, followers, check) => {
  await axios.put(`users/${id}`, { followers, check });
};
