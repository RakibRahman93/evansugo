import React from "react";

import Facts from "./Facts";
import Service from "./Service";
import Portfolio from "./Portfolio";
import Image from "next/image";
import Testimonials from "./Testimonials";
import Blog from "./Blog";
import Newsletter from "./Newsletter";
import Contact from "./Contact";
import Link from "next/link";
import TestimonialsDark from "./TestimonialsDark";
import ContactDark from "./ContactDark";
import { features4 } from "@/data/features";
import Features from "./Features";

export default function Home9({ onePage = false, dark = false }) {
  return (
    <>
      <hr className={`mt-0 mb-0 ${dark ? "white" : ""} `} />
      <section
        className={`page-section scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="about"
      >
        <div className="container position-relative">
          <div className="row">
            {/* Section Text */}
            <div className="col-lg-6 d-flex align-items-center order-first order-lg-last mb-md-60 mb-sm-40">
              <div className="w-100 wow fadeInUp">
                <h2 className="section-caption-slick mb-30 mb-sm-20">
                  About Studio
                </h2>
                <h3 className="section-title mb-30">
                  We believe in creatives with a&nbsp;passion to smart design.
                </h3>
                <p className="text-gray mb-40">
                  Etiam fermentum vehicula faucibus. Praesent ullamcorper urna
                  id arcu molestie scelerisque. Sed imperdiet tristique mauris
                  et faucibus. Maecenas semper augue non fringilla placerat.
                  Curabitur luctus erat sit amet ultricies aliquam. Donec dictum
                  convallis mauris et maximus. Nullam massa arcu, porta quis
                  felis et, eleifend varius quam.
                </p>
                {/* Features List */}
                <div className="row features-list mt-n20 mb-50 mb-sm-30">
                  {/* Features List Item */}
                  {features4.map((feature, index) => (
                    <div
                      key={index}
                      className="col-sm-6 col-lg-12 col-xl-6 d-flex mt-20"
                    >
                      <div className="features-list-icon">
                        <i className="mi-check" />
                      </div>
                      <div className="features-list-text">{feature.text}</div>
                    </div>
                  ))}
                  {/* End Features List Item */}
                </div>
                {/* End Features List */}
                <div className="local-scroll wch-unset">
                  {onePage ? (
                    <>
                      <a
                        href="#contact"
                        className="btn btn-mod btn-color btn-large btn-circle btn-hover-anim mb-xs-10"
                      >
                        <span>Start a project</span>
                      </a>
                    </>
                  ) : (
                    <>
                      <Link
                        href={`/slick-contact${dark ? "-dark" : ""}`}
                        className="btn btn-mod btn-color btn-large btn-circle btn-hover-anim mb-xs-10"
                      >
                        <span>Start a project</span>
                      </Link>
                    </>
                  )}
                  {onePage ? (
                    <>
                      {" "}
                      <a
                        href="#services"
                        className="link-hover-anim ms-2 ms-sm-5 me-2"
                        data-link-animate="y"
                      >
                        <span className="link-strong link-strong-unhovered">
                          Learn more{" "}
                          <i
                            className="mi-arrow-right size-24"
                            aria-hidden="true"
                          ></i>
                        </span>
                        <span
                          className="link-strong link-strong-hovered"
                          aria-hidden="true"
                        >
                          Learn more{" "}
                          <i
                            className="mi-arrow-right size-24"
                            aria-hidden="true"
                          ></i>
                        </span>
                      </a>
                    </>
                  ) : (
                    <>
                      {" "}
                      <Link
                        href={`/slick-about${dark ? "-dark" : ""}`}
                        className="link-hover-anim ms-2 ms-sm-5 me-2"
                        data-link-animate="y"
                      >
                        <span className="link-strong link-strong-unhovered">
                          Learn more{" "}
                          <i
                            className="mi-arrow-right size-24"
                            aria-hidden="true"
                          ></i>
                        </span>
                        <span
                          className="link-strong link-strong-hovered"
                          aria-hidden="true"
                        >
                          Learn more{" "}
                          <i
                            className="mi-arrow-right size-24"
                            aria-hidden="true"
                          ></i>
                        </span>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
            {/* End Section Text */}
            {/* Image */}
            <div className="col-lg-6 d-flex align-items-center">
              <div className="w-100 pe-lg-5">
                <div className="composition-5">
                  <div className="composition-5-decoration opacity-065">
                    <Image
                      src="/assets/images/demo-slick/decoration-1.svg"
                      alt=""
                      width={228}
                      height={228}
                    />
                  </div>
                  <div className="composition-5-image-1">
                    <div className="composition-5-image-1-inner">
                      <Image
                        src="/assets/images/demo-slick/hs-image-3.jpg"
                        alt="Image Description"
                        width={850}
                        height={914}
                        className="wow scaleOutIn"
                        data-wow-offset={200}
                      />
                    </div>
                  </div>
                  <div className="composition-5-image-2">
                    <div className="composition-5-image-2-inner">
                      <Image
                        src="/assets/images/demo-slick/hs-image-4.jpg"
                        alt="Image Description"
                        width={400}
                        height={400}
                        className="wow scaleOutIn"
                        data-wow-offset={0}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Images */}
          </div>
        </div>
      </section>
      <section
        className={`page-section ${
          dark ? "bg-dark-1 bg-dark-alpha light-content" : "bg-light-alpha-90"
        }  bg-scroll`}
        style={{
          backgroundImage: "url(/assets/images/demo-slick/section-bg-1.jpg)",
        }}
      >
        <Facts />
      </section>
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="services"
      >
        <div className="container position-relative">
          <div className="row">
            {/* Left Column */}
            <div className="col-lg-5 mb-md-60 mb-sm-40">
              <h2 className="section-caption-slick mb-30 mb-sm-20">
                Our Services
              </h2>
              <h3 className="section-title mb-30">
                We provide the best development solutions.
              </h3>
              <p className="section-descr mb-50 mb-sm-40">
                The power of design help us to solve complex problems and
                cultivate business solutions.
              </p>
              <div className="local-scroll">
                {onePage ? (
                  <>
                    {" "}
                    <a
                      href="#contact"
                      className="btn btn-mod btn-color btn-large btn-circle btn-hover-anim mb-xs-10"
                    >
                      <span>Request a quote</span>
                    </a>
                  </>
                ) : (
                  <>
                    {" "}
                    <Link
                      href={`/slick-contact${dark ? "-dark" : ""}`}
                      className="btn btn-mod btn-color btn-large btn-circle btn-hover-anim mb-xs-10"
                    >
                      <span>Request a quote</span>
                    </Link>
                  </>
                )}
              </div>
            </div>
            {/* End Left Column */}
            {/* Right Column */}
            <Service />
            {/* End Right Column */}
          </div>
          <div className="page-section">
            <hr className="mt-0 mb-0" />
          </div>
          <div className="row mb-50 mb-sm-50">
            <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3 text-center">
              <h2 className="section-title-small mb-20">
                Why choose Resonance?
              </h2>
              <p className="text-gray mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          {/* Features Grid */}
          <Features />
          {/* End Features Grid */}
        </div>
      </section>
      <hr className={`mt-0 mb-0 ${dark ? "white" : ""} `} />
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="portfolio"
      >
        <div className={`bg-shape-1 ${dark ? "opacity-003" : ""} `}>
          <Image
            src="/assets/images/demo-slick/bg-shape-1.svg"
            width={1443}
            height={844}
            alt=""
          />
        </div>
        <div className="container position-relative">
          <div className="row mb-50 mb-sm-30">
            <div className="col-md-8 offset-md-2 text-center">
              <h2 className="section-caption-slick mb-30 mb-sm-20">
                Selected Work
              </h2>
              <h3 className="section-title mb-30">
                We believe in making the best work, and being the best to work
                with.
              </h3>
              <p className="section-descr mb-0">
                A static website stores a unique file for every page of a static
                website. Each time that page is requested, the same content is
                returned.
              </p>
            </div>
          </div>

          <Portfolio />
          {/* End Works Grid */}
        </div>
      </section>
      <section className="page-section pt-0 pb-0">
        <div className="container">
          <div
            className={`small-section ${
              dark ? "bg-dark-2 light-content" : "bg-gray-light-1"
            }  ps-4 ps-lg-0 pe-4 pe-lg-0 round position-relative overflow-hidden`}
          >
            {/* Decoration Circles */}
            <div className="decoration-12" />
            <div className="decoration-13" />
            {/* End Decoration Circles */}
            <div className="row">
              <div className="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                <div className="row">
                  <div className="col-md-7 col-lg-8 text-center text-md-start mb-sm-20">
                    <h2 className="section-title-small mb-20">
                      Like our creative works?
                    </h2>
                    <p className="text-gray mb-0">
                      Quisque posuere mollis ullamcorper. Ut eget metus lorem
                      ipsum posuere eget at ex. Aenean consequat vitae lorem in
                      vehicula.
                    </p>
                  </div>
                  <div className="col-md-5 col-lg-4 text-center text-md-end pt-2">
                    {onePage ? (
                      <>
                        <a
                          href="#contact"
                          className="btn btn-mod btn-color btn-large btn-circle btn-hover-anim"
                        >
                          <span>Start a project</span>
                        </a>
                      </>
                    ) : (
                      <>
                        <Link
                          href={`/slick-portfolio${dark ? "-dark" : ""}`}
                          className="btn btn-mod btn-color btn-large btn-circle btn-hover-anim"
                        >
                          <span>View all works</span>
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className={`page-section  ${dark ? "bg-dark-1 light-content" : ""} `}
      >
        {dark ? <TestimonialsDark /> : <Testimonials />}
      </section>
      <hr className={`mt-0 mb-0 ${dark ? "white" : ""} `} />
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="blog"
      >
        <div className={`bg-shape-3 ${dark ? "opacity-003" : ""} `}>
          <Image
            src="/assets/images/demo-slick/bg-shape-3.svg"
            width={1443}
            height={644}
            alt=""
          />
        </div>
        <Blog />
      </section>
      <section
        className={`page-section ${
          dark ? "bg-dark-2 light-content" : "bg-gray-light-1"
        }  overflow-hidden`}
      >
        <Newsletter />
      </section>
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="contact"
      >
        {dark ? <ContactDark /> : <Contact />}
      </section>
    </>
  );
}
