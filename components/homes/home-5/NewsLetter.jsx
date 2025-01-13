"use client";
import React from "react";

export default function NewsLetter() {
  return (
    <div className="container position-relative">
      <div className="row">
        <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 wow fadeInUp wch-unset">
          <h2 className="section-title-tiny text-gray mb-20">
            Subscribe to our newsletter
          </h2>
          <form
            onSubmit={(e) => e.preventDefault()}
            id="mailchimp"
            className="form newsletter-elegant"
            autoComplete="off"
          >
            <div className="row">
              <div className="col-md-8 col-lg-9 mb-sm-30">
                <input
                  placeholder="Enter your email"
                  className="newsletter-field input-lg form-control mb-20"
                  type="email"
                  pattern=".{5,100}"
                  required
                  aria-required="true"
                />
                <div className="form-tip">
                  <i className="icon-info size-16" /> By sending the form you
                  agree to the <a href="#">Terms &amp; Conditions</a> and{" "}
                  <a href="#">Privacy Policy</a>.
                </div>
              </div>
              <div className="col-md-4 col-lg-3 text-start text-md-end">
                <button
                  type="submit"
                  aria-controls="subscribe-result"
                  className="link-hover-anim link-circle-1 align-middle"
                  data-link-animate="y"
                >
                  <span className="link-strong link-strong-unhovered">
                    Subscribe
                    <i
                      className="mi-arrow-right size-18 align-middle"
                      aria-hidden="true"
                    ></i>
                  </span>
                  <span
                    className="link-strong link-strong-hovered"
                    aria-hidden="true"
                  >
                    Subscribe
                    <i
                      className="mi-arrow-right size-18 align-middle"
                      aria-hidden="true"
                    ></i>
                  </span>
                </button>
              </div>
            </div>
            <div
              id="subscribe-result"
              role="region"
              aria-live="polite"
              aria-atomic="true"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
