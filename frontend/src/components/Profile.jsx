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
import { Table } from 'react-bootstrap';

var divStyle = {
    background: "#e2eef6",
    padding: "20px",
    margin: "20px",
    margin_left:"100px",
    fontSize:"15px",
  };
  
  
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
        gender: ""
    }

    

    componentDidMount() {
        this.props.fetchProfile();
        //this.props.register();
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
        console.log("in handleSubmit-------------");
        console.log(this.state.firstname,this.state.lastname,this.state.age,this.state.gender)
        this.props.addProfile(this.state.firstname,this.state.lastname,this.state.age,this.state.option1,this.state.option2,this.state.gender);
        console.log("token",JSON.parse(localStorage.token)['username'])
        
    }

    del= (e) => {
        e.preventDefault();
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
/*
        regs.map((r,id)=> 
                r.map((k)=>
                (token1==k.username) ?
                    this.state.open ?
                    null
                    :
                    (
                    console.log("gender is",k.gender),
                    this.setState({ firstname: k.firstname , lastname:k.lastname, age:k.age ,option1:k.option1, option2:k.option2, gender: k.gender, open:true})
                    )
                    :
                    null
                
                    )
                    )
        }
        else{
            window.location.href="/login"
        }   
 */       

        regs.map((r,id)=> 
                this.state.open ? null :
                    this.setState({ firstname: r.firstname , lastname:r.lastname, age:r.age ,option1:r.option1, option2:r.option2, gender: r.gender, open:true})
                    )
        }
        else{
            window.location.href="/login"
        }   
        
        return(
            <div className="row panel" >
               
                
            {token ?   
            <div className="col-sm-4" style={divStyle}>
            
              
            <form onSubmit={this.handleSubmit} method="post">
            <Table>
                <tbody>
                    <tr>
                        <div className="form-group">
                        
                        <td>    <label>First Name</label>    </td>

                        <td></td>
                           
                        <td>    <input
                                name="firstname"
                                type="text"
                                required="required"
                                value={this.state.firstname}
                                onChange={(e) => this.setState({ firstname: e.target.value })} />
                        </td>

                        </div>
                    </tr> 
                    <tr>
                           
                        
                        <div className="form-group">
                        <td>    <label>lastname</label>   </td>
                        <td>    
                            <input
                                name="lastname"
                                type="text"
                                required="required"
                                value={this.state.lastname}
                                onChange={(e) => this.setState({ lastname: e.target.value })} />
                        </td>        
                        </div>
                     </tr>
                     <tr>   

                        <div className="form-group">
                        <td>     <label>age</label>  </td>
                        <td>    
                            <input
                                name="age"
                                type="number"
                                required="required"
                                value={this.state.age}
                                onChange={(e) => this.setState({ age: e.target.value })} />
                        </td>        
                        </div>
                    </tr>    

                            <br />
                            
                            <div className="form-group">
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
                            </div>
                            <div className="form-group">
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
                            </div>
                                            
                            <div className="form-group">
                                    {this.state.gender && 
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
                                    }   
                             </div>                                        
                                    

                        <button className="btn btn-success" type="submit" value="Submit">Submit</button> <p>    </p>
                        <button className="btn btn-warning" onClick={this.del} >Delete</button>
                    </tbody>
                    </Table>    
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
    console.log("mapStateToProps",state)
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
        register: () => {
            dispatch(register.register());
        },
        delProfile: () => {
            dispatch(register.delProfile());
        },
        fetchProfile: () => {
            dispatch(register.fetchProfile());
        },
        
        
    }
  
  }

  export default connect(mapStateToProps,mapDispatchToProps)(Profile);






                            
