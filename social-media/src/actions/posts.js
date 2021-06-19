
import { CREATE, DELETE, FETCH_ALL, UPDATE,LIKE_POST} from '../types'
import axios from 'axios';
import AuthToken from '../AuthToken.js';

export const getPosts = () => async (dispatch) => {
    if(localStorage.token){
        AuthToken(localStorage.token);
    }
    try {
        const { data } = await axios.get('https://intense-reaches-30417.herokuapp.com/api/user/getposts');
        dispatch({
            type: FETCH_ALL,
            payload: data
        });
    
    } catch (err) {
        console.log(err.message);
    }
}

export const createPost = (postm) => async (dispatch) => {
    if(localStorage.token){
        AuthToken(localStorage.token);
    }
    try {
        const { data } = await axios.post('https://intense-reaches-30417.herokuapp.com/api/user/createpost', postm);
        dispatch({
            type: CREATE,
            payload: data
        })
        getPosts()
       
    } catch (err) {
        console.log(err.message);
    }
}

export const updatepost = (id, postData) => async (dispatch) => {
    if(localStorage.token){
        AuthToken(localStorage.token);
    }
    try {
        const { data } = await axios.patch(`https://intense-reaches-30417.herokuapp.com/api/user/updatepost/${id}`, postData);
        dispatch({
            type: UPDATE,
            payload: data
        })
   
    } catch (err) {
        console.log(err.message);
    }
}

export const deletePost = (id) => async (dispatch) => {
    if(localStorage.token){
        AuthToken(localStorage.token);
    }
    try {
        await axios.delete(`https://intense-reaches-30417.herokuapp.com/api/user/deletepost/${id}`);
        dispatch({
            type: DELETE,
            payload: id
        })
    } catch (err) {
        console.log(err.message);
    }
}

export const likePost = (id) => async (dispatch) => {
    if(localStorage.token){
        AuthToken(localStorage.token);
    }
    try {
        const { data } = await axios.patch(`https://intense-reaches-30417.herokuapp.com/api/user/${id}/likepost`);
        dispatch({
            type: LIKE_POST,
            payload: data
        })
    } catch (err) {
        console.log(err);
    }
}