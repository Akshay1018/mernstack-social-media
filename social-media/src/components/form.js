import React, { useState } from 'react';
import { Paper, Typography, Button, TextField } from '@material-ui/core'
import useStyles from '../styles'
function Form() {
    const classes = useStyles()
    const [postData, setPostData] = useState({
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: ''
    })
    const onsubmit = () => {

    }
    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={classes.form} onSubmit={onsubmit}>
                <Typography variant="h5" > Creating a Memory</Typography>
                <TextField
                    name="creater"
                    variant='outlined'
                    label="Creator"
                    fullWidth
                    value={postData.creater}
                    onChange={(e) => setPostData({ ...postData,creator: e.target.value })}
                />


            </form>

        </Paper>
    )
}

export default Form
