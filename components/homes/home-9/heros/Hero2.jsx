"use client";

import TypeWriter from "@/components/common/TypeWriter";
import { useEffect } from "react";
import Image from "next/image";
export default function Hero2({ dark }) {
  useEffect(() => {
    const addPaddingLeft = () => {
      document.getElementById("paddingLeft").style.paddingLeft = `${
        (window.innerWidth -
          document.getElementById("paddingLeftContainer").offsetWidth) /
        2
      }px`;
    };

    addPaddingLeft();

    window.addEventListener("resize", addPaddingLeft);

    return () => {
      window.removeEventListener("resize", addPaddingLeft);
    };
  }, []);
  return (
    <>
      <div className="container" id="paddingLeftContainer" />
      <div className="row g-0">
        <div className="col-lg-6">
          <div
            id="paddingLeft"
            className="split-column-left pt-100 pb-100 pt-sm-70 pb-sm-70 min-height-100vh rounded-0 position-relative d-flex align-items-center"
          >
            {/* Background Shape */}
            {dark ? (
              <div className="bg-shape-7 opacity-003">
                <Image
                  src="/assets/images/demo-slick/bg-shape-3.svg"
                  width={1443}
                  height={644}
                  alt=""
                />
              </div>
            ) : (
              <div className="bg-shape-7">
                <Image
                  src="/assets/images/demo-slick/bg-shape-3.svg"
                  width={1443}
                  height={644}
                  alt=""
                />
              </div>
            )}
            {/* End Background Shape */}
            <div className="w-100 text-center text-lg-start pt-80">
              <h2 className="section-caption-slick mb-30 mb-sm-20 wow fadeInUp">
                Resonance Studio
              </h2>
              <h1 className="hs-title-10 mb-40 mb-sm-20 wow fadeInUp">
                Create a beautiful web presence
                <span className="visually-hidden">easily, faster, smart</span>
                <TypeWriter strings={["easily", "faster", "smart"]} />
              </h1>
              <p
                className="section-descr mb-50 mb-sm-40 wow fadeInUp"
                data-wow-delay="0.15s"
              >
                We are an award winning studio specializing in design and
                engineering.
              </p>
              <div
                className="local-scroll wow fadeInUp wch-unset"
                data-wow-delay="0.3s"
                data-wow-offset={0}
              >
                <a
                  href="#contact"
                  className="btn btn-mod btn-color btn-large btn-circle btn-hover-anim mb-xs-10"
                >
                  <span>Start a project</span>
                </a>
                <a
                  href="#about"
                  className="link-hover-anim ms-2 ms-sm-5 me-2"
                  data-link-animate="y"
                >
                  Learn more <i className="mi-arrow-right size-24" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 d-flex align-items-stretch">
          <div className="split-image-right rounded-0">
            <Image
              src="/assets/images/demo-slick/hs-image-5.jpg"
              alt="Image Description"
              width={960}
              height={1080}
              className="wow fadeScaleOutIn"
              data-wow-duration="1.3s"
            />
          </div>
        </div>
      </div>
    </>
  );
}
