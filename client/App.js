import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from './Nav';
class App extends Component {
  state = {};
  setStateAsync = state => {
    return new Promise(resolve => {
      this.setState(state, resolve);
    });
  };
  async componentDidMount() {
    try {
      const resp = await fetch('http://localhost:9000/api/ping');
      if (resp.ok) {
        const data = await resp.json();
        await this.setStateAsync({ data });
      } else {
        const error = `ERROR: ${resp.status}: ${resp.statusText}`;
        await this.setStateAsync({ error });
      }
      console.info(resp);
    } catch (error) {
      await this.setStateAsync({ error });
    }
  }

  render() {
    return (
      <div>
        <div className="container">
          <Nav />
          <Switch>
            <Route exact path="/" render={() => <h3>Home</h3>} />
            <Route path="/add-user" render={() => <h3>Add User</h3>} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
