"use client";
import React from "react";

export default function Contact() {
  return (
    <>
      <div className="row">
        <div className="col-md-4 mb-sm-60">
          <div className="section-descr black">
            <p>
              We’re open to talk to good people. Just say hello and we’ll start
              a productive cooperation.
            </p>
            <p>
              {/* Change the phone number inside and link tag and href attribute */}
              Call us:
              <a href="tel:+18376528800" className="text-link">
                +1 837 652 8800
              </a>
              <br />
              {/* Change the email address inside and link tag and href attribute */}
              Say hi:
              <a href="mailto:ibthemes21@gmail.com" className="text-link">
                ibthemes21@gmail.com
              </a>
            </p>
            <div>
              <a href="#" className="hs-social-link d-inline-flex me-1">
                <span className="visually-hidden">Facebook</span>
                <i className="fa-facebook-f" />
              </a>
              <a href="#" className="hs-social-link d-inline-flex me-1">
                <span className="visually-hidden">Twitter</span>
                <i className="fa-twitter" />
              </a>
              <a href="#" className="hs-social-link d-inline-flex">
                <span className="visually-hidden">Instagram</span>
                <i className="fa-instagram" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-7 offset-md-1">
          {/* Contact Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="form contact-form"
            id="contact_form"
          >
            <div className="row mb-30">
              <div className="col-lg-6 mb-md-30">
                {/* Name */}
                <label htmlFor="name" className="visually-hidden">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="input-lg input-circle form-control"
                  placeholder="Name"
                  pattern=".{3,100}"
                  required
                  aria-required="true"
                />
                {/* End Name */}
              </div>
              <div className="col-lg-6">
                {/* Email */}
                <label htmlFor="email" className="visually-hidden">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="input-lg input-circle form-control"
                  placeholder="Email"
                  pattern=".{5,100}"
                  required
                  aria-required="true"
                />
                {/* End Email */}
              </div>
            </div>
            {/* Message */}
            <div className="mb-50">
              <label htmlFor="message" className="visually-hidden">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="input-lg input-circle form-control"
                style={{ height: 130 }}
                placeholder="Message"
                defaultValue={""}
              />
            </div>
            {/* End Message */}
            <div className="row">
              <div className="col-xs-4 col-lg-6 mb-md-30">
                {/* Send Button */}
                <button
                  className="submit_btn btn btn-mod btn-white btn-circle btn-ellipse"
                  data-btn-animate="ellipse"
                  id="submit_btn"
                  aria-controls="result"
                >
                  <span className="btn-ellipse-inner">
                    <span className="btn-ellipse-unhovered">Send Message</span>
                    <span className="btn-ellipse-hovered" aria-hidden="true">
                      Send Message
                    </span>
                  </span>
                </button>
              </div>
              <div className="col-xs-8 col-lg-6 d-flex align-items-center">
                {/* Inform Tip */}
                <div className="form-tip">
                  <i className="icon-info size-16" />
                  All the fields are required. By sending the form you agree to
                  the <a href="#">Terms &amp; Conditions</a> and{" "}
                  <a href="#">Privacy Policy</a>.
                </div>
              </div>
            </div>
            <div
              id="result"
              role="region"
              aria-live="polite"
              aria-atomic="true"
            />
          </form>
          {/* End Contact Form */}
        </div>
      </div>{" "}
    </>
  );
}
