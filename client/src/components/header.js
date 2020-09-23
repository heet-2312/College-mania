import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import Home from './Home';
import First from './Years/First';
import Second from './Years/Second';
import Third from './Years/Third';
import Fourth from './Years/Fourth';

import './style.css';
const Header = () => {
    return (
        <Router>
            <div>
                <nav>
                    <div>
                    <ul>
                        <li className="ss" style={{ padding: 10 }}><Link to="/">Poll</Link></li>
                        <li className="ss" style={{ padding: 10 }}><Link to="/first">First</Link></li>
                        <li className="ss" style={{ padding: 10 }}><Link to="/second">Second</Link></li>
                        <li className="ss" style={{ padding: 10 }}><Link to="/third">Third</Link></li>
                        <li className="ss" style={{ padding: 10 }}><Link to="/fourth">Fourth</Link></li>
                        <li style={{ padding: 10 }}><Link to="/login">Login</Link></li>
                        <li style={{ padding: 10 }}><Link to="/signup">SignUp</Link></li>
                    </ul>
                    </div>
                </nav>

                <Switch>
                    <Route exact={true} path="/"><Home/></Route>
                    <Route path="/first"><First /></Route>
                    <Route path="/second"><Second/></Route>
                    <Route path="/third"><Third/></Route>
                    <Route path="/fourth"><Fourth/></Route>
                    <Route path="/login"><Login/></Route>
                    <Route path="/signup"><SignUp /></Route>
                </Switch>
            </div>
        </Router >
    )
}

export default Header;