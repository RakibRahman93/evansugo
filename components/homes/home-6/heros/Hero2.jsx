"use client";

import { useState } from "react";
import ModalVideo from "react-modal-video";

export default function Hero2() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="container min-height-100vh overflow-hidden d-flex align-items-center pt-100 pb-100">
        {/* Home Section Content */}
        <div className="home-content">
          <div className="row">
            {/* Home Section Text */}
            <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
              <h2 className="section-caption-fancy large mb-30 mb-xs-20 wow fadeInUp">
                Resonance Web Studio
              </h2>
              <h1
                className="hs-title-9 mb-30 wow fadeRotateIn"
                data-wow-delay="0.2s"
              >
                Make your beautiful web presence{" "}
                <span className="mark-decoration-5">easily</span>{" "}
              </h1>
              <div className="row">
                <div className="col-md-10 offset-md-1">
                  <p
                    className="section-descr white mb-40 wow fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    We are an award winning studio specializing in branding,
                    design and engineering. Our mission is to make work process
                    meaningful.
                  </p>
                </div>
              </div>
              <div
                className="local-scroll wow fadeInUp wch-unset"
                data-wow-delay="0.6s"
              >
                <a
                  href="#portfolio"
                  className="btn btn-mod btn-color btn-large btn-round btn-hover-anim mx-1 mb-xs-10"
                >
                  <span>Discover Works</span>
                </a>
                <a
                  onClick={() => setOpen(true)}
                  className="btn btn-mod btn-w-c btn-large btn-round mx-1 mb-xs-10 lightbox mfp-iframe"
                  data-btn-animate="y"
                >
                  <i className="icon-play size-13 me-1" /> How we work?
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
          <div className="full-wrapper text-center">
            <a href="#about" className="scroll-down-4">
              <i className="mi-arrow-down size-24" />
            </a>
          </div>
        </div>
        {/* End Scroll Down */}
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
