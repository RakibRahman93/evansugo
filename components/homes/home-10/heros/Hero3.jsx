"use client";

import { useRef, useState } from "react";

export default function Hero3() {
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
          <source src="/assets/videos/video-7.mp4" type="video/mp4" />
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
        <h1 className="hs-title-7 mb-40">
          <span className="wow charsAnimIn-1" data-splitting="chars">
            Resonance <span className="font-alt">Creative</span> Studio
          </span>
        </h1>
        <div className="row">
          <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
            <hr
              className="white mt-0 mb-30 wow scalexIn"
              data-wow-delay="0.85s"
            />
            <div className="row wow fadeInUpShort" data-wow-delay="1.35s">
              <div className="col-sm-6 col-md-7 text-center text-sm-start mb-xs-30">
                <p className="mb-0">
                  Resonance is an award-winning studio specializing in branding,
                  design and engineering.
                </p>
              </div>
              <div className="col-sm-6 col-md-5 text-center text-sm-end local-scroll">
                <a
                  href="#about"
                  className="btn btn-mod btn-w btn-large btn-round btn-hover-anim"
                >
                  <span>Discover Now</span>
                </a>
              </div>
            </div>
          </div>
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
            <i className="icon-arrow-down" />
          </a>
        </div>
      </div>
      {/* End Scroll Down */}
    </div>
  );
}
