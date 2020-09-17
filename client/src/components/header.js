import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import './style.css';
const Header = () => {
    return (
        <Router>
            <div>
            <nav>
                    <ul>
                        <li style={{padding:10}}><Link to="/login">Login</Link></li>
                        <li style={{padding:10}}><Link to="/signup">SignUp</Link></li>
                    </ul>
            </nav>

                {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/signup">
                        <SignUp />
                    </Route>
                </Switch>
            </div>
        </Router >
    )
}

export default Header;