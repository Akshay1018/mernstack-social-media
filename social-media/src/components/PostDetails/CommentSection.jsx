import React, { useState } from 'react';
import {Typography,TextField,Button} from '@material-ui/core';
import {useDispatch} from 'react-redux';

import useStyles from './styles.js';

const CommentSection = ({post}) =>{
    const classes = useStyles();
    const [comments,SetComments] = useState([]);
    return (
       
        <div>
            <div className={classes.commentsOuterContainer}>
                <div className={classes.commentsInnerContainer}>
                    <Typography variant="h6" gutterBottom>Comments</Typography>
                    {comments.map((comment,i)=>(
                        <Typography key={i} gutterBottom variant="subtitle1">
                            Comment {i}
                        </Typography>
                    ))}
                </div>

            </div>
        </div>
    )
}
export default CommentSection;
