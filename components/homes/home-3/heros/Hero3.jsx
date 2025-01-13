import AnimatedText from "@/components/common/AnimatedText";
import React from "react";
import Image from "next/image";
export default function Hero3() {
  return (
    <div className="container min-height-100vh d-flex align-items-center pt-100 pb-100 pt-sm-120 pb-sm-140">
      {/* Video BG Init */}
      <div
        className="player"
        data-property="{videoURL:'https://www.youtube.com/watch?v=Magk43brnjA',containment:'#home',autoPlay:true, showControls:true, showYTLogo: false, mute:true, startAt:0, opacity:1}"
      />
      {/* End Video BG Init */}
      {/* Home Section Content */}
      <div className="home-content text-center">
        <div className="position-relative">
          <h1 className="hs-title-2a font-alt uppercase mt-40 mb-30">
            <span className="wow charsAnimIn" data-splitting="chars">
              <AnimatedText text="Awards winning creative studio based in Melburn" />
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
          </h1>
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
              src="/assets/images/demo-brutalist/arrow-down-1.svg"
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
