import React, { Component } from 'react';
import { Redirect } from 'react-router'

export default class Logout extends Component {
    componentDidMount() {
        localStorage.clear()
        var axios = require('axios')
        var axiosDefaults = require("axios/lib/defaults");
        axiosDefaults.xsrfCookieName = "csrftoken"
        axiosDefaults.xsrfHeaderName = "X-CSRFToken"
        axios.get('/api/logout/')
        .then(function (response) {
            console.log('logout');
        })
        .catch(function (error) {
            console.log(error);
        });
        
    }
    render() {
        return (
            <Redirect to="/login" />
        );
    }

}
