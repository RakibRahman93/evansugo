"use client";
import { portfolioItems } from "@/data/portfolio";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
export default function Portfolio() {
  return (
    <div className="container">
      <div className="row mb-90 mb-sm-50">
        <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
          <h2 className="section-caption-border">Our Portfolio</h2>
          <h3 className="section-title-strong mb-40">
            Creativity meets <span className="font-alt">technology</span> here
          </h3>
          <p className="mb-0">
            Suspendisse pellentesque mi non ipsum finibus vestibulum. Vestibulum
            posuere magna auctor malesuada scelerisque. Sed sed sem id magna
            congue interdum et sit amet leo. Praesent sit amet ipsum orci. Fusce
            faucibus nibh at quam facilisis venenatis posuere non quis lacus.
          </p>
        </div>
      </div>
      {/* Portfolio Carousel */}
      <div className="wow fadeInUp">
        <div className="relative">
          <Swiper
            spaceBetween={0}
            slidesPerView={2}
            breakpoints={{
              1199: {
                slidesPerView: 2, // When window width is <= 1199px
              },
              768: {
                slidesPerView: 1, // When window width is <= 768px
              },
              0: {
                slidesPerView: 1, // When window width is <= 480px
              },
            }}
            modules={[Navigation]}
            navigation={{
              prevEl: ".snbp10",
              nextEl: ".snbn10",
            }}
            watchSlidesProgress
            resizeObserver
            className="portfolio-4-carousel slider-strong owl-carousel owl-theme overflow-visible position-static"
            style={{
              opacity: 1,
              display: "block",
            }}
          >
            {/* Team item */}
            {portfolioItems.map((item, index) => (
              <SwiperSlide className="owl-item" key={index}>
                <div className="portfolio-4-item">
                  <a href={item.href}>
                    <div className="portfolio-4-image">
                      <Image
                        width={902}
                        height={564}
                        src={item.imgSrc}
                        alt={item.imgAlt}
                      />
                    </div>
                    <div className="portfolio-4-intro">
                      <h4 className="portfolio-4-title">{item.title}</h4>
                      <div className="portfolio-4-descr">{item.descr}</div>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
            ))}
            <div className="owl-controls clickable">
              <div className="owl-buttons">
                <div className="owl-prev snbp10" role="button" tabIndex="0">
                  <span className="visually-hidden">Previous Slide</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18px"
                    height="13px"
                    viewBox="0 0 18 13"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M17.995,6.998 L3.591,6.998 C5.630,8.221 7.000,10.447 7.000,12.998 L6.000,12.998 C6.000,9.684 3.313,6.998 -0.001,6.998 L-0.015,6.998 L-0.015,5.998 L-0.001,5.998 C3.313,5.998 6.000,3.312 6.000,-0.002 L7.000,-0.002 C7.000,2.549 5.630,4.775 3.591,5.998 L17.995,5.998 L17.995,6.998 Z"
                    ></path>
                  </svg>
                </div>
                <div className="owl-next snbn10" role="button" tabIndex="0">
                  <span className="visually-hidden">Next Slide</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18px"
                    height="13px"
                    viewBox="0 0 18 13"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.000,6.998 C14.687,6.998 12.000,9.684 12.000,12.998 L11.000,12.998 C11.000,10.447 12.370,8.221 14.409,6.998 L0.005,6.998 L0.005,5.998 L14.409,5.998 C12.370,4.775 11.000,2.549 11.000,-0.002 L12.000,-0.002 C12.000,3.312 14.687,5.998 18.000,5.998 L18.015,5.998 L18.015,6.998 L18.000,6.998 Z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            {/* End Team item */}
          </Swiper>
        </div>
      </div>
      {/* End Portfolio Carousel */}
    </div>
  );
}
