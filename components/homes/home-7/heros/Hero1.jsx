import React from "react";
import Image from "next/image";
export default function Hero1() {
  return (
    <>
      {/* Background Shape */}
      <div className="bg-shape-5 d-none d-lg-block" />
      {/* End Background Shape */}
      {/* Background Shape */}
      <div className="bg-shape-6" />
      {/* End Background Shape */}
      <div className="container position-relative min-height-100vh d-flex align-items-center pt-100 pb-100 pt-md-120 pb-md-120">
        {/* Home Section Content */}
        <div className="home-content text-start">
          <div className="row">
            {/* Home Section Text */}
            <div className="col-lg-6 d-flex align-items-center mb-md-60 mb-sm-40">
              <div className="w-100 text-center text-lg-start">
                <h1 className="hs-title-1 mb-40 mb-sm-20 wow fadeInUp">
                  The Resonance Website Template
                </h1>
                <div className="row">
                  <div className="col-lg-10">
                    <p
                      className="section-descr mb-50 mb-sm-40 wow fadeInUp"
                      data-wow-delay="0.15s"
                    >
                      Resonance is a full-service studio creating beautiful
                      digital experiences. We are an awards-winning team
                      specializing in design and engineering.
                    </p>
                  </div>
                </div>
                <div
                  className="local-scroll wow fadeInUp wch-unset"
                  data-wow-delay="0.3s"
                  data-wow-offset={0}
                >
                  <a
                    href="#contact"
                    className="btn btn-mod btn-grad btn-large btn-round mb-xs-10"
                    data-btn-animate="y"
                  >
                    Start a project
                  </a>
                  <a
                    href="#about"
                    className="link-hover-anim link-gradient ms-2 ms-sm-5 me-2"
                    data-link-animate="y"
                  >
                    <span className="link-strong link-strong-unhovered">
                      Learn more{" "}
                      <i
                        className="mi-arrow-right size-24"
                        aria-hidden="true"
                      ></i>
                    </span>
                    <span
                      className="link-strong link-strong-hovered"
                      aria-hidden="true"
                    >
                      Learn more{" "}
                      <i
                        className="mi-arrow-right size-24"
                        aria-hidden="true"
                      ></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            {/* End Home Section Text */}
            {/* Images */}
            <div className="col-lg-6 d-flex align-items-center">
              <div className="w-100 ps-xl-3">
                <div className="composition-6">
                  <div className="composition-6-decoration-1">
                    <Image
                      src="/assets/images/demo-gradient/decoration-1.svg"
                      alt="Image Description"
                      width={151}
                      height={131}
                    />
                  </div>
                  <div className="composition-6-decoration-2">
                    <Image
                      src="/assets/images/demo-gradient/decoration-1.svg"
                      alt="Image Description"
                      width={151}
                      height={131}
                    />
                  </div>
                  <div className="composition-6-image">
                    <Image
                      src="/assets/images/demo-gradient/hs-image-1.jpg"
                      alt="Image Description"
                      width={872}
                      height={866}
                      className="wow scaleOutIn"
                      data-wow-duration="1.2s"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* End Images */}
          </div>
        </div>
        {/* End Home Section Content */}
        {/* Scroll Down */}
        <div
          className="local-scroll scroll-down-wrap-type-1 wow fadeInUp"
          data-wow-offset={0}
        >
          <div className="container text-center text-lg-start">
            <a href="#about" className="scroll-down-1">
              <div className="scroll-down-1-icon">
                <i className="mi-arrow-down" />
              </div>
              <div className="scroll-down-1-text">Scroll Down</div>
            </a>
          </div>
        </div>
        {/* End Scroll Down */}
      </div>
    </>
  );
}
