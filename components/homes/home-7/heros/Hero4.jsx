import React from "react";

export default function Hero4() {
  return (
    <>
      <div className="bg-overlay bg-gradient-primary-2 opacity-05" />
      {/* End Gradient Overlay */}
      <div className="container position-relative min-height-100vh overflow-hidden d-flex align-items-center pt-100 pb-100">
        {/* Home Section Content */}
        <div className="home-content">
          <h1 className="hs-line-14 text-outline-cont mb-40 mb-sm-20 wow fadeRotateIn">
            <span className="text-outline-2">Resonance Studio</span>
            <span className="text-outline-1">Resonance Studio</span>
            <span className="text-outline">Resonance Studio</span>
          </h1>
          <div className="row">
            <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
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
            <a
              href="#portfolio"
              className="btn btn-mod btn-border-grad btn-large btn-round"
              data-btn-animate="y"
            >
              Discover works
            </a>
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
    </>
  );
}
