"use client";

import AnimatedText from "@/components/common/AnimatedText";
import { useRef, useState } from "react";
import Image from "next/image";
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
    <div className="container min-height-100vh d-flex align-items-center pt-100 pb-100 pt-sm-120 pb-sm-140">
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
          <source src="/assets/videos/video-2.mp4" type="video/mp4" />
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
                    src="/assets/images/demo-brutalist/circle-text-1.svg"
                    width={89}
                    height={88}
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
        <div className="full-wrapper text-end">
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
    </div>
  );
}
