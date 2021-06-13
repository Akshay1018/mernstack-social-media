
import { CREATE, FETCH_ALL, UPDATE } from '../types'
import axios from 'axios';


export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await axios.get('http://localhost:5000/api/user/getposts');
        dispatch({
            type: FETCH_ALL,
            payload: data
        });
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}

export const createPost = (postm) => async (dispatch) => {
    try {
        const { data } = await axios.post('http://localhost:5000/api/user/createpost', postm);
        dispatch({
            type: CREATE,
            payload: data
        })
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}

export const updatepost = (id, postData) => async (dispatch) => {
    try {
        const { data } = await axios.patch(`http://localhost:5000/api/user/updatepost/${id}`, postData);
        dispatch({
            type: UPDATE,
            payload: data
        })
    } catch (err) {
        console.log(err);
    }
}