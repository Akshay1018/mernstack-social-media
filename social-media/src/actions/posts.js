
import {FETCH_ALL} from '../types'
import axios from 'axios';


export const getPosts = ()=>async(dispatch)=>{
    try {
    const res = await axios.get('http://localhost:5000/api/user/getposts');
    dispatch({
        type:FETCH_ALL,
        payload:res.data
    })
    } catch (err) {
        console.log(err);
    }
}