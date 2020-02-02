import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
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
            <Container fluid>
                <Row>
                    <Col xs={4}>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <NavLink to="/" activeClassName="hurray">
                                    Home
                                </NavLink>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <NavLink to="/proxies" activeClassName="hurray">
                                    Proxies
                                </NavLink>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col>
                        <Switch>
                            <Route path='/proxies'>
                                <Proxies />
                            </Route>
                            <Route path='/'>
                                <Home />
                            </Route>
                        </Switch>
                    </Col>
                </Row>
            </Container>
        </Router>
    )
};

const Home = () => {
    return (
        <h2>Home</h2>
    )
};

export default App;
