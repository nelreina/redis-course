import React, { Component } from 'react';

class App extends Component {
  state = {
    text: 'Some state'
  };
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
        <h3>Redis Course </h3>
        {this.state.error ? (
          <pre>{JSON.stringify(this.state.error, null, 2)}</pre>
        ) : (
          <pre>{JSON.stringify(this.state.data, null, 2)}</pre>
        )}
        <p>{this.state.text}</p>
      </div>
    );
  }
}

export default App;
