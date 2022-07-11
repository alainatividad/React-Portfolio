import React from "react";

export default function Contact() {
  return (
    <div className="container col-md-6 mt-5 pt-3 animate__animated animate__fadeIn">
      <h1 className="mb-3">Contact Me!</h1>
      <div className="mb-3">
        <label htmlFor="validationDefault01" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="validationDefault01"
          required
        ></input>
      </div>
      <div className="mb-3">
        <label htmlFor="formControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="formControlInput1"
          placeholder="name@example.com"
        ></input>
      </div>
      <div className="mb-3">
        <label htmlFor="formControlTextarea1" className="form-label">
          Message
        </label>
        <textarea
          className="form-control"
          id="formControlTextarea1"
          placeholder="Leave a message!"
          rows="5"
        ></textarea>
      </div>
      <div className="col-12">
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </div>
  );
}
