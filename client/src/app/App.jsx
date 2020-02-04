import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { useTranslation } from 'react-i18next';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from "react-router-dom";
import './App.css';
import Proxies from './Containers/Proxies/Proxies';
import ProxiesCreate from './Containers/Proxies/ProxiesCreate';
import Dashboard from './Containers/Dashboard/Dashboard';

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
                            <Route path='/proxies/create'>
                                <ProxiesCreate />
                            </Route>
                            <Route path='/proxies'>
                                <Proxies />
                            </Route>
                            <Route path='/'>
                                <Dashboard />
                            </Route>
                        </Switch>
                    </Col>
                </Row>
            </Container>
        </Router>
    )
};

const Home = () => {
    const { t } = useTranslation();

    return (
        <h2>{t('universal:welcome_text')}</h2>
    )
};

export default App;
