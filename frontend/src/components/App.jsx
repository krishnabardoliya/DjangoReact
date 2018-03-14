import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; 
import { add_name } from '../actions';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      text:''
    }
  }

  display()
  {
    this.props.add_name(this.state.text);
  }

  display1(){
    const {name}=this.props;
    return(
      <ul className="list-groups col-sm-4">
        {
          name.map(name=> {
            return(
              <li className="list-group-item">
                <div>
                  {name.text}
                </div>
              </li>
            )
          })
        }
      </ul>
    )
  }

  render() {
    console.log('this.props',this.props);
    return (
      <div className="App">
        <div className="jumbotron" >
          
        <div className="form-inline">
          <div className="form-group">
          <br/><br/><br/><br/>
        
        <input className="form-control" type="text" name="name" placeholder="enter your name" onChange={event => this.setState({text:event.target.value})} />
        <br/>
        <button type="button" className="btn btn-success" onClick={()=> this.display()} >add name</button>
        <br/><br/>

        
      </div>
      </div>  

      {this.display1()}
      </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({add_name},dispatch);
} 

function mapStateToProps(state){
  return({name:state})
} 

export default connect(mapStateToProps,mapDispatchToProps)(App);
