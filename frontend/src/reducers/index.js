import { ADD_NAME } from '../constants';

const name = (state= [] ,action) => {

    let name=null;
    switch(action.type){
        case ADD_NAME:
            name = [...state,{text: action.text}];
            console.log('states',name);
            return name;
        default:
            return state;    
    }


}

export default name;