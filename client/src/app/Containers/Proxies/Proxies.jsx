import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProxiesRoot from '../../Components/Proxies/ProxiesRoot';
import {
    proxyCreate,
    proxyList,
} from '../../redux/actions'

class Proxies extends Component {
    componentDidMount() {
        console.log('componentDidMount');
        this.props.proxyList();
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {
        return <ProxiesRoot proxiesList={ this.props.list } />;
    }
}

const mapStateToProps = ({ proxies }) => {
    return {
        list: proxies.list
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        proxyCreate,
        proxyList,
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Proxies);
