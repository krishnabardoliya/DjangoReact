import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { Alert } from 'react-bootstrap';
import { register } from "../actions";
import { Redirect } from 'react-router'

class Home extends Component {

    componentDidMount() {
        this.props.fetchUser();
    }

  state = {
      username: "",
      password: "",
      cnfpassword: "",
      email: "",
  }

  handleSubmit = (e) => {
      e.preventDefault();


      console.log("in submit",this.props.regs)
      console.log("length",this.props.regs[0].length)
      for (var i = 0; i < this.props.regs[0].length; i++) { 
            if(this.props.regs[0][i]['username']== this.state.username){
                alert("username already exist try another")
            }
            if(this.props.regs[0][i]['email']== this.state.email){
                alert("email already exist try another")
            }
        }
      
      //console.log("index0",this.props.regs[0][1]['username'])
      
      
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
      const regs = this.props.regs
      //console.log("data",this.props)
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
                      <form onSubmit={this.handleSubmit} method="post">
                          <div className="form-group">
                              <label>User Name</label>
                             
                              <input
                                  name="nameUser"
                                  type="text"
                                  required="required"
                                  value={this.state.nameUser}
                                  onChange={(e) => this.setState({ username: e.target.value })} />
                          </div>
                          <div className="form-group">
                              <label>Email</label>
                             
                              <input
                                  name="email"
                                  type="email"
                                  required="required"
                                  value={this.state.email}
                                  onChange={(e) => this.setState({ email: e.target.value })} />
                          </div>
                          <div className="form-group">
                              <label>Password</label>
                              
                              <input
                                  name="password"
                                  type="password"
                                  required="required"
                                  value={this.state.password}
                                  onChange={(e) => this.setState({ password: e.target.value })} />
                          </div>

                          <div className="form-group">
                              <label>Confirm Password</label>
                             
                              <input
                                  name="cnfpassword"
                                  type="password"
                                  required="required"
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
      fetchUser: () => {
        dispatch(register.fetchUser());
    },
      
  }

}

export default connect(mapStateToProps,mapDispatchToProps)(Home);