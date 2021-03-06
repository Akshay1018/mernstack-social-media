import React from 'react'
import { TextField, Grid, InputAdornment, IconButton } from '@material-ui/core'

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
function Input({ half, name, label, type, handleshowpassword, autoFocus, handleChange }) {
    return (
        <Grid item xs={12} sm={half ? 6 : 12}>
            <TextField
                name={name}
                onChange={handleChange}
                variant="outlined"
                required
                fullWidth
                label={label}
                autoFocus={autoFocus}
                type={type}
                InputProps={name === 'password' && {
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton onClick={handleshowpassword}>
                                {type === "password" ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    )
                }}
            />

        </Grid>
    )
}

export default Input
