import React from "react";
import "./form.css";
const Form = () => {


  return (
    <div className="container text-center form-title">
      <h1 className="">Contact Us</h1>
      <p className="form-description">
        We are here to help you. Please fill in the form below and we will get
        back to you as soon as possible.
      </p>

      <div className="formDiv text-center">
        <form
          action="https://formsubmit.co/fe1928b2a1750ebd91743dc2c6a38f1e"
          method="POST"
          className="row g-3 customer-form"
        >
          <div className="col-md-6">
            <input
              type="text"
              name="fullName"
              className="form-control"
              id="fullName"
              placeholder="Full name*"
              style={{ maxWidth: "100%" }}
              required
            />
          </div>
          <div className="col-md-6">
            <input
              name="email"
              type="email"
              className="form-control"
              id="email"
              placeholder="Email*"
              style={{ maxWidth: "100%" }}
              required
            />
          </div>
          <div className="col-md-6">
            <input
              name="phone"
              type="tel"
              className="form-control"
              id="phone"
              placeholder="Phone number*"
              style={{ maxWidth: "100%" }}
              required
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              name="city"
              className="form-control"
              id="city"
              placeholder="City*"
              style={{ maxWidth: "100%" }}
              required
            />
          </div>
          <div className="col-lg-12">
            <input
              type="text"
              name="subject"
              className="form-control"
              id="subject"
              placeholder="Subject*"
              style={{ maxWidth: "100%" }}
              required
            />
          </div>
          <div className="form-floating col-12">
            <textarea
              name="message"
              type="text"
              className="form-control"
              placeholder="Type your message "
              id="message"
              style={{ height: "200px", maxWidth: "100%" }}
              required
            ></textarea>
          </div>
          <div className="d-grid gap-2 col-6 mx-auto w-100 h-100 my-5">
            <button
              className="fw-bold border-0"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
