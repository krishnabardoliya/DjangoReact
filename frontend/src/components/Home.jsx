import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { Alert } from 'react-bootstrap';
import { register } from "../actions";
import { Redirect } from 'react-router'

class Home extends Component {

  state = {
      username: "",
      password: "",
      cnfpassword: "",
      email: "",
  }

  handleSubmit = (e) => {
      e.preventDefault();
      this.state.password === this.state.cnfpassword ?
          this.state.password.length >= 8 ?
              this.props.addUser(this.state.username, this.state.password, this.state.email)
              :
              alert("Use at least 8 characters.")
          :
          alert("Password And Confirm Password Are Different") 

      
      
      this.setState({
          nameUser:"",
          username: "",
          password: "",
          email: "",
          cnfpassword: "",
      });
  }


  render() {
      const token = localStorage.token
      return (
          <div className="container">
              
              {token ?
                  <div className="jumbotron">
                      <h1>You already registerd</h1>
                      
                <Redirect to="/login" />
      
                  </div>
                  :
                  <div >
                      <h1>Register</h1>
                      <br />
                      <form onSubmit={this.handleSubmit}>
                          <div className="form-group">
                              <label>User Name</label>
                             
                              <input
                                  name="nameUser"
                                  type="text"
                                  value={this.state.nameUser}
                                  onChange={(e) => this.setState({ username: e.target.value })} />
                          </div>
                          <div className="form-group">
                              <label>Email</label>
                             
                              <input
                                  name="email"
                                  type="email"
                                  value={this.state.email}
                                  onChange={(e) => this.setState({ email: e.target.value })} />
                          </div>
                          <div className="form-group">
                              <label>Password</label>
                              
                              <input
                                  name="password"
                                  type="password"
                                  value={this.state.password}
                                  onChange={(e) => this.setState({ password: e.target.value })} />
                          </div>

                          <div className="form-group">
                              <label>Confirm Password</label>
                             
                              <input
                                  name="cnfpassword"
                                  type="password"
                                  value={this.state.cnfpassword}
                                  onChange={(e) => this.setState({ cnfpassword: e.target.value })} />
                          </div>

                          <button className="btn btn-success" type="submit" value="Submit">Submit</button>

                      </form>
                  </div>
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
      addUser: (username, password, email) => {
          dispatch(register.addUser(username, password, email));
        
      },
      
  }

}

export default connect(mapStateToProps,mapDispatchToProps)(Home);