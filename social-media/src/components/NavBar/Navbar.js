import React, { useEffect, useState } from 'react'
import { AppBar, Typography, Toolbar, Button, Avatar } from '@material-ui/core'
import useStyles from './style';
import memories from '../../components/images/memory.jpg';
import { Link ,useHistory,useLocation} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { LOGOUT } from '../../types';

const Navbar = () => {
    const classes = useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('token')));
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    useEffect(() => {
        // const token = user?.token;
        setUser(JSON.parse(localStorage.getItem('token')));
    }, [location]);

    const logout = ()=>{
        dispatch({
            type:LOGOUT
        });
        history.push('/');
        setUser(null)
    }
    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography component={Link} to='/' className={classes.heading} variant="h2" align='center'>


                    Memoir
                </Typography>
                <img className={classes.image} src={memories} alt='memories' height='60' />

            </div>
            <Toolbar className={classes.toolbar}>
                {user ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>
                            {user?.result.name.charAt(0)}
                        </Avatar>
                        <Typography className={classes.userName} variant="h6" >{user.result.name}</Typography>
                        <Button className={classes.logout} varient="contained" color='secondary' onClick={logout}>Logout</Button>

                    </div>
                ) : (
                    <Button component={Link} to='/auth' varient="contained" color="primary">Sign_in</Button>
                )}
            </Toolbar>

        </AppBar>
    )


}
export default Navbar
