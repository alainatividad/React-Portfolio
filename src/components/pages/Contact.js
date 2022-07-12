import React from "react";

export default function Contact() {
  return (
    <div className="container col-md-6 mt-5 pt-3 animate__animated animate__fadeIn">
      <h1 className="mb-3 text-center">Contact Me!</h1>
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
      <hr></hr>

      <div className="text-center">
        <a
          href="mailto:alyssatnatividad@gmail.com"
          className="text-decoration-none text-light"
          target="_blank"
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
            fill-rule="evenodd"
            d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
          ></path>
        </svg>
        0426534626
      </div>
    </div>
  );
}
