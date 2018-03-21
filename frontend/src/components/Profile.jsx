import React, { Component } from 'react';
import { connect } from 'react-redux';
import { register } from "../actions";
import { Redirect } from 'react-router';
import Modal from 'react-modal';


class Profile extends Component {
    constructor(props) {
        super(props);
        
    }
    state = {
        open: false,
        firstname: "",
        lastname: "",
        age: "",
    }

    

    componentDidMount() {
        this.props.fetchProfile();
        console.log("in did")
        console.log("token",JSON.parse(localStorage.token)['username'])
        console.log("this.props.reg",this.props.regs)
        console.log("-----------------------------------------------------------")
        }
        
    

    handleSubmit=(e) => {
        e.preventDefault();
        console.log("handleSubmit ma");
        console.log(this.state.firstname,this.state.lastname,this.state.age)
        this.props.addProfile(this.state.firstname,this.state.lastname,this.state.age);
        console.log("token",JSON.parse(localStorage.token)['username'])
        
    }

    
   

    render() {
        
        console.log("in render")
        const token = localStorage.token
        const token1 = JSON.parse(localStorage.token)['username']
        console.log("token final",token1)
        const regs = this.props.regs
        console.log("data final",regs)
        console.log("len",regs.length)
        
        
        regs.map((r,id)=> 
                r.map((k)=>
                (token1==k.username) ?
                    this.state.open ?
                    null
                    :
                    this.setState({ firstname: k.firstname , lastname:k.lastname, age:k.age ,open:true})
                :
                    null
                
            )
        )   
        
        
        return(
            <div className="container">
            {token ?   
            <div>
            
            <h1>Your profile</h1>    
            <form onSubmit={this.handleSubmit} method="post">
                        <div className="form-group">
                            <label>First Name</label>
                           
                            <input
                                name="firstname"
                                type="text"
                                required="required"
                                value={this.state.firstname}
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
            console.log("in mapdispatchtoprops")
            dispatch(register.addProfile(firstname, lastname, age));
          
        },
        fetchProfile: () => {
            dispatch(register.fetchProfile());
        },
        
        
    }
  
  }

  export default connect(mapStateToProps,mapDispatchToProps)(Profile);