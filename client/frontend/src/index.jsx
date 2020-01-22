import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './app/redux/configureStore';
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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
module.hot.accept();