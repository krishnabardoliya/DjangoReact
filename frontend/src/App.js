import React, { Component } from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
//import Todo from './components/Todo';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Data from './components/Data';
import Profile from './components/Profile';
import Profile1 from './components/Profile1';
import ProfileRedux from './components/ProfileRedux';
import Login from './components/Login';
import Logout from './components/Logout';
import { Nav,NavItem } from 'react-bootstrap';


class App extends Component {
  state = {
    activeKey: 1
}

  
  
  handleSelect(eventKey) {
    this.setState({activeKey: eventKey});
  }
  
  render() {

    const token = localStorage.token
    
    
    return (
      
      <div className="App">
        {token ?
          <Nav bsStyle="pills" activeKey={this.state.activeKey} >
          <NavItem eventKey={1} href="/data" onSelect={this.handleSelect}>
            Data
          </NavItem>
          <NavItem eventKey={2} href="/profile" onSelect={this.handleSelect}>
            Profile
          </NavItem>
          <NavItem eventKey={2} href="/profile1" onSelect={this.handleSelect}>
            Profile1
          </NavItem>
          <NavItem eventKey={2} href="/profileredux" onSelect={this.handleSelect}>
            Profile redux
          </NavItem>
          <NavItem eventKey={3} href="/logout" >
            Logout
          </NavItem>
          </Nav>
          :
          <Nav bsStyle="pills" activeKey={this.state.activeKey} >
         
          <NavItem eventKey={1} href="/" onSelect={this.handleSelect}>
            Home
          </NavItem>
          <NavItem eventKey={2} href="/login" onSelect={this.handleSelect}>
            Login
          </NavItem>
          </Nav>
        }
        


        <BrowserRouter>

          <Switch>
            <Route exact path="/" component={Home} />
            
            <Route exact path="/data" component={Data} />
            <Route exact path="/login" component={Login} />
            <Route exect path="/logout" component={Logout}/>
            <Route exect path="/profile" component={Profile}/>
            <Route exect path="/profile1" component={Profile1}/>
            <Route exect path="/profileredux" component={ProfileRedux}/>
            <Route component={NotFound}/>
          </Switch>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
