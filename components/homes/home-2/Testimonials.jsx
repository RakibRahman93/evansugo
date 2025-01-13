"use client";

import { testimonials2 } from "@/data/testimonials";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
export default function Testimonials() {
  return (
    <div className="container">
      <div className="row wow fadeInUp">
        <div className="col-lg-11">
          <div className="relative">
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              modules={[Navigation]}
              navigation={{
                prevEl: ".snbp5",
                nextEl: ".snbn5",
              }}
              watchSlidesProgress
              resizeObserver
              className="testimonials-slider-2 slider-bold owl-carousel owl-theme overflow-hidden position-static"
              style={{
                opacity: 1,
                display: "block",
              }}
            >
              {/* Team item */}
              {testimonials2.map((elm, i) => (
                <SwiperSlide className="owl-item" key={i}>
                  <div className="pb-sm-70">
                    <blockquote className="mb-0">
                      <div className="blockquote-icon" aria-hidden="true">
                        <Image
                          width={127}
                          height={99}
                          className="svg-dark"
                          src="/assets/images/demo-bold/blockquote.svg"
                          alt=""
                        />
                      </div>
                      <p>
                        Beautifull template, nice code and easy to customize.
                        Optimization and structure are very good for seo basics.
                      </p>
                      <footer className="ts2-author mt-50 mt-xs-30 clearfix">
                        <div className="ts2-author-img float-start">
                          <Image
                            className="rounded-circle"
                            width={44}
                            height={44}
                            src="/assets/images/ts1-user.jpg"
                            alt="Image description is here"
                          />
                        </div>
                        <div className="overflow-hidden">
                          Adam Peterson
                          <div className="small">Business Owner</div>
                        </div>
                      </footer>
                    </blockquote>
                  </div>
                </SwiperSlide>
              ))}

              <div className="owl-controls clickable">
                <div className="owl-buttons">
                  <div className="owl-prev snbp5" role="button" tabIndex="0">
                    <span className="visually-hidden">Previous Slide</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32px"
                      height="24px"
                      viewBox="0 0 32 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M0.922,12.939 L0.922,12.939 L11.885,24.010 L12.800,23.077 L2.482,12.665 L32.006,12.665 L32.006,11.344 L2.483,11.344 L12.800,0.933 L11.885,-0.001 L0.008,12.005 L0.922,12.939 Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="owl-next snbn5" role="button" tabIndex="0">
                    <span className="visually-hidden">Next Slide</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32px"
                      height="24px"
                      viewBox="0 0 32 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M31.078,12.939 L31.078,12.939 L20.115,24.010 L19.200,23.077 L29.518,12.665 L-0.006,12.665 L-0.006,11.344 L29.517,11.344 L19.200,0.933 L20.115,-0.001 L31.992,12.005 L31.078,12.939 Z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              {/* End Team item */}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
