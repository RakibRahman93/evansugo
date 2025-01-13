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
          <source src="/assets/videos/video-4.mp4" type="video/mp4" />
        </video>
        <div className="bg-video-overlay bg-dark-alpha-30" />
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
      <div className="home-content pt-20 pt-md-0 text-center">
        <h2 className="section-title-tiny font-alt mb-40 mb-sm-30 wow fadeInUp">
          I’m Ronald Smith
        </h2>
        <h1 className="hs-title-4 font-alt mb-60 mb-sm-40">
          <span className="wow charsAnimIn" data-splitting="chars">
            Visual &amp; Web Designer Based in Melburn.
          </span>
        </h1>
        <div
          className="local-scroll wow fadeInUp"
          data-wow-delay="0.6s"
          data-wow-offset={0}
        >
          <a
            href="#portfolio"
            className="btn btn-mod btn-large btn-w btn-circle"
            data-btn-animate="y"
          >
            Discover projects
          </a>
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
            <i className="icon-arrow-down1 size-22" />
          </a>
        </div>
      </div>
      {/* End Scroll Down */}
    </div>
  );
}
