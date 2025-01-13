import Link from "next/link";
import React from "react";

export default function Hero3() {
  return (
    <div className="container min-height-100vh overflow-hidden d-flex align-items-center pt-100 pb-100">
      {/* Home Section Content */}
      <div className="home-content">
        <div className="row">
          {/* Home Section Text */}
          <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
            <h1 className="hs-title-1 mb-40 mb-sm-20 wow fadeRotateIn">
              Make your beautiful web presence
              <span className="mark-decoration-4">easily</span>
            </h1>
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <p
                  className="section-descr mb-50 mb-sm-40 wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  Resonance is a full-service studio creating beautiful digital
                  experiences. We are an awards-winning team specializing in
                  design and engineering.
                </p>
              </div>
            </div>
            <div
              className="local-scroll wow fadeInUp wch-unset"
              data-wow-delay="0.4s"
            >
              <Link
                href={`/gradient-portfolio`}
                className="btn btn-mod btn-grad btn-large btn-round"
                data-btn-animate="y"
              >
                Discover works
              </Link>
            </div>
          </div>
          {/* End Home Section Text */}
        </div>
      </div>
      {/* End Home Section Content */}
      {/* Scroll Down */}
      <div
        className="local-scroll scroll-down-wrap wow fadeInUp"
        data-wow-offset={0}
      >
        <a href="#about" className="scroll-down opacity-09">
          <i className="mi-chevron-down text-gradient" />
          <span className="visually-hidden">Scroll to the next section</span>
        </a>
      </div>
      {/* End Scroll Down */}
    </div>
  );
}
