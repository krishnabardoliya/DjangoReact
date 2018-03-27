import React from 'react'
import ContactForm from './ProfileReduxForm'
import { connect } from 'react-redux';
import { register } from "../actions";

class ProfileRedux extends React.Component {
    submit = values => {

        // print the form values to the console
        console.log("values", values)
        this.props.addProfile(values)
      }
    render() {
    
    return (
        <div className="container">
        <ContactForm onSubmit={this.submit} />
        </div>
    )

    }

}

export default (ProfileRedux);