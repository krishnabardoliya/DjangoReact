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
            .catch(error => {
                console.log(error)
            })
    }
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
            });
    }
}



export const addProfile = (firstname, lastname, age) => {
    const id = JSON.parse(localStorage.token)
    console.log(id.id)
    console.log("in add profile action ",firstname,lastname, age)
    let headers = { "Content-Type": "application/json" };
    let body = JSON.stringify({
        username:id.username,
        user: id.id, 
        firstname:firstname, 
        lastname:lastname, 
        age:age 
    });
    return dispatch => {
        return fetch("/api/addprofile/", { headers, method: "POST", body })
            .then(res => res.json())
            .then(note => {
                return dispatch({
                    type: 'ADD_PROFILE',
                    firstname,
                    lastname,
                    age
                })
            })
            .catch(error => {
                console.log(error)
            })
    }
}


export const delProfile = () => {
    const id = JSON.parse(localStorage.token)
    console.log(id.id)
    
    let headers = { "Content-Type": "application/json" };
    let body = JSON.stringify({
        user: id.id,  
    });
    return dispatch => {
        return fetch("/api/delprofile/", { headers, method: "POST", body })
            .then(res => {res.json(); window.location.href="/profile"})
            .catch(error => {
                console.log(error)
            })
    }
}



export const fetchProfile = () => {
    return dispatch => {
        let headers = { "Content-Type": "application/json" };
        return fetch("/api/profile/", { headers, })
            .then(res => res.json())
            .then(data => {
                console.log("profile data ",data)
                return dispatch({
                    type: 'FETCH_PROFILE',
                    data
                })
            })
    }
}