import AnimatedText from "@/components/common/AnimatedText";
import React from "react";
import Image from "next/image";
export default function Hero1() {
  return (
    <div className="container min-height-100vh d-flex align-items-center pt-100 pb-100 pt-sm-120 pb-sm-140">
      {/* Home Section Content */}
      <div className="home-content text-start">
        <div className="position-relative">
          <h1 className="hs-title-2 font-alt uppercase mt-40 mb-30">
            <span className="wow charsAnimIn" data-splitting="chars">
              <span
                className="d-block"
                data-rellax-x=""
                data-rellax-vertical-scroll-axis="x"
                data-rellax-horizontal-speed={7}
              >
                <AnimatedText text="Awards winning" />
              </span>
              <span
                className="d-block text-end"
                data-rellax-x=""
                data-rellax-vertical-scroll-axis="x"
                data-rellax-horizontal-speed={-5}
              >
                <AnimatedText text="Creative Studio" />
              </span>
              <span
                className="d-block"
                data-rellax-x=""
                data-rellax-vertical-scroll-axis="x"
                data-rellax-horizontal-speed={3}
              >
                <AnimatedText text="Based in Melburn" />

                <span className="wow fadeIn" data-wow-delay="1.1s">
                  <Image
                    width={89}
                    height={88}
                    src="/assets/images/demo-brutalist/circle-text-1.svg"
                    className="hs-image-1"
                    alt="Image Description"
                  />
                </span>
              </span>
            </span>
          </h1>
          <p className="hs-paragraph-1 wow clipRightIn" data-wow-delay="1.1s">
            Resonance is a full-service creative studio creating beautiful
            digital experiences and products.
          </p>
        </div>
      </div>
      {/* End Home Section Content */}
      {/* Scroll Down */}
      <div
        className="local-scroll scroll-down-wrap-2 wow fadeInUp"
        data-wow-offset={0}
      >
        <div className="full-wrapper">
          <a href="#about" className="scroll-down-2">
            <Image
              src="/assets/images/demo-brutalist/arrow-down.svg"
              width={51}
              height={132}
              alt="Scroll Down"
            />
          </a>
        </div>
      </div>
      {/* End Scroll Down */}
      {/* Social Media Links */}
      <div className="hs-social wow fadeInUp" data-wow-offset={0}>
        <a href="#" className="hs-social-link">
          <div className="visually-hidden">Instagram</div>
          <i className="fa-instagram" />
        </a>
        <a href="#" className="hs-social-link">
          <div className="visually-hidden">Twitter</div>
          <i className="fa-twitter" />
        </a>
        <a href="#" className="hs-social-link">
          <div className="visually-hidden">Facebook</div>
          <i className="fa-facebook-f" />
        </a>
      </div>
      {/* End Social Media Links */}
    </div>
  );
}
