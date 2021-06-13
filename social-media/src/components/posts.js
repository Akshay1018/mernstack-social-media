import React from 'react';
import Post from './post'
import {Grid,CircularProgress} from '@material-ui/core'
import { useSelector } from 'react-redux';
import useStyles from '../styles'
function Posts({setcurrentId}) {
    const classes = useStyles();
    const posts = useSelector((state) => state.posts);
   
    return (
        !posts.length ?<CircularProgress/>:(
            <Grid className = {classes.mainContainer} container alignItems='stretch' spacing={3}>
                    {
                        posts.map((post)=>(
                            <Grid key = {post._id} item xs={12} sm = {6} >
                                <Post post = {post} setcurrentId={setcurrentId}/>
                            </Grid>
                        ))
                    }
            </Grid>
        )
    )
}

export default Posts
