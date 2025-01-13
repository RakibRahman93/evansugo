"use client";
import React from "react";
import Image from "next/image";
export default function NewsLetter() {
  return (
    <div className="row">
      <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 wow fadeInUp">
        <div className="row">
          <div className="col-md-10 col-xl-8 d-flex mb-50 mb-sm-30">
            <div className="flex-sm-shrink-0 me-3 me-sm-4">
              <Image
                src="/assets/images/demo-corporate/section-image-1.png"
                width={100}
                height={100}
                alt="Image Description"
              />
            </div>
            <div className="d-flex align-items-center">
              <h2 className="section-title-small w-100 mb-0">
                Stay informed with our weekly newsletter.
              </h2>
            </div>
          </div>
        </div>
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
              className="newsletter-field input-lg round"
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
              className="newsletter-button btn btn-mod btn-color btn-large btn-round btn-hover-anim"
            >
              <span>
                Subscribe
                <span className="d-none d-md-inline-block">Now</span>
              </span>
            </button>
          </div>
          <div className="form-tip">
            <i className="icon-info size-16" /> By sending the form you agree to
            the <a href="#">Terms &amp; Conditions</a> and{" "}
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
  );
}
