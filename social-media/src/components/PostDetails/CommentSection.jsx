import React, { useState } from 'react';
import {Typography,TextField,Button} from '@material-ui/core';
import {useDispatch} from 'react-redux';
import {postComment} from '../../actions/posts'
import useStyles from './styles.js';

const CommentSection = ({post}) =>{
    const user = JSON.parse(localStorage.getItem('token'))
    const classes = useStyles();
    const [comments,SetComments] = useState([1,2,3,4]);
    const [comment,SetComment] = useState('');
    const dispatch = useDispatch();

    const onclick = () => {
        const finalComment = `${user.result.name} : ${comment}`
        dispatch(postComment(finalComment,post._id));
    }
    return (
       
        <div>
            <div className={classes.commentsOuterContainer}>
                <div className={classes.commentsInnerContainer}>
                    <Typography variant="h6" gutterBottom>Comments</Typography>
                    {comments?.map((c,i)=>(
                        <Typography key={i} gutterBottom variant="subtitle1">
                            Comment {i}
                        </Typography>
                    ))}
                </div>
                <div style={{width: '70%'}}>
                <Typography gutterBottom variant="h6" >Write a comment</Typography>
                <TextField 
                fullWidth
                rows={4}
                variant="outlined"
                label="Write here..."
                multiline
                value={comment}
                onChange = {(e)=> SetComment(e.target.value)}
                />
                <Button style={{marginTop:"10px"}} fullWidth disabled = {!comment} variant="contained" color="primary" onClick={onclick}> 
                        Comment
                </Button>
                </div>

            </div>
        </div>
    )
}
export default CommentSection;
