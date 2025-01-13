import React from "react";

export default function Hero2() {
  return (
    <div className="container min-height-100vh d-flex align-items-center pt-100 pb-100 pt-sm-120 pb-sm-120">
      {/* Home Section Content */}
      <div className="home-content text-center">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <h2 className="lead uppercase mb-40 mb-sm-30 wow fadeInUp">
              <span className="mark-decoration-1">
                Hello <span className="font-alt">&amp;</span> Welcome
              </span>
            </h2>
            <h1 className="hs-title-13 mb-50 mb-sm-40">
              <span className="wow charsAnimIn" data-splitting="chars">
                Elevate
                <span className="font-alt"> the digital</span> experience with
                Resonance <span className="font-alt">studio</span>.
              </span>
            </h1>
            <div className="local-scroll wow fadeInUp" data-wow-delay="0.65s">
              <a
                href="#about"
                className="btn btn-mod btn-border-w btn-large btn-round ms-1 me-1 mt-2"
                data-btn-animate="y"
              >
                Discover Now
              </a>
              <a
                href="#portfolio"
                className="btn btn-mod btn-w btn-large btn-round ms-1 me-1 mt-2"
                data-btn-animate="y"
              >
                View Projects
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* End Home Section Content */}
      {/* Scroll Down */}
      <div
        className="local-scroll scroll-down-wrap-4 wow fadeInUp"
        data-wow-offset={0}
      >
        <div className="full-wrapper text-end">
          <a href="#about" className="scroll-down-4">
            <i className="icon-arrow-down" />
          </a>
        </div>
      </div>
      {/* End Scroll Down */}
      {/* Status */}
      <div className="hs-status uppercase wow fadeInUp" data-wow-offset={0}>
        Based in Kyiv, Ukraine
      </div>
      {/* End Status */}
    </div>
  );
}
