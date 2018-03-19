import React, { Component } from 'react';
import { connect } from 'react-redux';
import { register } from "../actions";
import { Redirect } from 'react-router';


class Data extends Component {

    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        const token = localStorage.token
        const regs = this.props.regs
        return (
            <div className="container">
            {token ? <div>
                        {regs.map((reg, index) => (
                            
                            <span key={index}>
                            <ul>
                                    
                                      <h2>  Username  </h2>
                                    
                                 
                                    
                                    {reg.map((r, id) => (
                                       
                                            <h5 key={id}>{r.username}</h5>
                                      
                                    ))}
                                    </ul>     
                            </span>
                            
                        ))}
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
        fetchUser: () => {
            dispatch(register.fetchUser());
        },
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Data);