import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProxiesRoot from '../Components/Proxies/ProxiesRoot';
import {
    proxyCreate,
    proxyList,
} from './../redux/actions'

class Proxies extends Component {
    render() {
        return <ProxiesRoot
            handleOnClickCreate={this.props.proxyCreate.bind(this)}
            handleOnClickGetList={this.props.proxyList.bind(this)}
        />;
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
