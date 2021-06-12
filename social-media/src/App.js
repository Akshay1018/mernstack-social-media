import React from 'react'

import { AppBar, Typography, Container, Grow, Grid } from '@material-ui/core';
import memories from './components/images/memory.jpg';
import Posts from './components/posts';
import Form from './components/form'
// import Register from './components/Register.js';
// import Login from './components/Login'
// import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
function App() {
    return (
        <Container maxWidth="lg">
            <AppBar position="static" color="inherit">
                <Typography variant="h2" align='center'>


                    Along the Way…
               </Typography>
                <img src={memories} alt='memories' height='60' />

            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify='space-between' alignItems='stretch' spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form/>
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
