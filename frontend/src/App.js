import React, { Component } from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
//import Todo from './components/Todo';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Data from './components/Data';
import Profile from './components/Profile';
import Login from './components/Login';
import Logout from './components/Logout';
import { Nav,NavItem } from 'react-bootstrap';

class App extends Component {
  state = {
    activeKey: 1
}

  
  
  handleSelect(selectedKey) {
    this.setState({activeKey: selectedKey});
  }
  
  render() {
    
    
    return (
      <div className="App">
        <Nav bsStyle="pills" activeKey={this.state.activeKey} >
          <NavItem eventKey={1} href="/" onSelect={this.handleSelect}>
            Home
          </NavItem>
          <NavItem eventKey={2} href="/login" onSelect={this.handleSelect}>
            Login
          </NavItem>
          <NavItem eventKey={3} href="/data" onSelect={this.handleSelect}>
            Data
          </NavItem>
          <NavItem eventKey={4} href="/profile" onSelect={this.handleSelect}>
            Profile
          </NavItem>
          <NavItem eventKey={5} href="/logout" >
            Logout
          </NavItem>
        </Nav>


        <BrowserRouter>

          <Switch>
            <Route exact path="/" component={Home} />
            
            <Route exact path="/data" component={Data} />
            <Route exact path="/login" component={Login} />
            <Route exect path="/logout" component={Logout}/>
            <Route exect path="/profile" component={Profile}/>
            <Route component={NotFound}/>
          </Switch>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
