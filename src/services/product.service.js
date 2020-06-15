import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api';

class ProductDataService {

    getAll(){
        return axios.get(API_URL+"/product" , {headers : authHeader()});
    }

    getPublished(){
        return axios.get(API_URL+"/product/published" );
    }

    get(id){
        return axios.get(`${API_URL}/product/${id}`, {headers : authHeader()});
    }

    getUser(id){
        return axios.get(`${API_URL}/product/user/${id}`, {headers : authHeader()});
    }

    create(data){
      //  console.log(axios.post(API_URL+"/product",data ,{headers : authHeader()}));
        return axios.post(`${API_URL}/product`,data ,{headers : authHeader()});
    }

    update(id, data){
        return axios.put(`${API_URL}/product/${id}`, data, {headers : authHeader()});
    }

    delete(id) {
        //console.log(axios.delete(`${API_URL}/product/${id}`), {headers : authHeader()});
        return axios.delete(`${API_URL}/product/${id}`, {headers : authHeader()});
    }

    deleteUser(id) {
        //console.log(axios.delete(`${API_URL}/product/${id}`), {headers : authHeader()});
        return axios.delete(`${API_URL}/product/user/${id}`, {headers : authHeader()});
    }
    
    deleteAll() {
        return axios.delete(`${API_URL}/product`, {headers : authHeader()});
    }
    
    findByTitle(title) {
        return axios.get(`${API_URL}/product?title=${title}`, {headers : authHeader()});
    }
}

export default new ProductDataService;