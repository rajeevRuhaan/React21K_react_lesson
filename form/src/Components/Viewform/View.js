import React from "react";
import "./View.css";

const View = ({ firstname, lastname, phonenumber, role, message }) => {
  return (
    <div className="cont">
      <h2>This is your input</h2>
      <p>First Name : {firstname}</p>
      <p>Last Name : {lastname}</p>
      <p>Phone Number : {phonenumber}</p>
      <p>Role : {role}</p>
      <p>Message : {message}</p>
    </div>
  );
};

export default View;
