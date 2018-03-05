import React, { Component } from 'react';
import { isEmpty } from 'lodash';
import { post } from './api';

const isValidForm = form => {
  if (isEmpty(form)) return false;
  if ('id' in form) {
    const keys = Object.keys(form);
    const fields = [];
    keys.forEach(k => {
      if (k !== 'id') {
        fields.push(k);
      }
    });
    if (fields.length === 0) return false;
    return true;
  } else {
    return false;
  }
};
const initState = { form: {}, validForm: false };
class AddUser extends Component {
  state = initState;
  handleInput = evt => {
    const { name, value } = evt.target;
    const { form } = this.state;
    form[name] = value;
    const validForm = isValidForm(form);
    this.setState({ form, validForm });
  };
  addUser = async evt => {
    evt.preventDefault();
    if (!this.state.validForm) {
      return;
    }
    evt.target.reset();
    const data = await post('/add-user', this.state.form);
    console.info(data);
    this.setState(initState);
  };
  render() {
    return (
      <form onSubmit={this.addUser}>
        <div className="form-group">
          <label htmlFor="id">Redis ID</label>
          <input
            type="text"
            name="id"
            className="form-control"
            placeholder="Enter ID"
            onChange={this.handleInput}
          />
        </div>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            className="form-control"
            placeholder="Enter user First Name"
            onChange={this.handleInput}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            className="form-control"
            placeholder="Enter user Last Name"
            onChange={this.handleInput}
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            type="text"
            name="age"
            className="form-control"
            placeholder="Enter user Age"
            onChange={this.handleInput}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add
        </button>
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
      </form>
    );
  }
}

export default AddUser;
