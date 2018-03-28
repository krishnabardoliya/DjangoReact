import { ADD_NAME } from '../constants';
import { Redirect } from 'react-router';

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



export const addProfile = (values) => {
    const id = JSON.parse(localStorage.token)
    values.user = id.id
    values.username = id.username
    console.log("in action",values)
    let body = JSON.stringify(values);
    let headers = { "Content-Type": "application/json" };
    return dispatch => {
        return fetch("/api/addprofile/", { headers, method: "POST", body })
            .then(res => res.json())
            .then(note => {
                console.log(note)
                return dispatch({
                    type: 'ADD_PROFILE',
                    values
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
    const id = JSON.parse(localStorage.token)    
    return dispatch => {
        let headers = { "Content-Type": "application/json" };
        let body = JSON.stringify({
            user: id.id,  
        });
        return fetch("/api/fetchprofile/", { headers, method: "POST", body })
            .then(res => res.json())
            .then(data => {
                data.colorp=String(data.colorp)
                data.date=new Date(data.date)
                console.log("date after action ",data.date,data.colorp)
                return dispatch({
                    type: 'FETCH_PROFILE',
                    data
                })
            })
    }


}