
import { CREATE, DELETE, FETCH_ALL, UPDATE, LIKE_POST } from '../types'
import axios from 'axios';
import AuthToken from '../AuthToken.js';

export const getPosts = () => async (dispatch) => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    if (localStorage.token) {
        let tok = ` ${JSON.parse(localStorage.getItem('token')).token}`;
  
        AuthToken(tok);
    }
    try {
        const { data } = await axios.get('https://intense-reaches-30417.herokuapp.com/api/user/getposts',config);
        dispatch({
            type: FETCH_ALL,
            payload: data
        });

    } catch (err) {
        console.log(err.message);
    }
}

export const createPost = (postm) => async (req,dispatch) => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    if (localStorage.token) {
        let tok = ` ${JSON.parse(localStorage.getItem('token')).token}`;
     
        AuthToken(tok);
    }
    
    try {
        const { data } = await axios.post('https://intense-reaches-30417.herokuapp.com/api/user/createpost', postm, config);
      
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
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    if (localStorage.token) {
        let tok = ` ${JSON.parse(localStorage.getItem('token')).token}`;
      
        AuthToken(tok);
    }
    try {
        const { data } = await axios.patch(`https://intense-reaches-30417.herokuapp.com/api/user/updatepost/${id}`, postData,config);
        dispatch({
            type: UPDATE,
            payload: data
        })

    } catch (err) {
        console.log(err.message);
    }
}

export const deletePost = (id) => async (req,dispatch) => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    if (localStorage.token) {
        let tok = ` ${JSON.parse(localStorage.getItem('token')).token}`;
     
        AuthToken(tok);
    }
    try {
        await axios.delete(`https://intense-reaches-30417.herokuapp.com/api/user/deletepost/${id}`,config);
        dispatch({
            type: DELETE,
            payload: id
        })
        getPosts()
    } catch (err) {
        console.log(err.message);
    }
}

export const likePost = (id) => async (dispatch) => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
   
    let tok = `${JSON.parse(localStorage.getItem('token')).token}`;
  
    if (localStorage.token) {
        AuthToken(tok);
    }
    try {
      
        const { data } = await axios.patch(`https://intense-reaches-30417.herokuapp.com/api/user/likepost/${id}`,config);
       
        dispatch({
            type: LIKE_POST,
            payload: data
        })
    } catch (err) {
        console.log(err);
    }
}