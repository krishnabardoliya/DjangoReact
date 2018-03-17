import { ADD_NAME } from '../constants';
const initialState = [];

export default function reg(state = initialState, action) {
    let name=null;
    switch (action.type) {
        case ADD_NAME:
            name = [...state,{text: action.text}];
            console.log('states',name);
            return name;
        case 'FETCH_USER':
            return [...state, action.data ]
        case 'ADD_USER':
            return [...state, { 'username': action.username, 'password': action.password, 'email': action.email }];
        case 'LOGIN_USER':
            console.log("in reducers",action.resp.config.data)
            action.resp.status === 200 ? localStorage.setItem('token', action.resp.config.data) : console.log('fail') 
            break   
        default:
            return state;
    }
}



