"use client";
import React, { useEffect, useState } from "react";

export default function Hero7() {
  const strings = [
    `Grow your business with new online experience.`,
    `Maximize your
                  online impact with our solutions.`,
    `Redefine your strategy for
                  long-term success.`,
  ];
  const [currentStr, setCurrentStr] = useState(strings[0]);
  const [animatedText, setAnimatedText] = useState(true);

  useEffect(() => {
    const changeText = setInterval(() => {
      setAnimatedText(false);
      setCurrentStr((prev) => {
        if (prev === strings[0]) {
          return strings[1];
        } else if (prev === strings[1]) {
          return strings[2];
        } else {
          return strings[0];
        }
      });
      setTimeout(() => {
        setAnimatedText(true);
      }, 200);
    }, 3000);

    return () => {
      clearInterval(changeText);
    };
  }, []);
  return (
    <section
      className="home-section bg-dark-1 bg-dark-alpha-30 bg-scroll light-content scrollSpysection"
      style={{
        backgroundImage: "url(/assets/images/mobile-video-placeholder.jpg)",
      }}
      id="home"
    >
      <div className="container min-height-100vh d-flex align-items-center pt-100 pb-100 pt-sm-120 pb-sm-120">
        {/* Video BG Init */}
        <div
          className="player"
          data-property="{videoURL:'https://www.youtube.com/watch?v=Magk43brnjA',containment:'#home',autoPlay:true, showControls:true, showYTLogo: false, mute:true, startAt:0, opacity:1}"
        />
        {/* End Video BG Init */}
        {/* Home Section Content */}
        <div className="home-content">
          <div className="row">
            {/* Home Section Text */}
            <div className="col-md-10 offset-md-1 mb-20 mb-sm-0">
              <h2 className="hs-title-11 mb-30 mb-xs-10 wow fadeInUp">
                Resonance Creative Studio
              </h2>
              <h1
                className="hs-title-12 mb-50 mb-sm-30 wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <span className="text-rotate">
                  {animatedText ? (
                    <span className="fadeInText">{currentStr}</span>
                  ) : (
                    <span style={{ visibility: "hidden" }} className="">
                      {currentStr}
                    </span>
                  )}
                </span>
              </h1>
              <div
                className="local-scroll wch-unset wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <a
                  href="#about"
                  className="btn btn-mod btn-border-w btn-large btn-round ms-1 me-1 mt-2 align-middle"
                  data-btn-animate="y"
                >
                  Learn More
                </a>
                <a
                  href="#contact"
                  className="btn btn-mod btn-w btn-large btn-round ms-1 me-1 mt-2 align-middle"
                  data-btn-animate="y"
                >
                  Get In Touch
                </a>
              </div>
            </div>
            {/* End Home Section Text */}
          </div>
        </div>
        {/* End Home Section Content */}
        {/* Scroll Down */}
        <div
          className="local-scroll scroll-down-wrap wow fadeInUp"
          data-wow-offset={0}
        >
          <a href="#about" className="scroll-down">
            <i className="mi-chevron-down" />
            <span className="visually-hidden">Scroll to the next section</span>
          </a>
        </div>
        {/* End Scroll Down */}
      </div>
    </section>
  );
}
