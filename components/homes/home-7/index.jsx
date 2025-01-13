import React from "react";
import About from "./About";
import Achievement from "./Achievement";
import Service from "./Service";
import Image from "next/image";
import Portfolio from "./Portfolio";

import Steps from "./Steps";
import Banner from "./Banner";
import Blog from "./Blog";
import Newsletter from "./Newsletter";
import Testimonials from "./Testimonials";
import Cta3 from "./Cta3";
import Contact from "./Contact";
import Link from "next/link";
import AnimatedText from "@/components/common/AnimatedText";

export default function Home7({ onePage = false, dark = false }) {
  return (
    <>
      <section
        className={`page-section  scrollSpysection  bg-scroll ${
          dark
            ? "bg-dark-1 bg-gradient-gray-dark-2 light-content"
            : "bg-gradient-gray-light-2"
        }`}
        id="about"
      >
        <About />
      </section>
      <section className="full-wrapper">
        <div className="position-relative">
          {/* Decorative Circle */}
          <div className="decoration-18 d-none d-sm-block" />
          {/* End Decorative Circle */}
          {/* Decorative Circle */}
          <div className="decoration-19 d-none d-sm-block" />
          {/* End Decorative Circle */}
          <div
            className={`page-section bg-dark-1 bg-dark-alpha-80 bg-scroll light-content round-large overflow-hidden`}
            style={{
              backgroundImage:
                "url(/assets/images/demo-gradient/section-bg-1.jpg)",
            }}
          >
            <div className="container position-relative">
              <div className="row">
                <div className="col-lg-4 mb-md-60 mb-xs-50">
                  <h2 className="section-title mb-20 wow fadeInUp">
                    Check recent achievements.
                  </h2>
                  <p
                    className="section-descr mb-40 wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    We provide the effective ideas that grow businesses of our
                    clients.
                  </p>
                  <div
                    className="local-scroll wow fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    {onePage ? (
                      <>
                        {" "}
                        <a
                          href="#services"
                          className="btn btn-mod btn-border-w-light btn-medium btn-round"
                          data-btn-animate="y"
                        >
                          <span className="btn-animate-y">
                            <span className="btn-animate-y-1">
                              View services
                              <i
                                className="mi-arrow-right size-24 align-center"
                                aria-hidden="true"
                              ></i>
                            </span>
                            <span
                              className="btn-animate-y-2"
                              aria-hidden="true"
                            >
                              View services
                              <i
                                className="mi-arrow-right size-24 align-center"
                                aria-hidden="true"
                              ></i>
                            </span>
                          </span>
                        </a>
                      </>
                    ) : (
                      <>
                        {" "}
                        <Link
                          href={`/gradient-services${dark ? "-dark" : ""}`}
                          className="btn btn-mod btn-border-w-light btn-medium btn-round"
                          data-btn-animate="y"
                        >
                          <span className="btn-animate-y">
                            <span className="btn-animate-y-1">
                              View services
                              <i
                                className="mi-arrow-right size-24 align-center"
                                aria-hidden="true"
                              ></i>
                            </span>
                            <span
                              className="btn-animate-y-2"
                              aria-hidden="true"
                            >
                              View services
                              <i
                                className="mi-arrow-right size-24 align-center"
                                aria-hidden="true"
                              ></i>
                            </span>
                          </span>
                        </Link>
                      </>
                    )}
                  </div>
                </div>
                <Achievement />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className={`page-section scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        }`}
        id="services"
      >
        <Service />
      </section>
      <section className={`full-wrapper ${dark ? "light-content" : ""}`}>
        <div className="page-section bg-border-gradient pt-0 pb-0 scroll-nav-invisible z-index-1">
          <div className="page-section container position-relative scroll-nav-invisible">
            {/* Decoration Image */}
            <div className="decoration-image-1">
              <Image
                src="/assets/images/demo-gradient/section-image-6.jpg"
                alt="Image Description"
                width={336}
                height={406}
              />
            </div>
            {/* End Decoration Image */}
            {/* Decoration Image */}
            <div className="decoration-image-2">
              <Image
                src="/assets/images/demo-gradient/section-image-7.jpg"
                alt="Image Description"
                width={350}
                height={256}
              />
            </div>
            {/* End Decoration Image */}
            <div className="row text-center">
              <div className="col-md-8 offset-md-2">
                <div className="text-center mb-40 mb-sm-30">
                  <Image
                    src="/assets/images/demo-gradient/section-image-5.png"
                    width={100}
                    height={100}
                    alt="Image Description"
                  />
                </div>
                <p className="section-descr-medium mb-50 mb-sm-40">
                  Looking for exclusive creative services? Contact us and get
                  free online consultation for your brand or your client's
                  brand.
                </p>
                <div className="local-scroll">
                  {onePage ? (
                    <>
                      {" "}
                      <a
                        href="#contact"
                        className="btn btn-mod btn-medium btn-grad btn-round"
                        data-btn-animate="y"
                      >
                        <span className="btn-animate-y">
                          <span className="btn-animate-y-1">
                            Contact us
                            <i
                              className="mi-arrow-right size-24 align-center"
                              aria-hidden="true"
                            ></i>
                          </span>
                          <span className="btn-animate-y-2" aria-hidden="true">
                            Contact us
                            <i
                              className="mi-arrow-right size-24 align-center"
                              aria-hidden="true"
                            ></i>
                          </span>
                        </span>
                      </a>
                    </>
                  ) : (
                    <>
                      {" "}
                      <Link
                        href={`/gradient-services${dark ? "-dark" : ""}`}
                        className="btn btn-mod btn-medium btn-grad btn-round"
                        data-btn-animate="y"
                      >
                        <span className="btn-animate-y">
                          <span className="btn-animate-y-1">
                            See all services
                            <i
                              className="mi-arrow-right size-24 align-center"
                              aria-hidden="true"
                            ></i>
                          </span>
                          <span className="btn-animate-y-2" aria-hidden="true">
                            See all services
                            <i
                              className="mi-arrow-right size-24 align-center"
                              aria-hidden="true"
                            ></i>
                          </span>
                        </span>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className={`page-section scrollSpysection  overflow-hidden  ${
          dark ? "bg-dark-1 light-content" : ""
        }`}
        id="portfolio"
      >
        <div className="container position-relative">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <h2 className="section-caption-gradient mb-20 mb-xs-10">
                Our Portfolio
              </h2>
              <div className="section-line-gradient mx-auto mb-20" />
            </div>
          </div>
          <div className="text-center">
            <h3 className="section-title-repeat mb-40 mb-sm-30">
              <span className="section-title-repeat-left" aria-hidden="true">
                Made with love
              </span>
              <span className="section-title-repeat-right" aria-hidden="true">
                Made with love
              </span>
              <span className="wow charsAnimInLong-1" data-splitting="chars">
                <AnimatedText text="Made with love" />
              </span>
            </h3>
          </div>
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <p className="text-gray mb-70 mb-sm-50">
                In auctor ex id urna faucibus porttitor. In feugiat maximus
                nibh, id sodales mauris interdum at. Etiam eget lorem odio. Duis
                scelerisque metus ac velit mattis, nec ultricies turpis posuere.
              </p>
            </div>
          </div>
          {/* Works Filter */}

          {/* End Works Filter */}
        </div>
        <Portfolio />
      </section>
      <section
        className={`small-section ${
          dark
            ? "bg-dark-1 bg-gradient-light-1 light-content"
            : " bg-gradient-light-1"
        }`}
      >
        <div className="container position-relative">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="row">
                <div className="col-md-8 text-center text-md-start mb-sm-20 d-md-flex">
                  <div className="flex-shrink-0 me-md-4 pe-md-1 mb-sm-20">
                    <Image
                      src="/assets/images/demo-gradient/section-image-5.png"
                      width="100"
                      height="100"
                      alt="Image Description"
                    />
                  </div>
                  <div className="d-flex align-items-center pt-2 pt-md-0">
                    <p className="section-descr-medium w-100 mb-0">
                      Like our creative works? Contact us and get free online
                      consultation for your brand.
                    </p>
                  </div>
                </div>

                <div className="col-md-4 text-center text-md-end pt-20 local-scroll">
                  {onePage ? (
                    <>
                      {" "}
                      <a
                        href="#contact"
                        className="btn btn-mod btn-medium btn-grad btn-round"
                        data-btn-animate="y"
                      >
                        <span className="btn-animate-y">
                          <span className="btn-animate-y-1">
                            Contact us
                            <i
                              className="mi-arrow-right size-24 align-center"
                              aria-hidden="true"
                            ></i>
                          </span>
                          <span className="btn-animate-y-2" aria-hidden="true">
                            Contact us
                            <i
                              className="mi-arrow-right size-24 align-center"
                              aria-hidden="true"
                            ></i>
                          </span>
                        </span>
                      </a>
                    </>
                  ) : (
                    <>
                      {" "}
                      <Link
                        href={`/gradient-services${dark ? "-dark" : ""}`}
                        className="btn btn-mod btn-medium btn-grad btn-round"
                        data-btn-animate="y"
                      >
                        <span className="btn-animate-y">
                          <span className="btn-animate-y-1">
                            See all services
                            <i
                              className="mi-arrow-right size-24 align-center"
                              aria-hidden="true"
                            ></i>
                          </span>
                          <span className="btn-animate-y-2" aria-hidden="true">
                            See all services
                            <i
                              className="mi-arrow-right size-24 align-center"
                              aria-hidden="true"
                            ></i>
                          </span>
                        </span>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className={`page-section   ${dark ? "bg-dark-1 light-content" : ""}`}
      >
        <Steps />
      </section>
      <section className="full-wrapper">
        <div
          className="page-section bg-dark-1 bg-dark-alpha-80 bg-scroll light-content round-large overflow-hidden"
          style={{
            backgroundImage:
              "url(/assets/images/demo-gradient/section-bg-2.jpg)",
          }}
        >
          <Banner />
        </div>
      </section>
      <section
        className={`page-section  scrollSpysection   ${
          dark ? "bg-dark-1 light-content" : ""
        }`}
        id="blog"
      >
        <Blog />
      </section>
      <section
        className={`page-section ${
          dark
            ? " bg-dark-2 bg-dark-alpha-90 light-content"
            : "bg-gray-light-1 bg-light-alpha-90"
        }   bg-scroll`}
        style={{
          backgroundImage: "url(/assets/images/demo-slick/section-bg-1.jpg)",
        }}
      >
        <Newsletter />
      </section>
      <section
        className={`page-section overflow-hidden   ${
          dark ? "bg-dark-2 light-content" : ""
        }`}
      >
        <Testimonials />
      </section>
      <section
        className="page-section bg-scroll light-content"
        style={{
          backgroundImage: "url(/assets/images/demo-gradient/section-bg-3.jpg)",
        }}
      >
        <div className="bg-overlay bg-gradient-dark-alpha-2 d-none d-md-block" />
        {/* End Desktop Overlay */}
        {/* Mobile Overlay */}
        <div className="bg-overlay bg-dark-1 opacity-09 d-md-none" />
        {/* End Mobile Overlay */}
        <div className="container position-relative">
          <div className="row wow fadeInUp">
            <div className="col-md-7 offset-md-5 col-lg-6 offset-lg-6 col-xl-5 offset-xl-7">
              <h2 className="section-title mb-40 mb-sm-30">
                Design Jumpstart for Your Business
              </h2>
              <p className="mb-50 mb-sm-40">
                Praesent venenatis justo in ultrices tempor. Donec maximus,
                dolor a condimentum congue, tellus nisi dictum magna, uttere
                lorem ipsum viverra massa ex sit amet nulla. Duis lobortis nisl
                sed aliquam sollicitudin.
              </p>
              <div className="local-scroll mb-70 mb-sm-50">
                {onePage ? (
                  <>
                    {" "}
                    <a
                      href="#contact"
                      className="btn btn-mod btn-medium btn-grad btn-round"
                      data-btn-animate="y"
                    >
                      <span className="btn-animate-y">
                        <span className="btn-animate-y-1">
                          Contact us
                          <i
                            className="mi-arrow-right size-24 align-center"
                            aria-hidden="true"
                          ></i>
                        </span>
                        <span className="btn-animate-y-2" aria-hidden="true">
                          Contact us
                          <i
                            className="mi-arrow-right size-24 align-center"
                            aria-hidden="true"
                          ></i>
                        </span>
                      </span>
                    </a>
                  </>
                ) : (
                  <>
                    {" "}
                    <Link
                      href={`/gradient-portfolio${dark ? "-dark" : ""}`}
                      className="btn btn-mod btn-medium btn-grad btn-round"
                      data-btn-animate="y"
                    >
                      <span className="btn-animate-y">
                        <span className="btn-animate-y-1">
                          See all Works
                          <i
                            className="mi-arrow-right size-24 align-center"
                            aria-hidden="true"
                          ></i>
                        </span>
                        <span className="btn-animate-y-2" aria-hidden="true">
                          See all Works
                          <i
                            className="mi-arrow-right size-24 align-center"
                            aria-hidden="true"
                          ></i>
                        </span>
                      </span>
                    </Link>
                  </>
                )}
              </div>
              {/* Features List */}
              <Cta3 />
              {/* End Features List */}
            </div>
          </div>
        </div>
      </section>
      <section
        className={`page-section  scrollSpysection   ${
          dark ? "bg-dark-1 light-content" : ""
        }`}
        id="contact"
      >
        <div className="row">
          <div className="col-lg-8 offset-lg-2 text-center">
            <h2 className="section-caption-gradient mb-20 mb-xs-10">
              Contact Us
            </h2>
            <div className="section-line-gradient mx-auto mb-20" />
            <h3 className="section-title mb-40 mb-sm-30">
              Say hello, and we’ll start productive cooperation.
            </h3>
            <p className="text-gray mb-80 mb-sm-60">
              Quisque semper nisl et mi tincidunt, at vulputate nunc tincidunt.
              Mauris a sapien nulla. Class aptent taciti sociosqu ad litora
              torquent per conubia nostra, per inceptos himenaeos.
            </p>
          </div>
        </div>
        <Contact />
      </section>
    </>
  );
}
