import React from "react";

const View = (props) => {
  return (
    <div>
      <h2>This is your input</h2>
      <p>First Name {props.firstname}</p>
      <p>Last Name {props.lastname}</p>
      <p>Phone Number {props.phonenumber}</p>
      <p>Role {props.role}</p>
      <p>Message {props.message}</p>
    </div>
  );
};

export default View;
