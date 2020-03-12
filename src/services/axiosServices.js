import axios from 'axios';

class Service{
    constructor(){
        const service = axios.create();
        service.interceptors.response.use(this.handleSuccess, this.handleError);
        this.service = service;
    }
    handleSuccess (response){
        return response;
    }
    handleError = error =>{
        return Promise.reject(error);
    }
    get(endpoint){
        return this.service.get(endpoint);
    }
}

export default new Service();
