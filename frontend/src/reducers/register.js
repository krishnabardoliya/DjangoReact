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
        case 'FETCH_PROFILE':
            return [...state, action.data ]    
        case 'ADD_USER':
            return [...state, { 'username': action.username, 'password': action.password, 'email': action.email }];
        case 'ADD_PROFILE':
            console.log("reducer addprofile")
            return [...state, { 'firstname': action.firstname, 'lastname': action.lastname, 'age': action.age, 'option1': action.option1, 'option2': action.option2, 'gender':action.gender }];
            window.location.href="/profile"
               
        case 'LOGIN_USER':
            console.log(action.resp)
            action.error ? localStorage.setItem('error', action.error) : action.resp.status == 200 ? localStorage.setItem('token',JSON.stringify(action.resp.data)) : null
            return [...state, localStorage.error ? {'error': action.error} : { 'token': action.resp.token, 'username': action.username, 'password': action.password, } ]
            //window.location.href="/"
            break   
        default:
            return state;
    }
}



