import React from "react";
import "./popup.css";

const closeHandler = () => {
  window.location.reload();
};
const popup = (props) => {
  return (
    <div className="popup">
      <h2>Your note:</h2>
      <p>First Name {props.firstname}</p>
      <p>Last Name {props.lastname}</p>
      <p>Phone Number {props.phonenumber}</p>
      <p>Role {props.role}</p>
      <p>Message {props.message}</p>
      <button>Yes, i am sure</button>
      <button onClick={closeHandler}>Nope, DONT WANT TO POST IT</button>
    </div>
  );
};

export default popup;
