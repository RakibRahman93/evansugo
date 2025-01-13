"use client";
import TypeWriter from "@/components/common/TypeWriter";
import Image from "next/image";
import { useState } from "react";
import ModalVideo from "react-modal-video";
export default function Hero2() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="container min-height-100vh d-flex align-items-center pt-100 pb-100 pt-sm-120 pb-sm-120">
        {/* Home Section Content */}
        <div className="home-content text-start">
          <div className="row">
            {/* Home Section Text */}
            <div className="col-md-10 offset-md-1 col-lg-6 offset-lg-0 d-flex align-items-center mb-md-60 mb-sm-30">
              <div className="w-100 text-center text-lg-start">
                <h2 className="section-caption mb-30 mb-xs-10 wow fadeInUp">
                  Resonance Creative Studio
                </h2>
                <h1 className="hs-title-8 mb-40 mb-sm-20 wow fadeInUp">
                  Create your beautiful web presence
                  <span className="visually-hidden">easily, fast, smart</span>
                  <TypeWriter
                    colorClass=""
                    strings={["easily", "fast", "smart"]}
                  />
                </h1>
                <p
                  className="section-descr mb-50 wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  Resonance is a full-service creative studio creating beautiful
                  digital experiences and products.
                </p>
                <div
                  className="local-scroll mt-n10 wow fadeInUp wch-unset"
                  data-wow-delay="0.4s"
                  data-wow-offset={0}
                >
                  <a
                    href="#portfolio"
                    className="btn btn-mod btn-large btn-round btn-hover-anim align-middle mt-10"
                  >
                    <span>View Portfolio</span>
                  </a>
                  <a
                    onClick={() => setOpen(true)}
                    className="link-hover-anim align-middle lightbox mfp-iframe ms-3 ms-sm-5 me-3 me-sm-5 mt-10"
                    data-link-animate="y"
                  >
                    <i className="icon-play size-13 me-1" /> How it works?
                  </a>
                </div>
              </div>
            </div>
            {/* End Home Section Text */}
            {/* Images */}
            <div className="col-lg-6 d-flex align-items-center">
              <div
                className="w-100 ps-xl-3 wow fadeInLeft"
                data-wow-delay="0.15s"
              >
                <div className="composition-4">
                  <div className="composition-4-decoration-1 opacity-65">
                    <Image
                      width="148"
                      height="148"
                      className="svg-shape"
                      src="/assets/images/decoration-3.svg"
                      alt=""
                    />
                  </div>
                  <div className="composition-4-image-1">
                    <div className="composition-4-image-1-inner">
                      <Image
                        width={850}
                        height={834}
                        src="/assets/images/hs-image-1.jpg"
                        alt="Image Description"
                      />
                    </div>
                  </div>
                  <div className="composition-4-image-2">
                    <div className="composition-4-image-2-inner">
                      <Image
                        width={570}
                        height={598}
                        src="/assets/images/hs-image-2.jpg"
                        alt="Image Description"
                      />
                    </div>
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
          <div className="container">
            <a href="#about" className="scroll-down-1">
              <div className="scroll-down-1-icon">
                <i className="mi-arrow-down" />
              </div>
              <div className="scroll-down-1-text">Scroll Down</div>
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
