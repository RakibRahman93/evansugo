"use client";

import Link from "next/link";
import { useRef, useState } from "react";

export default function Hero2() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMuteUnmute = () => {
    if (isMuted) {
      videoRef.current.muted = false;
      setIsMuted(false);
    } else {
      videoRef.current.muted = true;
      setIsMuted(true);
    }
  };
  return (
    <>
      <div className="bg-video-wrapper">
        <video
          ref={videoRef}
          className="bg-video"
          preload="auto"
          autoPlay
          muted
          loop
        >
          <source src="/assets/videos/video-1.mp4" type="video/mp4" />
        </video>
        <div className="bg-video-overlay bg-dark-alpha-80" />
      </div>
      <a
        onClick={toggleMuteUnmute}
        href="#"
        role="button"
        className="bg-video-button-muted"
      >
        <i className={`mi-volume-${isMuted ? "up" : "off"}`} />
        <span className="visually-hidden">Volume On</span>
      </a>
      <a
        onClick={togglePlayPause}
        href="#"
        role="button"
        className="bg-video-button-pause"
      >
        <i className={`mi-${isPlaying ? "pause" : "play"}`} />
        <span className="visually-hidden">Pause</span>
      </a>
      {/* End Background Video */}
      <div className="container min-height-100vh overflow-hidden d-flex align-items-center pt-100 pb-100">
        {/* Home Section Content */}
        <div className="home-content">
          <div className="row">
            {/* Home Section Text */}
            <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
              <h1 className="hs-title-1 mb-40 mb-sm-20 wow fadeRotateIn">
                Make your beautiful web presence
                <span className="mark-decoration-4">easily</span>
              </h1>
              <div className="row">
                <div className="col-lg-10 offset-lg-1">
                  <p
                    className="section-descr mb-50 mb-sm-40 wow fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    Resonance is a full-service studio creating beautiful
                    digital experiences. We are an awards-winning team
                    specializing in design and engineering.
                  </p>
                </div>
              </div>
              <div
                className="local-scroll wow fadeInUp wch-unset"
                data-wow-delay="0.4s"
              >
                <Link
                  href={`/gradient-portfolio`}
                  className="btn btn-mod btn-grad btn-large btn-round"
                  data-btn-animate="y"
                >
                  Discover works
                </Link>
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
