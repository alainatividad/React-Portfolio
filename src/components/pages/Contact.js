import React, { useState } from "react";
// import the email validation checker
import { validateEmail } from "../../utils/validateText";

export default function Contact() {
  // We're checking if the values entered on all the fields in the contact page are valid so we're using useStates for them. We also need useState for the error messages we'll be setting based on the validations done
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // this event handler would store what is entered in the form
  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  // this event handler would check the entered value once the user clicks out of the form field and would show an error message if either the name or message is blank or if the email address is invalid
  const handleOnBlur = (e) => {
    // checks if the user clicks out of the form field
    if (e.currentTarget !== e.target) {
      // get the previous object that was clicked
      const inputType = e.target.name;
      const inputValue = e.target.value;

      // based on the input type, do the validation and set the error message if it applies
      if (inputType === "email" && !validateEmail(inputValue)) {
        setErrorMessage("Email is invalid");
        return;
      } else if (inputType === "name" && !inputValue.length) {
        setErrorMessage("Please enter a name");
        return;
      } else if (inputType === "message" && !inputValue.length) {
        setErrorMessage("Message is required");
        return;
      }
      // otherwise, set the error message to blank
      setErrorMessage("");
    }
  };

  // this event handler would perform checks after the user submits the form
  const handleFormSubmit = (e) => {
    // Preventing refreshing the page
    e.preventDefault();

    // check and validate all fields
    if (!validateEmail(email)) {
      setErrorMessage("Email is invalid");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
    }
    if (name.length === 0) {
      setErrorMessage("Please enter a name");
      return;
    }
    if (message.length === 0) {
      setErrorMessage("Message is required");
      return;
    }

    // If everything goes according to plan, we want to clear out the input after a successful registration. The saving of the details entered is not done.
    setName("");
    setMessage("");
    setEmail("");
    setErrorMessage("");
  };

  return (
    <div className="container col-md-6 mt-5 pt-3 animate__animated animate__fadeIn">
      <h2 className="mb-3 text-center">Contact Me!</h2>
      <div className="mb-3" onBlur={handleOnBlur}>
        <label htmlFor="formControlInput1" className="form-label">
          Name
        </label>
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          className="form-control"
          id="formControlInput1"
        ></input>
      </div>
      <div className="mb-3" onBlur={handleOnBlur}>
        <label htmlFor="formControlInput2" className="form-label">
          Email address
        </label>
        <input
          value={email}
          type="email"
          name="email"
          onChange={handleInputChange}
          className="form-control"
          id="formControlInput2"
          placeholder="name@example.com"
        ></input>
      </div>
      <div className="mb-3" onBlur={handleOnBlur}>
        <label htmlFor="formControlTextarea1" className="form-label">
          Message
        </label>
        <textarea
          value={message}
          type="message"
          name="message"
          className="form-control"
          id="formControlTextarea1"
          onChange={handleInputChange}
          rows="5"
        ></textarea>
      </div>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
      <div className="col-12">
        <button
          className="btn btn-primary"
          type="button"
          onClick={handleFormSubmit}
        >
          Submit
        </button>
      </div>
      <hr></hr>

      {/* The email address and phone number is added at the bottom of the screen */}
      <div className="text-center">
        <a
          href="mailto:alyssatnatividad@gmail.com"
          className="text-decoration-none text-light"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="white"
            className="bi bi-mailbox p-1"
            viewBox="0 0 16 16"
          >
            <path d="M4 4a3 3 0 0 0-3 3v6h6V7a3 3 0 0 0-3-3zm0-1h8a4 4 0 0 1 4 4v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a4 4 0 0 1 4-4zm2.646 1A3.99 3.99 0 0 1 8 7v6h7V7a3 3 0 0 0-3-3H6.646z" />
            <path d="M11.793 8.5H9v-1h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.354-.146l-.853-.854zM5 7c0 .552-.448 0-1 0s-1 .552-1 0a1 1 0 0 1 2 0z" />
          </svg>
          alyssatnatividad@gmail
        </a>
      </div>
      <div className="text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          fill="currentColor"
          className="bi bi-telephone-fill"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
          ></path>
        </svg>
        0426534626
      </div>
    </div>
  );
}
