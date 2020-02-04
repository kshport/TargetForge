import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DashboardRoot from '../../Components/Dashboard/DashboardRoot';

class Dashboard extends Component {
    componentDidMount() {
        console.log('componentDidMount');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {
        return <DashboardRoot />;
    }
}

const mapStateToProps = () => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
