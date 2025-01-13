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
          <source src="/assets/videos/video-8.mp4" type="video/mp4" />
        </video>
        <div className="bg-video-overlay bg-dark-alpha-60" />
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
      {/* Top Dark Gradient Overlay */}
      <div className="position-absolute top-0 bottom-0 start-0 end-0 bg-gradient-dark-1 opacity-05" />
      {/* End Top Dark Gradient Overlay */}
      {/* Home Section Content */}
      <div className="home-content">
        <div className="row">
          {/* Home Section Text */}
          <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
            <h1 className="hs-title-9 mb-40 mb-sm-20 wow fadeInUp">
              Global Marketing Consulting Agency Based in Melburn
            </h1>
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <p
                  className="hs-descr mb-50 mb-sm-40 wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  We’re a global marketing company delivering innovative
                  solutions to our clients.
                </p>
              </div>
            </div>
            <div
              className="local-scroll wow fadeInUp wch-unset"
              data-wow-delay="0.4s"
            >
              <a
                href="#contact"
                className="btn btn-mod btn-color btn-large btn-round btn-hover-anim"
              >
                <span>Get a Consultation</span>
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
  );
}
