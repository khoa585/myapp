import axiosService from './../services/axiosServices';

const endpoint = '/Product_api';
export const getList = () =>{
    return axiosService.get(`${endpoint}`);
};