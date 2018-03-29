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

    componentDidMount() {
        this.props.fetchProfile();
    }  

    render() {
        const {regs} = this.props
    
    return (
        <div className="container">
        <ContactForm initialValues={regs[0]} regs={regs[0]} onSubmit={this.submit} />
        </div>
    )

    }

}

const mapStateToProps = state => {
    console.log("mapStateToProps",state)
    return {
        regs: state.reg,
    }
  }

const mapDispatchToProps = dispatch => {
    return {
        addProfile: (values) => {
            dispatch(register.addProfile(values));
        },
        fetchProfile:() => {
            dispatch(register.fetchProfile());
        }
        
    }

}


export default connect(mapStateToProps, mapDispatchToProps)(ProfileRedux);