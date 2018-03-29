import React, { Component } from 'react';
import { connect } from 'react-redux';
import { register } from '../actions';
import { Redirect } from 'react-router';
class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        this.props.loginUser("","");
    }

    handleSubmit=(e) => {
        e.preventDefault();
        console.log(this.state.username,this.state.password);
        this.props.loginUser(this.state.username,this.state.password);
        console.log("in handle submit",this.props.username)
    }

    render() {
        const token = localStorage.token
        return(
            <div className="container">
              
            {token ?
                <div>
                    <Redirect to="/profile" />
                    
                    
                </div>
                :
                <div >
                    <h1>Log In</h1>
                    <br />
                    <form onSubmit={this.handleSubmit} method="post">
                        <div className="form-group">
                            <label>User Name</label>
                           
                            <input
                                name="nameUser"
                                type="text"
                                required="required"
                                value={this.state.username}
                                onChange={(e) => this.setState({ username: e.target.value })} />
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


                        <button className="btn btn-success" type="submit" value="Submit">Submit</button>
                        
                    </form>
                </div>
            }
        </div>   
        )
    }



}

const mapStateToProps = state => {
    return {
        regs: state.reg,
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
        loginUser: (username, password) => {
            dispatch(register.loginUser(username, password));
        },
    }
  
  }



export default connect(mapStateToProps,mapDispatchToProps)(Login);