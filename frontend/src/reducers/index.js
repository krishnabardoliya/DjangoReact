import { combineReducers } from 'redux';
import { sessionReducer } from 'redux-react-session';
import reg from "./register";
import { reducer as formReducer } from 'redux-form'

const ponyApp = combineReducers({
  reg,
  session: sessionReducer,
  form:formReducer
})

export default ponyApp;
