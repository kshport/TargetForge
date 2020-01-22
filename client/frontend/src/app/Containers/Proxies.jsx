import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    exampleAction,
} from './../redux/actions'
import ProxiesList from '../Components/Proxies/ProxiesList'

class Proxies extends Component {
    render() {
        return <ProxiesList
            handleOnClick={this.props.exampleAction.bind(this)}
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
        exampleAction,
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Proxies);
