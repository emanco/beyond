import {baseURL, key, playlist, limit} from '../../constants/endpoints';

import axios from 'axios';


const loader = axios.create({
    baseURL: baseURL
});

const getPlaylist = (id, page) => {
    if (id) {
        return loader.get('playlistItems?part=snippet,contentDetails,status&maxResults=1&id='+id+'&key='+key);
    } else {
        if (page) {
            return loader.get('playlistItems?part=snippet,contentDetails,status&maxResults='+limit+'&pageToken='+page+'&playlistId='+playlist+'&key='+key);
        } else {
            return loader.get('playlistItems?part=snippet,contentDetails,status&maxResults='+limit+'&playlistId='+playlist+'&key='+key);
        }
    }
};

const getData = (id, page) => {
    return {
        type: 'FETCH_DATA',
        payload: axios.all([getPlaylist(id, page)/*, getOrders(id), getPrescriptions(id)*/])
    }
};



export { getData, getPlaylist };