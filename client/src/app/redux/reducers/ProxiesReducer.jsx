import {
    PROXIES_EXAMPLE,
} from '../types';

const INITIAL_STATE = {
    list: [],
};

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case PROXIES_EXAMPLE:
            console.log(PROXIES_EXAMPLE);
            return state;
        default:
            return state;
    }
};
