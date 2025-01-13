"use client";
import TypeWriter from "@/components/common/TypeWriter";
import React from "react";
import Image from "next/image";
export default function Hero4() {
  return (
    <div className="container min-height-100vh d-flex align-items-center pt-100 pb-100 pt-sm-120 pb-sm-120">
      {/* Home Section Content */}
      <div className="home-content text-start pb-md-20">
        <div className="row">
          {/* Home Section Text */}
          <div className="col-lg-6 d-flex align-items-center mb-md-60 mb-sm-30 z-index-1">
            <div className="hs-title-overlap w-100 text-center text-lg-start">
              <h2 className="section-descr-large mb-30 mb-sm-20 wow fadeInUp">
                Hey! I'm Jane Garsia.
              </h2>
              <h1 className="hs-title-5 uppercase font-alt mb-40 mb-sm-30">
                <span className="d-block wow fadeRotateIn"> Freelance </span>
                <span
                  className="d-block wow fadeRotateIn"
                  data-wow-delay="0.2s"
                  data-wow-offset={0}
                >
                  <span className="visually-hidden">
                    designer, developer, artist
                  </span>
                  <TypeWriter
                    strings={["designer", "developer", "artist"]}
                    colorClass=""
                  />
                </span>
              </h1>
              <div
                className="local-scroll wow fadeInUp wch-unset"
                data-wow-delay="0.5s"
                data-wow-offset={0}
              >
                <a
                  href="#portfolio"
                  className="btn btn-mod btn-large btn-circle"
                  data-btn-animate="y"
                >
                  View Portfolio <i className="icon-arrow-right2 ms-1" />
                </a>
              </div>
            </div>
          </div>
          {/* End Home Section Text */}
          {/* Image */}
          <div className="col-lg-6 d-flex align-items-center">
            <div className="w-100 wow fadeInLeft" data-wow-delay="0.6s">
              <Image
                src="/assets/images/demo-modern/hs-image-4.jpg"
                alt="Image Description"
                width={900}
                height={600}
              />
            </div>
          </div>
          {/* End Image */}
        </div>
      </div>
      {/* End Home Section Content */}
      {/* Scroll Down */}
      <div
        className="local-scroll scroll-down-wrap-2 wow fadeInUp"
        data-wow-offset={0}
      >
        <div className="full-wrapper text-center">
          <a href="#about" className="scroll-down-2">
            <Image
              src="/assets/images/demo-modern/arrow-down-1.svg"
              alt="Scroll Down"
              width={50}
              height={73}
            />
          </a>
        </div>
      </div>
      {/* End Scroll Down */}
    </div>
  );
}
