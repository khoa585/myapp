import axiosService from './../services/axiosServices';

const endpoint = '/Product_api';
const URL = '/login';
export const getList = () => {
    return axiosService.get(`${endpoint}`);
};
export const authenlogin = (body) => {
    return axiosService.post(`${URL}`, body);
};