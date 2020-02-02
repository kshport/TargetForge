import { send } from './../../../clientIpc';
import {
    PROXIES_CREATE,
    PROXIES_LIST,
    PROXIES_DELETE,
    PROXIES_UPDATE,
    PROXIES_IMPORT
} from '../types';
import {
    ROUTE_PROXIES_CREATE,
    ROUTE_PROXIES_LIST,
    ROUTE_PROXIES_DELETE,
    ROUTE_PROXIES_UPDATE,
    ROUTE_PROXIES_IMPORT,
} from '../../../routes';

/**
 * Сохраняет новый прокси
 * @param proxy
 * @returns {function(...[*]=)}
 */
export const proxyCreate = proxy => async dispatch => {
    const newProxy = await send(ROUTE_PROXIES_CREATE, proxy);

    dispatch({
        type: PROXIES_CREATE,
        payload: {
            newProxy
        }
    });
};

/**
 * Возвращает все прокси пользователя
 * @returns {function(...[*]=)}
 */
export const proxyList = () => async dispatch => {
    const list = await send(ROUTE_PROXIES_LIST);
    console.log(list);

    dispatch({
        type: PROXIES_LIST,
        payload: {
            list
        }
    });
};

/**
 * Удаляет прокси
 * @param id
 * @returns {function(...[*]=)}
 */
export const proxyDelete = ids => async dispatch => {
    // не ждем
    send(ROUTE_PROXIES_DELETE, { ids });

    dispatch({
        type: PROXIES_DELETE,
        payload: {
            ids
        }
    });
};

/**
 * Обновляет прокси
 * @param proxy
 * @returns {function(...[*]=)}
 */
export const proxyUpdate = proxy => async dispatch => {
    // не ждем
    send(ROUTE_PROXIES_UPDATE, { proxy });

    dispatch({
        type: PROXIES_UPDATE,
        payload: {
            proxy
        }
    });
};

/**
 * Как отптимально в фоне обработать большой файл со списком прокси?
 *
 * @param proxiesList
 * @returns {function(...[*]=)}
 */
export const proxyImport = proxiesList => async dispatch => {
    send(ROUTE_PROXIES_IMPORT, { proxiesList });

    dispatch({
        type: PROXIES_IMPORT,
        payload: {
            proxiesList
        }
    });
};
