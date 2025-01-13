"use client";

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
    <div className="container min-height-100vh d-flex align-items-center pt-100 pb-100 pt-sm-120 pb-sm-120">
      {/* Background Video */}
      {/* Please replace the video file in folder "video" with your own file */}
      <div className="bg-video-wrapper">
        <video
          ref={videoRef}
          className="bg-video"
          preload="auto"
          autoPlay
          muted
          loop
        >
          <source src="/assets/videos/video-6.mp4" type="video/mp4" />
        </video>
        <div className="bg-video-overlay bg-dark-alpha-70" />
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
      {/* Home Section Content */}
      <div className="home-content text-center">
        <h2 className="section-title-tiny mb-50 mb-sm-30 wow fadeInUp">
          Hello &amp; Welcome
        </h2>
        <h1
          className="hs-title-3 mb-80 mb-sm-50 mb-xs-30 wow fadeInUp"
          data-wow-delay="0.2s"
        >
          <span className="text-rotate">
            Resonance Creative Studio, Talented Creative Team, Minimalism Lovers
          </span>
        </h1>
        <div className="local-scroll wow fadeInUpShort" data-wow-delay="0.4s">
          <a
            href="#about"
            className="link-hover-anim link-circle-1 align-middle"
            data-link-animate="y"
          >
            <span className="link-strong link-strong-unhovered">
              Discover Now{" "}
              <i
                className="mi-arrow-right size-18 align-middle"
                aria-hidden="true"
              ></i>
            </span>
            <span
              className="link-strong link-strong-hovered"
              aria-hidden="true"
            >
              Discover Now{" "}
              <i
                className="mi-arrow-right size-18 align-middle"
                aria-hidden="true"
              ></i>
            </span>
          </a>
        </div>
      </div>
      {/* End Home Section Content */}
      {/* Scroll Down */}
      <div
        className="local-scroll scroll-down-3-wrap wow fadeInUp"
        data-wow-offset={0}
      >
        <a href="#about" className="scroll-down-3">
          Scroll Down
        </a>
      </div>
      {/* End Scroll Down */}
    </div>
  );
}
