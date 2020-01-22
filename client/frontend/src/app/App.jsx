import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from "react-router-dom";
import './App.css';
import Proxies from './Containers/Proxies';

const App = () => {
    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" activeClassName="hurray">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/proxies" activeClassName="hurray">
                            Proxies
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div>
                <Switch>
                    <Route path='/proxies'>
                        <Proxies />
                    </Route>
                    <Route path='/'>
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
};

const Home = () => {
    return (
        <h2>Home</h2>
    )
};

export default App;

// ipc example
/*
import { send } from '../clientIpc';
<a onClick={
    async () => {
        const result = await send('test');
        console.log(result);
    }
}>Test Me!</a>*/
