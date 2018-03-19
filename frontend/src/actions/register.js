import { ADD_NAME } from '../constants';

var axios = require('axios')
var axiosDefaults = require("axios/lib/defaults");
axiosDefaults.xsrfCookieName = "csrftoken"
axiosDefaults.xsrfHeaderName = "X-CSRFToken"

export const add_name = (text) => {

    const action = {
        type: ADD_NAME,
        text
    }
    console.log('in action', action);
    return action;
}

export const addUser = (username, password, email) => {
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


export const addProfile = (firstname, lastname, age) => {
    return dispatch => {
        let headers = { "Content-Type": "application/json" };
        let body = JSON.stringify({ firstname, lastname, age });
        console.log("in action",body)
        return fetch("/api/profile/", { headers, method: "POST", body })
            .then(res => res.json())
            .then(note => {
                return dispatch({
                    type: 'ADD_PROFILE',
                    firstname,
                    lastname,
                    age
                })
            })
    }    
    /*
    return {
        type: 'ADD_USER',
        username,
        password,
        email
    }
    */
}

export const fetchUser = () => {
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



export const loginUser = (username, password) => {

    return dispatch => {
        return axios.post('/api/login/', {
            username: username,
            password: password
        })
            .then(resp => {
                console.log("in action",resp)
                return dispatch({
                    type: 'LOGIN_USER',
                    resp,
                    username,
                    password
                })
            })
            .catch(function (error) {
                console.log("here",error);
            });
    }
}




