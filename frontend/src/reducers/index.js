import { ADD_NAME } from '../constants';
import { ADD_USER } from '../constants';
import { FETCH_USER } from '../constants';
const name = (state= [] ,action) => {

    let name=null;
    switch(action.type){
        case ADD_NAME:
            name = [...state,{text: action.text}];
            console.log('states',name);
            return name;
        case ADD_USER:
            name = [...state,{username: action.username,password:action.password,email:action.email}];
            console.log('states',name);
            return name;
        case FETCH_USER:
            console.log(action.data)
            return [...state, action.data ]        
        default:
            return state;

    }


}




export default name;