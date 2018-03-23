import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
//import App from './App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import name from './reducers';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const store = createStore(name, applyMiddleware(thunk));

ReactDOM.render(
    <MuiThemeProvider>
    <Provider store={store}>
        <App />
    </Provider> </MuiThemeProvider>, document.getElementById('root')
);
