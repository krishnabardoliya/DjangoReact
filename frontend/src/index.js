import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
//import App from './App';
import logger from 'redux-logger'

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import name from './reducers';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const store = createStore(name, applyMiddleware(thunk,logger));

ReactDOM.render(
    <MuiThemeProvider>
    <Provider store={store}>
        <App />
    </Provider> </MuiThemeProvider>, document.getElementById('root')
);
