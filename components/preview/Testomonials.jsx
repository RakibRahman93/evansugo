"use client";
import { testimonials } from "@/data/testimonials";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
export default function Testomonials() {
  return (
    <div className="container position-relative">
      <div className="pt-80 pb-80 pt-sm-70 pb-sm-70 px-4 bg-gray-light-1">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 wow fadeInUp">
            <h2 className="section-title text-center mb-70 mb-sm-40">
              Designed by Elite Author with
              <span className="mark-decoration-1">12,000+</span> trusted
              customers.
            </h2>

            <div className="overflow-hidden">
              <Swiper
                rewind
                spaceBetween={0}
                slidesPerView={1}
                modules={[Navigation]}
                navigation={{
                  prevEl: ".snbp2",
                  nextEl: ".snbn2",
                }}
                watchSlidesProgress
                resizeObserver
                style={{
                  opacity: 1,
                  display: "block",
                }}
                className="testimonials-slider-1 owl-carousel owl-theme pb-xs-80 overflow-visible position-static"
              >
                {testimonials.map((testimonial, index) => (
                  <SwiperSlide className="owl-item" key={index}>
                    <div>
                      <blockquote className="mb-0">
                        <div className="blockquote-icon" aria-hidden="true">
                          ”
                        </div>
                        <p>{testimonial.quote}</p>
                        <div className="section-line mt-40" />
                        <footer className="ts1-author mt-20 clearfix">
                          {testimonial.author}
                          <div className="small">{testimonial.role}</div>
                        </footer>
                      </blockquote>
                    </div>
                  </SwiperSlide>
                ))}
                <div className="owl-controls clickable">
                  {/* <div className="owl-pagination">
                    <div className="owl-page">
                      <span className=""></span>
                    </div>
                    <div className="owl-page active">
                      <span className=""></span>
                    </div>
                  </div> */}
                  <div className="owl-buttons">
                    <div className="owl-prev snbp2" role="button" tabIndex="0">
                      <span className="visually-hidden">Previous Slide</span>
                      <i className="mi-arrow-left" aria-hidden="true"></i>
                    </div>
                    <div className="owl-next snbn2" role="button" tabIndex="0">
                      <span className="visually-hidden">Next Slide</span>
                      <i className="mi-arrow-right" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
                {/* End Slide Item */}
              </Swiper>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
