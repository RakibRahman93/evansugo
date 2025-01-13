"use client";
import React from "react";
import Image from "next/image";
export default function Newsletter() {
  return (
    <>
      <div className="decoration-14" />
      <div className="decoration-15" />
      {/* End Decoration Circles */}
      {/* Decoration Dots */}
      <div className="decoration-16 opacity-035 d-none d-md-block">
        <Image
          src="/assets/images/demo-slick/decoration-2.svg"
          alt="Image Description"
          width={128}
          height={228}
        />
      </div>
      <div className="decoration-17 opacity-035 d-none d-md-block">
        <Image
          src="/assets/images/demo-slick/decoration-2.svg"
          alt="Image Description"
          width={128}
          height={228}
        />
      </div>
      {/* End Decoration Dots */}
      <div className="container position-relative">
        <div className="row">
          <div className="col-md-8 offset-md-2 col-xl-6 offset-xl-3 wow fadeInUp">
            <h2 className="section-title-small text-center mb-40">
              Stay informed with our newsletter.
            </h2>
            <form
              onSubmit={(e) => e.preventDefault()}
              id="mailchimp"
              className="form"
            >
              <div className="d-sm-flex justify-content-between mb-3">
                <label htmlFor="newsletter-email" className="visually-hidden">
                  Your email
                </label>
                <input
                  placeholder="Enter your email"
                  className="newsletter-field input-lg input-circle"
                  id="newsletter-email"
                  name="newsletter-email"
                  type="email"
                  pattern=".{5,100}"
                  required
                  aria-required="true"
                />
                <button
                  type="submit"
                  aria-controls="subscribe-result"
                  className="newsletter-button btn btn-mod btn-color btn-large btn-circle btn-hover-anim"
                >
                  <span>Subscribe Now</span>
                </button>
              </div>
              <div className="form-tip">
                <i className="icon-info size-16" /> By sending the form you
                agree to the <a href="#">Terms &amp; Conditions</a> and{" "}
                <a href="#">Privacy Policy</a>.
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
    </>
  );
}
