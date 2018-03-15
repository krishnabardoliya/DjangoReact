import React, { Component } from 'react';
import { connect } from 'react-redux';
import { get_user } from '../actions';

class Data extends Component {
    componentDidMount() {
        this.props.get_user();
    }
    render() {
        console.log(this.props.regs)
        const name=this.props.regs;
        
        return (
           <div className="Data">
            
          
                <div className="jumbotron">
                    <h1>Users </h1>
                    
                </div>

         
           
         </div>
        )
    }
}

function mapStateToProps(state){
    return {
        regs: state.name,
    }
  } 

  const mapDispatchToProps = dispatch => {
    return {
        get_user: () => {
            dispatch(get_user());
        },
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Data);