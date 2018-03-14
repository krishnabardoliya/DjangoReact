import { ADD_NAME } from '../constants';


export const add_name=(text)=>{
    
    const action={
        type: ADD_NAME,
        text
    }
    console.log('in action',action);
    return action;
}