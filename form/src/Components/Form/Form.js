import React, { Component } from "react";
import View from "../Viewform/View";
import Popup from "../Popup/popup";
import "./Form.css";

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
        <div className="container">
          <form>
            <div className="form-group mb20">
              <label>
                First Name
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <div className="form-group mb20">
              <label>
                Last Name
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <div className="form-group mb20">
              <label>
                Phone Number
                <input
                  type="text"
                  name="phonenumber"
                  id="phonenumber"
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <div className="form-group mb20">
              <label>
                Message
                <textarea
                  type="text"
                  name="message"
                  rows="10"
                  cols="30"
                  id="message"
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <div className="form-group mb20">
              <label>
                Role
                <select id="role" name="role" onChange={this.handleChange}>
                  <option>Teacher</option>
                  <option>Student</option>
                  <option>Other</option>
                </select>
              </label>
            </div>
            <div className="form-group mb20">
              <input
                type="submit"
                value="Submit"
                id="submit"
                onClick={this.handleSubmit}
              />
            </div>
          </form>
        </div>
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
