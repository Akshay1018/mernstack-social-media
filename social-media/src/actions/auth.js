import { AUTH } from '../types';
import axios from 'axios';
import AuthToken from '../AuthToken.js';

export const SignIn = (formData, history) => async (dispatch) => {
      const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
   
    try {
        const { data } = await axios.post(`https://intense-reaches-30417.herokuapp.com/api/authuser/signin`, formData,config);
        dispatch({
            type: AUTH,
            data
        });
        history.push('/');
    } catch (err) {
        console.log(err);
    }
}

export const SignUp = (formData, history) => async (dispatch) => {
      const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    try {
        const { data } = await axios.post(`https://intense-reaches-30417.herokuapp.com/api/authuser/signup`, formData,config);
        dispatch({
            type: AUTH,
            data
        });
        history.push('/');
    } catch (err) {
        console.log(err);
    }
}