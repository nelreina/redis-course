import React, { Component } from 'react';
import { get } from './api';
class Home extends Component {
  state = { list: [] };
  setStateAsync = state => {
    return new Promise(resolve => {
      this.setState(state, resolve);
    });
  };
  search = async evt => {
    evt.preventDefault();
    const list = await get(`/search/${this.text.value}`);
    await this.setStateAsync({ list });
    this.text.value = '';
  };
  render() {
    const { list } = this.state;
    return (
      <div>
        <h1>Search Users</h1>
        <form className="form-inline" onSubmit={this.search}>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              ref={text => (this.text = text)}
              placeholder="Search Users By ID"
            />
          </div>
        </form>
        <div className="user-list">
          <pre>{JSON.stringify(list, null, 2)}</pre>
        </div>
      </div>
    );
  }
}

export default Home;
