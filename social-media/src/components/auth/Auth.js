import React from 'react'
import { Avatar, Container, Button, Grid, Paper, Typography } from "@material-ui/core"
import useStyles from './styles'
import LockIcon from '@material-ui/icons/LockOutlined'
import TextField from '@material-ui/core/TextField';
import Input from './Input';
import { useState } from 'react';
function Auth() {
    const classes = useStyles();
    const [isSignUp,setisSignup] = useState(false);
  
    const [showPassword, setshowPassword] = useState(false);

    const onsubmit = () => {

    }

    const onchange = () => {

    }
    const switchMode=()=>{
        setisSignup((prevSIgnup)=>!prevSIgnup);
        handlepassword(false)
    }

    const handlepassword = ()=>{
        setshowPassword((prev)=> !prev)
    }
    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockIcon />
                </Avatar>
                <Typography variant='h5' >{isSignUp ? "Sign up" : "Sign in"}</Typography>
                <form className={classes.form} onSubmit={onsubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignUp && (
                                <>
                                    <Input name="firstname" label="First Name" handleChange={onchange} autoFocus half />
                                    <Input name="lastname" label="Last Name" handleChange={onchange} half />

                                </>
                            )
                        }
                        <Input name='email' label="Email Address" handleChange={onchange} type='email' />
                        <Input name='password' label="Password" handlepassword={handlepassword} type={showPassword ? 'text' : 'password'} />
                        {isSignUp && <Input name = "confirmpassword" label = "Repeat password" handleChange = {onchange} type = 'password'/>}

                    </Grid>
                    <Button type = 'submit' fullWidth variant ="contained" color = 'primary' className = {classes.submit}>
                        {isSignUp?"Sign up" : "Sign in"}
                    </Button>
                    <Grid container justify = "flex-end">
                        <Grid item>
                            <Button onClick = {switchMode}>
                                {isSignUp ? "Already have an account? Sign in":"Don't have an account? Sign up"}
                            </Button>
                        </Grid>

                    </Grid>
                </form>
            </Paper>

        </Container>
    )
}

export default Auth
