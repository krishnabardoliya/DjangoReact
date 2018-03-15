import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
//import App from './App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import name from './reducers';

const store = createStore(name, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root')
);
