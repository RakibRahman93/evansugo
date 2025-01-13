"use client";
import { features5 } from "@/data/features";
import React, { useEffect, useRef } from "react";

export default function Benefits2() {
  const isotopContainer = useRef();
  const initIsotop = async () => {
    const Isotope = (await import("isotope-layout")).default;
    const imagesloaded = (await import("imagesloaded")).default;

    // Initialize Isotope in the mounted hook
    const isotope = new Isotope(isotopContainer.current, {
      itemSelector: ".col-md-6",
      layoutMode: "masonry", // or 'fitRows', depending on your layout needs
    });
    imagesloaded(isotopContainer.current).on(
      "progress",
      function (instance, image) {
        // Trigger Isotope layout
        isotope.layout();
      }
    );
  };

  useEffect(() => {
    /////////////////////////////////////////////////////
    // Magnate Animation

    initIsotop();
  }, []);
  return (
    <div className="container position-relative">
      <div className="row">
        {/* Section Text */}
        <div className="col-lg-5 col-xl-5 offset-xl-1 d-flex align-items-center mb-md-60 mb-sm-40">
          <div className="w-100">
            <h2 className="section-caption mb-30 mb-xs-10">Benefits</h2>
            <h3 className="section-title mb-30">Why choose Resonance?</h3>
            <p className="section-descr mb-50 mb-sm-30">
              A static website stores a unique file for every page of a static
              website. Each time that page is requested, the same content is
              returned.
            </p>
            {/* Numbers */}
            <div className="row mt-sm-n10">
              <div className="col-md-6 mt-sm-10">
                <div className="number-3-title black">5,000+</div>
                <div className="number-3-descr">Customers Reviews</div>
              </div>
              <div className="col-md-6 mt-sm-10">
                <div className="number-3-title black">99.9%</div>
                <div className="number-3-descr">Satisfied Customers</div>
              </div>
            </div>
            {/* End Numbers */}
          </div>
        </div>
        {/* End Section Text */}
        {/* Benefits Grid */}
        <div className="col-lg-7 col-xl-6 d-flex align-items-center order-lg-first">
          <div className="w-100 position-relative">
            <div
              ref={isotopContainer}
              className="row masonry mb-n30 wow fadeInUp"
            >
              {/* Benefits Item */}
              {features5.map((elm, i) => (
                <div
                  key={i}
                  className={`col-md-6 ${i == 1 ? "mt-50 mt-sm-0" : ""} mb-30`}
                >
                  <div className="alt-features-item box-shadow text-center mt-0">
                    <div className="alt-features-icon mb-10">
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
                        <path d={elm.svgPath} />
                      </svg>
                    </div>
                    <h4 className="alt-features-title">{elm.title}</h4>
                    <div className="alt-features-descr">{elm.description}</div>
                  </div>
                </div>
              ))}
              {/* End Benefits Item */}

              {/* End Benefits Item */}
            </div>
          </div>
        </div>
        {/* Benefits Grid */}
      </div>
    </div>
  );
}
