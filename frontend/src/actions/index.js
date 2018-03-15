import { ADD_NAME } from '../constants';
import { ADD_USER } from '../constants';


export const add_name = (text) => {

    const action = {
        type: ADD_NAME,
        text
    }
    console.log('in action', action);
    return action;
}


export const add_user = (username, password, email) => {
    return dispatch => {
        let headers = { "Content-Type": "application/json" };
        let body = JSON.stringify({ username, password, email });
        return fetch("/api/user/", { headers, method: "POST", body })
            .then(res => res.json())
            .then(note => {
                return dispatch({
                    type: 'ADD_USER',
                    username,
                    password,
                    email
                })
            })
    }

}


export const get_user = () => {
    return dispatch => {
        let headers = { "Content-Type": "application/json" };
        return fetch("/api/user/", { headers, })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                return dispatch({
                    type: 'FETCH_USER',
                    data
                })
            })
    }
}
