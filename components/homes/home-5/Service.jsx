import { services6 } from "@/data/services";
import React from "react";

export default function Service() {
  return (
    <>
      <div
        className="page-section bg-dark-1 bg-dark-alpha-70 light-content parallax-7 pb-140"
        style={{
          backgroundImage: "url(/assets/images/demo-elegant/section-bg-3.jpg)",
        }}
      >
        <div className="container position-relative">
          <div className="row mb-70 mb-sm-50">
            <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3 text-center">
              <h2 className="section-title mb-30 mb-sm-20">Our Services.</h2>
              <div className="text-gray">
                In visual design, form is described as the way an artist
                arranges elements in the entirety of a composition.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-n140 position-relative z-index-1">
        <div className="row mb-n30">
          {/* Services Item*/}
          {services6.map((elm, i) => (
            <div
              key={i}
              className="col-md-6 col-lg-4 d-flex align-items-stretch mb-30"
            >
              <div className="services-3-item round text-center">
                <div className="wow fadeInUpShort" data-wow-offset={50}>
                  <div className="services-3-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={elm.width}
                      height={elm.height}
                      viewBox={`0 0 ${elm.width} ${elm.height}`}
                      aria-hidden="true"
                    >
                      <path d={elm.path} />
                    </svg>
                  </div>
                  <h3 className="services-3-title">{elm.title}</h3>
                  <div className="services-3-text">{elm.text}</div>
                </div>
              </div>
            </div>
          ))}
          {/* End Services Item*/}

          {/* End Services Item*/}
        </div>
      </div>
    </>
  );
}
