import React from "react";
import Image from "next/image";
export default function Hero3() {
  return (
    <div className="container min-height-100vh d-flex align-items-center pt-100 pb-100 pt-sm-120 pb-sm-120">
      {/* Home Section Content */}
      <div className="home-content pb-sm-90 text-center">
        <h1
          className="hs-title-5 font-alt overflow-hidden mb-40 mb-sm-30 wow fadeRotateIn"
          data-wow-delay="0.2s"
        >
          Jane Garsia Creative Studio
        </h1>
        <div className="row">
          <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
            <div
              className="bg-blur p-4 round wow fadeInUp"
              data-wow-delay="0.35s"
            >
              <div className="row px-1 position-relative">
                <div className="col-lg-8 text-lg-start mb-md-30">
                  <p className="mb-0 opacity-8">
                    We specialize in a range of services that include branding,
                    UI/UX design, no-code development, and photography.
                  </p>
                </div>
                <div className="col-lg-4 local-scroll text-lg-end">
                  <a
                    href="#about"
                    className="btn btn-mod btn-w btn-large circle"
                    data-btn-animate="y"
                  >
                    Discover Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Home Section Content */}
      {/* Scroll Down */}
      <div
        className="local-scroll scroll-down-wrap-2 wow fadeInUp"
        data-wow-offset={0}
      >
        <div className="full-wrapper text-end">
          <a href="#about" className="scroll-down-2">
            <Image
              src="/assets/images/demo-modern/arrow-down-white.svg"
              alt="Scroll Down"
              width={51}
              height={132}
            />
          </a>
        </div>
      </div>
      {/* End Scroll Down */}
      {/* Social Media Links */}
      <div className="hs-social left wow fadeInUp" data-wow-offset={0}>
        <a href="#" className="hs-social-link">
          <span className="visually-hidden">Instagram</span>
          <i className="fa-instagram" />
        </a>
        <a href="#" className="hs-social-link">
          <span className="visually-hidden">Twitter</span>
          <i className="fa-twitter" />
        </a>
        <a href="#" className="hs-social-link">
          <span className="visually-hidden">Facebook</span>
          <i className="fa-facebook-f" />
        </a>
      </div>
      {/* End Social Media Links */}
    </div>
  );
}
