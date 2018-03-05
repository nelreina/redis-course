import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import AddUser from './AddUser';
import { get } from './api';
class App extends Component {
  state = {};
  setStateAsync = state => {
    return new Promise(resolve => {
      this.setState(state, resolve);
    });
  };
  async componentDidMount() {
    try {
      const data = await get('/ping');
      console.info(data);
      await this.setStateAsync({ data });
    } catch (error) {
      await this.setStateAsync({ error });
    }
  }

  render() {
    return (
      <div className="container">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/add-user" component={AddUser} />
        </Switch>
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
      </div>
    );
  }
}

export default App;
