import React, { Component } from 'react';
import { connect } from 'react-redux';
import { register } from "../actions";
import { Redirect } from 'react-router';


class Profile extends Component {

    state = {
        firstname: "",
        lastname: "",
        age: "",
    }


    handleSubmit=(e) => {
        e.preventDefault();
        console.log("handleSubmit ma");
        console.log(this.state.firstname,this.state.lastname,this.state.age)
        this.props.addProfile(this.state.firstname,this.state.lastname,this.state.age);
        
    }

   

    render() {
        const token = localStorage.token
        return(
            <div className="container">
            {token ?   
            <div>
            <h1>Your profile</h1>    
            <form onSubmit={this.handleSubmit} method="POST">
                        <div className="form-group">
                            <label>First Name</label>
                           
                            <input
                                name="firstname"
                                type="text"
                                required="required"
                                value={this.state.username}
                                onChange={(e) => this.setState({ firstname: e.target.value })} />
                        </div>
                        
                        <div className="form-group">
                            <label>lastname</label>
                            
                            <input
                                name="lastname"
                                type="text"
                                required="required"
                                value={this.state.lastname}
                                onChange={(e) => this.setState({ lastname: e.target.value })} />
                        </div>

                        <div className="form-group">
                            <label>age</label>
                            
                            <input
                                name="age"
                                type="number"
                                required="required"
                                value={this.state.age}
                                onChange={(e) => this.setState({ age: e.target.value })} />
                        </div>


                        <button className="btn btn-success" type="submit" value="Submit">Submit</button>
                    </form>
            </div>
            :
            <Redirect to="/login" /> 
            }   
            </div>    
        );

    }


}


const mapStateToProps = state => {
    return {
        regs: state.reg,
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        addProfile: (firstname, lastname, age) => {
            dispatch(register.addProfile(firstname, lastname, age));
          
        },
        
        
    }
  
  }

  export default connect(mapStateToProps,mapDispatchToProps)(Profile);