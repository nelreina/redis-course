import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import AddUser from './AddUser';
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
            <Route exact path="/" component={Home} />
            <Route path="/add-user" component={AddUser} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
