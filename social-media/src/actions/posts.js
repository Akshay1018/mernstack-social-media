
import { CREATE, DELETE, FETCH_ALL, UPDATE, LIKE_POST, FETCH_BY_SEARCH, START_LOADING, END_LOADING, FETCH_POST, COMMENT } from '../types'
import axios from 'axios';
import AuthToken from '../AuthToken.js';

export const getPosts = (page) => async (dispatch) => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    try {
        dispatch({ type: START_LOADING });
        const { data } = await axios.get(`https://intense-reaches-30417.herokuapp.com/api/user/getposts?page=${page}`, config);

        dispatch({
            type: FETCH_ALL,
            payload: data
        });
        dispatch({ type: END_LOADING });

    } catch (err) {
        console.log(err.message);
    }
}

export const getPost = (id) => async (dispatch) => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    try {
        dispatch({ type: START_LOADING });
        const { data } = await axios.get(`https://intense-reaches-30417.herokuapp.com/api/user/getpost/${id}`, config);
        dispatch({
            type: FETCH_POST,
            payload: data
        });
        dispatch({ type: END_LOADING });


    } catch (err) {
        console.log(err.message);
    }
}

export const getPostBySearch = (searchQuery) => async (dispatch) => {

    try {
        dispatch({ type: START_LOADING });
        const { data: { data } } = await axios.get(`https://intense-reaches-30417.herokuapp.com/api/user/posts/search?searchQuery=${searchQuery.search || 'none'}&tag=${searchQuery.tag}`);
        dispatch({
            type: FETCH_BY_SEARCH,
            payload: { data }
        });
        dispatch({ type: END_LOADING });

    } catch (err) {
        console.log(err.message);
    }
}

export const createPost = (postm, history) => async (dispatch) => {
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
        dispatch({ type: START_LOADING });
        const { data } = await axios.post('https://intense-reaches-30417.herokuapp.com/api/user/createpost', postm, config);
        history.push(`/posts/${data._id}`)
        dispatch({
            type: CREATE,
            payload: data
        })
        dispatch({ type: END_LOADING });
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
        const { data } = await axios.patch(`https://intense-reaches-30417.herokuapp.com/api/user/updatepost/${id}`, postData, config);
        dispatch({
            type: UPDATE,
            payload: data
        })

    } catch (err) {
        console.log(err.message);
    }
}

export const deletePost = (id) => async (dispatch) => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    if (localStorage.token) {
        let tok = `${JSON.parse(localStorage.getItem('token')).token}`;

        AuthToken(tok);
    }
    try {
        await axios.delete(`https://intense-reaches-30417.herokuapp.com/api/user/deletepost/${id}`, config);
        dispatch({
            type: DELETE,
            payload: id
        })

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

        const { data } = await axios.patch(`https://intense-reaches-30417.herokuapp.com/api/user/likepost/${id}`, config);

        dispatch({
            type: LIKE_POST,
            payload: data
        })
    } catch (err) {
        console.log(err);
    }
}
export const postComment = (val, id) => async (dispatch) => {

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
        const { data } = await axios.post(`https://intense-reaches-30417.herokuapp.com/api/user/commentPost/${id}`, { val }, config);
        dispatch({
            type: COMMENT,
            payload: data
        });
        return data.comments;

    } catch (err) {
        console.log(err);
    }
}
