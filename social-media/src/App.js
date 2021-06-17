import React from 'react'

import { Container } from '@material-ui/core';

import NavBar from './components/NavBar/Navbar'
import Home from './components/Home/Home';

// import Register from './components/Register.js';
// import Login from './components/Login'
import { Route, BrowserRouter, Switch } from 'react-router-dom';
function App() {

    return (
        <>
            <BrowserRouter>
                <Container maxWidth="lg">
                    <NavBar />
                    <Switch>
                        <Route exact path = '/' component = {Home}/>
                    </Switch>
                    <Home />

                </Container>
            </BrowserRouter>

        </>


    )
}

export default App
