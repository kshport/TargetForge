import { send } from './../../../clientIpc';
import {
    PROXIES_EXAMPLE,
} from '../types';

export const exampleAction = () => async dispatch => {
    console.log('exampleAction');

    const result = await send('test');
    console.log(result);

    dispatch({
        type: PROXIES_EXAMPLE,
    });
};
