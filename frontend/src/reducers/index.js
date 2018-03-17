import { combineReducers } from 'redux';
import { sessionReducer } from 'redux-react-session';
import reg from "./register";


const ponyApp = combineReducers({
  reg,
  session: sessionReducer
})

export default ponyApp;
