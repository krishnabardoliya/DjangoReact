import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Alert } from 'react-bootstrap';
import { add_user } from '../actions';

class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
          username:'',
          password:'',
          cpassword:'',
          email:'',
        }
      }

    display()
  {
    this.props.add_user(this.state.username,this.state.password,this.state.email);
  }

  display1(){
    const {name}=this.props;
    return(
      <ul className="list-groups col-sm-4">
        {
          name.map(name=> {
            return(
              <div>  
              <li className="list-group-item">
                <div>
                  { name.username } <br/> { name.email } <br/> { name.password }
                </div>
              </li>
              </div>
            )
          })
        }
      </ul>
    )
  }

    render() {
        
        return (
           <div className="Home">
      
           <div className="jumbotron" >
            <Alert bsStyle="warning">
                <strong>All fields are required!</strong>
            </Alert>
             
           <div className="form-inline">
             <div className="form-group">
             <br/><br/><br/><br/>
           username:
           <input className="form-control" type="text" name="username" placeholder="enter your username" onChange={event => this.setState({username:event.target.value})} />
           <br/>
           email id:
           <input className="form-control" type="email" name="email" placeholder="enter your email id" onChange={event => this.setState({email:event.target.value})} />
           <br/>
           password
           <input className="form-control" type="password" name="password" placeholder="enter your password" onChange={event => this.setState({password:event.target.value})} />
           <br/>

           <button type="button" className="btn btn-success" onClick={()=> this.display()} >register me</button>
           <br/><br/>
   
           
         </div>
         </div>  
         </div>
         
         {this.display1()}
            
         </div>
        )
    }
}


const mapDispatchToProps = dispatch => {
    return {
        add_user: (username, password, email) => {
            dispatch(add_user(username, password, email));
        },
    }

}
  
  function mapStateToProps(state){
    return({name:state})
  } 

  export default connect(mapStateToProps,mapDispatchToProps)(Home);