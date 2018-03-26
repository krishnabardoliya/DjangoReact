import React, { Component } from 'react';
import { connect } from 'react-redux';
import { register } from "../actions";
import { Redirect } from 'react-router';
import Modal from 'react-modal';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

const styles = {
    block: {
      maxWidth: 250,
    },
    checkbox: {
      marginBottom: 16,
    },
  };

class Profile extends Component {
    constructor(props) {
        super(props);
        
    }
    state = {
        open: false,
        firstname: "",
        lastname: "",
        age: "",
        option1: false,
        option2: false,
        gender: "male"
    }

    

    componentDidMount() {
        this.props.fetchProfile();
        const token = localStorage.token
        if(token){
        console.log("in did")
        console.log("token",JSON.parse(localStorage.token)['username'])
        console.log("this.props.reg",this.props.regs)
        console.log("-----------------------------------------------------------")
        }
        else{
            window.location.href="/login"
        }
             
        
        }
        
    

    handleSubmit=(e) => {
        e.preventDefault();
        console.log("handleSubmit ma");
        console.log(this.state.firstname,this.state.lastname,this.state.age)
        this.props.addProfile(this.state.firstname,this.state.lastname,this.state.age,this.state.option1,this.state.option2,this.state.gender);
        console.log("token",JSON.parse(localStorage.token)['username'])
        
    }

    del= (e) => {
        e.preventDefault();
        /*const id = JSON.parse(localStorage.token)
        console.log(id)
        
        let headers = { "Content-Type": "application/json" };
        let body = JSON.stringify({
            user: id.id,  
        });
        fetch("/api/delprofile/", { headers, method: "POST", body })
            .then(res => res.json())
            .catch(error => {
                console.log(error)
            })
        window.alert("this profile will be deleted");*/
        this.props.delProfile();
    }
    
   

    render() {
        
        console.log("in render")
        const token = localStorage.token
        if(token)
        {
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
                    this.setState({ firstname: k.firstname , lastname:k.lastname, age:k.age ,option1:k.option1, option2:k.option2, gender: k.gender, open:true})
                :
                    null
                
            )
        )
    }
    else{
        window.location.href="/login"
    }   
        
        
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

                            <br />
                            <h2>check box</h2>
                                    <Checkbox   
                                    checkedIcon={<ActionFavorite />}
                                    uncheckedIcon={<ActionFavoriteBorder />}
                                    checked={this.state.option1}
                                    //checked='false'
                                    //onCheck={this.updateCheck.bind(this)}
                                    onCheck={(e) => this.setState({ option1: !this.state.option1 })}
                                    label="option1 "
                                    style={styles.checkbox}
                                    />

                                    <Checkbox   
                                    checkedIcon={<ActionFavorite />}
                                    uncheckedIcon={<ActionFavoriteBorder />}
                                    checked={this.state.option2}
                                    //checked='false'
                                    //onCheck={this.updateCheck.bind(this)}
                                    onCheck={(e) => this.setState({ option2: !this.state.option2 })}
                                    label="option2 "
                                    style={styles.checkbox}
                                    />            
                                    <RadioButtonGroup name="shipSpeed" defaultSelected={this.state.gender} onChange={(e,value) => this.setState({ gender: e.target.value })}>
                                    <RadioButton
                                        value="male"
                                        label="male"
                                        style={styles.radioButton}
                                    />
                                    <RadioButton
                                        value="female"
                                        label="female"
                                        style={styles.radioButton}
                                    />
                                    
                                    </RadioButtonGroup>   
                                                                     
  
                        <button className="btn btn-success" type="submit" value="Submit">Submit</button> <p>    </p>
                        <button className="btn btn-warning" onClick={this.del} >Delete</button>
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
        addProfile: (firstname, lastname, age, option1, option2, gender) => {
            console.log("in mapdispatchtoprops")
            dispatch(register.addProfile(firstname, lastname, age, option1, option2, gender));
          
        },
        fetchProfile: () => {
            dispatch(register.fetchProfile());
        },
        delProfile: () => {
            dispatch(register.delProfile());
        },
        
        
    }
  
  }

  export default connect(mapStateToProps,mapDispatchToProps)(Profile);






                            