import axios from 'axios';

axios.defaults.baseURL = 'https://6442bb2376540ce225942d8c.mockapi.io/api/v1/';

export const getUsers = async (check, page = 1) => {
  const res = await axios.get(`users`, {
    params: {
      check,
      page,
      limit: 3,
    },
  });
  // console.log(res);
  return res.data;
};

export const updateUser = async (id, followers, check) => {
  await axios.put(`users/${id}`, { followers, check });
};
