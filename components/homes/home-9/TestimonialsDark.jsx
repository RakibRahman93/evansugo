"use client";
import BrandsDark from "@/components/common/BrandsDark";
import { numberItems4 } from "@/data/facts";
import { testimonials5 } from "@/data/testimonials";

import { useEffect, useRef } from "react";
import Image from "next/image";
export default function TestimonialsDark() {
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
        <div className="col-lg-5 col-xl-5 d-flex align-items-center mb-md-60 mb-sm-40">
          <div className="w-100">
            <h2 className="section-caption-slick mb-30 mb-sm-20">
              Testimonials
            </h2>
            <h3 className="section-title mb-30">
              We're trusted by leading companies.
            </h3>
            <p className="section-descr mb-50 mb-sm-30">
              A static website stores a unique file for every page of a static
              website. Each time that page is requested, the same content is
              returned.
            </p>
            {/* Numbers */}
            <div className="row mt-sm-n10">
              {numberItems4.map((item, index) => (
                <div key={index} className="col-md-6 mt-sm-10">
                  <div className="number-3-title">{item.title}</div>
                  <div className="number-3-descr">{item.description}</div>
                </div>
              ))}
            </div>
            {/* End Numbers */}
          </div>
        </div>
        {/* End Section Text */}
        {/* Testimonials Grid */}
        <div className="col-lg-7 col-xl-6 offset-xl-1 d-flex align-items-center">
          <div className="w-100 position-relative">
            <div
              ref={isotopContainer}
              className="row masonry mb-n30 wow fadeInUp"
            >
              {/* Testimonials Item */}
              {testimonials5.map((testimonial, index) => (
                <div
                  key={index}
                  className={`col-md-6 mb-30 ${!index ? "mt-50 mt-sm-0" : ""} `}
                >
                  <div className="testimonials-4-item">
                    <div className="testimonials-4-icon">
                      <i className="icon-quotation-mark" />
                    </div>
                    <blockquote className="testimonials-4-text">
                      <p className="mb-0">{testimonial.text}</p>
                      <footer className="testimonials-4-author mt-30 clearfix">
                        <div className="testimonials-4-author-img float-start">
                          <Image
                            width={44}
                            height={44}
                            src={testimonial.imgSrc}
                            alt={testimonial.altText}
                          />
                        </div>
                        <div className="overflow-hidden">
                          {testimonial.author}
                          <div className="small">{testimonial.position}</div>
                        </div>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              ))}
              {/* End Testimonials Item */}
            </div>
          </div>
        </div>
        {/* Testimonials Grid */}
      </div>
      {/* Logotypes */}
      <div className="page-section pb-0 text-center">
        <h3 className="section-title-tiny">Trusted by Leading Companies</h3>
        <BrandsDark />
      </div>
      {/* End Logotypes */}
    </div>
  );
}
