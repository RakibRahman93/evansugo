"use client";
import React from "react";
import FooterSocials from "./FooterSocials";
import { footerLinks, navigationLinks } from "@/data/footer";

export default function Footer7() {
  const scrollToTop = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Linear easing replacement
    });
  };

  return (
    <>
      {/* End Background Shape */}
      <div className="container position-relative">
        <div className="row pb-120 pb-sm-80 pb-xs-50">
          <div className="col-md-4 mb-sm-50">
            <h2 className="section-title-small mt-n10 mb-30">
              Get started with Resonance Template
            </h2>
            <p className="text-gray mb-40">
              Integer auctor aliquet martor, sed lorem malesuada eros blandit
              eget. Proin lacinia mortoc id odio vestibulum lorem ipsum.
            </p>
            <div className="local-scroll">
              <a
                href="#contact"
                className="btn btn-mod btn-medium btn-grad btn-round"
                data-btn-animate="y"
              >
                Contact us <i className="mi-arrow-right size-24 align-center" />
              </a>
            </div>
          </div>
          <div className="col-md-7 offset-md-1">
            <div className="row mt-n30">
              {/* Footer Widget */}
              <div className="col-sm-4 mt-30">
                <h3 className="fw-title">Company</h3>
                <ul className="fw-menu clearlist local-scroll">
                  {navigationLinks.map((elm, i) => (
                    <li key={i}>
                      <a href={elm.href}>{elm.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
              {/* End Footer Widget */}
              {/* Footer Widget */}
              <div className="col-sm-4 mt-30">
                <h3 className="fw-title">Social Media</h3>
                <ul className="fw-menu clearlist">
                  <FooterSocials />
                </ul>
              </div>
              {/* End Footer Widget */}
              {/* Footer Widget */}
              <div className="col-sm-4 mt-30">
                <h3 className="fw-title">Legal &amp; Press</h3>
                <ul className="fw-menu clearlist">
                  {footerLinks.map((elm, i) => (
                    <li key={i}>
                      <a href={elm.path}>{elm.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
              {/* End Footer Widget */}
            </div>
          </div>
        </div>
        {/* Footer Text */}
        <div className="row text-gray">
          <div className="col-md-4 col-lg-3">
            <b>© IB-Themes {new Date().getFullYear()}.</b>
          </div>
          <div className="col-md-7 offset-md-1 offset-lg-2 clearfix">
            <b>Based in London, United Kingdom.</b>
            {/* Back to Top Link */}
            <div
              className="local-scroll float-end mt-n20 mt-sm-10"
              onClick={scrollToTop}
            >
              <a href="#top" className="link-to-top gradient">
                <i className="mi-arrow-up size-24" />
                <span className="visually-hidden">Scroll to top</span>
              </a>
            </div>
            {/* End Back to Top Link */}
          </div>
        </div>
        {/* End Footer Text */}
      </div>
    </>
  );
}
