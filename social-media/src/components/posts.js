import React from 'react';
import Post from './post'
import { Grid, CircularProgress } from '@material-ui/core'
import { useSelector } from 'react-redux';
import useStyles from '../styles'
const Posts = ({ setcurrentId }) => {

    const { posts, isLoading } = useSelector((state) => state.posts);
    const classes = useStyles();
    if (!posts.length && !isLoading) return "No posts";

    return (
        isLoading ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems='stretch' spacing={2}>
                {
                    posts.map((post) => (
                        <Grid key={post._id} item xs={12} sm={12} md={6} lg={3}  >
                            <Post post={post} setcurrentId={setcurrentId} />
                        </Grid>
                    ))
                }
            </Grid>
        )
    )
}

export default Posts
