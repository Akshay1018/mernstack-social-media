import React, { useEffect, useState } from 'react';
import { Paper, Typography, Button, TextField } from '@material-ui/core'
import useStyles from '../styles'
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux'
import { createPost, updatepost } from '../actions/posts';

function Form({ currentId, setcurrentId }) {
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);
    const classes = useStyles();
    const dispatch = useDispatch();
    const [postData, setPostData] = useState({
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: ''
    })

    useEffect(() => {
        if (post) setPostData(post)
    }, [post]);


    const onsubmit = (e) => {
        e.preventDefault();
        if (currentId) {
            dispatch(updatepost(currentId, postData));
            clear();
        } else {
            dispatch(createPost(postData));
            clear();
        }
    }
    const clear = () => {
        setcurrentId(null);
        setPostData({
            creator: '',
            title: '',
            message: '',
            tags: '',
            selectedFile: ''
        })
    }
    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form} `} onSubmit={onsubmit}>
                <Typography variant="h5" >{currentId ? 'Editing' : 'Creating'} a Memory</Typography>
                <TextField
                    name="creator"
                    variant='outlined'
                    label="Creator"
                    fullWidth
                    value={postData.creator}
                    onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
                />
                <TextField
                    name="title"
                    variant='outlined'
                    label="Title"
                    fullWidth
                    value={postData.title}
                    onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                />
                <TextField
                    name="messge"
                    variant='outlined'
                    label="Message..."
                    fullWidth
                    value={postData.message}
                    onChange={(e) => setPostData({ ...postData, message: e.target.value })}
                />
                <TextField
                    name="tags"
                    variant='outlined'
                    label="Tags"
                    fullWidth
                    value={postData.tags}
                    onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}
                />
                {/* <TextField
                    name="selectedFile"
                    variant='outlined'
                    label="Choose File"
                    fullWidth
                    value={postData.selectedFile}
                    onChange={(e) => setPostData({ ...postData, selectedFile: e.target.value })}
                /> */}
                <div className={classes.fileInput}>
                    <FileBase
                        type='file'
                        multiple={false}
                        onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
                    />
                </div>
                <Button className={classes.buttonSubmit} variant='contained' color="primary" size="large" type='submit' fullWidth>Submit</Button>

                <Button variant='contained' color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>

            </form>

        </Paper>
    )
}

export default Form
