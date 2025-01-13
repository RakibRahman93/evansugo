"use client";
import { contactItems } from "@/data/contact";
import Image from "next/image";
import React from "react";

export default function Contact() {
  return (
    <div className="container">
      <div className="row mb-90 mb-sm-50">
        <div className="col-lg-5 col-xl-4 mb-md-90 mb-sm-50 wow fadeInUp">
          <h2 className="section-title-strong mb-40">
            Let’s work <span className="font-alt">together</span>
          </h2>
          <p className="mb-0">
            Integer non efficitur ex lorem ipsum. Praesent mauris, dignissim
            ultricies sapien non, pulvinar volutpat elit donec lorem impsum
            blandit mollis ipsum, eu fringilla.
          </p>
        </div>
        <div className="col-lg-7 offset-xl-1">
          <div className="round overflow-hidden">
            <Image
              width={1080}
              height={516}
              src="/assets/images/demo-strong/section-image-5.jpg"
              alt="Image Description"
              className="wow scaleOutIn"
              data-wow-offset={110}
            />
          </div>
        </div>
      </div>
      <div className="row wow fadeInUp" data-wow-delay="0.27s">
        {/* Contact Info */}
        <div className="col-lg-5 col-xl-4 mb-md-90 mb-sm-50">
          <div className="contact-2">
            {/* Contact Info Item */}
            {contactItems.map((elm, i) => (
              <div key={i} className="contact-2-item">
                <div className="contact-2-icon">
                  <i className={elm.iconClass} />
                </div>
                <div className="contat-2-intro">
                  <h4 className="contact-2-title">
                    {elm.link.text.split(" ")[0]}{" "}
                    <span className="font-alt">
                      {elm.link.text.split(" ")[1]}
                    </span>
                  </h4>
                  <div className="contact-2-text">
                    <a href={elm.link.url}>{elm.link.text}</a>
                  </div>
                </div>
              </div>
            ))}
            {/* End Contact Info Item */}

            {/* End Contact Info Item */}
          </div>
        </div>
        {/* End Contact Info */}
        {/* Contact Form */}
        <div className="col-lg-7 offset-xl-1">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="form contact-form"
            id="contact_form"
          >
            <div className="row">
              <div className="col-md-6">
                {/* Name */}
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="input-lg round form-control"
                    placeholder="Enter your name"
                    pattern=".{3,100}"
                    required
                    aria-required="true"
                  />
                </div>
              </div>
              <div className="col-md-6">
                {/* Email */}
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="input-lg round form-control"
                    placeholder="Enter your email"
                    pattern=".{5,100}"
                    required
                    aria-required="true"
                  />
                </div>
              </div>
            </div>
            {/* Message */}
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                className="input-lg round form-control"
                style={{ height: 130 }}
                placeholder="Enter your message"
                defaultValue={""}
                required
              />
            </div>
            <div className="row">
              <div className="col-sm-6">
                {/* Inform Tip */}
                <div className="form-tip pt-20 pt-sm-0">
                  <i className="icon-info size-16" />
                  All the fields are required. By sending the form you agree to
                  the <a href="#">Terms &amp; Conditions</a> and{" "}
                  <a href="#">Privacy Policy</a>.
                </div>
              </div>
              <div className="col-sm-6">
                {/* Send Button */}
                <div className="text-end pt-20">
                  <button
                    type="submit"
                    id="submit_btn"
                    aria-controls="result"
                    className="submit_btn btn btn-mod btn-white btn-large btn-round btn-hover-anim align-middle"
                  >
                    <span> Send Message </span>
                  </button>
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
        </div>
        {/* End Contact Form */}
      </div>
    </div>
  );
}
