import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import configureStore from './app/redux/configureStore';
import './i18n';
import App from './app/App';
import * as serviceWorker from './serviceWorker';
import { init } from './clientIpc';

init();

const store = configureStore();

const Root = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
};

ReactDOM.render(<Root />, document.getElementById('root'));

serviceWorker.unregister();
module.hot.accept();