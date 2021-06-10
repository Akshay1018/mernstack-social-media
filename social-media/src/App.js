import React from 'react'
import Register from './components/Register.js';
import Login from './components/Login'
import { Route, BrowserRouter as Router, Switch ,Link} from 'react-router-dom';
function App() {
    return (
        <Router>
            <Switch>
                <Route exact path='/register' component={Register} />
                <Route exact path='/login' component={Login} />
                <Route component={
                    () => (
                        <h1>Not Found.
                                Go Back <Link to='/'>Home Page</Link>
                        </h1>
                    )
                } />
            </Switch>
        </Router>

    )
}

export default App
