import React, { Component } from "react";
import View from "../Viewform/View";
import Popup from "../Popup/popup";

class Form extends Component {
  state = [
    {
      firstname: "",
      lastname: "",
      phonenumber: "",
      role: "",
      message: "",
      submit: false,
    },
  ];
  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ submit: true });
  };

  render() {
    return (
      <div>
        <form>
          <label>
            First Name
            <input
              type="text"
              name="firstname"
              id="firstname"
              onChange={this.handleChange}
            />
          </label>
          <label>
            Last Name
            <input
              type="text"
              name="lastname"
              id="lastname"
              onChange={this.handleChange}
            />
          </label>
          <label>
            Phone Number
            <input
              type="text"
              name="phonenumber"
              id="phonenumber"
              onChange={this.handleChange}
            />
          </label>
          <label>
            Message
            <textarea
              type="text"
              name="message"
              id="message"
              onChange={this.handleChange}
            />
          </label>
          <label>
            Role
            <select id="role" name="role" onChange={this.handleChange}>
              <option>Teacher</option>
              <option>Student</option>
              <option>Other</option>
            </select>
          </label>
          <input
            type="submit"
            value="Submit"
            id="submit"
            onClick={this.handleSubmit}
          />
        </form>
        <View
          firstname={this.state.firstname}
          lastname={this.state.lastname}
          phonenumber={this.state.phonenumber}
          role={this.state.role}
          message={this.state.message}
        />
        {this.state.submit && (
          <Popup
            firstname={this.state.firstname}
            lastname={this.state.lastname}
            phonenumber={this.state.phonenumber}
            role={this.state.role}
            message={this.state.message}
          />
        )}
      </div>
    );
  }
}

export default Form;
