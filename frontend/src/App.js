import React, { Component } from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Todo from './components/Todo';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Data from './components/Data';
import { Nav,NavItem } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav bsStyle="pills" activeKey={1}>
          <NavItem eventKey={1} href="/" >
            Home
          </NavItem>
          <NavItem eventKey={2} href="/todo">
            Todo
          </NavItem>
          <NavItem eventKey={3} href="/data">
            Data
          </NavItem>
        </Nav>


        <BrowserRouter>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/todo" component={Todo} />
            <Route exact path="/data" component={Data} />
            <Route component={NotFound}/>
          </Switch>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
