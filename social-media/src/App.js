import React from 'react'
import Register from './components/Register.js';
import { Route, BrowserRouter as Router, Switch ,Link} from 'react-router-dom';
function App() {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Register} />
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
