import { featureItems2 } from "@/data/features";
import Image from "next/image";
import React from "react";

export default function Promo() {
  return (
    <div className="container position-relative">
      {/* Decorative Dots */}
      <div
        className="decoration-4 d-none d-md-block"
        data-rellax-y=""
        data-rellax-speed="-0.5"
        data-rellax-percentage=".7"
      >
        <Image
          width="103"
          height="223"
          src="/assets/images/decoration-2.svg"
          alt=""
        />
      </div>
      {/* End Decorative Dots */}
      <div className="row">
        {/* Text */}
        <div className="col-lg-6 mb-md-60 mb-xs-30 d-flex align-items-center">
          <div
            className="wow fadeInUp"
            data-wow-duration="1.2s"
            data-wow-offset={205}
          >
            <div className="row">
              <div className="col-lg-10">
                <h2 className="section-title mb-60 mb-sm-30">
                  Awesome Template With Clean Design
                </h2>
              </div>
            </div>
            {/* Features Grid */}
            <div className="row alt-features-grid">
              {/* Features Item */}
              {featureItems2.map((item, index) => (
                <div key={index} className={item.className}>
                  <div className="alt-features-item">
                    <div className="alt-features-icon">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        focusable="false"
                        xmlns="http://www.w3.org/2000/svg"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      >
                        <path d={item.path} />
                      </svg>
                    </div>
                    <h3 className="alt-features-title">{item.title}</h3>
                    <div className="alt-features-descr">{item.description}</div>
                  </div>
                </div>
              ))}
              {/* End Features Item */}
            </div>
            {/* End Features Grid */}
          </div>
        </div>
        {/* End Text */}
        {/* Images */}
        <div className="col-lg-6 d-flex align-items-start">
          <div className="call-action-3-images mt-xs-0 text-end">
            <div className="call-action-3-image-1">
              <Image
                width={633}
                height={821}
                src="/assets/images/promo-6.jpg"
                alt="Image Description"
                className="wow scaleOutIn"
                data-wow-duration="1.2s"
                data-wow-offset={205}
              />
            </div>
            <div className="call-action-3-image-2-wrap d-flex align-items-center">
              <div
                className="call-action-3-image-2"
                data-rellax-y=""
                data-rellax-speed="0.85"
                data-rellax-percentage="0.5"
              >
                <Image
                  width={386}
                  height={500}
                  src="/assets/images/promo-7.jpg"
                  alt="Image Description"
                  className="wow scaleOutIn"
                  data-wow-duration="1.2s"
                />
              </div>
            </div>
          </div>
        </div>
        {/* End Images */}
      </div>
    </div>
  );
}
