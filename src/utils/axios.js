import axios from 'axios';
const API_HOST = process.env.api_host;

export const useClient = () => {
  const client = axios.create({
    baseURL: API_HOST,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });

  const get = (url, params) => client.get(url, { params });
  const post = (url, body, params) => client.post(url, body, { params });
  const patch = (url, body, params) => client.patch(url, body, { params });
  const put = (url, body, params) => client.put(url, body, { params });
  const remove = (url, params) => client.delete(url, { params });

  return {
    get,
    post,
    patch,
    put,
    remove,
  };
};