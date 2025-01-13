"use client";

import { brands } from "@/data/brands";
import { numberItems2 } from "@/data/facts";
import { testimonials5 } from "@/data/testimonials";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Testimonials() {
  const isotopContainer = useRef();
  const initIsotop = async () => {
    const Isotope = (await import("isotope-layout")).default;
    const imagesloaded = (await import("imagesloaded")).default;

    // Initialize Isotope in the mounted hook
    const isotope = new Isotope(isotopContainer.current, {
      itemSelector: ".col-md-6",
      layoutMode: "masonry", // or 'fitRows', depending on your layout needs
    });
    imagesloaded(isotopContainer.current).on("progress", function () {
      // Trigger Isotope layout
      isotope.layout();
    });
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
            <h2 className="section-caption-fancy mb-20 mb-xs-10">
              Testimonials
            </h2>
            <h3 className="section-title-small mb-30">
              We help brands to stand out in the ever-changing digital
              landscape.
            </h3>
            <p className="section-descr mb-30">
              A static website stores a unique file for every page of a static
              website. Each time that page is requested, the same content is
              returned.
            </p>
            {/* Numbers */}
            <div className="row">
              {numberItems2.map((item, index) => (
                <div
                  key={index}
                  className={`col-md-6 number-1-item ${
                    !index ? "mb-sm-10" : ""
                  }`}
                >
                  <div className="number-1-title">{item.title}</div>
                  <div className="number-1-descr">{item.description}</div>
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
            {/* Decoration Dots */}
            <div
              className="decoration-7 d-none d-sm-block"
              data-rellax-y=""
              data-rellax-speed="0.5"
              data-rellax-percentage="0.5"
            >
              <Image
                width="182"
                height="171"
                src="/assets/images/demo-fancy/decoration-7.svg"
                alt=""
              />
            </div>
            {/* End Decoration Dots */}
            <div ref={isotopContainer} className="row masonry mb-n30">
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
        <Swiper
          spaceBetween={0}
          slidesPerView={6}
          watchSlidesProgress
          modules={[Autoplay]}
          breakpoints={{
            1199: {
              slidesPerView: 6, // When window width is <= 1199px
            },

            768: {
              slidesPerView: 4, // When window width is <= 768px
            },
            480: {
              slidesPerView: 3, // When window width is <= 480px
            },

            0: {
              slidesPerView: 2,
            },
          }}
          autoplay
          resizeObserver
          className="small-item-carousel black owl-carousel mb-0 owl-theme overflow-hidden position-static"
          style={{
            opacity: 1,
            display: "block",
          }}
        >
          {/* Team item */}
          {brands.map((elm, i) => (
            <SwiperSlide className="owl-item" key={i}>
              <div className="logo-item">
                <Image src={elm} width={215} height={75} alt="Company Name" />
              </div>
            </SwiperSlide>
          ))}

          {/* End Team item */}
        </Swiper>
      </div>
      {/* End Logotypes */}
    </div>
  );
}
