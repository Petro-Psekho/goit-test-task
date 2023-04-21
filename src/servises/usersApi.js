import axios from 'axios';
axios.defaults.baseURL = 'https://6442bb2376540ce225942d8c.mockapi.io/api/v1/';

export const getUsers = async () => {
  const response = await axios.get(`users`);
  // console.log(response.data);
  return response.data;
};

// export const addContact = async ({ name, number }) => {
//   const response = await axios.post('/users', { name, number });
//   return response.data;
// };

// export const deleteContact = async id => {
//   const response = await axios.delete(`/users/${id}`);
//   return response.data;
// };
