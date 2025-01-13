"use client";

import { useRef, useState } from "react";
import ModalVideo from "react-modal-video";

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
  const [isOpen, setOpen] = useState(false);
  return (
    <>
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
        {/* Home Section Content */}
        <div className="home-content">
          <div className="row">
            {/* Home Section Text */}
            <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
              <h2 className="section-caption-fancy large mb-30 mb-xs-20 wow fadeInUp">
                Resonance Web Studio
              </h2>
              <h1 className="hs-title-9 mb-30 wow fadeInUp">
                Make your beautiful web presence
                <span className="visually-hidden">easily, fast, smart</span>
                <span
                  data-period={3250}
                  data-type='[ "easily", "fast", "smart"]'
                  className="typewrite color-secondary-1"
                  aria-hidden="true"
                />
              </h1>
              <div className="row">
                <div className="col-md-10 offset-md-1">
                  <p
                    className="section-descr white mb-40 wow fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    We are an award winning studio specializing in branding,
                    design and engineering. Our mission is to make work process
                    meaningful.
                  </p>
                </div>
              </div>
              <div
                className="local-scroll wow fadeInUp wch-unset"
                data-wow-delay="0.4s"
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
