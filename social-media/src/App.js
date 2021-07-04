import React from 'react'

import { Container } from '@material-ui/core';

import NavBar from './components/NavBar/Navbar'
import Home from './components/Home/Home';
import PostDetails from './components/PostDetails/PostDetails';
import { Route, BrowserRouter, Switch,Redirect } from 'react-router-dom';
import Auth from './components/auth/Auth';
function App() {
    //const user = JSON.parse(localStorage.getItem('token'))
    return (
        
            <BrowserRouter>
                <Container maxWidth="xl">
                    <NavBar />
                    <Switch>
                        <Route exact path = '/' component = {()=> <Redirect to ="/posts"/>}/>
                        <Route exact path = '/posts' component = {Home}/>
                        <Route exact path = '/posts/search' component = {Home}/>
                        <Route exact path = '/posts/:id' component = {PostDetails}/>

                        <Route exact path = '/auth' component = {Auth}/>

                    </Switch>
                  

                </Container>
            </BrowserRouter>

       


    )
}

export default App
