"use client";
import AnimatedText from "@/components/common/AnimatedText";
import { scrollToElement } from "@/utlis/scrollToElement";
import { useEffect, useState } from "react";

import ModalVideo from "react-modal-video";

export default function Hero3() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="container min-height-100vh d-flex align-items-center pt-100 pb-100 pt-sm-120 pb-sm-120">
        {/* Home Section Content */}
        <div className="home-content">
          <div className="row">
            {/* Home Section Text */}
            <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
              <h2
                className="section-caption mb-30 mb-xs-10 wow fadeInUp"
                data-wow-duration="1.2s"
              >
                Resonance Creative Studio
              </h2>
              <h1 className="hs-title-1 mb-30">
                <span className="wow charsAnimIn" data-splitting="chars">
                  <AnimatedText text="Grow your business with new online experience." />
                </span>
              </h1>
              <div className="row">
                <div className="col-lg-8 offset-lg-2">
                  <p
                    className="section-descr mb-50 wow fadeInUp"
                    data-wow-delay="0.6s"
                    data-wow-duration="1.2s"
                  >
                    Resonance is a full-service studio creating beautiful
                    digital experiences and products.
                  </p>
                </div>
              </div>
              <div
                className="local-scroll mt-n10 wow fadeInUp wch-unset"
                data-wow-delay="0.7s"
                data-wow-duration="1.2s"
                data-wow-offset={0}
              >
                <a
                  href="#portfolio"
                  className="btn btn-mod btn-w btn-large btn-round btn-hover-anim ms-2 me-2 ms-sm-5 me-sm-5 align-middle mt-10"
                >
                  <span>View Portfolio</span>
                </a>
                <a
                  onClick={() => setOpen(true)}
                  className="link-hover-anim align-middle lightbox mfp-iframe mt-10"
                  data-link-animate="y"
                >
                  <i className="icon-play size-13 me-1" /> How it works?
                </a>
              </div>
            </div>
            {/* End Home Section Text */}
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
              <i className="mi-arrow-down size-24" />
            </a>
          </div>
        </div>
        {/* End Scroll Down */}
        {/* Status */}
        <div className="hs-status wow fadeInUp" data-wow-offset={0}>
          Based in London, United Kingdom
        </div>
        {/* End Status */}
      </div>{" "}
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId="jTea_8Fk5Ns"
        onClose={() => setOpen(false)}
      />{" "}
    </>
  );
}
