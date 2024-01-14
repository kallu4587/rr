import { cloudApi } from '../config';
import axios from 'axios';

const api = cloudApi();

export const UserApi = {
  createUser: (data) => {
    return axios.post(`${api}/user/add`, data);
  },
};
