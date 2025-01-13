import React from "react";
import AnimatedText from "../common/AnimatedText";

export default function Hero() {
  return (
    <div className="container min-height-100vh d-flex align-items-center pt-100 pb-100 pt-sm-120 pb-sm-120">
      {/* Home Section Content */}
      <div className="home-content pb-40">
        <div className="row">
          {/* Home Section Text */}
          <div className="col-md-10 offset-md-1">
            <h2
              className="hs-title-11 mb-20 wow fadeInUp"
              data-wow-duration="1.2s"
            >
              Resonance — One/Multi Page Multipurpose Nextjs Template
            </h2>
            <h1 className="hs-title-12 mb-40 mb-sm-30">
              <span className="wow charsAnimIn" data-splitting="chars">
                <AnimatedText text="Create your beautiful website with Resonance." />
              </span>
            </h1>
            <div
              className="local-scroll row wow fadeInUp"
              data-wow-delay="0.6s"
              data-wow-duration="1.2s"
            >
              <div className="col-10 offset-1 col-xl-8 offset-xl-2 mb-50 mb-sm-40">
                <div className="row g-2">
                  <div className="col-sm-8 offset-sm-2 col-md-4 offset-md-0">
                    <a
                      href="#multi-page"
                      className="btn btn-mod btn-medium btn-round btn-full"
                      data-btn-animate="y"
                    >
                      Multi Page{" "}
                      <span className="d-none d-lg-inline">Demos</span>
                    </a>
                  </div>
                  <div className="col-sm-8 offset-sm-2 col-md-4 offset-md-0">
                    <a
                      href="#one-page"
                      className="btn btn-mod btn-medium btn-round btn-full"
                      data-btn-animate="y"
                    >
                      One Page <span className="d-none d-lg-inline">Demos</span>
                    </a>
                  </div>
                  <div className="col-sm-8 offset-sm-2 col-md-4 offset-md-0">
                    <a
                      href="#intro-sections"
                      className="btn btn-mod btn-border btn-medium btn-round btn-full"
                      data-btn-animate="y"
                    >
                      Intro Sections
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Feature List */}
            <div
              className="mt-n10 wow fadeInUp"
              data-wow-delay="0.75s"
              data-wow-duration="1.2s"
            >
              {/* Features List Item */}
              <div className="d-inline-flex mt-10 mx-3">
                <div className="features-list-icon">
                  <i className="mi-check" />
                </div>
                <div className="features-list-text">10 Design Concepts</div>
              </div>
              {/* End Features List Item */}
              {/* Features List Item */}
              <div className="d-inline-flex mt-10 mx-3">
                <div className="features-list-icon">
                  <i className="mi-check" />
                </div>
                <div className="features-list-text">Accessibility</div>
              </div>
              {/* End Features List Item */}
              {/* Features List Item */}
              <div className="d-inline-flex mt-10 mx-3">
                <div className="features-list-icon">
                  <i className="mi-check" />
                </div>
                <div className="features-list-text">
                  Light &amp; Dark Versions
                </div>
              </div>
              {/* End Features List Item */}
            </div>
            {/* End Feature List */}
          </div>
          {/* End Home Section Text */}
        </div>
      </div>
      {/* End Home Section Content */}
    </div>
  );
}
