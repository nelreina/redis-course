import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import AddUser from './AddUser';
import { get } from './api';
class App extends Component {
  setStateAsync = state => {
    return new Promise(resolve => {
      this.setState(state, resolve);
    });
  };

  render() {
    return (
      <div className="container">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/add-user" component={AddUser} />
        </Switch>
      </div>
    );
  }
}

export default App;
