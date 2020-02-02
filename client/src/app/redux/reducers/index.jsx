import { combineReducers } from 'redux';
import ProxiesReducer from './ProxiesReducer';

export default combineReducers({
    proxies: ProxiesReducer,
});