import Footer1 from "@/components/footers/Footer1";

import dynamic from "next/dynamic";

const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);

import Header1Multipage from "@/components/headers/Header1Multipage";
import AnimatedText from "@/components/common/AnimatedText";
import Image from "next/image";
import { clients2 } from "@/data/brands";
import { testimonialItems } from "@/data/testimonials";
import React from "react";
import ClientSlider from "@/components/others/ClientSlider";
import { features5 } from "@/data/features";
import Link from "next/link";
import { menuItems } from "@/data/menu";
const dark = false;
export const metadata = {
  title:
    "Main About 1 || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function MainAboutPage1() {
  return (
    <>
      <div className="theme-main">
        <div className="page" id="top">
          <nav className="main-nav transparent stick-fixed wow-menubar">
            <Header1Multipage links={menuItems} />
          </nav>
          <main id="main">
            <section className="page-section pt-0 pb-0" id="home">
              <ParallaxContainer
                className="page-section bg-gray-light-1 bg-light-alpha-90 parallax-5"
                style={{
                  backgroundImage:
                    "url(/assets/images/full-width-images/section-bg-1.jpg)",
                }}
              >
                <div className="container position-relative pt-50 pb-100 pb-sm-20">
                  {/* Section Content */}
                  <div className="text-center">
                    <div className="row">
                      {/* Page Title */}
                      <div className="col-md-8 offset-md-2">
                        <h2
                          className="section-caption-border mb-30 mb-xs-20 wow fadeInUp"
                          data-wow-duration="1.2s"
                        >
                          About Our Company
                        </h2>
                        <h1 className="hs-title-1 mb-30">
                          <span
                            className="wow charsAnimIn"
                            data-splitting="chars"
                          >
                            <AnimatedText text="Welcome to Resonance Creative Studio" />
                          </span>
                        </h1>
                        <div className="row">
                          <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                            <p
                              className="section-descr mb-0 wow fadeInUp"
                              data-wow-delay="0.6s"
                              data-wow-duration="1.2s"
                            >
                              We are a full-service creative studio creating
                              beautiful digital experiences and products.
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* End Page Title */}
                    </div>
                  </div>
                  {/* End Section Content */}
                </div>
              </ParallaxContainer>
              <div className="page-section pt-0">
                <div className="container">
                  <div className="mt-n120 mt-sm-n60 overflow-hidden">
                    <Image
                      src="/assets/images/about-image-1.jpg"
                      alt="Image Description"
                      width={1500}
                      height={844}
                      className="wow scaleOutIn"
                      data-wow-duration="1.2s"
                      data-wow-offset={0}
                    />
                  </div>
                </div>
              </div>
            </section>
            <>
              {/* Section */}
              <section className="page-section pt-0">
                <div className="container relative">
                  {/* Logo Grid */}
                  <div className="row alt-features-grid mt-n50">
                    {/* Logo Item */}
                    {clients2.map((elm, i) => (
                      <div key={i} className="col-sm-6 col-md-4 col-lg-4">
                        <div
                          className="alt-features-item mt-50 wow fadeIn"
                          data-wow-delay={0}
                          data-wow-duration="1.5s"
                        >
                          <div className="mb-20">
                            <Image
                              src={elm.imgSrc}
                              width={555}
                              height={300}
                              alt="Add Image Description"
                            />
                          </div>
                          <h3 className="alt-features-title">{elm.name}</h3>
                          <div className="alt-features-descr align-left">
                            {elm.description}
                          </div>
                        </div>
                      </div>
                    ))}
                    {/* End Logo Item */}

                    {/* End Logo Item */}
                  </div>
                  {/* End Logo Grid */}
                </div>
              </section>
              {/* End Section */}
              {/* Testimonials Section */}
              <section className="page-section bg-gradient-gray-light-2 bg-scroll">
                <div className="container position-relative">
                  <div className="row">
                    <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
                      <h2 className="section-caption mb-xs-10 wow fadeInUp">
                        Clients Stories
                      </h2>
                      <h3 className="section-title mb-70 mb-sm-50">
                        <span
                          className="wow charsAnimIn"
                          data-splitting="chars"
                        >
                          We're trusted by leading worldwide experts.
                        </span>
                      </h3>
                    </div>
                  </div>
                  {testimonialItems.map((elm, i) => (
                    <React.Fragment key={i}>
                      {!(i % 2) ? (
                        <div className="row mb-80 mb-sm-60">
                          <div className="col-md-5 col-lg-4 offset-lg-1 mb-sm-40">
                            <div className="overflow-hidden round">
                              <Image
                                src={elm.imageSrc}
                                width={656}
                                height={800}
                                alt="Image Description"
                                className="wow scaleOutIn"
                              />
                            </div>
                          </div>
                          <div className="col-md-6 offset-md-1 col-lg-5 offset-lg-1 d-flex align-items-center wow fadeInUp">
                            <blockquote className="testimonials-6-item">
                              <div
                                className="testimonials-6-icon opacity-01-dark"
                                aria-hidden="true"
                              >
                                “
                              </div>
                              <p className="testimonials-6-text mb-40">
                                {elm.quote}
                              </p>
                              <div className="section-line mb-10" />
                              <footer>
                                <div className="testimonials-6-author">
                                  {elm.author}
                                </div>
                                <div className="testimonials-6-position">
                                  {elm.position}
                                </div>
                              </footer>
                            </blockquote>
                          </div>
                        </div>
                      ) : (
                        <div className="row">
                          <div className="col-md-5 offset-md-1 col-lg-4 offset-lg-1 order-md-last mb-sm-40">
                            <div className="overflow-hidden round">
                              <Image
                                src={elm.imageSrc}
                                width={656}
                                height={800}
                                alt="Image Description"
                                className="wow scaleOutIn"
                              />
                            </div>
                          </div>
                          <div className="col-md-6 col-lg-5 offset-lg-1 d-flex align-items-center wow fadeInUp">
                            <blockquote className="testimonials-6-item">
                              <div
                                className="testimonials-6-icon opacity-01-dark"
                                aria-hidden="true"
                              >
                                “
                              </div>
                              <p className="testimonials-6-text mb-40">
                                {elm.quote}
                              </p>
                              <div className="section-line mb-10" />
                              <footer>
                                <div className="testimonials-6-author">
                                  {elm.author}
                                </div>
                                <div className="testimonials-6-position">
                                  {elm.position}
                                </div>
                              </footer>
                            </blockquote>
                          </div>
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                  {/* End Testimonial */}
                </div>
              </section>
              {/* End Testimonials Section */}
              {/* Divider */}
              <hr className="mt-0 mb-0" />
              {/* End Divider */}
              {/* Logotypes Section */}
              <section className="small-section pt-20 pb-20">
                <div className="container relative">
                  <div className="row wow fadeInUpShort">
                    <div className="col-md-12">
                      <ClientSlider />
                    </div>
                  </div>
                </div>
              </section>
              {/* End Logotypes */}
              {/* Divider */}
              <hr className="mt-0 mb-0" />
              {/* End Divider */}
              {/* Features Section */}
              <section className="page-section z-index-1">
                <div className="container position-relative">
                  <div className="row mb-50 mb-sm-50">
                    <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3 text-center">
                      <h2 className="section-title-small mb-20">
                        Why choose Resonance?
                      </h2>
                      <p className="text-gray mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  </div>
                  {/* Features Grid */}
                  <div className="row mt-n30 wow fadeInUp">
                    {/* Feature Item */}
                    {features5.map((elm, i) => (
                      <div
                        key={i}
                        className="col-sm-6 col-xl-3 d-flex align-items-stretch"
                      >
                        <div className="alt-features-item box-shadow text-center mt-30">
                          <div className="alt-features-icon mb-10 ">
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
                          <div className="alt-features-descr">
                            {elm.description}
                          </div>
                        </div>
                      </div>
                    ))}
                    {/* End Feature Item */}

                    {/* End Feature Item */}
                  </div>
                  {/* End Features Grid */}
                </div>
              </section>
              {/* End Features Section */}
              {/* Divider */}
              <hr className="mt-0 mb-0" />
              {/* End Divider */}
              {/* Call Action Section */}
              <section
                className={`page-section  ${
                  dark ? "bg-dark-1 light-content z-index-1" : ""
                }`}
              >
                <div className="container position-relative">
                  {/* Decorative Waves */}
                  <div
                    className="decoration-21 d-none d-lg-block"
                    data-rellax-y
                    data-rellax-speed="0.7"
                    data-rellax-percentage="0.5"
                  >
                    <Image
                      width={148}
                      height={148}
                      className="svg-shape"
                      src="/assets/images/decoration-3.svg"
                      alt=""
                    />
                  </div>
                  {/* End Decorative Waves */}
                  <div className="row text-center wow fadeInUp">
                    <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                      <p className="section-descr mb-50 mb-sm-30">
                        The power of design help us to solve complex problems
                        and cultivate business solutions.
                      </p>
                      <div className="local-scroll">
                        <Link
                          href={`/main-pages-contact-1${dark ? "-dark" : ""}`}
                          className="btn btn-mod btn-large btn-round btn-hover-anim"
                        >
                          <span>Contact us</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* End Call Action Section */}
            </>
          </main>
          <Footer1 />
        </div>{" "}
      </div>
    </>
  );
}
