
import { CREATE, FETCH_ALL } from '../types'
import axios from 'axios';


export const getPosts = () => async (dispatch) => {
    try {
        const res = await axios.get('http://localhost:5000/api/user/getposts');
        dispatch({
            type: FETCH_ALL,
            payload: res
        });
        console.log(res);
    } catch (err) {
        console.log(err);
    }
}

export const createPost = (postm) => async (dispatch) => {
    try {
        const {data} = await axios.post('http://localhost:5000/api/user/createpost', postm);
        dispatch({
            type: CREATE,
            payload: data   
        })
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}