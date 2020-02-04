import {
    PROXIES_LIST,
} from '../types';

const INITIAL_STATE = {
    list: [],
};

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case PROXIES_LIST:
            return {
                ...state,
                list: action.payload.list
            };
        default:
            return state;
    }
};
