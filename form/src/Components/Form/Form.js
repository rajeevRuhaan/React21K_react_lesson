import React from "react";
import "./Form.css";

const Form = ({ submit, change }) => {
  return (
    <div>
      <div className="container">
        <form onSubmit={submit}>
          <div className="form-group mb20">
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              onChange={change}
              required
            />
          </div>
          <div className="form-group mb20">
            <label htmlFor="lastname">
              Last Name
              <input
                type="text"
                name="lastname"
                id="lastname"
                onChange={change}
                required
              />
            </label>
          </div>
          <div className="form-group mb20">
            <label htmlFor="phonenumber">
              Phone Number
              <input
                type="text"
                name="phonenumber"
                id="phonenumber"
                onChange={change}
                required
              />
            </label>
          </div>
          <div className="form-group mb20">
            <label htmlFor="message">
              Message
              <textarea
                type="text"
                name="message"
                rows="10"
                cols="30"
                id="message"
                onChange={change}
                required
              />
            </label>
          </div>
          <div className="form-group mb20">
            <label htmlFor="role">Role</label>
            <select name="role" onChange={change}>
              <option value="Teacher">Teacher</option>
              <option value="Student">Student</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group mb20">
            <input type="submit" value="Send" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
