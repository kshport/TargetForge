import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProxiesForm from '../../Components/Proxies/ProxiesForm';
import {
    proxyCreate,
} from '../../redux/actions'

class ProxiesCreate extends Component {
    componentDidMount() {
        console.log('componentDidMount');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {
        return <ProxiesForm
            onSaveHandler={() => null}
            proxy={null}
        />;
    }
}

const mapStateToProps = () => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        proxyCreate,
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ProxiesCreate);
