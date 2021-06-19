import React from 'react';
import { Avatar, Container, Button, Grid, Paper, Typography } from "@material-ui/core";
import useStyles from './styles';
import LockIcon from '@material-ui/icons/LockOutlined';
import { GoogleLogin } from 'react-google-login';
import Input from './Input';
import { useState } from 'react';
import Icon from './Icon';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {SignIn,SignUp} from '../../actions/auth';

function Auth() {
    const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };
    const classes = useStyles();
    const [isSignUp, setisSignup] = useState(false);
    const [formData, setformData] = useState(initialState);
    const [showPassword, setshowPassword] = useState(false);
    const dispatch = useDispatch()
    const history = useHistory();
    const onsubmit = (e) => {
        e.preventDefault();
        if(isSignUp){
            dispatch(SignUp(formData,history))
        }else{
            dispatch(SignIn(formData,history))

        }

        console.log(formData);
    }

    const handleChange = (e) => {

        setformData({ ...formData, [e.target.name]: e.target.value })
    }
    const switchMode = () => {
        setisSignup((prevSIgnup) => !prevSIgnup);
        setshowPassword(false)
    }

    const handleshowpassword = () => {
        setshowPassword((prev) => !prev)
    }

    const googleSuccess = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;
        try {
            dispatch({
                type: "AUTH",
                data: { result, token }
            })
            history.push('/')
        } catch (err) {
            console.log(err);
        }
    }
    const googleFailure = (err) => {
        console.log(err);
        console.log("Unsuccessful Sign in");
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
                                    <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                                    <Input name="lastName" label="Last Name" handleChange={handleChange} half />

                                </>
                            )
                        }
                        <Input name='email' label="Email Address" handleChange={handleChange} type='email' />
                        <Input name='password' label="Password" handleChange={handleChange} handleshowpassword={handleshowpassword} type={showPassword ? 'text' : 'password'} />
                        {isSignUp && <Input name="confirmPassword" label="Repeat password" handleChange={handleChange} type='password' />}

                    </Grid>
                    <Button type='submit' fullWidth variant="contained" color='primary' className={classes.submit}>
                        {isSignUp ? "Sign up" : "Sign in"}
                    </Button>
                    <GoogleLogin
                        clientId="659895284133-if6ts2ldcqq2k2r030gkj5lmsao6uu4l.apps.googleusercontent.com"
                        render={(renderProps) => (
                            <Button
                                className={classes.googleButton}
                                color='primary'
                                fullWidth
                                onClick={renderProps.onClick}
                                disabled={renderProps.disabled}
                                startIcon={<Icon />}
                                variant='contained'
                            >
                                Sign in with Google
                            </Button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy="single_host_origin"
                    />

                    <Grid container justify="flex-end">
                        <Grid item>
                            <Button onClick={switchMode}>
                                {isSignUp ? "Already have an account? Sign in" : "Don't have an account? Sign up"}
                            </Button>
                        </Grid>

                    </Grid>
                </form>
            </Paper>

        </Container>
    )
}

export default Auth
