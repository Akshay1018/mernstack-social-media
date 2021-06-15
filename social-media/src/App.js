import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { AppBar, Typography, Container, Grow, Grid } from '@material-ui/core';
import { getPosts } from './actions/posts'
import memories from './components/images/memory.jpg';
import Posts from './components/posts';
import Form from './components/form';
import useStyles from './styles';

// import Register from './components/Register.js';
// import Login from './components/Login'
// import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
function App() {
    const [currentId, setcurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();
   


    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch])
    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align='center'>


                    Memoir
                </Typography>
                <img className={classes.image} src={memories} alt='memories' height='60'  />

            </AppBar>
            <Grow in>
                <Container>
                    <Grid  container  justify='space-between' alignItems='stretch' spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setcurrentId={setcurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setcurrentId={setcurrentId} />
                        </Grid>

                    </Grid>
                </Container>
            </Grow>

        </Container>
        // <Router>
        //     <Switch>
        //         <Route exact path='/register' component={Register} />
        //         <Route exact path='/login' component={Login} />
        //         <Route component={
        //             () => (
        //                 <h1>Not Found.
        //                         Go Back <Link to='/'>Home Page</Link>
        //                 </h1>
        //             )
        //         } />
        //     </Switch>
        // </Router>

    )
}

export default App
