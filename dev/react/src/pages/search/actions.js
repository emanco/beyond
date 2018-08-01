import {baseURL, key} from '../../constants/endpoints';
import axios from 'axios';


const loader = axios.create({
    baseURL: baseURL,
    headers: {'x-api-key': key}
});


const getProducts = (id) => {
    if (id) {
        // console.log('query is '+id);
        return loader.get('playlist/?q='+id+'&_limit=100&_sort=price&_order=asc');
    }

}

const getData = (id) => {
    return {
        type: 'FETCH_DATA',
        payload: axios.all([getProducts(id)/*, getProduct(id)*/])
    }
};



export { getData, getProducts };