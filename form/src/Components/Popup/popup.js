import React from "react";
import "./Popup.css";

const closeHandler = () => {
  window.location.reload();
};
const Popup = ({ firstname, lastname, phonenumber, role, message, submit }) => {
  return (
    <div className="overlay">
      <div className="popup">
        <h2>Your note:</h2>
        <div>
          <p>
            First Name: <span>{firstname}</span>{" "}
          </p>
          <p>
            Last Name: <span>{lastname}</span>{" "}
          </p>
          <p>
            Phone Number: <span>{phonenumber}</span>{" "}
          </p>
          <p>
            Role: <span> {role}</span>{" "}
          </p>
          <p>
            Message: <span> {message}</span>{" "}
          </p>
          <button onClick={submit}>Yes, i am sure</button>
          <button className="secondary" onClick={closeHandler}>
            Nope, DONT WANT TO POST IT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
