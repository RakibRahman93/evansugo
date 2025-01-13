import { featuresData } from "@/data/features";
import Image from "next/image";
import React from "react";

export default function Features() {
  return (
    <>
      <div className="marquee marquee-style-5 mt-n40 mt-sm-n20 mt-xs-0 mb-80 mb-sm-60">
        <div className="marquee-track marquee-animation-3">
          <h2 className="visually-hidden">Why choose us?</h2>
          <div aria-hidden="true">Why choose us?</div>
          <div aria-hidden="true">Why choose us?</div>
          <div aria-hidden="true">Why choose us?</div>
          <div aria-hidden="true">Why choose us?</div>
          <div aria-hidden="true">Why choose us?</div>
        </div>
      </div>
      {/* End Marquee Text Line */}
      <div className="container">
        <div className="row mb-100 mb-sm-80">
          <div className="col-sm-7 col-md-5">
            <div className="circle overflow-hidden">
              <Image
                width={788}
                height={280}
                src="/assets/images/demo-strong/section-image-4.jpg"
                alt="Image Description"
              />
            </div>
          </div>
        </div>
        {/* Features Grid */}
        <div className="row">
          <div className="col-11 col-lg-10 offset-1 px-md-4">
            <div className="row gx-huge">
              {/* Features Item */}
              {featuresData.map((item, index) => (
                <div key={index} className={`col-md-6 ${item.parentClass}`}>
                  <div className="position-relative">
                    <div className="features-1-number">{item.number}</div>
                    <div className="features-1-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="64"
                        height="64"
                        viewBox="0 0 64 64"
                        aria-hidden="true"
                      >
                        <path d={item.iconPath} />
                      </svg>
                    </div>
                    <div className="features-1-title mb-40">
                      {item.title1} <br />
                      <span className="font-alt">{item.title2}</span>
                    </div>
                    <hr className="mt-0 mb-30 black" />
                    <p className="features-1-descr mb-0">{item.desc}</p>
                  </div>
                </div>
              ))}
              {/* End Features Item */}
            </div>
          </div>
        </div>
        {/* End Features Grid */}
      </div>
    </>
  );
}
