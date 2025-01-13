import AnimatedText from "@/components/common/AnimatedText";
import Footer2 from "@/components/footers/Footer2";
import Header2 from "@/components/headers/Header2";
import Experience from "@/components/homes/home-2/Experience";
import Testimonials from "@/components/homes/home-2/Testimonials";
import { education } from "@/data/education";
import { timelineData } from "@/data/experience";
import { numberData } from "@/data/facts";

import { boldMultipage } from "@/data/menu";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);
export const metadata = {
  title:
    "Bold About || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};

const dark = false;
export default function BoldAboutPage() {
  return (
    <>
      <div className="theme-bold">
        <div className="page" id="top">
          <nav className="main-nav transparent stick-fixed wow-menubar">
            <Header2 links={boldMultipage} />
          </nav>
          <main id="main">
            <ParallaxContainer
              className="page-section bg-light-alpha-70 parallax-5"
              style={{
                backgroundImage:
                  "url(/assets/images/demo-bold/section-bg-1.jpg)",
              }}
              id="home"
            >
              <div className="container position-relative pt-sm-40">
                <div className="text-center">
                  <h1 className="hs-title-4 font-alt mb-0">
                    <span
                      className="wow charsAnimInLong-1"
                      data-splitting="chars"
                    >
                      <AnimatedText text="About Me" />
                    </span>
                  </h1>
                </div>
              </div>
            </ParallaxContainer>
            <section
              className={`page-section  scrollSpysection  pb-0 ${
                dark ? "bg-dark-1 light-content" : ""
              } `}
              id="about"
            >
              <div className="container">
                <div className="row">
                  <div className="col-md-5 order-last order-md-first">
                    <div className="overflow-hidden">
                      <Image
                        width={800}
                        height={1095}
                        src="/assets/images/demo-bold/section-image-1.jpg"
                        className="w-100 wow scaleOutIn"
                        alt="Image Description"
                      />
                    </div>
                  </div>
                  <div className="col-md-7 col-lg-6 offset-lg-1 d-flex align-items-center mb-sm-80">
                    <div className="wow fadeInUp">
                      <h2 className="section-title-medium font-alt text-outline-cont mt-20 mb-50 mb-md-30">
                        <span className="text-outline-2" aria-hidden="true">
                          My Story
                        </span>
                        <span className="text-outline-1" aria-hidden="true">
                          My Story
                        </span>
                        <span className="text-outline">My Story</span>
                      </h2>
                      <p className="section-text mb-60 mb-md-40 mb-sm-30">
                        <span className="section-title-inline">Who?</span> The
                        role of the graphic designer in the communication
                        process is that of encoder or interpreter of&nbsp;the
                        message. They work on the interpretation, ordering, and
                        presentation of visual messages. The design work always
                        starts from a client's demand, a demand that ends up
                        being established linguistically, either orally or in
                        writing, that is, that graphic design transforms a
                        linguistic message into a graphic manifestation.
                      </p>
                      <div className="local-scroll">
                        <Link
                          href={`/bold-about${dark ? "-dark" : ""}`}
                          className="link-hover-anim underline align-middle"
                          data-link-animate="y"
                        >
                          <span className="link-strong link-strong-unhovered">
                            View Services{" "}
                            <span className="visually-hidden">about us</span>
                          </span>
                          <span
                            className="link-strong link-strong-hovered"
                            aria-hidden="true"
                          >
                            View Services{" "}
                            <span className="visually-hidden">about us</span>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="page-section overflow-hidden">
              <Experience />
            </div>
            <>
              {/* Experience Section */}
              <section className="page-section pt-0">
                <div className="container">
                  <h2 className="section-title-medium font-alt text-outline-cont mt-20 mb-50 mb-md-30">
                    <span className="text-outline-2">Experience</span>
                    <span className="text-outline-1">Experience</span>
                    <span className="text-outline">Experience</span>
                  </h2>
                  <hr className="mt-0 mb-40" />
                  {/* Timeline Row */}
                  {timelineData.map((item, index) => (
                    <React.Fragment key={index}>
                      <div className="row">
                        <div className="col-md-3 mb-sm-20">
                          <h3 className="section-title-inline rotate-5">
                            {item.yearRange}
                          </h3>
                        </div>
                        <div className="col-md-8 offset-md-1">
                          <h4 className="section-title-small mb-20">
                            {item.title}
                          </h4>
                          <p className="mb-0">{item.description}</p>
                        </div>
                      </div>

                      <hr className="mt-40 mb-40" />
                    </React.Fragment>
                  ))}
                </div>
              </section>
              {/* End Experience Section */}
              {/* Divider */}
              <hr className="black mt-0 mb-0" />
              <section className="page-section">
                <div className="container">
                  <h2 className="section-title-medium font-alt text-outline-cont mt-20 mb-50 mb-md-30">
                    <span className="text-outline-2">Education</span>
                    <span className="text-outline-1">Education</span>
                    <span className="text-outline">Education</span>
                  </h2>
                  {education.map((item, index) => (
                    <React.Fragment key={index}>
                      <hr
                        className={index === 0 ? "mt-0 mb-40" : "mt-40 mb-40"}
                      />
                      <div className="row">
                        <div className="col-md-3 mb-sm-20">
                          <h3 className="section-title-inline rotate-5">
                            {item.year}
                          </h3>
                        </div>
                        <div className="col-md-8 offset-md-1">
                          <h4 className="section-title-small mb-0">
                            {item.title}
                          </h4>
                          <div className="mb-20 text-gray serif fs-5">
                            {item.institution}
                          </div>
                          <p className="mb-0">{item.description}</p>
                        </div>
                      </div>
                    </React.Fragment>
                  ))}
                  {/* End Timeline Row */}
                  <hr className="mt-40 mb-0" />
                </div>
              </section>
              <section
                className="page-section bg-light-alpha-90 parallax-5"
                style={{
                  backgroundImage:
                    "url(/assets/images/demo-slick/section-bg-1.jpg)",
                }}
              >
                <div className="container position-relative">
                  {/* Numbers Grid */}
                  <div className="row mt-n30 wow fadeInUp">
                    {/* Numbers Item */}
                    {numberData.map((item, index) => (
                      <div
                        key={index}
                        className="col-sm-6 col-xl-3 d-flex align-items-stretch mt-30"
                      >
                        <div className="number-2-item circle-large">
                          <div className="number-2-title">{item.title}</div>
                          <div className="number-2-descr">
                            {item.description}
                          </div>
                        </div>
                      </div>
                    ))}
                    {/* End Numbers Item */}
                  </div>
                  {/* End Numbers Grid */}
                </div>
              </section>
              <section
                className={`page-section  ${
                  dark ? "bg-dark-1 light-content" : ""
                } `}
              >
                <Testimonials />
              </section>
            </>
          </main>
          <footer className="footer-1 bg-dark-1 light-content">
            <Footer2 />
          </footer>
        </div>{" "}
      </div>{" "}
    </>
  );
}
