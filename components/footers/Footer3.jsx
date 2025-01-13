"use client";
import { socialLinks } from "@/data/footer";
import React from "react";

export default function Footer3() {
  const scrollToTop = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Linear easing replacement
    });
  };

  return (
    <div className="container">
      <div className="row">
        {/* Copyright */}
        <div className="col-lg-3 text-center text-lg-start mb-md-50">
          <div>© Resonance {new Date().getFullYear()}.</div>
          <div className="small">
            Made with love for <i>great people</i>.
          </div>
        </div>
        {/* End Copyright */}
        {/* Social Links */}
        <div className="col-lg-6 fw-social-inline text-center mb-md-40">
          {socialLinks.map((elm, i) => (
            <div key={i} className="fw-social-inline-item">
              <a
                href={elm.href}
                target="_blank"
                rel="nofollow noopener"
                className="link-hover-anim align-middle"
                data-link-animate="y"
              >
                <span className="link-strong link-strong-unhovered">
                  {elm.text}
                </span>
                <span
                  className="link-strong link-strong-hovered"
                  aria-hidden="true"
                >
                  {elm.text}
                </span>
              </a>
            </div>
          ))}
        </div>
        {/* End Social Links */}
        <div
          className="col-lg-3 text-center text-lg-end local-scroll"
          onClick={scrollToTop}
        >
          <a href="#top" className="fw-top-link">
            <span className="fw-top-link-underline">Back to top</span>
            <span className="icon ms-1">
              <i className="icon-arrow-up size-17" aria-hidden="true" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
