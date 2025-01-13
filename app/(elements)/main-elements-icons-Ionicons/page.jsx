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
import { menuItems } from "@/data/menu";

export const metadata = {
  title:
    "Element Page Icons Lonicons || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function ElementPageIconsLonicons() {
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
                <div className="container position-relative pt-30 pt-sm-50">
                  {/* Section Content */}
                  <div className="text-center">
                    <div className="row">
                      {/* Page Title */}
                      <div className="col-md-8 offset-md-2">
                        <h1 className="hs-title-1 mb-20">
                          <span
                            className="wow charsAnimIn"
                            data-splitting="chars"
                          >
                            <AnimatedText text="Ionicons Icons" />
                          </span>
                        </h1>
                        <div className="row">
                          <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                            <p
                              className="section-descr mb-0 wow fadeIn"
                              data-wow-delay="0.2s"
                              data-wow-duration="1.2s"
                            >
                              Open this file in the HTML editor and copy the
                              code of the wished component.
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
            </section>
            <section className="page-section">
              <div className="container relative">
                <div className="row">
                  <div className="col-md-8 offset-md-2 mb-30">
                    <div className="text-center">
                      <p>
                        You can use a set of 180+ Ionicons icon pack. Open this
                        file in HTML code editor and copy SVG code of the icon
                        below. Use the icon number to find choosen icon in the
                        HTML code.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row mb-n30">
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={51}
                          height={64}
                          viewBox="0 0 51 64"
                        >
                          <path d="M48 24l-6.75-6.5-1.125 1.125c4.375 4 7.125 9.875 7.125 16.25 0 5.5-2 10.375-5.375 14.25l4.5 5.625-1.5 1.25-4.375-5.375c-4 3.75-9.375 6.125-15.25 6.125v0 0c-5.875 0-11.25-2.375-15.25-6.125l-4.375 5.375-1.5-1.25 4.5-5.625c-3.375-3.875-5.375-8.875-5.375-14.375 0-6.375 2.75-12.125 7.125-16.125l-1.125-1.125-6.75 6.5c-1.5-1.75-2.5-4-2.5-6.5 0-5.5 4.375-10 10-10.25h0.625c2.5 0 4.875 0.875 6.75 2.25l-6.75 6.5 1.375 1.375c3.25-2.375 7-4 11.25-4.375v0c0-1 1-2 2-2s1.875 1 1.875 2v0c4.25 0.375 8.125 2 11.375 4.375l1.375-1.375-6.75-6.5c1.875-1.375 4.25-2.25 6.75-2.25h0.625c5.625 0.25 10 4.75 10 10.25 0 2.5-1 4.75-2.5 6.5zM2.75 21l11.375-11.125c-1.125-0.625-2.375-0.875-4-0.75-4.625 0.25-8.125 4-8.125 8.375 0 1.25 0.25 2.375 0.75 3.5zM45.25 34.5c0-11-9-19.75-20-19.75s-20 8.75-20 19.75 9 19.75 20 19.75 20-8.75 20-19.75zM36.375 9.875l11.375 11.125c0.5-1.125 0.75-2.25 0.75-3.5 0-4.375-3.5-8.125-8.125-8.375-1.625-0.125-2.875 0.125-4 0.75zM25.25 20h2v18h-14v-2h12v-16z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#1</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={64}
                          height={64}
                          viewBox="0 0 56 64"
                        >
                          <path d="M54 18h-52v36h52v-36zM56 16v0 40h-56v-40h56zM5 14v-2h46v2h-46zM9 10v-2h38v2h-38z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#2</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={52}
                          height={64}
                          viewBox="0 0 52 64"
                        >
                          <path d="M41.375 16.625c14 14 10.125 40.875 10.125 40.875s-3.25 0.5-8.125 0.5c-9.125 0-23.625-1.5-32.75-10.625-14-14-10.125-40.875-10.125-40.875s3.25-0.5 8.125-0.5c9.125 0 23.625 1.5 32.75 10.625zM2.125 8.125c-0.25 2.375-0.625 7.5 0 13.375 0.125 1 0.25 2 0.375 2.875l15.875-15.875c-3.125-0.375-6.375-0.625-9.75-0.625v0 0c-2.75 0-5.125 0.125-6.5 0.25zM12 46c3.75 3.75 9 6.625 15.5 8.25 1.25 0.375 2.5 0.625 3.875 0.875l17.75-17.75c-0.5-2.75-1.25-5.5-2.125-7.875-1.75-4.625-4-8.5-7-11.5-3.75-3.75-9-6.625-15.5-8.25-1.25-0.375-2.5-0.625-3.875-0.875l-17.75 17.75c0.5 2.75 1.25 5.5 2.125 7.875 1.75 4.625 4 8.5 7 11.5zM49.875 55.875c0.25-2.375 0.625-7.5 0-13.375-0.125-1-0.25-2-0.375-2.875l-15.875 15.875c3.125 0.375 6.375 0.625 9.75 0.625 2.75 0 5.125-0.125 6.5-0.25zM32.375 39.75l-3.5 3.625-1.5-1.5 3.625-3.5-2.875-2.875-3.5 3.625-1.5-1.5 3.625-3.5-2.875-2.875-3.5 3.625-1.5-1.5 3.625-3.5-2.875-2.875-3.5 3.625-1.5-1.5 3.625-3.5-2.75-2.875-3.625 3.625-1.375-1.5 8.375-8.375 1.5 1.375-3.625 3.625 2.875 2.75 3.5-3.625 1.5 1.5-3.625 3.5 2.875 2.875 3.5-3.625 1.5 1.5-3.625 3.5 2.875 2.875 3.5-3.625 1.5 1.5-3.625 3.5 2.75 2.875 3.625-3.625 1.5 1.5-3.625 3.5 2.75 2.875 3.625-3.625 1.375 1.5-8.375 8.375-1.5-1.375 3.625-3.625z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#3</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={64}
                          height={64}
                          viewBox="0 0 56 64"
                        >
                          <path d="M28 6c-3.5 0-6.875 0.625-10.125 2-3.125 1.25-5.875 3.25-8.25 5.625s-4.375 5.125-5.625 8.25c-1.375 3.25-2 6.625-2 10.125s0.625 6.875 2 10.125c1.25 3.125 3.25 5.875 5.625 8.25s5.125 4.375 8.25 5.625c3.25 1.375 6.625 2 10.125 2s6.875-0.625 10.125-2c3.125-1.25 5.875-3.25 8.25-5.625s4.375-5.125 5.625-8.25c1.375-3.25 2-6.625 2-10.125s-0.625-6.875-2-10.125c-1.25-3.125-3.25-5.875-5.625-8.25s-5.125-4.375-8.25-5.625c-3.25-1.375-6.625-2-10.125-2zM28 4v0c15.5 0 28 12.5 28 28s-12.5 28-28 28-28-12.5-28-28 12.5-28 28-28zM9.5 40c-3.125 0-5.125-2.25-5.25-2.375-0.375-0.375-0.25-1.125 0.125-1.5s1-0.25 1.375 0.125c0.125 0.125 1.875 2.125 4.5 1.75 1.5-0.25 3.375-3.25 4.75-5.25 0.5-0.75 1.125-1.5 1.5-2 2.125-2.625 4.25-2.875 5.625-2.625 3 0.375 5.625 3.5 6.75 6.25 0.875 2.25 2.25 3.5 4 3.625 1.875 0.125 3.875-1.375 5.375-3.75 0.125-0.25 0.375-0.5 0.5-0.875 1.125-2.125 3-5.375 6.5-5.375 3.875 0 6.5 4.375 6.625 4.5 0.25 0.5 0.125 1.125-0.375 1.375s-1.125 0.125-1.375-0.375c0 0-0.625-1-1.5-1.875-0.75-0.75-2-1.625-3.375-1.625-2.25 0-3.625 2.375-4.75 4.375-0.125 0.375-0.375 0.625-0.5 0.875-1.875 3.125-4.5 5-7.25 4.75-2.5-0.125-4.5-1.875-5.75-4.875s-3.5-4.875-5.125-5.125c-1.375-0.125-2.625 0.5-3.875 2-0.375 0.5-0.75 1.125-1.25 1.875-1.75 2.5-3.875 5.625-6.25 6-0.375 0-0.625 0.125-1 0.125z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#4</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={32}
                          height={64}
                          viewBox="0 0 32 64"
                        >
                          <path d="M29.5 40.125v-0.125h2.375l-0.375 0.75c-0.375 0.75-1.625 2.375-2.75 3.375s-2.25 1.75-3.5 2.5-2.625 1.25-4 1.625-2.875 0.625-4.25 0.625c-2 0-4.125-0.375-6.125-1s-3.75-1.625-5.375-3c-1.5-1.375-3.25-3.625-4.25-5.75-0.875-2-1.25-4.125-1.25-7.25 0-2.25 0.5-4.75 1.375-6.875 0.875-2 2.125-3.75 3.625-5.25s3.375-2.625 5.375-3.5c1.875-0.75 4.125-1.125 6.625-1.125 2 0 4 0.375 5.75 1 1.875 0.625 3.5 1.5 4.875 2.75s2.125 2.625 3 4.375c0.75 1.625 1 3.25 1 5.5 0 1.75-0.25 3.5-0.875 5s-1.125 2.5-2.125 3.75c-1 1.125-1.625 1.875-2.875 2.625-1.375 0.75-2.5 1.125-3.625 1.125-1 0-1.875-0.25-2.5-0.875-0.375-0.25-0.625-0.75-0.75-1.125-0.75 0.75-1.375 1.25-2.125 1.5-1.25 0.375-2.25 0.5-3.25 0.5s-1.875-0.125-2.625-0.5-1.5-0.875-2.125-1.5-1-1.375-1.375-2.25-0.625-1.75-0.625-2.75c0-1.5 0.375-3 0.875-4.5v-0.25c0.5-1.375 0.625-2 1.625-3.25 1-1.375 2.125-2.375 3.5-3.25s3-1.375 4.75-1.375c1.5 0 2.625 0.375 3.875 1.125 0.875 0.5 1.5 1.25 2 2l0.75-2.125h2.25l-4.75 12.75c-0.25 0.625-0.5 1.25-0.625 1.75s-0.125 0.875-0.125 1.25c0 0.25 0.125 0.5 0.375 0.625s0.5 0.25 1 0.25c0.75 0 1.375-0.25 2.5-0.875 1-0.5 1.5-1.125 2.375-2.125 0.75-1 1.25-1.75 1.75-3.125s0.75-2.875 0.75-4.375c0-1.875-0.25-3.125-0.875-4.5-0.75-1.625-1.25-2.75-2.375-3.75s-2.5-1.875-4.125-2.5-3.375-0.875-5.25-0.875c-2.375 0-4.375 0.375-6 1.125-1.875 0.75-3.375 1.75-4.625 3-1.375 1.25-2.375 2.875-3.125 4.625-0.75 1.875-1.25 4-1.25 6 0 2.75 0.25 4.5 1 6.125 0.75 1.875 2.125 3.875 3.5 5.125s3 2.25 4.75 2.875 3.75 0.875 5.75 0.875c1.25 0 2.5-0.125 3.75-0.5s2.25-0.75 3.375-1.375 2.125-1.375 3-2.25 1.75-1.625 2.375-2.625zM18.375 36.75c0.5-0.625 1-1.5 1.375-2.5l2.625-7.125c-0.25-0.625-0.5-1.25-0.875-1.625-0.375-0.5-0.75-0.75-1.25-1-0.125 0-0.125-0.125-0.25-0.125-0.375-0.25-0.625-0.375-1.125-0.5-0.625-0.125-1.125-0.25-1.625-0.25-1.25 0-2.375 0.375-3.5 1.125s-2.125 1.625-2.875 2.75c-0.625 1-0.875 1.375-1.25 2.5 0 0.125-0.125 0.375-0.125 0.5-0.5 1.375-0.625 2.5-0.625 3.75 0 0.75 0.125 1.375 0.375 2s0.625 1.125 1 1.625 0.875 0.75 1.5 1 1.125 0.375 1.875 0.375c0.5 0 1.125-0.125 1.75-0.25 0.5-0.125 1-0.25 1.5-0.625s1-0.875 1.5-1.625z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#5</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={52}
                          height={64}
                          viewBox="0 0 52 64"
                        >
                          <path d="M0 48v-32h10v2h-8v28h8v2h-10zM42 16h10v32h-10v-2h8v-28h-8v-2zM8 40v-16h2v16h-2zM42 40v-16h2v16h-2zM34 44v-24h2v24h-2zM16 44v-24h2v24h-2zM24.875 42v-20h2v20h-2z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#6</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={52}
                          height={64}
                          viewBox="0 0 52 64"
                        >
                          <path d="M51.875 34.875v0.125c-1.375 12.125-11.25 21.75-23.375 22.875v0h-0.25c-0.25 0-0.375 0.125-0.625 0.125h-1.625c-14.375 0-26-11.625-26-26v-1.625c0-0.25 0.125-0.375 0.125-0.625v-0.25c1.125-12.125 10.75-22 22.875-23.375v0 0c1-0.125 2-0.125 3-0.125 14.375 0 26 11.625 26 26 0 0.875 0 1.75-0.125 2.5v0 0.375zM49.875 32c0-13.125-10.75-23.875-23.875-23.875-0.375 0-0.625 0.125-1 0.125 0 1.375 0.25 2.625 0.5 3.875l2.5-0.75 0.625 1.875-2.625 0.875c0.25 0.875 0.5 1.75 0.875 2.625 0.25 0.625 0.625 1.375 1 2l2.125-1.5 1.125 1.625-2.375 1.625c0.875 1.5 2 2.875 3.25 4.125l1.75-1.875 1.5 1.5-1.875 1.875c1.375 1.25 2.75 2.25 4.25 3.125l1.5-2.25 1.75 1.125-1.5 2.125c0.625 0.25 1.25 0.625 1.875 0.875 0.875 0.375 1.75 0.625 2.75 0.875l0.875-2.5 1.875 0.625-0.75 2.375c1.25 0.25 2.5 0.5 3.75 0.5 0-0.375 0.125-0.625 0.125-1zM2.125 32c0 13.125 10.75 23.875 23.875 23.875h0.5c-0.125-1.125-0.125-2.125-0.375-3.25l-2.75 0.875-0.625-2 2.875-0.875c-0.25-1-0.625-2-1-3-0.25-0.625-0.5-1.125-0.75-1.75l-2.5 1.625-1.125-1.625 2.625-1.75c-0.875-1.5-2-3-3.25-4.375l-2.125 2.125-1.375-1.375 2.125-2.125c-1.25-1.25-2.75-2.25-4.25-3.125l-1.75 2.625-1.75-1.125 1.75-2.5c-0.625-0.25-1.25-0.625-1.875-0.875-0.875-0.375-1.875-0.75-2.875-1l-1 3-1.875-0.625 0.875-2.875c-1.125-0.25-2.25-0.25-3.375-0.375v0.5zM28.5 55.75c11-1.125 19.75-9.75 21.125-20.75-1.375-0.125-2.875-0.375-4.25-0.625l-1.125 3.375-1.875-0.625 1-3.125c-1.75-0.5-3.5-1.25-5.125-2.125l-1.875 2.875-1.625-1.125 1.75-2.625c-1.625-1-3.25-2.125-4.625-3.5l-2.375 2.375-1.375-1.375 2.375-2.375c-1.25-1.375-2.375-2.875-3.375-4.5l-2.625 1.75-1.125-1.625 2.75-1.875c-0.875-1.625-1.5-3.375-2-5.125l-3.125 1-0.625-2 3.25-1c-0.25-1.5-0.5-2.875-0.625-4.375-11 1.375-19.625 10.125-20.75 21.125 1.25 0.125 2.625 0.25 3.875 0.5l1-2.875 1.875 0.625-0.875 2.75c1.75 0.5 3.5 1.125 5.25 2l1.625-2.375 1.75 1.125-1.625 2.25c1.625 1 3.125 2.125 4.5 3.5l2.125-2.125 1.375 1.375-2.125 2.125c1.375 1.5 2.5 3 3.5 4.625l2.375-1.625 1.125 1.75-2.5 1.625c0.875 1.75 1.5 3.5 2 5.25l2.875-0.875 0.625 1.875-3 1c0.25 1.25 0.375 2.5 0.5 3.75z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#7</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={52}
                          height={64}
                          viewBox="0 0 52 64"
                        >
                          <path d="M26 6c14.375 0 26 11.625 26 26s-11.625 26-26 26-26-11.625-26-26 11.625-26 26-26zM49.875 32c0-6.875-3-13.125-7.75-17.5-1.75 4.25-3.875 8.125-6.5 11.875 1.875 1.5 3.875 2.625 6.125 3.625 2.625 1.125 5.375 1.75 8.125 2v0zM40.625 13.125c-4-3.125-9.125-5-14.625-5v0c0.25 2.75 0.75 5.5 1.875 8.125 1.25 3.125 3.25 5.875 5.625 8.25 0.25 0.125 0.25 0.375 0.5 0.5 2.5-3.625 4.75-7.5 6.5-11.625 0-0.125 0.125-0.125 0.125-0.25zM24 8.25c-6.375 0.5-12 3.625-16 8.125 8 3.5 15.125 8.625 21.125 14.875 1.375-1.5 2.625-3 3.75-4.625-5-4.625-8.375-11.125-8.875-18.375zM29.125 34.25c-1.875 2-3.875 3.75-6 5.5 3.5 4.375 5.625 9.875 5.875 15.875 4.125-0.5 7.875-2.125 11-4.375-2.75-6.25-6.375-11.875-10.875-17zM26.75 33.75l1-1-1.25-1.25c-5.75-5.75-12.375-10.25-19.75-13.5-2.25 3.125-3.875 6.875-4.375 11 7.75 0.375 14.5 3.875 19.375 9.25 1.75-1.375 3.375-2.875 5-4.5zM2.25 31c0 0.375-0.125 0.625-0.125 1 0 5.625 2 10.875 5.375 15 4.5-2 8.875-4.5 12.75-7.5l-0.875-0.875c-2.375-2.375-5.125-4.375-8.25-5.625-2.75-1.125-5.75-1.875-8.875-2zM8.875 48.625c4.375 4.5 10.375 7.25 17.125 7.25 0.375 0 0.625-0.125 1-0.125-0.125-3.125-0.75-6-2-8.875-0.875-2.125-2.125-4.125-3.5-5.875-3.875 3-8.125 5.625-12.625 7.625zM41.625 50c4.625-4 7.625-9.625 8.125-16-5.75-0.375-11.125-2.625-15.375-6-1.25 1.625-2.5 3.25-3.875 4.75 4.5 5.125 8.375 10.875 11.125 17.25z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#8</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={48}
                          height={64}
                          viewBox="0 0 48 64"
                        >
                          <path d="M39.75 28.25c0 14.25 3.5 15.75 8.25 19.75h-48c4.75-4 8.25-5.5 8.25-19.75 0-12.25 6.625-16.25 12.75-17.25v-0.25c0-1.5 1.375-2.75 3-2.75s3 1.25 3 2.75v0.25c6.125 0.875 12.75 5 12.75 17.25zM5.375 46h37.25c-3.125-3.125-5-7.25-5-17.75 0-5.75-1.625-10-4.625-12.625-2.875-2.375-6.5-2.875-9-2.875s-6.125 0.5-9 2.875c-3.125 2.625-4.625 6.875-4.625 12.625 0 6.375-0.625 10.625-2.125 13.75-0.75 1.625-1.75 2.875-2.875 4zM24 56c-3.375 0-6.125-2.5-6.5-5.375h13c-0.375 2.875-3.125 5.375-6.5 5.375z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#9</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={28}
                          height={64}
                          viewBox="0 0 28 64"
                        >
                          <path d="M16.375 16.5l-12.5 17.5h10.5l-0.375 2.375-2.125 11.125 12.5-17.5h-10.5l0.375-2.375zM20 8v0l-3.75 20h12l-20 28 3.75-20h-12z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#10</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={48}
                          height={64}
                          viewBox="0 0 48 64"
                        >
                          <path d="M35.5 8c6.875 0 12.5 3.25 12.5 9.875v35.375h-2.75c-2.125-3.75-5.5-5.25-9.75-5.25-5 0-9.25 3.5-10.25 8h-2.5c-1-4.5-5.25-8-10.25-8-4.25 0-8.125 2-9.75 5.25h-2.75v-35.375c0-6.625 5.625-9.875 12.5-9.875 5.125 0 9.75 1.75 11.5 5.5 1.5-3.75 6.375-5.5 11.5-5.5zM23 51.375v-33.625c-0.125-5.375-4.875-7.75-10.5-7.75-5.5 0-10.125 2.375-10.5 7.625v32.875h0.125c2.375-3.25 6-4.5 10.375-4.5s8.25 2.125 10.5 5.375zM46 18.5v-1.875c-0.375-5.25-5-6.625-10.5-6.625-5.75 0-10.5 2.5-10.5 8v33.375c2.25-3.25 6.125-5.375 10.5-5.375s8.25 1.25 10.5 4.5v-32z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#11</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={52}
                          height={64}
                          viewBox="0 0 52 64"
                        >
                          <path d="M48.125 8c2.375 0 4.125 1.625 4.125 4v35.75c0 2.375-1.75 4.25-4.125 4.25h-17.875s-3.125 0.5-3.125 2.375v1.625h-2v-1.625c0-1.875-1.375-2.375-3.125-2.375h-17.875c-2.375 0-4.125-1.875-4.125-4.25v-35.75c0-2.375 1.75-4 4.125-4h18.75c1.25 0 2.5 0.625 3.25 1.5v0 0c0.75-0.875 2-1.5 3.25-1.5h18.75zM25.125 51.375v-38.625c0-1.125-1.5-2.75-3.125-2.75h-17.875c-1.125 0-2 0.875-2 2v35.75c0 1.125 0.875 2.25 2 2.25h18c1.25 0 2.375 0.375 3 1.375zM34.125 10v12.5l2.875-1.75 1.125-0.75 1.125 0.75 2.875 1.75v-12.5h-8zM50.125 47.75v-35.75c0-1.125-0.875-2-2-2h-4v16.375l-6-4-6 4v-16.375h-1.875c-1.625 0-3.125 1.625-3.125 2.75v38.625c0.625-1.125 1.75-1.375 3-1.375h18c1.125 0 2-1.125 2-2.25z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#12</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={40}
                          height={64}
                          viewBox="0 0 40 64"
                        >
                          <path d="M24 30h-8c-1.125 0-2 0.875-2 2s0.875 2 2 2h8c1.125 0 2-0.875 2-2s-0.875-2-2-2zM24 28v0c2.25 0 4 1.75 4 4s-1.75 4-4 4h-8c-2.25 0-4-1.75-4-4s1.75-4 4-4h8zM40 14v10h-2v26h-36v-26h-2v-10h40zM36 48v-24h-32v24h32zM38 22v-6h-36v6h36z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#13</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={52}
                          height={64}
                          viewBox="0 0 52 64"
                        >
                          <path d="M46 16h6v40h-52v-40h6v-2h4v2h6v-4c0-2.25 1.25-4 3.625-4h12.375c2.375 0 4 1.75 4 4v4h6v-2h4v2zM18 16v0h16v-3.75c0-1.25-0.875-2.25-2.125-2.25h-12.125c-1.375 0-1.75 1-1.75 2.25v3.75zM50 54v-28h-48v28h48zM50 24v-6h-4v2h-4v-2h-32v2h-4v-2h-4v6h48z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#14</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={36}
                          height={64}
                          viewBox="0 0 36 64"
                        >
                          <path d="M4 20v-8h28v8h-28zM6 14v4h24v-4h-24zM32 8c2.25 0 4 1.75 4 4v40c0 2.25-1.75 4-4 4h-28c-2.25 0-4-1.75-4-4v-40c0-2.25 1.75-4 4-4h28zM34 52v-40c0-1.125-0.875-2-2-2h-28c-1.125 0-2 0.875-2 2v40c0 1.125 0.875 2 2 2h28c1.125 0 2-0.875 2-2zM6 30h6v2h-8v-8h2v6zM6 40h6v2h-8v-8h2v6zM6 50h6v2h-8v-8h2v6zM16 30h6v2h-8v-8h2v6zM26 30h6v2h-8v-8h2v6zM16 40h6v2h-8v-8h2v6zM16 50h6v2h-8v-8h2v6zM26 50h6v2h-8v-18h2v16z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#15</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={48}
                          height={64}
                          viewBox="0 0 48 64"
                        >
                          <path d="M2 14v8h44v-8zM36 12h12v44h-48v-44h12v-4h2v4h20v-4h2v4zM46 54v-30h-44v30h44zM46 22v-8h-10v4h-2v-4h-20v4h-2v-4h-10v8h44z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#16</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={48}
                          height={64}
                          viewBox="0 0 48 64"
                        >
                          <path d="M44.25 20c2.25 0 3.75 1.625 3.75 3.875v22c0 2.25-1.5 4.125-3.75 4.125h-40c-2.25 0-4.25-1.875-4.25-4.125v-22c0-2.25 2-3.875 4.25-3.875h1.625v-2h4.25v2h1.625c4-4.5 5.375-6 6.875-6h11c1.5 0 2.875 1.5 6.875 6h7.75zM46 45.875v-22c0-1.125-0.625-1.875-1.75-1.875h-8.625l-0.625-0.375c-0.375-0.5-0.875-1-1.25-1.375-1.5-1.625-2.5-3-3.25-3.75-0.625-0.625-0.875-0.5-0.875-0.5h-11s-0.25 0-0.875 0.5c-0.75 0.625-1.75 1.75-3.125 3.375-0.375 0.5-0.875 1.25-1.375 1.75l-0.625 0.375h-8.375c-1.125 0-2.25 0.875-2.25 1.875v22c0 1.125 1.125 2.125 2.25 2.125h40c1 0 1.75-1 1.75-2.125zM24 23.75c5.875 0 10.75 4.75 10.75 10.625s-4.875 10.625-10.75 10.625-10.75-4.75-10.75-10.625 4.875-10.625 10.75-10.625zM24 43c4.75 0 8.75-3.875 8.75-8.625s-4-8.625-8.75-8.625-8.75 3.875-8.75 8.625 4 8.625 8.75 8.625zM36 26.125v-2.125h2.125v2.125h-2.125zM20 34.375c0-2.625 1.375-4 4-4s4 1.375 4 4-1.375 4-4 4-4-1.375-4-4z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#17</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={48}
                          height={64}
                          viewBox="0 0 48 64"
                        >
                          <path d="M12 50c1.625 0 3 1.375 3 3s-1.375 3-3 3-3-1.375-3-3 1.375-3 3-3zM12 54c0.5 0 1-0.5 1-1s-0.5-1-1-1-1 0.5-1 1 0.5 1 1 1zM40 50c1.625 0 3 1.375 3 3s-1.375 3-3 3-3-1.375-3-3 1.375-3 3-3zM40 54c0.5 0 1-0.5 1-1s-0.5-1-1-1-1 0.5-1 1 0.5 1 1 1zM48 16l-2 16-33.875 6 0.625 3.75c0.875 4.25 2.625 4.25 3.25 4.25h30v2h-30c-1.375 0-2.625-0.625-3.5-1.75-0.75-1-1.375-2.375-1.625-4.125l-5.375-29.25c-0.25-1-0.375-1.5-0.875-2-0.75-0.625-2.25-0.875-4.625-0.875v-2c2.875 0 4.75 0.5 5.875 1.375 0.875 0.75 1.25 1.75 1.5 2.625zM44.375 30.25l1.375-12.375-38-3.875 4 22z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#18</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={52}
                          height={64}
                          viewBox="0 0 52 64"
                        >
                          <path d="M2 8v24h12v2h-14v-28h36v14h-2v-12h-32zM16 22h36v28h-6v8h-1.625l-8-8h-20.375v-28zM50 48v-24h-32v24h19.125l6.875 6.875v-6.875h6z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#19</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={48}
                          height={64}
                          viewBox="0 0 48 64"
                        >
                          <path d="M24 14c-12.125 0-22 7.75-22 17.25 0 3.25 1.25 6.375 3.375 9.125 0 0.125 0 0.25 0.125 0.375s0.25 0.125 0.25 0.25c0.5 0.75 0.75 1.625 0.75 2.5 0 0.375 0.125 0.375-1.625 5.875l4.875-2.125c0.25-0.125 1.25-0.5 1.375-0.5h0.125c0.625-0.25 1.25-0.375 2-0.375 0.625 0 1.125 0.125 1.75 0.25l0.125 0.125h0.25c2.375 0.75 5.125 1.25 8.75 1.25 6 0 11.5-1.875 15.625-5 4-3.125 6.25-7.25 6.25-11.75 0-9.5-9.875-17.25-22-17.25zM24 12v0c13.25 0 24 8.625 24 19.25s-10.625 18.75-23.875 18.75c-3.375 0-6.5-0.375-9.375-1.375h-0.25c-0.375-0.125-0.75-0.25-1.25-0.25s-1.125 0.125-1.5 0.25v0c-0.125 0-1.125 0.5-1.25 0.5l-6.25 2.75-0.25 0.125h-0.75c-0.75-0.125-1-0.75-0.875-1.25v0s2.125-7.125 2.125-7.25c0-0.5-0.125-1-0.375-1.375v0 0 0l-0.375-0.375c-2.375-3-3.75-6.625-3.75-10.5 0-10.625 10.75-19.25 24-19.25z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#20</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={52}
                          height={64}
                          viewBox="0 0 52 64"
                        >
                          <path d="M36.5 22.125l2.25 2.25-16.75 16.875c-0.25 0.25-0.75 0.5-1.125 0.5s-0.875-0.25-1.125-0.5l-7-7 2.25-2.25 5.875 5.875zM26 6c14.375 0 26 11.625 26 26s-11.625 26-26 26-26-11.625-26-26 11.625-26 26-26zM26 55.875c13.125 0 23.875-10.75 23.875-23.875s-10.75-23.875-23.875-23.875-23.875 10.75-23.875 23.875 10.75 23.875 23.875 23.875z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#21</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={52}
                          height={64}
                          viewBox="0 0 52 64"
                        >
                          <path d="M26 6c14.375 0 26 11.625 26 26s-11.625 26-26 26-26-11.625-26-26 11.625-26 26-26zM26 55.875c13.125 0 23.875-10.75 23.875-23.875s-10.75-23.875-23.875-23.875-23.875 10.75-23.875 23.875 10.75 23.875 23.875 23.875zM26 32v-16h2.125v18.125h-14.125v-2.125h12z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#22</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={52}
                          height={64}
                          viewBox="0 0 52 64"
                        >
                          <path d="M44.375 13.625c10.125 10.125 10.125 26.625 0 36.75s-26.625 10.125-36.75 0-10.125-26.625 0-36.75 26.625-10.125 36.75 0zM42.875 48.875c9.25-9.25 9.25-24.5 0-33.75s-24.5-9.25-33.75 0-9.25 24.5 0 33.75 24.5 9.25 33.75 0zM36.5 20l1.5 1.5-10.5 10.5 10.5 10.5-1.5 1.5-10.5-10.5-10.5 10.5-1.5-1.5 10.5-10.5-10.5-10.5 1.5-1.5 10.5 10.5z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#23</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={64}
                          height={64}
                          viewBox="0 0 56 64"
                        >
                          <path d="M45.875 29.125c5.625 0 10.125 4.625 10.125 10.375 0 5.625-4.625 10.5-10.25 10.5h-34.5c-6.25 0-11.25-5.25-11.25-11.5 0-5 3.25-8.875 7.625-10.375 0.625-3.5 3.625-6.5 7.375-6.5 1.25 0 2.25 0.25 3.25 0.75 2.375-4.875 7.375-8.375 13.125-8.375 8 0 14.625 6.625 14.625 14.625 0 0.125-0.125 0.375-0.125 0.5zM45.75 48c4.625 0 8.25-4 8.25-8.625s-3.625-8.375-8.25-8.375h-1.875v-2.625c0-7-5.75-12.375-12.625-12.375-4.75 0-9.125 2.875-11.25 7.25l-0.75 1.75-1.75-0.875c-0.75-0.375-1.625-0.625-2.5-0.625-2.75 0-5 2.125-5.5 4.875l-0.125 1.125-1.125 0.375c-3.75 1.25-6.25 4.625-6.25 8.625 0 5.125 4.125 9.5 9.25 9.5h34.5z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#24</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={48}
                          height={64}
                          viewBox="0 0 48 64"
                        >
                          <path d="M48 34.125l-4.125 1-0.375 1.75 3.375 2.5-1.5 3.75-4.25-0.625-1 1.375 2.125 3.625-2.875 2.875-3.625-2.125-1.25 0.875 0.625 4.25-3.625 1.5-2.625-3.375-1.75 0.375-1 4.125h-4l-1.125-4.125-1.625-0.375-2.625 3.5-3.625-1.5 0.5-4.25-1.375-1-3.75 2.375-2.875-2.875 2.25-3.875-0.875-1.375-4.375 0.625-1.5-3.625 3.5-2.75-0.25-1.5-4.375-1.125v-4l4.375-1.125 0.25-1.5-3.625-2.75 1.5-3.75 4.5 0.625 0.875-1.25-2.375-4 2.75-2.75 4 2.375 1.375-1-0.5-4.375 3.625-1.625 2.75 3.625 1.5-0.25 1.125-4.375h4l1.125 4.375 1.5 0.25 2.75-3.5 3.625 1.5-0.625 4.375 1.375 1 3.75-2.25 2.75 2.875-2.125 3.75 0.875 1.25 4.375-0.625 1.5 3.75-3.5 2.625 0.375 1.625 4.125 1.125v4zM44.5 40.125l-3.25-2.5 0.75-4.125 4-1v-0.875l-4-1-0.75-4.125 3.25-2.375-0.375-0.875-4 0.625-2.375-3.375 2.125-3.5-0.625-0.75-3.5 2.125-3.5-2.25 0.625-4.25-0.75-0.25-2.5 3.25-4-0.75-1-4.125h-0.875l-1.125 4.125-4 0.75-2.5-3.375-0.875 0.375 0.625 4.25-3.5 2.25-1.125-0.75-2.625-1.5-0.625 0.625 2.25 3.75-2.25 3.375-4.125-0.625-0.375 0.875 3.375 2.5-0.75 4-4.125 1v0.875l4.125 1.125 0.75 4-3.375 2.5 0.375 0.75 4.125-0.5 2.25 3.375-2.125 3.625 0.625 0.75 3.625-2.25 3.5 2.25-0.625 4.125 0.875 0.375 2.375-3.375 4.125 0.875 1 3.875h1l0.875-3.875 4.125-0.875 2.5 3.25 0.875-0.375-0.625-4 3.25-2.25 3.5 2 0.625-0.625-2-3.375 2.375-3.5 4 0.5zM24 16c8.875 0 16 7.125 16 16s-7.125 16-16 16-16-7.125-16-16 7.125-16 16-16zM10 32c0 0.875 0.125 1.875 0.25 2.75l13-3.5 3.5-13c-0.875-0.125-1.875-0.25-2.75-0.25-3.75 0-7.25 1.5-9.875 4.125s-4.125 6.125-4.125 9.875zM24 46c3.375 0 6.625-1.25 9.125-3.375l-9.375-9.375-13 3.5c0.75 1.875 1.875 3.625 3.375 5.125 2.625 2.625 6.125 4.125 9.875 4.125zM34.5 41.25c2.25-2.5 3.5-5.875 3.5-9.25 0-3.75-1.5-7.25-4.125-9.875-1.5-1.5-3.25-2.75-5.25-3.375l-3.5 13.125z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#25</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={48}
                          height={64}
                          viewBox="0 0 48 64"
                        >
                          <path d="M37.75 26.5c5.875 1.625 10.25 7.125 10.25 13.5 0 7.75-6.25 14-14 14-3.875 0-7.5-1.625-10-4.25-2.5 2.625-6.125 4.25-10 4.25-7.75 0-14-6.25-14-14 0-6.375 4.375-11.875 10.25-13.5-0.125-0.875-0.25-1.625-0.25-2.5 0-7.75 6.25-14 14-14s14 6.25 14 14c0 0.875-0.125 1.625-0.25 2.5zM12 24c0 0.75 0 1.5 0.125 2.125 0.625-0.125 1.25-0.125 1.875-0.125 3.875 0 7.5 1.625 10 4.25 2.5-2.625 6.125-4.25 10-4.25 0.625 0 1.25 0 1.875 0.125 0.125-0.625 0.125-1.375 0.125-2.125 0-6.625-5.375-12-12-12s-12 5.375-12 12zM26 40c0-0.75 0-1.5-0.125-2.125-0.625 0.125-1.25 0.125-1.875 0.125s-1.25 0-1.875-0.125c-0.125 0.625-0.125 1.375-0.125 2.125 0 2.5 0.75 4.75 2 6.625 1.25-1.875 2-4.125 2-6.625zM24 36c0.375 0 0.875-0.125 1.25-0.125-0.375-0.875-0.75-1.75-1.25-2.5-0.5 0.75-0.875 1.625-1.25 2.5 0.375 0 0.875 0.125 1.25 0.125zM20.75 35.5c0.5-1.375 1.125-2.625 2-3.75-2.25-2.25-5.375-3.75-8.75-3.75-0.375 0-0.875 0.125-1.25 0.125 1.25 3.625 4.25 6.375 8 7.375zM25.25 31.75c0.875 1.125 1.5 2.375 2 3.75 3.75-1 6.75-3.75 8-7.375-0.375 0-0.875-0.125-1.25-0.125-3.375 0-6.5 1.5-8.75 3.75zM14 52c3.375 0 6.5-1.5 8.75-3.75-1.75-2.375-2.75-5.125-2.75-8.25 0-0.875 0.125-1.625 0.25-2.5-4.5-1.25-8-4.625-9.5-9-5 1.375-8.75 6-8.75 11.5 0 6.625 5.375 12 12 12zM34 52c6.625 0 12-5.375 12-12 0-5.5-3.75-10.125-8.75-11.5-1.5 4.375-5 7.75-9.5 9 0.125 0.875 0.25 1.625 0.25 2.5 0 3.125-1 5.875-2.75 8.25 2.25 2.25 5.375 3.75 8.75 3.75z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#26</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={48}
                          height={64}
                          viewBox="0 0 48 64"
                        >
                          <path d="M16 18.75l32 32-4.25 4.25-32-32zM18.625 27l25.125 25.125 1.375-1.375-25.125-25.25zM15 13v-5h2v5h-2zM15 38.5v-5h2v5h-2zM27 24v-2h5v2h-5zM0 24v-2h5v2h-5zM5.875 11.75l3.625 3.625-1.5 1.375-3.5-3.5zM9.5 31.25l-3.625 3.5-1.375-1.375 3.5-3.5zM27.5 13.25l-3.5 3.5-1.5-1.375 3.625-3.625z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#27</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={48}
                          height={64}
                          viewBox="0 0 48 64"
                        >
                          <path d="M38 52v-26l2-2v30h-40v-38h32l-2 2h-28v34h36zM21.75 35.5l21.375-21.375 1.375 1.375-22.5 22.5h-4v-4l22.5-22.5 1.375 1.375-21.375 21.375zM47.5 10c0.25 0.375 0.5 0.75 0.5 1.25s-0.25 0.875-0.5 1.25l-1.5 1.5-4-4 1.5-1.5c0.375-0.25 0.75-0.5 1.25-0.5s0.875 0.25 1.25 0.5z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#28</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={52}
                          height={64}
                          viewBox="0 0 52 64"
                        >
                          <path d="M26 6c14.375 0 26 11.625 26 26s-11.625 26-26 26-26-11.625-26-26 11.625-26 26-26zM26 8.125c-13.125 0-23.875 10.75-23.875 23.875 0 5.875 2.125 11.125 5.625 15.25 2.25-1 7.75-3 11.25-4 0.25-0.125 0.375 0 0.375-1.25 0-1.375-0.125-2.25-0.5-3-0.5-1-0.875-2.5-1.125-3.875-0.5-0.625-1.25-1.875-1.75-4.125-0.375-2-0.125-2.75 0.125-3.5v-0.25c0.125-0.5 0-2.875-0.375-4.75-0.25-1.25 0.125-4.25 1.875-6.5 1.125-1.5 3.375-3.25 7.25-3.5h2.25c4 0.25 6.125 2 7.25 3.5 1.75 2.25 2.125 5.25 1.875 6.5-0.375 1.875-0.5 4.25-0.375 4.75 0 0 0.125 0.125 0.125 0.25 0.25 0.75 0.375 1.5 0 3.5-0.5 2.25-1.25 3.375-1.75 4-0.25 1.375-0.625 3-1.125 4-0.375 0.875-0.75 1.875-0.75 2.875 0 1.25 0 1.25 0.25 1.375 3.375 1 9.125 3 11.625 4 3.5-4.125 5.625-9.5 5.625-15.25 0-13.125-10.75-23.875-23.875-23.875z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#29</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={48}
                          height={64}
                          viewBox="0 0 48 64"
                        >
                          <path d="M0 16h48v32h-48v-32zM24 33.5l20.375-15.5h-40.75zM2 46h44v-26.75l-14.375 11 8.5 9.625-0.25 0.25-9.875-8.75-6 4.625-6-4.625-9.875 8.75-0.25-0.25 8.5-9.625-14.375-11v26.75z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#30</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={48}
                          height={64}
                          viewBox="0 0 48 64"
                        >
                          <path d="M47.875 32l0.125 0.125-0.75 0.75c-2.625 2.625-5.875 6-9.75 8.625-4.5 3-9 4.5-13.5 4.5-10.375 0-16.25-6.125-23.125-13.125l-0.875-0.875 0.125-0.125c4.875-5 8.375-8 11.75-10.125 4-2.5 7.875-3.75 12.125-3.75 10.375 0 18.25 7.5 23.875 14zM24 20c-7.75 0-13.875 4.5-21.25 12 3 3 6 6.25 9.5 8.5 3.75 2.5 7.5 3.5 11.75 3.5 9.375 0 16.625-7 21.375-11.875-3.25-3.625-6.25-6.25-9.25-8.25-4-2.625-8-3.875-12.125-3.875zM24 42c-5.5 0-10-4.5-10-10s4.5-10 10-10 10 4.5 10 10-4.5 10-10 10zM24 24c-4.375 0-8 3.625-8 8s3.625 8 8 8 8-3.625 8-8-3.625-8-8-8zM28 32h2c0 3.25-2.75 6-6 6s-6-2.625-6-6 2.75-6 6-6v2c-2 0-4 1.625-4 3.875s1.875 4.125 4 4.125 4-1.75 4-4v0z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#30</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={44}
                          height={64}
                          viewBox="0 0 44 64"
                        >
                          <path d="M36 16l8 12v20h-44v-20l8-12h28zM41.625 28l-5.625-8.5v8.5h5.625zM10 18v10h6c0 3.25 2.75 6 6 6s6-2.75 6-6h6v-10h-24zM8 19.5l-5.625 8.5h5.625v-8.5zM42 46v-16h-12.25c-0.875 3.5-4 6-7.75 6s-6.875-2.5-7.75-6h-12.25v16h40z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#31</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={50}
                          height={64}
                          viewBox="0 0 50 64"
                        >
                          <path d="M0 11h50v42h-50v-42zM9 51v-6h-7v6h7zM9 43v-6h-7v6h7zM9 35v-6h-7v6h7zM9 27v-6h-7v6h7zM9 19v-6h-7v6h7zM39 51v-18h-28v18h28zM39 31v-18h-28v18h28zM48 51v-6h-7v6h7zM48 43v-6h-7v6h7zM48 35v-6h-7v6h7zM48 27v-6h-7v6h7zM48 19v-6h-7v6h7z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#32</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={32}
                          height={64}
                          viewBox="0 0 32 64"
                        >
                          <path d="M30 14c0.75-0.125 1.375-0.125 2-0.25v21.625c-0.625 0.125-1.25 0.125-2 0.25-1.375 0.125-3 0.375-4.875 0.375-3.125 0-5.875-0.5-8.625-1.125s-5.25-1.625-8-1.625c-3.75 0-5.75 0.625-6.5 0.875v17.875h-2v-38.25l0.375-0.375c0.25-0.125 2.25-1.375 8.125-1.375 3 0 5.625 0.5 8.375 1.125 2.625 0.5 5.25 1.375 8.125 1.375 1.875 0 3.625-0.375 5-0.5zM30 33.625v0-17.625c-1.375 0.125-3.125 0.5-5 0.5-3.125 0-5.75-0.75-8.5-1.375s-5.25-1.125-8-1.125c-3.75 0-5.75 0.625-6.5 0.875v17.125c1.25-0.375 3.25-0.75 6.5-0.75 3 0 5.625 1 8.375 1.625 2.625 0.5 5.375 1.125 8.25 1.125 1.875 0 3.5-0.25 4.875-0.375z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#33</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={32}
                          height={64}
                          viewBox="0 0 32 64"
                        >
                          <path d="M12 4c10.875 8 21.25 22.375 19.875 36-1.625 16.75-13 20-15.875 20s-15.875-5-16-20c-0.125-18.25 15.25-17.875 12-36zM16 59c0 0 5-4.5 5-10s-5-10-5-10-5.125 4.5-5.125 10 5.125 10 5.125 10zM29.875 39.75c0.625-5.875-1.25-12.375-5.125-18.875-2.75-4.5-6.25-8.75-10.375-12.375 0 7.125-3 11.375-6.125 15.375-3.25 4.25-6.25 8.125-6.25 16.125 0 3.125 0.625 6 1.875 8.5 1 2.125 2.5 4 4.375 5.625 1 0.875 2 1.5 2.875 2-1.125-2-2.25-4.375-2.25-7.125 0-6.375 5.5-11.25 5.75-11.5l1.375-1.125 1.375 1.125c0.25 0.25 5.625 5.125 5.625 11.5 0 2.875-1.125 5.5-2.375 7.5 0.875-0.5 1.625-1 2.5-1.75 1.75-1.5 3.125-3.375 4.25-5.5 1.375-2.625 2.125-5.875 2.5-9.5z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#34</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={48}
                          height={64}
                          viewBox="0 0 48 64"
                        >
                          <path d="M46.625 46.25c1 2 1.375 4 1.375 5.75-0.125 4.5-3.375 8-7.875 8h-32c-4.5 0-8-3.375-8.125-8 0-1.75 0.5-3.75 1.5-5.75l14.5-24.375v-15.875h-2v-2h4v4h6v2h-6v4h4v2h-4v4h6v2h-6v0.375l-0.25 0.5-1.875 3.125h6.125v2h-7.25l-11.5 19.25c-1.625 3.125-1.75 5.375-0.25 7.875 1.125 1.75 2.875 2.875 5.125 2.875h32c2.125 0 4.125-1 5.125-2.75 0.625-1 0.75-2.125 0.75-3.25 0-1.5-0.25-3.125-1.125-4.75l-14.5-24.375-0.375-0.5v-18.375h4v2h-2v15.875zM5.5 46.875l9-14.875h19.125l9 14.875c0.875 1.375 1.25 3 1.25 4.125-0.125 3-2 5-5.75 5h-28.25c-3.75 0-5.75-1.5-5.75-5 0-1.125 0.5-2.75 1.375-4.125zM32.5 34h-16.875l-8.375 13.875c-0.625 1-1.125 2.375-1.125 3.125 0 1.625 0.625 2.125 0.75 2.25 0.5 0.5 1.625 0.75 3 0.75h28.25c1.25 0 2.25-0.375 2.875-0.875 0.5-0.5 0.875-1.25 0.875-2.25 0-0.75-0.375-2-1-3v0 0z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#35</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={64}
                          height={64}
                          viewBox="0 0 56 64"
                        >
                          <path d="M45.375 35.5c-3.625 0-8.125-0.875-11.625-1.75-0.125 0.375-0.25 0.75-0.5 1.125 3.125 1.875 7 4.5 9.5 7 5 5 6.625 8.5 5.125 10-0.375 0.375-0.875 0.5-1.5 0.5-1.875 0-4.75-1.875-8.5-5.625-2.5-2.5-5.125-6.375-7-9.5-0.375 0.25-0.875 0.375-1.25 0.5 0.875 3.5 1.875 8 1.875 11.625 0 7-1.5 10.625-3.5 10.625s-3.5-3.625-3.5-10.625c0-3.625 1-8.125 1.875-11.625-0.375-0.125-0.875-0.25-1.25-0.5-1.875 3.125-4.5 7-7 9.5-3.75 3.75-6.625 5.625-8.5 5.625-0.625 0-1.125-0.125-1.5-0.5-1.5-1.5 0.125-5 5.125-10 2.5-2.5 6.375-5.125 9.5-7-0.25-0.375-0.375-0.75-0.5-1.125-3.5 0.875-8 1.75-11.625 1.75-7 0-10.625-1.5-10.625-3.5s3.625-3.5 10.625-3.5c3.625 0 8.125 1 11.625 1.875 0.125-0.375 0.25-0.875 0.5-1.25-3.125-1.875-7-4.375-9.5-6.875-5-5-6.625-8.5-5.125-10 0.375-0.375 0.875-0.5 1.5-0.5 1.875 0 4.75 1.75 8.5 5.5 2.5 2.5 5.125 6.375 7 9.5 0.375-0.25 0.875-0.375 1.25-0.5-0.875-3.5-1.875-8-1.875-11.625 0-7 1.5-10.625 3.5-10.625s3.5 3.625 3.5 10.625c0 3.625-1 8.125-1.875 11.625 0.375 0.125 0.875 0.25 1.25 0.5 1.875-3.125 4.5-7 7-9.5 3.75-3.75 6.625-5.5 8.5-5.5 0.625 0 1.125 0.125 1.5 0.5 1.5 1.5-0.125 5-5.125 10-2.5 2.5-6.375 5-9.5 6.875 0.25 0.375 0.375 0.875 0.5 1.25 3.5-0.875 8-1.875 11.625-1.875 7 0 10.625 1.5 10.625 3.5s-3.625 3.5-10.625 3.5zM36 31.875v0.375c3.75 0.875 7 1.25 9.375 1.25 2.625 0 4.875-0.25 6.5-0.625 1.25-0.375 1.75-0.75 2-0.875-0.25-0.125-0.75-0.5-2-0.875-1.625-0.375-3.875-0.625-6.5-0.625-2.375 0-5.625 0.5-9.375 1.375zM39.25 18.625c-1.75 1.75-3.75 4.375-5.75 7.625l0.25 0.25c3.25-2 5.875-4 7.625-5.75 1.875-1.875 3.25-3.5 4.125-5 0.625-1.125 0.875-1.75 0.875-2-0.5 0-2.75 0.5-7.125 4.875zM22.25 26.5l0.25-0.25c-2-3.25-4-5.875-5.75-7.625-4.375-4.375-6.625-4.875-7.125-4.875 0 0.25 0.25 0.875 0.875 2 0.875 1.5 2.25 3.125 4.125 5 1.75 1.75 4.375 3.75 7.625 5.75zM10.625 33.5c2.375 0 5.625-0.375 9.375-1.25v-0.375c-3.75-0.875-7-1.375-9.375-1.375-2.625 0-4.875 0.25-6.5 0.625-1.25 0.375-1.75 0.75-2 0.875 0.25 0.125 0.625 0.5 1.875 0.875 1.625 0.375 4 0.625 6.625 0.625zM16.75 45.375c1.75-1.75 3.75-4.375 5.75-7.625l-0.25-0.25c-3.25 2-5.875 4-7.625 5.75-1.875 1.875-3.25 3.625-4.125 5.125-0.625 1.125-0.875 1.75-0.875 2 0.5 0 2.75-0.625 7.125-5zM33.75 37.5l-0.25 0.25c2 3.25 4 5.875 5.75 7.625 4.375 4.375 6.625 5 7.125 5 0-0.25-0.25-0.875-0.875-2-0.875-1.5-2.25-3.25-4.125-5.125-1.75-1.75-4.375-3.75-7.625-5.75zM27.125 8.125c-0.375 1.625-0.625 3.875-0.625 6.5 0 2.375 0.5 5.625 1.375 9.375h0.25c0.875-3.75 1.375-7 1.375-9.375 0-2.625-0.25-4.875-0.625-6.5-0.375-1.25-0.75-1.75-0.875-2-0.125 0.25-0.5 0.75-0.875 2zM28.875 56c0.375-1.625 0.625-4 0.625-6.625 0-2.375-0.5-5.625-1.375-9.375h-0.25c-0.875 3.75-1.375 7-1.375 9.375 0 2.625 0.25 5 0.625 6.625 0.375 1.25 0.75 1.625 0.875 1.875 0.125-0.25 0.5-0.625 0.875-1.875zM28 36c2.25 0 4-1.75 4-4s-1.75-4-4-4-4 1.75-4 4 1.75 4 4 4zM39.125 50.75c1.25 4.25 0.875 6.625-0.625 7.25-0.25 0.125-0.375 0.125-0.625 0.125-1.375 0-3.125-1.625-4.625-4.375 0.625-4.375-0.25-9.5-0.25-9.5s3 4.25 6.125 6.5zM37.75 56.125c0.125-0.5 0.25-1.75-0.375-4.25-0.625-0.5-1.25-1.125-1.875-1.75 0 1.125 0 2.125-0.125 3.125 1.25 2 2 2.75 2.375 2.875zM22.75 10.375c-0.75 4.375 0.125 9.375 0.125 9.375s-3.375-4.375-6-6.375c-1.25-4.375-0.875-6.75 0.625-7.375 0.25-0.125 0.375-0.125 0.625-0.125 1.375 0 3 1.5 4.625 4.5zM20.5 13.875c0-1.125 0-2.125 0.125-3.125-1.25-2-2-2.625-2.375-2.75-0.125 0.5-0.25 1.75 0.375 4.25 0.625 0.5 1.25 1 1.875 1.625zM6.25 37.375c4.375 0.5 9.5-0.25 9.5-0.25s-4.25 3-6.375 6c-1.5 0.5-3.25 0.75-4.375 0.75-1.625 0-2.625-0.5-3-1.375-0.625-1.375 0.875-3.125 4.25-5.125zM8.25 41.375c0.5-0.625 1-1.25 1.625-1.875-1.125 0-2.125 0-3.125-0.125-2 1.25-2.625 2-2.75 2.375 0.125 0 0.5 0.125 1 0.125 0.875 0 2-0.125 3.25-0.5zM54 21.5c0.625 1.375-0.875 3.25-4.25 5.25-4.375-0.625-9.5 0.25-9.5 0.25s4.125-3.125 6.375-6.125c1.625-0.5 3.25-0.625 4.375-0.625 1.625 0 2.625 0.375 3 1.25zM49.25 24.75c2-1.25 2.625-2 2.75-2.375-0.125 0-0.5-0.125-1-0.125-0.875 0-2 0.125-3.25 0.5-0.5 0.625-1 1.125-1.625 1.75 1.125 0 2.125 0.125 3.125 0.25zM16.375 51.125c3.875-3 6.625-6.875 6.625-6.875s-0.875 4.875-0.375 8.875c-1.875 3.25-3.5 4.875-4.875 4.875-0.25 0-0.5 0-0.75-0.125-1.375-0.625-1.625-3-0.625-6.75zM17.875 55.875c0.5-0.25 1.5-1 2.75-3.25 0-0.75-0.125-1.625-0.125-2.5-0.75 0.75-1.625 1.5-2.375 2.125-0.5 2.25-0.375 3.25-0.25 3.625zM39 6.25c1.375 0.625 1.625 2.75 0.625 6.75-3.625 2.625-6.625 6.875-6.625 6.875s1-6 0.375-8.875c1.625-3.125 3.5-4.875 4.875-4.875 0.25 0 0.5 0 0.75 0.125zM37.875 11.875c0.625-2.25 0.375-3.375 0.25-3.75-0.5 0.25-1.5 1-2.75 3.25 0 0.75 0.125 1.75 0.125 2.625 0.75-0.75 1.625-1.5 2.375-2.125zM8.875 20.375c2.25 3 6.875 6.625 6.875 6.625s-5-0.875-8.75-0.375c-3.5-1.875-5.375-4-4.75-5.5 0.375-0.875 1.25-1.375 2.75-1.375 1 0 2.625 0.125 3.875 0.625zM4.125 21.875c0.25 0.5 1 1.5 3.25 2.75 0.75 0 1.625-0.125 2.5-0.125-0.75-0.75-1.5-1.5-2.125-2.25-1-0.25-2-0.5-2.75-0.5-0.5 0-0.75 0.125-0.875 0.125zM49 37.375c3.75 2.125 5.375 4.125 4.75 5.625-0.375 0.875-1.25 1.25-2.75 1.25-1 0-2.375-0.125-3.875-0.625-2.5-3.375-6.875-6.5-6.875-6.5s5.625 1 8.75 0.25zM51 42.25c0.5 0 0.75-0.125 0.875-0.125-0.25-0.5-1-1.5-3.25-2.75-0.75 0-1.625 0.125-2.5 0.125 0.75 0.75 1.5 1.625 2.125 2.375 1 0.25 2 0.375 2.75 0.375z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#36</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={64}
                          height={64}
                          viewBox="0 0 52 64"
                        >
                          <path d="M26 6c14.375 0 26 11.625 26 26s-11.625 26-26 26-26-11.625-26-26 11.625-26 26-26zM31.125 55.25c0.375-0.125 0.625-0.125 1-0.25l3-8-2.5-4.875v-0.125h-13.25l-2.5 4.875 3.125 8.125c0.25 0.125 0.625 0.125 0.875 0.25 1.5 0.375 3.125 0.625 4.75 0.625 1.75 0 3.75-0.25 5.5-0.625zM5.125 20.5c-1.875 3.375-2.875 7.125-3 11.125l5.375-4.625zM17.75 9.625c-4.5 1.75-8.5 4.75-11.25 8.625l2.75 8 0.625 0.25 6.125 2.875 8.875-7.5v-7.25zM34.625 30.875l-8.75-7.25-8.625 7.25v0.125l2.25 9h13l2.25-9zM49.875 31.625c-0.125-4-1.125-7.875-3-11.25l-2.375 6.625zM45.5 18.25c-2.75-3.875-6.75-7-11.25-8.625l-7.25 5v7.25l8.875 7.5 6.75-3zM2.25 34.125c0.375 4.25 1.875 8.25 4.125 11.5l8.75 0.125 2.625-4.875-2.5-9.625-0.125-0.125-6.125-2.75zM36.875 45.75l8.75-0.125c2.25-3.25 3.75-7.25 4.125-11.5l-6.75-5.75-6.25 2.875-2.5 9.625zM25.875 12.875l5.875-4c-1.875-0.5-3.75-0.75-5.75-0.75s-4 0.25-5.875 0.75zM14.75 47.75l-6.75-0.125c2.5 2.875 5.75 5.25 9.375 6.625l-2.5-6.25zM34.625 54.25c3.625-1.375 6.875-3.75 9.375-6.625l-7 0.125-0.25 0.375z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#37</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={64}
                          height={64}
                          viewBox="0 0 56 64"
                        >
                          <path d="M20.375 30c0.375 0 0.625 0.25 0.625 0.625v2.75c0 0.375-0.25 0.625-0.625 0.625h-4.375v4.375c0 0.375-0.375 0.625-0.75 0.625h-2.625c-0.375 0-0.625-0.25-0.625-0.625v-4.375h-4.375c-0.375 0-0.625-0.375-0.625-0.75v-2.625c0-0.375 0.25-0.625 0.625-0.625h4.375v-4.375c0-0.375 0.25-0.625 0.625-0.625h2.75c0.375 0 0.625 0.25 0.625 0.625v4.375h4.375zM41.25 34.875c1.375 0 2.5 1 2.5 2.375s-1.125 2.375-2.5 2.375-2.375-1-2.375-2.375 1-2.375 2.375-2.375zM36 29.625c1.375 0 2.375 1 2.375 2.375s-1 2.375-2.375 2.375-2.5-1-2.5-2.375 1.125-2.375 2.5-2.375zM46.625 29.625c1.375 0 2.375 1 2.375 2.375s-1 2.375-2.375 2.375-2.5-1-2.5-2.375 1.125-2.375 2.5-2.375zM41.25 24.375c1.375 0 2.5 1 2.5 2.375s-1.125 2.5-2.5 2.5-2.375-1.125-2.375-2.5 1-2.375 2.375-2.375zM42.125 20.25h-28.25c-3.25 0-6.125 1.125-8.375 3.25s-3.5 5.125-3.5 8.375 1.25 6.375 3.5 8.5 5.125 3.375 8.375 3.375h28.25c3.25 0 6.125-1.25 8.375-3.375s3.5-5.25 3.5-8.5-1.25-6.25-3.5-8.375-5.125-3.25-8.375-3.25zM42.125 18.25v0c7.625 0 13.875 5.625 13.875 13.625s-6.25 13.875-13.875 13.875h-28.25c-7.625 0-13.875-5.875-13.875-13.875s6.25-13.625 13.875-13.625h28.25z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#38</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={64}
                          height={64}
                          viewBox="0 0 56 64"
                        >
                          <path d="M34.5 25.5c1.375 0 2.5 1.125 2.5 2.5s-1.125 2.5-2.5 2.5-2.5-1.125-2.5-2.5 1.125-2.5 2.5-2.5zM40 31c1.375 0 2.5 1.125 2.5 2.5s-1.125 2.5-2.5 2.5-2.5-1.125-2.5-2.5 1.125-2.5 2.5-2.5zM12.875 23c2.75 0 4.875 2.25 4.875 5s-2.125 5-4.875 5-4.875-2.25-4.875-5 2.125-5 4.875-5zM12.875 30.375c1.375 0 2.375-1 2.375-2.375s-1-2.375-2.375-2.375-2.375 1-2.375 2.375 1 2.375 2.375 2.375zM40 20c1.375 0 2.5 1.125 2.5 2.5s-1.125 2.5-2.5 2.5-2.5-1.125-2.5-2.5 1.125-2.5 2.5-2.5zM45.5 25.5c1.375 0 2.5 1.125 2.5 2.5s-1.125 2.5-2.5 2.5-2.5-1.125-2.5-2.5 1.125-2.5 2.5-2.5zM54.25 31.125c2.625 11 2.25 19-0.875 20.5-0.5 0.25-1.125 0.375-1.625 0.375-2.75 0-5.625-3-8.5-6.5-3.25-4-4-4.125-13.75-4.125h-3c-9.75 0-10.5 0.125-13.75 4.125-2.875 3.5-5.75 6.5-8.5 6.5-0.5 0-1.125-0.125-1.625-0.375-3.125-1.5-3.5-9.5-0.875-20.5s5.375-17 11-18.625c1.25-0.375 2.25-0.5 3.25-0.5 3.5 0 5.875 1.875 12 1.875s8.5-1.875 12-1.875c1 0 2 0.125 3.25 0.5 5.625 1.625 8.375 7.625 11 18.625zM52.5 49.875c1.25-0.625 2.875-6-0.125-18.25-2.625-11.25-5.375-16-9.75-17.25-1-0.25-1.75-0.375-2.625-0.375-1.25 0-2.375 0.25-3.75 0.625-2 0.5-4.5 1.25-8.25 1.25s-6.25-0.75-8.25-1.25c-1.375-0.375-2.5-0.625-3.75-0.625-0.875 0-1.625 0.125-2.625 0.375-4.375 1.25-7.125 6-9.75 17.25-3 12.25-1.375 17.625-0.125 18.25 0.25 0.125 0.5 0.125 0.75 0.125 0.75 0 1.75-0.5 2.875-1.5s2.375-2.25 4-4.25 3-3.5 5.5-4.25c2.125-0.625 4.75-0.625 9.875-0.625h3c5.125 0 7.75 0 9.875 0.625 2.5 0.75 3.875 2.25 5.5 4.25s2.875 3.25 4 4.25 2.125 1.5 2.875 1.5c0.25 0 0.5 0 0.75-0.125z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#39</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={48}
                          height={64}
                          viewBox="0 0 48 64"
                        >
                          <path d="M24.125 20c3.25 0 6.25 1.25 8.5 3.5s3.5 5.25 3.5 8.5-1.25 6.25-3.5 8.5-5.25 3.5-8.5 3.5-6.25-1.25-8.5-3.5-3.5-5.25-3.5-8.5 1.25-6.25 3.5-8.5 5.25-3.5 8.5-3.5zM24.125 42c5.5 0 10-4.5 10-10s-4.5-10-10-10-10 4.5-10 10 4.5 10 10 10zM17.25 10.375c-1.25 0.375-2.5 0.875-3.75 1.5 0.25 1 0.125 2 0 3-0.25 1.625-1 3.125-2.25 4.375-1.5 1.5-3.625 2.375-5.75 2.375-0.5 0-1.125 0-1.625-0.125-0.625 1.25-1.125 2.5-1.5 3.75 0.875 0.5 1.5 1.25 2.125 2.125 1 1.375 1.5 3 1.5 4.625s-0.5 3.25-1.5 4.625c-0.625 0.875-1.25 1.625-2.125 2.125 0.375 1.25 0.875 2.5 1.5 3.75 0.5-0.125 1.125-0.125 1.625-0.125 2.125 0 4.25 0.875 5.75 2.375 1.25 1.25 2 2.75 2.25 4.375 0.125 1 0.25 2 0 3 1.25 0.625 2.5 1.125 3.75 1.5 0.5-0.875 1.25-1.5 2.125-2.125 1.375-1 3-1.5 4.625-1.5s3.25 0.5 4.625 1.5c0.875 0.625 1.625 1.25 2.125 2.125 1.25-0.375 2.5-0.875 3.75-1.5-0.25-1-0.125-2 0-3 0.25-1.625 1-3.125 2.25-4.375 1.5-1.5 3.625-2.375 5.75-2.375 0.5 0 1.125 0 1.625 0.125 0.625-1.25 1.125-2.5 1.5-3.75-0.875-0.5-1.5-1.25-2.125-2.125-1-1.375-1.5-3-1.5-4.625s0.5-3.25 1.5-4.625c0.625-0.875 1.25-1.625 2.125-2.125-0.375-1.25-0.875-2.5-1.5-3.75-0.5 0.125-1.125 0.125-1.625 0.125-2.125 0-4.25-0.875-5.75-2.375-1.25-1.25-2-2.75-2.25-4.375-0.125-1-0.25-2 0-3-1.25-0.625-2.5-1.125-3.75-1.5-0.5 0.875-1.25 1.5-2.125 2.125-1.375 1-3 1.5-4.625 1.5s-3.25-0.5-4.625-1.5c-0.875-0.625-1.625-1.25-2.125-2.125zM29.75 8v0c2.5 0.625 5 1.625 7.125 3-1 2.25-0.625 5 1.25 6.875 1.25 1.25 2.75 1.75 4.375 1.75 0.875 0 1.75-0.125 2.5-0.5 1.375 2.125 2.375 4.625 3 7.125-2.375 0.875-4 3.125-4 5.75s1.75 4.875 4 5.75c-0.625 2.5-1.625 5-3 7.125-0.75-0.375-1.625-0.5-2.5-0.5-1.625 0-3.125 0.5-4.375 1.75-1.875 1.875-2.25 4.625-1.25 6.875-2.125 1.375-4.625 2.375-7.125 3-0.875-2.25-3.125-4-5.75-4s-4.875 1.75-5.75 4c-2.5-0.625-5-1.625-7.125-3 1-2.25 0.625-5-1.25-6.875-1.25-1.25-2.75-1.75-4.375-1.75-0.875 0-1.75 0.125-2.5 0.5-1.375-2.125-2.375-4.625-3-7.125 2.25-0.875 4-3.125 4-5.75s-1.625-4.875-4-5.75c0.625-2.5 1.625-5 3-7.125 0.75 0.375 1.625 0.5 2.5 0.5 1.625 0 3.125-0.5 4.375-1.75 1.875-1.875 2.25-4.625 1.25-6.875 2.125-1.375 4.625-2.375 7.125-3 0.875 2.375 3.125 4 5.75 4s4.875-1.625 5.75-4z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#40</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={64}
                          height={64}
                          viewBox="0 0 56 64"
                        >
                          <path d="M54.125 30.875v0h1.875v2.25h-1.875c-0.25 2.75-1.625 5.375-3.625 7.25-2.125 2-4.875 3.125-7.75 3.125-6.375 0-11.5-5.125-11.5-11.5v0 0c0-1.25-1.5-2.75-3.25-2.75s-3.25 1.5-3.25 2.75v0 0c0 6.375-5.125 11.5-11.5 11.5-2.875 0-5.625-1.125-7.75-3.125-2-1.875-3.375-4.5-3.625-7.25h-1.875v-2.25h1.875c0.25-2.75 1.625-5.375 3.625-7.375 2.125-2 4.875-3 7.75-3 5.25 0 9.75 3.375 11.125 8.375 0.875-0.875 2.25-1.5 3.625-1.5s2.75 0.625 3.625 1.5c1.375-5 5.875-8.375 11.125-8.375 2.875 0 5.625 1.125 7.75 3.125 2 1.875 3.375 4.5 3.625 7.25zM42.75 41.625c5.25 0 9.625-4.375 9.625-9.625s-4.375-9.625-9.625-9.625-9.625 4.375-9.625 9.625 4.375 9.625 9.625 9.625zM13.25 41.625c5.25 0 9.625-4.375 9.625-9.625s-4.375-9.625-9.625-9.625-9.625 4.375-9.625 9.625 4.375 9.625 9.625 9.625z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#41</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={48}
                          height={64}
                          viewBox="0 0 48 64"
                        >
                          <path d="M48 24h-14v16h14v2h-14v14h-2v-14h-16v14h-2v-14h-14v-2h14v-16h-14v-2h14v-14h2v14h16v-14h2v14h14v2zM32 40v-16h-16v16h16z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#42</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={64}
                          height={64}
                          viewBox="0 0 56 64"
                        >
                          <path d="M40.875 10c8.625 0 15.125 5.375 15.125 14.5 0 3.875-1.625 8.875-5.125 13.125s-5.625 6.5-12.5 11-10.375 5.375-10.375 5.375-3.5-0.875-10.375-5.375-9-6.75-12.5-11-5.125-9.25-5.125-13.125c0-9.125 6.5-14.5 15.125-14.5 4.875 0 10.25 2.25 12.875 6.625 2.625-4.375 8-6.625 12.875-6.625zM49.375 36.375c1.5-1.75 2.75-3.875 3.5-6.125 0.75-2 1.125-3.875 1.125-5.75 0-3.75-1.25-7-3.625-9.25-1.125-1-2.5-1.875-4.125-2.375-1.625-0.625-3.5-0.875-5.375-0.875-4.75 0-9.125 2.25-11.125 5.625l-1.75 2.875-1.75-2.875c-2-3.375-6.375-5.625-11.125-5.625-1.875 0-3.75 0.25-5.375 0.875-1.625 0.5-3 1.375-4.125 2.375-2.375 2.25-3.625 5.5-3.625 9.25 0 1.875 0.375 3.75 1.125 5.75 0.75 2.25 2 4.375 3.5 6.125 3.375 4 5.25 6.125 12.125 10.625 5 3.375 8.125 4.5 9.25 4.875 1.125-0.375 4.25-1.5 9.25-4.875 6.875-4.5 8.75-6.625 12.125-10.625z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#43</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={52}
                          height={64}
                          viewBox="0 0 52 64"
                        >
                          <path d="M26 6c14.375 0 26 11.625 26 26s-11.625 26-26 26-26-11.625-26-26 11.625-26 26-26zM26 55.875c13.125 0 23.875-10.75 23.875-23.875s-10.75-23.875-23.875-23.875-23.875 10.75-23.875 23.875 10.75 23.875 23.875 23.875zM26.5 18.25c4.125 0 7.5 2.625 7.5 6.875 0 2.75-1.375 4.5-3.25 6.25-2.875 2.875-2.75 3.375-2.875 6.625h-2.375c0.125-3.5 0.875-5.375 3.75-8 1.375-1.25 2.375-2.875 2.375-4.75 0-3-2.375-5-5.25-5-4 0-6.125 2-6 5.75h-2.375c0-5.25 3.125-7.75 8.5-7.75zM26.5 41.5c1.125 0 2.125 1 2.125 2.125s-1 2.125-2.125 2.125-2.125-1-2.125-2.125 1-2.125 2.125-2.125z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#44</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={48}
                          height={64}
                          viewBox="0 0 48 64"
                        >
                          <path d="M24 14l20 16v26h-14v-16h-12v16h-14v-26zM42 54v-23l-18-14.5-18 14.5v23h10v-16h16v16h10zM24 8l24 19.125-1.5 1.5-22.5-18.125-22.5 18.125-1.5-1.5 4-3.125v-12h8v5.625zM10 19.25v-5.25h-4v8.375z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#45</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={64}
                          height={64}
                          viewBox="0 0 56 64"
                        >
                          <path d="M52.375 23.5c2.375 2.375 3.625 5.375 3.625 8.5s-1.25 6.125-3.625 8.5c-2.375 2.25-5.5 3.5-8.75 3.5s-6.25-1.25-8.625-3.5l-15.75-15.375c-1.875-1.875-4.375-2.75-7-2.75s-5 0.875-6.875 2.75c-3.875 3.75-3.875 10 0 13.75 1.875 1.875 4.25 2.75 6.875 2.75s5.125-0.875 7-2.75l5.375-5.25 1.625 1.75-5.25 5.125c-2.375 2.25-5.5 3.5-8.75 3.5s-6.25-1.25-8.625-3.5c-2.375-2.375-3.625-5.375-3.625-8.5s1.25-6.125 3.625-8.5c2.375-2.25 5.375-3.5 8.625-3.5s6.375 1.25 8.75 3.5l15.75 15.375c1.875 1.875 4.25 2.75 6.875 2.75s5.125-0.875 7-2.75c3.875-3.75 3.875-10 0-13.75-1.875-1.875-4.375-2.75-7-2.75s-5 0.875-6.875 2.75l-5.375 5.25-1.625-1.75 5.25-5.125c2.375-2.25 5.5-3.5 8.75-3.5s6.25 1.25 8.625 3.5z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#46</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={52}
                          height={64}
                          viewBox="0 0 52 64"
                        >
                          <path d="M23 21.5c0-1.625 0.875-2.5 2.5-2.5s2.5 0.875 2.5 2.5-0.875 2.5-2.5 2.5-2.5-0.875-2.5-2.5zM28 43h2v1h-8v-1h2v-15h-2v-1h6v16zM26 6c7.125 0 13.25 2.5 18.375 7.625s7.625 11.25 7.625 18.375-2.5 13.25-7.625 18.375-11.25 7.625-18.375 7.625-13.25-2.5-18.375-7.625-7.625-11.25-7.625-18.375 2.5-13.25 7.625-18.375 11.25-7.625 18.375-7.625zM26 55.875c6.625 0 12.25-2.375 16.875-7s7-10.25 7-16.875-2.375-12.25-7-16.875-10.25-7-16.875-7-12.25 2.375-16.875 7-7 10.25-7 16.875 2.375 12.25 7 16.875 10.25 7 16.875 7z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#47</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={48}
                          height={64}
                          viewBox="0 0 48 64"
                        >
                          <path d="M41.375 42.625c3.75 0 6.625 3 6.625 6.75s-2.875 6.625-6.625 6.625-6.75-2.875-6.75-6.625 3-6.75 6.75-6.75zM41.375 54c2.625 0 4.625-2 4.625-4.625s-2-4.75-4.625-4.75-4.75 2.125-4.75 4.75 2.125 4.625 4.75 4.625zM24 42.625c3.75 0 6.625 3 6.625 6.75s-2.875 6.625-6.625 6.625-6.625-2.875-6.625-6.625 2.875-6.75 6.625-6.75zM24 54c2.625 0 4.625-2 4.625-4.625s-2-4.75-4.625-4.75-4.625 2.125-4.625 4.75 2 4.625 4.625 4.625zM6.625 42.625c3.75 0 6.75 3 6.75 6.75s-3 6.625-6.75 6.625-6.625-2.875-6.625-6.625 2.875-6.75 6.625-6.75zM6.625 54c2.625 0 4.75-2 4.75-4.625s-2.125-4.75-4.75-4.75-4.625 2.125-4.625 4.75 2 4.625 4.625 4.625zM41.375 25.375c3.75 0 6.625 2.875 6.625 6.625s-2.875 6.625-6.625 6.625-6.75-2.875-6.75-6.625 3-6.625 6.75-6.625zM41.375 36.625c2.625 0 4.625-2 4.625-4.625s-2-4.625-4.625-4.625-4.75 2-4.75 4.625 2.125 4.625 4.75 4.625zM24 25.375c3.75 0 6.625 2.875 6.625 6.625s-2.875 6.625-6.625 6.625-6.625-2.875-6.625-6.625 2.875-6.625 6.625-6.625zM24 36.625c2.625 0 4.625-2 4.625-4.625s-2-4.625-4.625-4.625-4.625 2-4.625 4.625 2 4.625 4.625 4.625zM6.625 25.375c3.75 0 6.75 2.875 6.75 6.625s-3 6.625-6.75 6.625-6.625-2.875-6.625-6.625 2.875-6.625 6.625-6.625zM6.625 36.625c2.625 0 4.75-2 4.75-4.625s-2.125-4.625-4.75-4.625-4.625 2-4.625 4.625 2 4.625 4.625 4.625zM41.375 21.375c-3.75 0-6.75-3-6.75-6.75s3-6.625 6.75-6.625 6.625 2.875 6.625 6.625-2.875 6.75-6.625 6.75zM41.375 10c-2.625 0-4.75 2-4.75 4.625s2.125 4.75 4.75 4.75 4.625-2.125 4.625-4.75-2-4.625-4.625-4.625zM24 8c3.75 0 6.625 2.875 6.625 6.625s-2.875 6.75-6.625 6.75-6.625-3-6.625-6.75 2.875-6.625 6.625-6.625zM24 19.375c2.625 0 4.625-2.125 4.625-4.75s-2-4.625-4.625-4.625-4.625 2-4.625 4.625 2 4.75 4.625 4.75zM6.625 8c3.75 0 6.75 2.875 6.75 6.625s-3 6.75-6.75 6.75-6.625-3-6.625-6.75 2.875-6.625 6.625-6.625zM6.625 19.375c2.625 0 4.75-2.125 4.75-4.75s-2.125-4.625-4.75-4.625-4.625 2-4.625 4.625 2 4.75 4.625 4.75z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#48</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={36}
                          height={64}
                          viewBox="0 0 36 64"
                        >
                          <path d="M36 21.625c0 3.875-1.625 7.375-3.75 10.375v0c-1.375 1.875-2.75 3.5-4 5.625-2.75 4.75-2.25 9.125-2.25 10.25v0.125h-16v-0.125c0-0.875 0.375-5.5-2.375-10.25-1.25-2.125-2.5-3.75-3.875-5.625v0c-2.125-3-3.75-6.5-3.75-10.375 0-9.75 8.25-17.625 18-17.625s18 7.875 18 17.625zM29.875 31.75l0.75-1c2-2.75 3.375-5.875 3.375-9.125 0-4.125-2-8.125-5-11.125s-6.875-4.5-11-4.5-8 1.5-11 4.5-5 7-5 11.125c0 3.25 1.375 6.375 3.375 9.125l2.375 3.25c0.625 0.75 1.125 1.625 1.625 2.625 2.125 3.625 2.625 7.25 2.625 9.375h2v-14l-4-8h2.125l3.875 8v14h4v-14l3.875-8h2.125l-4 8v14h2c0-2.125 0.5-5.625 2.625-9.375 1-1.75 2-3.125 3-4.5 0.125-0.125 0.125-0.25 0.25-0.375zM14 60v-2h8v2h-8zM12 56v-2h12v2h-12zM12 52v-2h12v2h-12z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#49</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={48}
                          height={64}
                          viewBox="0 0 48 64"
                        >
                          <path d="M46 10h-44v44h44v-44zM48 8v0 48h-48v-48h48zM16 21v-2h24v2h-24zM16 33v-2h24v2h-24zM16 45v-2h24v2h-24zM8 20c0-1.375 0.625-2 2-2s2 0.625 2 2-0.625 2-2 2-2-0.625-2-2zM8 32c0-1.375 0.625-2 2-2s2 0.625 2 2-0.625 2-2 2-2-0.625-2-2zM8 44c0-1.375 0.625-2 2-2s2 0.625 2 2-0.625 2-2 2-2-0.625-2-2z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#50</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={36}
                          height={64}
                          viewBox="0 0 36 64"
                        >
                          <path d="M18 6c-4.25 0-8.375 1.625-11.375 4.625s-4.625 7.125-4.625 11.375c0 5.375 3 13.375 8.75 23.25 2.75 4.75 5.5 9 7.25 11.375 1.75-2.375 4.5-6.625 7.25-11.375 5.75-9.875 8.75-17.875 8.75-23.25 0-4.25-1.625-8.375-4.625-11.375s-7.125-4.625-11.375-4.625zM18 4v0c10 0 18 8 18 18 0 14-18 38-18 38s-18-24-18-38c0-10 8-18 18-18zM18 14c4.375 0 8 3.625 8 8s-3.625 8-8 8-8-3.625-8-8 3.625-8 8-8zM18 27.875c3.25 0 5.875-2.625 5.875-5.875s-2.625-5.875-5.875-5.875-5.875 2.625-5.875 5.875 2.625 5.875 5.875 5.875z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#51</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={40}
                          height={64}
                          viewBox="0 0 40 64"
                        >
                          <path d="M33 28h7v30h-40v-30h7v-9c0-7.125 5.875-13 13-13s13 5.875 13 13v9zM9 19v9h22v-9c0-6.125-4.875-11-11-11s-11 4.875-11 11zM38 56v-26h-36v26h36zM20 36c2.25 0 4 1.75 4 4 0 1.875-1.25 3.375-3 3.875v4.125h-2v-4.125c-1.75-0.5-3-2-3-3.875 0-2.25 1.75-4 4-4zM20 42c1.125 0 2-0.875 2-2s-0.875-2-2-2-2 0.875-2 2 0.875 2 2 2z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#52</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          width={61}
                          height={64}
                          viewBox="0 0 61 64"
                          aria-hidden="true"
                        >
                          <path d="M59.75 32l1.375 1.375-6.5 6.625-6.625-6.625 1.25-1.375 5.375 5.125zM56.125 32v0 0c0 0.875 0 1.75-0.125 2.625l-2-0.125c0.125-0.875 0.125-1.75 0.125-2.625-0.125-12.875-10.625-23.375-23.5-23.375-8.5 0-16.375 4.625-20.5 12l-1.75-1c4.5-8 13-13 22.25-13 14 0 25.375 11.375 25.5 25.25v0 0.25zM51.125 43.5l1.75 1c-4.5 8-13 13-22.25 13-13.875 0-25.25-11.25-25.5-25v0-0.5c0-0.875 0-1.75 0.125-2.625l2 0.125c-0.125 0.875-0.125 1.75-0.125 2.625 0 12.875 10.625 23.375 23.5 23.375 8.5 0 16.375-4.625 20.5-12zM6.625 24l6.5 6.625-1.375 1.375-5.125-5.125-5.25 5.125-1.375-1.375z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#53</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          width={46}
                          height={64}
                          viewBox="0 0 46 64"
                          aria-hidden="true"
                        >
                          <path d="M45.5 23.5l-14.75 8.5 14.75 8.5-4 7-14.75-8.625v17.125h-8v-17.125l-14.75 8.625-4-7 14.75-8.5-14.75-8.5 4-7 14.75 8.625v-17.125h8v17.125l14.75-8.625zM42.75 41.25l-16-9.25 16-9.25-2-3.5-16 9.25v-18.5h-4v18.5l-16-9.25-2 3.5 16 9.25-16 9.25 2 3.5 16-9.25v18.5h4v-18.5l16 9.25z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#54</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={32}
                          height={64}
                          viewBox="0 0 32 64"
                        >
                          <path d="M16 4c5.5 0 9.875 4.75 9.875 10.5v19.25c0 5.75-4.375 10.5-9.875 10.5s-9.875-4.75-9.875-10.5v-19.25c0-5.75 4.375-10.5 9.875-10.5zM23.875 33.75v-19.25c0-4.625-3.5-8.5-7.875-8.5s-7.875 3.875-7.875 8.5v19.25c0 4.625 3.5 8.5 7.875 8.5s7.875-3.875 7.875-8.5zM29.875 24h2.125v10c0 8.375-6.375 15.25-14.625 15.875v7.875h8.625v2.25h-20.125v-2.25h9.125v-7.875c-8.375-0.625-15-7.5-15-15.875v-10h2.375v10c0 7.5 6.25 13.625 13.75 13.625s13.75-6.125 13.75-13.625v-10z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#55</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={60}
                          height={64}
                          viewBox="0 0 60 64"
                        >
                          <path d="M60 48h-22v2h8v2h-32.125v-2h8v-2h-21.875v-36h60v36zM2 14v32h56v-32h-56z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#56</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={52}
                          height={64}
                          viewBox="0 0 52 64"
                        >
                          <path d="M26 8c-6.375 0-12.375 2.625-16.875 7.125s-7.125 10.5-7.125 16.875 2.625 12.375 7.125 16.875 10.5 7.125 16.875 7.125 12.375-2.625 16.875-7.125 7.125-10.5 7.125-16.875-2.625-12.375-7.125-16.875-10.5-7.125-16.875-7.125zM26 6v0c14.375 0 26 11.625 26 26s-11.625 26-26 26-26-11.625-26-26 11.625-26 26-26zM38 20l-12 28v-16h-16z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#57</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={48}
                          height={64}
                          viewBox="0 0 48 64"
                        >
                          <path d="M36.75 29.25v0c0.75 0.75 1.25 1.75 1.25 2.875 0 1.375-0.625 2.5-1.625 3.25v0s-6.375 4.625-13.25 9.625l-4.75-3.875c-0.25-0.25-0.5-0.375-0.75-0.375-0.125 0-0.25 0-0.375 0.125v0c-0.25 0.25-0.25 0.75 0.125 1.25l3.625 4.375-14.375 10.5c-0.75 0.5-1.625 1-2.625 1-2.25 0-4-1.75-4-4 0-0.875 0.125-1.625 0.5-2.25v0c0.25-0.25 2.125-3.125 4.625-7.125l2.625 2.125c0.25 0.25 0.5 0.25 0.75 0.25 0.125 0 0.375 0 0.5-0.125v0c0.25-0.25 0.125-0.75-0.25-1.25l-2.375-2.875c3.375-5.375 7.5-12 10.5-16.75l4.5 3.75c0.25 0.25 0.5 0.375 0.75 0.375 0.125 0 0.25-0.125 0.375-0.25v0c0.25-0.25 0.25-0.625-0.125-1.125l-4.125-5c1.375-2.25 2.375-3.625 2.375-3.625v0c0.75-1.25 1.875-2 3.375-2 1.125 0 2.25 0.5 3 1.25v0l9.75 9.875zM35.25 33.75c0.5-0.375 0.75-1 0.75-1.625 0-0.5-0.25-1.125-0.625-1.5l-0.625-0.5v-0.125l-9.25-9.25c-0.375-0.375-1-0.625-1.5-0.625-0.75 0-1.25 0.375-1.625 1l-0.625 1c-0.25 0.375-0.625 0.875-1 1.5l3.125 3.75 0.125 0.125c1 1.25 1 2.75 0 3.75l-0.25 0.25c-0.5 0.375-1 0.625-1.625 0.625s-1.375-0.25-2-0.75v-0.125h-0.125l-2.625-2.25-3 4.875-5.5 8.75 1.5 1.75c1 1.25 1 2.875 0 3.875v0c-0.5 0.5-1.125 0.75-1.875 0.75-0.625 0-1.375-0.25-2-0.75v0 0l-0.875-0.625c-0.375 0.625-0.625 1.125-1 1.625-1.5 2.375-2 3.25-2.25 3.625-0.125 0.375-0.25 0.75-0.25 1.125 0 1.125 0.875 2 2 2 0.375 0 0.75-0.25 1.375-0.625l12.625-9.25-2.25-2.75h-0.125c-1-1.25-1-2.875 0-3.875v0 0 0c0.5-0.5 1.25-0.75 1.875-0.75s1.375 0.25 2 0.75v0h0.125l3.5 3c6.125-4.5 11.625-8.5 12-8.75zM47 14.375l1 1.75-0.625 0.375-12.875 7.5-2.125-2.125 8.875-15.375 0.25-0.5 1.75 1-0.375 0.5-7.875 13.875 11.375-6.625z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#58</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={48}
                          height={64}
                          viewBox="0 0 48 64"
                        >
                          <path d="M6 8h42v44.125c0 2.125-1.75 3.875-3.875 3.875h-40.25c-2.125 0-3.875-1.75-3.875-3.875v-38.125h4v2h-2v36.125c0 1 0.875 1.875 1.875 1.875h40.25c1 0 1.875-0.875 1.875-1.875v-42.125h-38v40h-2v-42zM12 16v-2h16v2h-16zM12 26v-2h30v2h-30zM12 36v-2h24v2h-24zM12 46v-2h30v2h-30z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#59</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={40}
                          height={64}
                          viewBox="0 0 40 64"
                        >
                          <path d="M0 31.25l40-19.25-18.25 40-7.125-14.375zM16.5 37l5.125 10.375 14.375-31.125zM35.75 16l-31 15.125 10.375 4.5z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#60</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={48}
                          height={64}
                          viewBox="0 0 48 64"
                        >
                          <path d="M47.5 24.5c0.75 2.125 0.625 4.75-0.375 7.125-1.25 3.125-3.875 5.375-6.375 5.375-0.625 0-1.25-0.125-1.875-0.375-2.75-1.25-3.75-5.625-2.125-9.875 1.25-3.5 3.875-5.75 6.375-5.75 0.625 0 1.25 0.125 1.75 0.375 1.25 0.5 2.125 1.625 2.625 3.125zM45.25 30.75c0.75-1.875 0.875-3.875 0.25-5.5-0.25-0.625-0.625-1.5-1.5-1.875-0.25-0.125-0.5-0.25-0.875-0.25-1.625 0-3.5 1.875-4.5 4.5-1.125 3.125-0.75 6.25 1 7 0.25 0.125 0.625 0.125 1 0.125 1.75 0 3.625-1.625 4.625-4zM11.25 26.75c1.625 4.25 0.625 8.625-2.125 9.875-0.625 0.25-1.25 0.375-1.875 0.375-2.5 0-5.125-2.25-6.375-5.375-1-2.375-1.125-5-0.375-7.125 0.5-1.5 1.375-2.625 2.625-3.125 0.5-0.25 1.125-0.375 1.75-0.375 2.5 0 5.125 2.25 6.375 5.75zM8.375 34.625c1.75-0.75 2.125-3.875 1-7-1-2.625-2.875-4.5-4.5-4.5-0.375 0-0.625 0.125-0.875 0.25-0.875 0.375-1.25 1.25-1.5 1.875-0.625 1.625-0.5 3.625 0.25 5.5 1 2.375 2.875 4 4.625 4 0.375 0 0.75 0 1-0.125zM16.75 26.375c-3.5-0.125-6.5-4-7-8.625-0.25-2.875 0.5-5.625 2-7.5 1-1.25 2.375-2.125 3.875-2.25h0.75c3.375 0.125 5.75 3.625 6.25 8.375 0.375 3-0.125 6-1.625 7.875-1 1.125-2.125 1.875-3.5 2-0.25 0-0.5 0.125-0.75 0.125zM13.375 11.5c-1.25 1.5-1.75 3.625-1.5 6 0.375 3.625 2.625 6.625 5 6.75h0.375c0.75-0.125 1.5-0.5 2.125-1.25 1.25-1.5 1.5-3.875 1.25-6.375-0.375-3.625-2.125-6.5-4.375-6.625h-0.375c-1.125 0.125-2 0.875-2.5 1.5zM24 30c8 0 16 9.5 16 18.625 0 2.75-1.375 5-2.75 5.875-1.625 1.125-2.875 1.5-5.25 1.5-2.875 0-3.625-1-5-1.875-1-0.625-1.75-1.25-3-1.25s-2 0.625-3 1.25c-1.375 0.875-2.125 1.875-5 1.875-2.375 0-3.625-0.375-5.25-1.5-1.375-0.875-2.75-3.125-2.75-5.875 0-9.125 8-18.625 16-18.625zM36.25 52.625c0.75-0.5 1.75-2 1.75-4 0-3.75-1.75-8-4.5-11.375-1.375-1.625-2.875-3-4.5-3.875-1.625-1-3.375-1.375-5-1.375s-3.375 0.375-5 1.375c-1.625 0.875-3.125 2.25-4.5 3.875-2.75 3.375-4.5 7.625-4.5 11.375 0 2 1 3.5 1.75 4 1.375 0.875 2.25 1.25 4.25 1.25 1.75 0 2.375-0.5 3.25-1.125 0.25-0.125 0.5-0.375 0.75-0.5 1.125-0.75 2.25-1.5 4-1.5s2.875 0.75 4 1.5c0.25 0.125 0.5 0.375 0.75 0.5 0.875 0.625 1.5 1.125 3.25 1.125 2 0 2.875-0.375 4.25-1.25zM30.5 26.25c-1.375-0.125-2.5-0.875-3.5-2-1.5-1.875-2-4.875-1.625-7.875 0.5-4.75 2.875-8.25 6.25-8.375h0.875c1.5 0.125 2.75 1 3.75 2.25 1.5 1.875 2.25 4.625 2 7.5-0.5 4.625-3.5 8.375-7 8.5h-0.75zM27.375 16.625c-0.25 2.5 0 4.875 1.25 6.375 0.625 0.75 1.375 1.125 2.125 1.25h0.375c2.375-0.125 4.75-3.125 5.125-6.75 0.25-2.375-0.375-4.5-1.625-6-0.5-0.625-1.25-1.375-2.375-1.5h-0.5c-2.25 0.125-4 3-4.375 6.625z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#61</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={64}
                          height={64}
                          viewBox="0 0 56 64"
                        >
                          <path d="M28 14v0 0zM39.625 41.875c1.375 0.5-1.375-0.5 0 0 3.5 1.25 5.75 4.375 5.75 8.125h-34.75c0-2.75 1.125-5.25 3.375-6.875 1.875-1.375 3.875-1.5 6.125-2 0.875-0.125 3-0.625 3.25-1.625s0.125-1.875 0.125-2.875c0-0.375 0-0.375-0.25-0.625-0.5-0.5-0.75-1.125-1-1.75-0.25-1-0.375-2-0.5-3-1.125 0.25-1.25-2-1.5-2.625-0.125-0.5-0.875-3 0.375-2.625-0.375-0.625-0.5-1.625-0.625-2.375-0.25-1.625-0.25-3.25 0.375-4.875 1.25-3.25 4.625-4.875 8-4.75 3.25 0.125 6.375 2 7.375 5.25 0.5 1.5 0.375 3.25 0.125 4.875-0.125 0.625-0.25 1.375-0.5 1.875 1.25-0.375 0.5 2.5 0.375 2.875-0.25 0.625-0.375 2.625-1.5 2.375-0.125 1.25-0.25 2.75-0.875 3.875-0.125 0.25-0.875 1-0.875 1.25v1.375c0 0.625 0 1.25 0.25 1.875s1.25 0.875 1.75 1c1.75 0.625 3.375 0.625 5.125 1.25zM14.375 45.5c-0.75 0.75 1.125-1.25 0 0-0.75 0.75-1.25 1.5-1.5 2.5h30.25c-0.5-1.875-2.125-3.375-3.75-4.125s-3.5-0.5-5.125-1.125-3.125-1.125-3.5-3.125c-0.25-1.375-0.25-2.75-0.25-4.125 0-0.25 0.875-0.875 1-1.125 0.375-0.625 0.5-1.375 0.625-2.125 0.125-0.625 0-1.5 0.5-1.875 0.625-0.5 0.875-0.875 1.125-1.625 0.25-1 0.375-1.5-0.125-2.375-0.375-0.625 0-1 0.125-1.625 0.375-1.375 0.5-3 0.25-4.5-1-4.625-7.75-5.625-10.75-2.375-1.5 1.625-1.5 3.875-1.125 5.875 0.125 0.75 0.75 1.75 0.375 2.375-0.125 0.375-0.625 0.75-0.5 1.25 0.25 0.625 0.25 1.375 0.5 2 0.25 0.5 0.5 0.75 0.875 1s0.375 0.75 0.375 1.125c0.125 0.875 0.25 2.125 0.75 2.875 0.375 0.5 1 0.75 1 1.375v2.625c-0.125 1-0.25 2.25-1 3-0.875 0.75-2.25 1.25-3.375 1.5-1.375 0.375-2.875 0.375-4.125 0.875-1 0.375-1.875 1-2.625 1.75zM14 40.25c-1.875 0.875 1.125-0.5 0 0-1.125 0.625-2.25 1.375-3.125 2.375-0.125 0.25-0.75 1.375-0.875 1.375h-10c0-2.5 1.625-4.25 3.875-5 0.75-0.25 3.375-0.5 3.75-1.375 0.25-0.625 0-1.375 0-2-1.25 0.125-3-0.125-4-0.875-0.25-0.25 0.375-1.125 0.5-1.5l0.375-1.5c0.125-1.125 0.125-2.375 0.125-3.5 0-2-0.125-4.25 1-6 1-1.625 2.875-2.25 4.75-2.25 3 0 5.375 1.625 5.875 4.625 0.375 2 0.125 4 0.25 6 0 1 0.25 2 0.625 3 0.125 0.25 0.625 0.875 0.375 1.125l-0.75 0.375c-0.625 0.25-1.375 0.375-2.125 0.5-0.125 0-1 0-1.125 0.125s0 1.125 0 1.375c0 0.5 0.125 0.75 0.625 0.875 0.75 0.25 2.375 0.375 2.875 1 0.25 0.375 0.125 0.625-0.25 0.625-1 0.125-1.875 0.125-2.75 0.625zM8.875 42c0.75-1.25 2-2.25 3.25-3-1.125-1.125-0.625-3.25-0.5-4.625 0-0.25 0-0.625 0.25-0.625h1c0.75 0 1.375-0.125 2.125-0.25-0.875-2.875 0-5.875-0.625-8.75-0.375-2-1.875-2.875-3.875-2.875-2.125 0-3.375 1.125-3.75 3.125-0.5 2.75 0.375 5.75-0.5 8.5 1.125 0.125 2.125 0.25 3.25 0.25 0.125 0 0.125 3.5 0.125 3.625-0.125 1.5-1 2.25-2.375 2.75-1.5 0.5-3.625 0.375-4.5 1.875h6.125zM46 44c-0.25-1-1.25-1.75-2-2.375-1-0.75-2.25-1.625-3.5-1.875-0.375-0.125-2 0.125-1.625-0.625 0.25-0.5 1.125-0.625 1.625-0.75s1.875-0.25 2-0.875c0-0.125 0.125-1.75 0-1.75-0.75 0-1.5-0.125-2.25-0.25-0.5-0.125-0.875-0.25-1.375-0.5-0.75-0.375-0.25-0.75 0-1.375 1.75-4-1.25-11 4-13.125 1.875-0.75 4.25-0.625 6 0.375 1.875 1.125 2.5 3.375 2.5 5.5 0 2.5-0.5 5.5 0.875 7.75 0.25 0.375 0.5 0.5 0 0.75-0.25 0.125-0.5 0.125-0.75 0.25l-1.5 0.375s-1.125 0.125-1.625 0.125c0 0.5-0.25 1.625 0.125 2.125 0.75 0.875 2.625 0.875 3.625 1.25 2.25 0.75 3.875 2.5 3.875 5h-10zM45.875 40.625c0.5 0.5-0.625-0.625 0 0s1 1.375 1.875 1.375h5.5c-0.875-1.5-3.25-1.375-4.75-2-1.375-0.5-2-1.5-2.125-3 0-0.25-0.125-3.375 0.125-3.375 1.125 0 2.25 0 3.25-0.125-0.875-2.875 0.125-5.875-0.5-8.75-0.375-1.875-1.875-2.875-3.75-2.875-2.125 0-3.5 1-3.875 3.125-0.5 2.875 0.25 5.75-0.625 8.5 0.75 0.25 1.5 0.25 2.25 0.25s1-0.125 1.125 0.625c0.125 1.375 0.625 3.5-0.5 4.625 0.75 0.5 1.375 1 2 1.625z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#62</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={40}
                          height={64}
                          viewBox="0 0 40 64"
                        >
                          <path d="M13.25 25.25v0 0zM33.375 45.5c1.625 0.625 6.625 2.5 6.625 6.5h-40c0-4 5-5.875 6.625-6.5s3.875-0.75 5.375-1.125c0.875-0.25 2.125-0.625 2.5-1.125s0.125-5.125 0.125-5.125-0.75-1.25-1.125-2.25-0.875-4-0.875-4-0.875 0-1.125-1.5c-0.25-1.625-0.75-2.125-0.75-3.375 0-1.125 0.625-1.25 0.625-1.25v0s-0.5-1.625-0.625-5.25c-0.125-4.25 3.125-8.5 9.25-8.5s9.375 4.25 9.25 8.5c-0.125 3.625-0.625 5.25-0.625 5.25v0s0.625 0.125 0.625 1.25c0 1.25-0.375 1.875-0.75 3.5-0.25 1.5-1.125 1.5-1.125 1.5s-0.5 2.875-0.875 3.875-1.125 2.25-1.125 2.25-0.25 4.625 0.125 5.125 1.625 0.875 2.5 1.125c1.5 0.375 3.75 0.5 5.375 1.125zM20 50v0h17.125c-0.25-0.375-0.5-0.75-1-1-0.875-0.625-2-1.125-3.375-1.625-0.875-0.25-2.125-0.5-3.25-0.625-0.75-0.125-1.25-0.25-1.875-0.375-0.375-0.125-2.625-0.625-3.625-1.875-0.5-0.625-0.75-1.5-0.75-4 0-1.25 0.125-2.5 0.125-2.5v-0.5l0.25-0.5c0.125-0.25 0.75-1.125 1-1.875 0.25-0.625 0.625-2.375 0.75-3.5 0 0 0 0.125 0.125-0.5s1-0.5 1.125-1 0.375-0.875 0.625-2.25-0.625-1.5-0.625-2.125c0-0.5 0.125-0.625 0.125-0.625v0c0-0.125 0.5-1.75 0.5-4.75 0-1.625-0.625-3.25-1.75-4.375-1.375-1.375-3.125-2-5.5-2-2.25 0-4.25 0.625-5.625 2-1.125 1.125-1.625 2.75-1.625 4.375 0.125 3 0.5 4.625 0.5 4.75v0s0.125 0.375 0 0.75c-0.125 0.625-0.75 0.625-0.5 2s0.5 1.75 0.625 2.25 1 0.375 1.125 1 0.125 0.5 0.125 0.5c0.125 1.125 0.5 2.875 0.75 3.5 0.25 0.75 0.75 1.625 1 1.875l0.25 0.5v0.5s0.125 1.25 0.125 2.5c0 2.5-0.25 3.375-0.75 4-1 1.25-3.25 1.75-3.625 1.875-0.625 0.125-1.25 0.25-2 0.375-1.125 0.125-2.25 0.375-3.125 0.625-1.375 0.5-2.5 1-3.375 1.625-0.5 0.25-0.75 0.625-1 1h17.125z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#63</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={64}
                          height={64}
                          viewBox="0 0 56 64"
                        >
                          <path d="M32 10.125v0 27.375l-1.5 0.5-22.5 5.625c0.75 1.625 1.625 3.125 2.625 4.5 1.5 2 3.125 3.75 5.125 5.25 4.125 3 9.125 4.625 14.25 4.625 3.25 0 6.375-0.625 9.375-1.875 2.875-1.25 5.375-2.875 7.625-5.125s3.875-4.75 5.125-7.625c1.25-3 1.875-6.125 1.875-9.375 0-6.375-2.5-12.5-7-17-4-4-9.375-6.375-15-6.875zM30 8v0c14.375 0 26 11.625 26 26s-11.625 26-26 26c-11.5 0-21.375-7.5-24.75-17.875l24.75-6.125v-28zM26 6c-3.875 0.125-7.5 0.875-10.625 2.25-3 1.375-5.5 3.25-7.625 5.75-3.625 4.25-5.75 10-5.75 15.875v0 0c0 1.625 0.375 5.75 1.5 8.75l22.5-5.75v-26.875zM28 4v0 30.5l-25.625 6.5c-2.375-4-2.375-11.125-2.375-11.125 0-11.375 7.25-25.875 27.25-25.875h0.75z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#64</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={28}
                          height={64}
                          viewBox="0 0 28 64"
                        >
                          <path d="M28 21.25c0 12.25-4 12.625-4 22.625 0 5 2 8.875 2 12.375 0 3.375-1.125 3.75-4 3.75h-16c-2.875 0-4-0.25-4-3.625 0-3.5 2-7.5 2-12.5 0-10-4-10.375-4-22.625 0-2.625 0.125-11.125 2.375-15.625 0.5-1.125 1.625-1.625 4-1.625h15.25c2.375 0 3.5 0.5 4 1.625 2.25 4.5 2.375 13 2.375 15.625zM4.25 6.5c-1 2-1.75 5.375-2.125 9.5h23.75c-0.375-4.125-1.125-7.5-2.125-9.5-0.125-0.25-0.125-0.125-0.25-0.25-0.25-0.125-0.75-0.25-1.875-0.25h-15.25c-1.125 0-1.625 0.125-1.875 0.25-0.125 0.125-0.125 0-0.25 0.25zM23.875 57.875c0-0.125 0.125-0.625 0.125-1.625 0-1.375-0.5-2.875-0.875-4.625-0.5-2.25-1.125-4.875-1.125-7.75 0-5.125 1-8 2-10.75 1-2.875 2-5.75 2-11.875 0-1.125-0.125-2.25-0.125-3.25h-23.75c0 1-0.125 2.125-0.125 3.25 0 6.125 1 9 2 11.875 1 2.75 2 5.625 2 10.75 0 2.875-0.625 5.5-1.125 7.75-0.375 1.75-0.875 3.25-0.875 4.625 0 1 0.125 1.5 0.125 1.625 0.25 0.125 0.875 0.125 1.875 0.125h16c1 0 1.625 0 1.875-0.125z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#65</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={52}
                          height={64}
                          viewBox="0 0 52 64"
                        >
                          <path d="M52 4v20l-32 36-20-20 32-36h20zM50 23v-17h-17l-30 34 17 17zM40 20c-2.25 0-4-1.75-4-4s1.75-4 4-4 4 1.75 4 4-1.75 4-4 4zM40 14c-1.125 0-2 0.875-2 2s0.875 2 2 2 2-0.875 2-2-0.875-2-2-2z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#66</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={64}
                          height={64}
                          viewBox="0 0 56 64"
                        >
                          <path d="M52 8h4v18l-30 34-3.125-3-2.875 3-20-20 32-36h20v4zM20 57.125l1.5-1.5 1.375-1.5 27.125-31v-17.125h-17.125l-30.125 34zM54 25.125v-15.125h-2v14l-27.625 31.625 1.625 1.5zM40 20c-2.25 0-4-1.75-4-4s1.75-4 4-4 4 1.75 4 4-1.75 4-4 4zM40 14c-1.125 0-2 0.875-2 2s0.875 2 2 2 2-0.875 2-2-0.875-2-2-2z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#67</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={52}
                          height={64}
                          viewBox="0 0 52 64"
                        >
                          <path d="M48 14c2.25 0 4 1.625 4 3.875v19.875c0 2.25-1.75 4-4 4h-6v14.25h-32v-14.25h-6c-2.25 0-4-1.75-4-4v-19.875c0-2.25 1.75-3.875 4-3.875h4v-6h36v6h4zM10 10v4h32v-4h-32zM40 54v-24h-28v24h28zM50 37.75v-19.875c0-1.125-0.875-1.875-2-1.875v0h-44c-1.125 0-2 0.75-2 1.875v19.875c0 1.125 0.875 2 2 2h6v-11.75h32v11.75h6c1.125 0 2-0.875 2-2z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#68</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={64}
                          height={64}
                          viewBox="0 0 56 64"
                        >
                          <path d="M52 36c2.25 0 4 1.75 4 4s-1.75 4-4 4c-1.875 0-3.375-1.25-3.875-2.875h-8.125c-0.375 0-0.875-0.25-1-0.625l-2.875-9-7.125 24.75c-0.125 0.375-0.5 0.75-1 0.75v0c-0.5 0-0.875-0.375-1-0.875l-7.25-43.25-6.75 27.5c-0.125 0.5-0.5 0.75-1 0.75h-12v-2h11.25l7.75-31.375c0.125-0.5 0.5-0.75 1-0.75s0.875 0.375 1 0.875l7.25 43.625 6.75-23.75c0.125-0.375 0.5-0.625 1-0.625s0.875 0.25 1 0.625l3.75 11.375h7.375c0.375-1.75 2-3.125 3.875-3.125z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#69</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={60}
                          height={64}
                          viewBox="0 0 60 64"
                        >
                          <path d="M46.25 18c7.625 0 13.75 6.25 13.75 14s-6.125 14-13.75 14h-32.5c-7.625 0-13.75-6.25-13.75-14s6.125-14 13.75-14 13.75 6.25 13.75 14c0 5-2.625 9.375-6.625 11.875h18.25c-4-2.5-6.625-6.875-6.625-11.875 0-7.75 6.125-14 13.75-14zM2 32c0 6.625 5.25 11.875 11.75 11.875s11.625-5.25 11.625-11.875-5.125-11.875-11.625-11.875-11.75 5.25-11.75 11.875zM46.25 43.875c6.5 0 11.75-5.25 11.75-11.875s-5.25-11.875-11.75-11.875-11.625 5.25-11.625 11.875 5.125 11.875 11.625 11.875zM46 26c-3.25 0-6 2.75-6 6s2.75 6 6 6 6-2.75 6-6-2.75-6-6-6zM46 24v0c4.375 0 8 3.625 8 8s-3.625 8-8 8-8-3.625-8-8 3.625-8 8-8zM14 26c-3.25 0-6 2.75-6 6s2.75 6 6 6 6-2.75 6-6-2.75-6-6-6zM14 24v0c4.375 0 8 3.625 8 8s-3.625 8-8 8-8-3.625-8-8 3.625-8 8-8z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#70</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={40}
                          height={64}
                          viewBox="0 0 40 64"
                        >
                          <path d="M35.5 19.125c-0.5 0.125-1.125 0.375-1.625 0.5-4.625 1.375-8.875 3-12.875 4.875-2.125 1-3 1.5-5.5 3l-0.875 0.5c-3.875 2.25-6.25 4.125-7.875 6.375-1.875 2.625-2.75 5.625-2.75 9.625 0 2 0.375 3.75 1.125 5.5 0.75 1.625 1.75 3.25 3.125 4.5 2.875 2.625 6.875 4 11.75 4s8.875-1.375 11.75-4c1.375-1.25 2.375-2.875 3.125-4.5 0.75-1.75 1.125-3.5 1.125-5.5 0-2.5-0.625-5-1.375-7.5-1.375-5-2.875-10.375 0.875-17.375zM40 16v0c-9.625 12-2 18.875-2 28s-7 16-18 16-18-6.875-18-16 4.375-13.625 11.625-17.75c3.125-1.75 4.125-2.375 6.5-3.5 3.75-1.75 8.125-3.5 13.125-5 2.125-0.625 4.375-1.25 6.75-1.75zM4.75 15.375c1.75 3.5 2.25 7.125 2.375 10.375 1.125-0.875 2.5-1.625 3.75-2.5 0.875-0.5 1.75-1.125 2.625-1.625 0.625-0.375 1.25-0.75 2-1.125-0.625-0.5-1.375-0.875-2.125-1.375-2.75-1.625-6-2.875-8.625-3.75zM0 12v0s8.25 1.875 14.375 5.375c1.875 1 3.5 2.25 4.625 3.625-1.5 0.75-3 1.5-4.5 2.375-0.875 0.5-1.75 1-2.5 1.5-3.125 2-5.5 3.875-7.125 5.25 0.625-5.125 0.25-12.25-4.875-18.125zM31.125 10.125c-1 0.125-2.5 0.25-4.375 0.875-3.125 1-5.875 2.5-8 4.5 1 0.75 1.875 1.5 2.625 2.25 3.625-1.5 8.125-3.25 11.875-4.25-0.625-1.25-1.5-2.5-2.125-3.375zM32 8v0s3.25 4 4 6.875c-4.125 1-10.5 3.125-15.125 5.25l-0.375-0.375c-1.125-1.375-2.75-2.75-4.875-4 6.5-7.5 16.375-7.75 16.375-7.75zM10.625 6.75c-0.75 1.25-1.25 2.5-1.75 3.5 1.5 0.5 2.75 1.25 4.5 2.125 0.5-0.625 1.125-1.25 1.75-1.75-1.625-1.875-3.375-3.125-4.5-3.875zM10 4v0s4.375 2 8 7c-1.5 1.125-2.875 2.5-4.125 3.875-3.25-1.625-5-2.625-7.625-3.375 0.625-1.875 1.875-4.75 3.75-7.5z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#71</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={48}
                          height={64}
                          viewBox="0 0 48 64"
                        >
                          <path d="M48 53.125l-2.875 2.875-14.125-14.125c-3.25 2.625-7.5 4.125-12 4.125-10.5 0-19-8.5-19-19s8.5-19 19-19 19 8.5 19 19c0 4.5-1.5 8.625-4.125 11.875zM7 39.125c3.25 3.25 7.5 4.875 12 4.875s8.75-1.75 12-5 5-7.5 5-12-1.75-8.75-5-12-7.5-5-12-5-8.75 1.75-12 5-5 7.5-5 12 1.75 8.875 5 12.125z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#72</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={64}
                          height={64}
                          viewBox="0 0 56 64"
                        >
                          <path d="M40 13c-1.125 0-2 0.875-2 2s0.875 2 2 2 2-0.875 2-2-0.875-2-2-2zM40 11v0c2.25 0 4 1.75 4 4s-1.75 4-4 4-4-1.75-4-4 1.75-4 4-4zM40 47c-1.125 0-2 0.875-2 2s0.875 2 2 2 2-0.875 2-2-0.875-2-2-2zM40 45v0c2.25 0 4 1.75 4 4s-1.75 4-4 4-4-1.75-4-4 1.75-4 4-4zM16 30c-1.125 0-2 0.875-2 2s0.875 2 2 2 2-0.875 2-2-0.875-2-2-2zM16 28v0c2.25 0 4 1.75 4 4s-1.75 4-4 4-4-1.75-4-4 1.75-4 4-4zM21.875 31h34.125v2h-34.125c0-0.375 0.125-0.625 0.125-1s-0.125-0.625-0.125-1zM10 32c0 0.375 0.125 0.625 0.125 1h-10.125v-2h10.125c0 0.375-0.125 0.625-0.125 1zM45.875 48h10.125v2h-10.125c0-0.375 0.125-0.625 0.125-1s-0.125-0.625-0.125-1zM34 49c0 0.375 0.125 0.625 0.125 1h-34.125v-2h34.125c0 0.375-0.125 0.625-0.125 1zM45.875 14h10.125v2h-10.125c0-0.375 0.125-0.625 0.125-1s-0.125-0.625-0.125-1zM34.125 14c0 0.375-0.125 0.625-0.125 1s0.125 0.625 0.125 1h-34.125v-2h34.125z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#73</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={48}
                          height={64}
                          viewBox="0 0 46 64"
                        >
                          <path d="M37.25 25.875l-1.25-1.5 7.75-6.375h-5.75c-11.625 0-16.125 9.375-20.5 17.375-0.25 0.375-0.375 0.75-0.625 1.125-2.5 4.625-5.125 7.625-8.125 9.375-1.75 1-4.125 2.125-8.75 2.125v-2c6 0 10.375-1.75 15.125-10.5 0.25-0.375 0.375-0.75 0.625-1.125 4.375-8.125 9.375-18.375 22.25-18.375h5.75l-7.75-6.5 1.25-1.5 10.75 9zM16.875 27.5c0 0.125 0.125 0.25 0.125 0.375-0.375 0.625-0.75 1.375-1.125 2 0-0.125-0.125-0.125-0.125-0.25-0.25-0.375-0.375-0.75-0.625-1.125-4.75-8.75-9.125-10.5-15.125-10.5v-2c4.625 0 7 1.125 8.75 2.125 3 1.75 5.625 4.75 8.125 9.375zM37.25 38.125l10.75 8.875-10.75 9-1.25-1.5 7.75-6.5h-5.75c-9.5 0-14.75-5.625-18.625-11.875 0.125-0.25 0.25-0.625 0.375-0.875 0.25-0.375 0.5-0.875 0.75-1.25 3.75 6.25 8.375 12 17.5 12h5.75l-7.75-6.375z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#74</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={64}
                          height={64}
                          viewBox="0 0 56 64"
                        >
                          <path d="M28 8c15.5 0 28 12.5 28 28 0 7.125-2.625 13.5-7 18.5-0.5 0.5-0.875 1-1.375 1.5l-1.25-1.25-0.125-0.25c-2.375-2.25-5.125-4.125-8.125-5.375-3.25-1.375-6.625-2-10.125-2s-6.875 0.625-10.125 2c-3 1.25-5.75 3.125-8.125 5.375l-0.125 0.25-1.25 1.25c-0.5-0.5-0.875-1-1.375-1.5-4.375-5-7-11.375-7-18.5 0-15.5 12.5-28 28-28zM52 46.125c1.25-2.875 1.875-6 2-9.125h-4v-2h4c-0.125-3.125-0.75-6.25-2-9.125-1.125-2.75-2.875-5.25-4.875-7.5l-3.375 3.375-1.375-1.375h-0.125l3.375-3.375c-2.25-2.125-4.75-3.875-7.5-5-2.875-1.25-6-1.875-9.25-2v4.75h-2v-4.75c-3.125 0.125-6.125 0.75-9 2-2.75 1.25-5.375 2.875-7.625 5l3.375 3.375-1.375 1.375-3.375-3.375c-2 2.25-3.75 4.75-4.875 7.5-1.25 2.875-1.875 6.125-2 9.25h4v2h-4c0.125 3.125 0.75 6.125 2 9 1.125 2.5 2.5 4.875 4.375 7 5-5 12-8 19.625-8s14.625 3 19.625 8c1.875-2.125 3.25-4.5 4.375-7zM42 21.875l0.25 0.125-9.375 10.5c0.75 1 1.125 2.25 1.125 3.5 0 3.25-2.75 6-6 6-1.25 0-2.375-0.5-3.375-1.125l-1.625 1.5-1.375-1.375 1.5-1.5c-0.75-1-1.125-2.25-1.125-3.5 0-3.25 2.75-6 6-6 1.25 0 2.375 0.375 3.375 1zM28 40c2.25 0 4-1.75 4-4s-1.75-4-4-4-4 1.75-4 4 1.75 4 4 4z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#75</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={64}
                          height={64}
                          viewBox="0 0 56 64"
                        >
                          <path d="M56 25.875l-17.5 12.25 6.75 19.875-17.25-12.375-17.25 12.375 6.75-19.875-17.5-12.25h21.375l6.625-19.875 6.625 19.875h21.375zM41.375 52.625l-5.375-15.25 13.5-9.375h-16.375l-5.125-15.375-5.125 15.375h-16.375l13.5 9.375-5.375 15.25 13.375-9.5z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#76</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={48}
                          height={64}
                          viewBox="0 0 48 64"
                        >
                          <path d="M41.75 18.375c4 4.375 6.25 10 6.25 16 0 13-10.75 23.625-24 23.625s-24-10.625-24-23.625c0-6 2.25-11.75 6.375-16.125l0.125-0.125h-2.25l-1 1-2.875-2.875 5.125-5 2.875 2.75-1.125 1.125v2.25c3.875-3.75 9-6.25 14.5-6.625h0.25v-4.75h4v4.75c5.375 0.5 10.25 2.625 14.125 6.125l0.625 0.625v-2.375l-1.125-1.125 2.875-2.75 5.125 5-2.75 2.875-1.125-1h-2.25zM24 55.75c12 0 21.625-9.625 21.625-21.375s-9.625-21.375-21.625-21.375c-11.875 0-21.625 9.625-21.625 21.375s9.625 21.375 21.625 21.375zM25 32.125c1.75 0.5 3 2.125 3 3.875 0 1.875-1.25 3.25-3 3.75l-1 2.25-1-2.25c-1.75-0.5-3-1.875-3-3.75 0-1.75 1.5-3.375 3-3.875v-16.125h2v16.125z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#77</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={44}
                          height={64}
                          viewBox="0 0 44 64"
                        >
                          <path d="M42 42c2 2 3.25 4.375 0 8.25-3.125 3.75-5.25 3.75-8 3.75-3 0-7.25-1.75-11.625-5-4-2.875-5.75-4.25-9.75-8.375-4.25-4.375-6.875-8-9.875-13.375-3.375-6.25-3-9.25-2.25-11.5 0.5-1.5 1.75-3 3.5-4.125l0.125-0.125c0.75-0.5 2.25-1.5 4-1.5 1.625 0 3 0.75 4.25 2.25l0.125 0.125c1.375 1.75 3 3.875 4 5.875 1.25 2.625 1.25 4.75-0.125 6.625-1.125 1.5-1.5 2.375-1.5 2.875s0.625 1.125 1.625 2.25l0.125 0.125c2 2.25 2.5 2.875 3.25 3.625 0.125 0.125 0.375 0.25 0.5 0.375l0.25 0.25c0.875 0.875 1.375 1.5 3.625 3.5l0.125 0.125c0.875 0.75 1.125 1 1.5 1 0.625 0 2-0.875 3.625-1.875 0.5-0.375 1.375-0.625 2.125-0.625 3.375 0 8.5 3.625 10.375 5.5zM40.5 48.875c2.375-2.75 1.625-3.875 0.125-5.375-1.625-1.75-6.25-4.875-9-4.875-0.375 0-0.75 0.125-1 0.25-2.375 1.5-3.5 2.25-4.625 2.25s-1.875-0.75-2.875-1.625h-0.125c-2.375-2-2.875-2.625-3.75-3.625l-0.25-0.25c-0.125-0.125-0.375-0.25-0.5-0.375-0.75-0.75-1.375-1.5-3.375-3.75v-0.125c-1.25-1.375-2.125-2.25-2.25-3.5s0.625-2.5 2-4.25c1.875-2.5-0.625-6-3.875-9.875l-0.125-0.125c-0.875-1-1.75-1.5-2.75-1.5-1.25 0-2.25 0.75-2.875 1.125-0.125 0-0.25 0.125-0.25 0.125-1.375 0.875-2.25 2-2.625 3-0.625 2-0.875 4.375 2.125 9.875 2.875 5.25 5.375 8.75 9.5 13 3.875 4 5.625 5.25 9.5 8 4 2.875 8 4.75 10.5 4.75 2.625 0 4-0.125 6.5-3.125z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#78</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={52}
                          height={64}
                          viewBox="0 0 52 64"
                        >
                          <path d="M52 32v1c0 0.625 0 1.375-0.125 2v0c-1.375 12.125-11.25 21.75-23.375 22.875v0h-0.75s-0.125 0.125-0.25 0.125h-1.5c-14.375 0-26-11.625-26-26s11.625-26 26-26 26 11.625 26 26zM49.875 32c0-13.125-10.75-23.875-23.875-23.875-0.375 0-0.625 0.125-1 0.125 0.125 3 0.75 5.75 1.875 8.5 1.25 3.25 3.25 6.125 5.75 8.625s5.375 4.5 8.625 5.75c2.75 1.125 5.5 1.75 8.5 1.875 0-0.375 0.125-0.625 0.125-1zM2.125 32c0 13.125 10.75 23.875 23.875 23.875h0.5c-0.125-2.75-0.875-5.625-1.875-8.25-1.25-3.25-3.25-6-5.75-8.5s-5.25-4.5-8.5-5.75c-2.625-1-5.5-1.75-8.25-1.875v0.5zM28.5 55.75c11-1.125 19.75-9.75 21.125-20.75-6.75-0.375-13.25-3.125-18.375-8.25s-7.875-11.625-8.25-18.375c-11 1.375-19.625 10.125-20.75 21.125 6.625 0.375 13.125 3.125 18.125 8.125s7.75 11.5 8.125 18.125z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#79</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={64}
                          height={64}
                          viewBox="0 0 56 64"
                        >
                          <path d="M28 4c15.5 0 28 12.5 28 28s-12.5 28-28 28-28-12.5-28-28 12.5-28 28-28zM46.375 50.375c2.375-2.375 4.375-5.125 5.625-8.25 1.375-3.25 2-6.625 2-10.125s-0.625-6.875-2-10.125c-1.25-3.125-3.25-5.875-5.625-8.25s-5.125-4.375-8.25-5.625c-3.25-1.375-6.625-2-10.125-2s-6.875 0.625-10.125 2c-3.125 1.25-5.875 3.25-8.25 5.625s-4.375 5.125-5.625 8.25c-1.375 3.25-2 6.625-2 10.125s0.625 6.875 2 10.125c1.25 3.125 3.25 5.875 5.625 8.25s5.125 4.375 8.25 5.625c3.25 1.375 6.625 2 10.125 2s6.875-0.625 10.125-2c3.125-1.25 5.875-3.25 8.25-5.625zM27 10c0-0.625 0.375-1 1-1s1 0.375 1 1-0.375 1-1 1-1-0.375-1-1zM27 54c0-0.625 0.375-1 1-1s1 0.375 1 1-0.375 1-1 1-1-0.375-1-1zM49 32c0-0.625 0.375-1 1-1s1 0.375 1 1-0.375 1-1 1-1-0.375-1-1zM5 32c0-0.625 0.375-1 1-1s1 0.375 1 1-0.375 1-1 1-1-0.375-1-1zM16 13c0-0.625 0.375-1 1-1s1 0.375 1 1-0.375 1-1 1-1-0.375-1-1zM38 51c0-0.625 0.375-1 1-1s1 0.375 1 1-0.375 1-1 1-1-0.375-1-1zM46 21c0-0.625 0.375-1 1-1s1 0.375 1 1-0.375 1-1 1-1-0.375-1-1zM8 43c0-0.625 0.375-1 1-1s1 0.375 1 1-0.375 1-1 1-1-0.375-1-1zM8 21c0-0.625 0.375-1 1-1s1 0.375 1 1-0.375 1-1 1-1-0.375-1-1zM46 43c0-0.625 0.375-1 1-1s1 0.375 1 1-0.375 1-1 1-1-0.375-1-1zM38 13c0-0.625 0.375-1 1-1s1 0.375 1 1-0.375 1-1 1-1-0.375-1-1zM16 51c0-0.625 0.375-1 1-1s1 0.375 1 1-0.375 1-1 1-1-0.375-1-1zM29.75 31c0.5 1 0.25 2.25-0.75 2.75v15.25c0 0.5-0.5 1-1 1s-1-0.5-1-1v-15.25c-0.25-0.125-0.5-0.5-0.75-0.75-0.375-0.625-0.375-1.375 0-2l-4.625-7.875c-0.25-0.5-0.125-1.125 0.375-1.375s1-0.125 1.25 0.375l4.75 7.875c0.625 0 1.375 0.375 1.75 1z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#80</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={52}
                          height={64}
                          viewBox="0 0 52 64"
                        >
                          <path d="M23.625 34l-0.125-0.25s-11.125-14.75-10.75-15 15.125 10.625 15.125 10.625c0.125 0.125 0.125 0.25 0.25 0.375 0.625 0.625 1 1.375 1 2.25 0 1.75-1.375 3.125-3.125 3.125-1 0-1.75-0.375-2.375-1.125zM26 6c14.375 0 26 11.625 26 26s-11.625 26-26 26-26-11.625-26-26c0-7.125 2.875-13.625 7.625-18.375l1.5 1.5c-4.375 4.375-7 10.25-7 16.875 0 13.25 10.625 23.875 23.875 23.875s23.875-10.625 23.875-23.875c0-12.5-9.625-22.875-21.875-23.875v11.875h-2v-14z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#81</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={64}
                          height={64}
                          viewBox="0 0 56 64"
                        >
                          <path d="M12 40c-3.25 0-6 2.75-6 6s2.75 6 6 6 6-2.75 6-6-2.75-6-6-6zM12 38v0c4.375 0 8 3.625 8 8s-3.625 8-8 8-8-3.625-8-8 3.625-8 8-8zM43.875 36v0h-31.875c-5.5 0-10 4.5-10 10s4.5 10 10 10h32c5.5 0 10-4.5 10-10s-4.625-10-10.125-10zM44 34v0c6.625 0 12 5.375 12 12s-5.375 12-12 12h-32c-6.625 0-12-5.375-12-12s5.375-12 12-12h32zM44 12c-3.25 0-6 2.75-6 6s2.75 6 6 6 6-2.75 6-6-2.75-6-6-6zM44 10v0c4.375 0 8 3.625 8 8s-3.625 8-8 8-8-3.625-8-8 3.625-8 8-8zM12.125 8v0c-5.5 0-10.125 4.5-10.125 10s4.5 10 10 10h32c5.5 0 10-4.5 10-10s-4.5-10-10-10h-31.875zM12 6v0h32c6.625 0 12 5.375 12 12s-5.375 12-12 12h-32c-6.625 0-12-5.375-12-12s5.375-12 12-12z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#82</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={36}
                          height={64}
                          viewBox="0 0 36 64"
                        >
                          <path d="M36 14.125v1.875h-2.5l-3 36.375c0 2-1.625 3.625-3.625 3.625h-17.625c-2 0-3.625-1.625-3.625-3.625l-3-36.375h-2.625v-1.875h10v-2.5c0-2 1.625-3.625 3.625-3.625h8.75c2 0 3.625 1.625 3.625 3.625v2.5h10zM11.875 11.625v2.5h12.25v-2.5c0-1-0.75-1.75-1.75-1.75h-8.75c-1 0-1.75 0.75-1.75 1.75zM28.75 52.25l2.875-36.25h-27.125l2.875 36.25v0.125c0 1 0.875 1.75 1.875 1.75h17.625c1 0 1.875-0.75 1.875-1.75v-0.125zM17.125 50.125v-30.125h1.75v30.125h-1.75zM26 20l-1.375 30.125h-1.75l1.25-30.125h1.875zM11.75 20l1.375 30.125h-1.75l-1.375-30.125h1.75z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#83</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={52}
                          height={64}
                          viewBox="0 0 52 64"
                        >
                          <path d="M32.125 16c2.375 0 4.125 1.75 4.125 4.125v23.5c0 2.375-1.75 4.375-4.125 4.375h-27.625c-2.375 0-4.5-2-4.5-4.375v-23.5c0-2.375 2.125-4.125 4.5-4.125h27.625zM34.125 43.625v-23.5c0-1.125-1-2-2.125-2h-27.625c-1.125 0-2.25 0.875-2.25 2v23.5c0 1.125 1.25 2.25 2.375 2.25h27.625c1.125 0 2-1.125 2-2.25zM40 26.625l12.25-6.625v24l-12.25-6.625v-10.75zM50.125 23.75v0l-8 4.125v8.25l8 4.125v-16.5z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#84</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={24}
                          height={64}
                          viewBox="0 0 24 64"
                        >
                          <path d="M13 38.625v19.375h9v2h-20v-2h9v-19.375c0-2.75-2.5-4.875-5-6.875-1-0.75-2-1.625-2.75-2.375-3.375-3.5-3.25-6.5-3.25-8.875v-0.5c0-5.5 3.875-15.625 4-16h16c0.125 0.375 4 10.5 4 16v0.5c0 2.375 0.125 5.375-3.25 8.875-0.75 0.75-1.75 1.625-2.75 2.375-2.5 2-5 4.125-5 6.875zM5.375 6c-0.625 2-2.5 7.875-3.125 12h19.5c-0.625-4.125-2.5-10-3.125-12h-13.25zM12 34.125c0.375 0 0.625 0 0.875-0.25v0c1.125-1.375 2.5-2.5 3.875-3.625 1-0.75 1.875-1.5 2.5-2.25 2.75-2.875 2.75-5.125 2.75-7.5v-0.5h-20v0.5c0 2.375 0 4.625 2.75 7.5 0.625 0.75 1.5 1.5 2.5 2.25 1.375 1.125 2.75 2.25 3.875 3.625v0c0.25 0.25 0.5 0.25 0.875 0.25z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#85</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={52}
                          height={64}
                          viewBox="0 0 52 64"
                        >
                          <path d="M26 6c14.375 0 26 11.625 26 26s-11.625 26-26 26v0 0 0c-14.375 0-26-11.625-26-26s11.625-26 26-26v0 0 0zM27 21.5v9.5h9.375c-0.125-3.875-0.625-7.5-1.375-10.5-2.625 0.625-5.25 0.875-8 1zM27 19.5c2.5-0.125 5.125-0.375 7.5-1-1.75-5.75-4.75-9.5-7.5-10.25v11.25zM25 8.25c-2.875 0.75-5.625 4.5-7.5 10.25 2.375 0.625 4.875 0.875 7.5 1v-11.25zM25 21.5c-2.75-0.125-5.5-0.375-8.125-1-0.75 3-1.25 6.625-1.375 10.5h9.5v-9.5zM13.5 31c0.125-4 0.5-7.75 1.375-11-2.625-0.75-5.125-1.875-7.375-3.125-3.25 3.875-5.125 8.75-5.375 14.125h11.375zM13.5 33h-11.375c0.25 5.375 2.125 10.25 5.375 14.125 2.375-1.25 4.75-2.375 7.375-3.125-0.875-3.25-1.25-7-1.375-11zM15.5 33c0.125 3.875 0.625 7.5 1.375 10.5 2.625-0.625 5.375-1 8.125-1.125v-9.375h-9.5zM25 44.5c-2.625 0.125-5.125 0.375-7.5 1 1.875 5.75 4.625 9.5 7.5 10.25v-11.25zM27 55.75c2.75-0.75 5.75-4.5 7.5-10.25-2.375-0.625-5-0.875-7.5-1v11.25zM27 42.375c2.75 0.125 5.375 0.5 8 1.125 0.75-3 1.25-6.625 1.375-10.5h-9.375v9.375zM38.5 33c-0.125 4-0.625 7.75-1.5 11 2.625 0.75 5.125 1.875 7.5 3.125 3.25-3.875 5.125-8.75 5.375-14.125h-11.375zM38.5 31v0h11.375c-0.25-5.375-2.125-10.25-5.375-14.125-2.375 1.25-4.75 2.375-7.375 3.125 0.875 3.25 1.25 7 1.375 11zM43 15.25c-3.125-3.125-7-5.5-11.375-6.5 2 2.125 3.625 5.375 4.875 9.25 2.25-0.75 4.375-1.625 6.5-2.75zM20.375 8.75c-4.375 1-8.375 3.375-11.375 6.5 2 1.125 4.25 1.875 6.5 2.625 1.25-3.875 2.875-7 4.875-9.125zM9 48.75c3.125 3.125 7 5.5 11.375 6.5-2-2.125-3.75-5.375-5-9.25-2.25 0.75-4.375 1.625-6.375 2.75zM31.625 55.25c4.375-1 8.25-3.375 11.375-6.5-2.125-1.125-4.25-2-6.5-2.75-1.25 3.875-2.875 7.125-4.875 9.25z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#86</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={40}
                          height={64}
                          viewBox="0 0 40 64"
                        >
                          <path d="M15.625 12.875c1.375-0.25 2.375-0.375 2.375-0.375v16.375l-2.75-0.75c-1.875-0.625-3.375-1.375-4.5-2.375-1.5-1.25-2.375-3.125-2.375-5.375 0-1.625 0.5-3 1.375-4.125 0.75-1 1.625-1.75 2.75-2.375 0.875-0.5 2.125-0.75 3.125-1zM16 26.25v-11.5c-0.875 0.25-1.875 0.5-2.625 0.875-0.875 0.5-1.5 1.125-2.125 1.875s-0.875 1.75-0.875 2.875c0 1.625 0.5 3 1.625 3.875 1 0.875 2.5 1.5 4 2zM31.5 37.125c1.25 1.25 1.875 3 1.875 5.25 0 1.125-0.125 2.25-0.625 3.375s-1.375 2.125-2.5 3c-1 0.75-2.25 1.375-3.875 1.875-0.75 0.25-1.375 0.375-2.125 0.5s-2.25 0.125-2.25 0.125v-18.125l2.5 0.625c1.25 0.375 2.375 0.75 3.5 1.125 1.25 0.5 2.5 1.25 3.5 2.25zM30.875 44.875c0.375-0.875 0.5-1.625 0.5-2.5 0-1.75-0.375-3-1.25-3.875s-1.875-1.375-2.875-1.75-2-0.625-3.25-1v13.375c0.75-0.125 1.25-0.25 1.75-0.375 1.375-0.375 2.5-1 3.375-1.625s1.375-1.375 1.75-2.25zM39.375 37.875c0.375 1.25 0.625 2.375 0.625 3.625 0 2.625-0.625 4.75-1.75 6.625s-2.5 3.25-4.375 4.375-3.875 2.125-6.25 2.625c-1.25 0.25-2.375 0.375-3.625 0.5v4.375h-8v-4.375c-1.125-0.125-2.375-0.5-3.5-0.75-2.5-0.625-4.5-1.5-6.375-2.875s-3.25-3-4.375-5.125c-1-2-1.625-4.25-1.75-6.875h8.625c0 1.5 0.25 3 0.875 4.125 0.625 1.25 1.5 2.125 2.625 2.875s2.5 1.375 3.875 1.75v-15c-1-0.25-2.25-0.5-3.375-0.75-2.125-0.5-3.75-1.125-5.125-2s-2.5-1.875-3.375-2.875-1.375-2.125-1.75-3.25-0.5-2.25-0.5-3.5c0-2.25 0.5-4.25 1.5-6s2.375-3.125 4.125-4.25 3.625-2 5.75-2.5c0.875-0.25 1.875-0.375 2.75-0.5v-4.125h8v4.125c1.125 0.125 2 0.5 3 0.75 2.25 0.625 4.25 1.5 6 2.75s3.125 2.75 4.125 4.625c0.875 1.625 1.375 3.5 1.5 5.75h-8.625c-0.375-2.625-1.5-4.625-3.25-5.75-0.875-0.5-1.625-1-2.75-1.25v13.25c1.125 0.25 2 0.5 3.125 0.75 1.5 0.375 2.75 0.75 3.375 0.875 1.625 0.5 2.875 1.125 4.125 1.875 1.25 0.875 2.25 1.75 3 2.75s1.375 2.125 1.75 3.375zM36.625 47c0.875-1.5 1.375-3.375 1.375-5.5 0-1-0.125-2-0.5-3s-0.875-1.875-1.5-2.75-1.5-1.625-2.5-2.375c-1-0.625-2.25-1.25-3.625-1.625-0.625-0.125-1.625-0.375-3-0.75h-0.125l-0.5-0.125c-0.875-0.25-1.625-0.5-2.625-0.75l-1.625-0.375v-17.125s1.125 0.125 2.375 0.5 2.375 0.75 3.5 1.5c1.875 1.125 3.125 3 3.75 5.375h4.75c-0.25-1-0.5-1.875-1-2.75-0.875-1.625-2-3-3.5-4-1.5-1.125-3.375-2-5.375-2.5-1-0.25-2-0.5-2.875-0.625l-1.625-0.25v-3.875h-4v3.875l-1.75 0.25c-0.875 0.125-1.75 0.25-2.5 0.5-1.875 0.5-3.625 1.25-5.125 2.25s-2.625 2-3.5 3.5c-0.875 1.375-1.25 3-1.25 5 0 1 0.125 1.875 0.375 2.875 0.25 0.875 0.75 1.75 1.375 2.625s1.75 1.625 2.875 2.375c1.25 0.75 2.75 1.25 4.625 1.75v0 0c0.5 0.125 1 0.25 1.375 0.375 0.625 0.125 1.375 0.375 2 0.5l1.5 0.375v18.875s-1-0.125-2.5-0.5-3.25-1-4.5-1.875c-1.375-1-2.5-2.25-3.25-3.75-0.5-0.875-0.75-2-1-3h-4.5c0.25 1.375 0.625 2.875 1.25 4 1 1.75 2.125 3.25 3.75 4.375 1.625 1.25 3.5 2 5.75 2.625 1 0.25 2.125 0.5 3.25 0.625l1.75 0.25v4.125h4v-4.125l1.875-0.125c1.125-0.125 2.125-0.375 3.25-0.625 2.125-0.5 4-1.25 5.625-2.25s2.875-2.375 3.875-3.875z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#87</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={54}
                          height={64}
                          viewBox="0 0 54 64"
                        >
                          <path d="M53.5 15.625l-3.5 4.125-12.25-10.25 3.5-4.125zM15.625 9.375l-12.125 10.375-3.5-4.125 12.125-10.375zM28.125 21.625v0 13.875l10.625 6.25-2 3.375-12.625-7.625v-15.875h4zM26.75 11c13.25 0 24.125 10.75 24.125 23.875s-10.875 23.875-24.125 23.875c-13.375 0-24.125-10.75-24.125-23.875s10.75-23.875 24.125-23.875zM26.75 53.5c10.25 0 18.75-8.25 18.75-18.625 0-10.25-8.5-18.625-18.75-18.625s-18.75 8.375-18.75 18.625 8.5 18.625 18.75 18.625z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#88</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={52}
                          height={64}
                          viewBox="0 0 52 64"
                        >
                          <path d="M26 6c14.25 0 26 11.75 26 26s-11.75 26-26 26-26-11.75-26-26 11.75-26 26-26zM29 45v-5h-6v5h6zM29 34v-16h-6v16h6z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#89</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={29}
                          height={64}
                          viewBox="0 0 29 64"
                        >
                          <path d="M25.375 16h4v29.375c0 8.125-6.625 14.625-14.75 14.625s-14.625-6.5-14.625-14.625v-30.75c0-5.875 4.75-10.625 10.625-10.625s10.75 4.75 10.75 10.625v30.75c0 3.75-3 6.625-6.75 6.625s-6.625-2.875-6.625-6.625v-25.375h4v25.375c0 1.5 1.125 2.625 2.625 2.625s2.75-1.125 2.75-2.625v-30.75c0-3.75-3-6.625-6.75-6.625s-6.625 2.875-6.625 6.625v30.75c0 5.875 4.75 10.625 10.625 10.625s10.75-4.75 10.75-10.625v-29.375z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#90</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={48}
                          height={64}
                          viewBox="0 0 48 64"
                        >
                          <path d="M21.375 34.625l-21.375-21.25v-5.375h48v5.375l-21.375 21.25v16.375h13.375v5h-32v-5h13.375v-16.375zM12 18.625h24l5.375-5.25h-34.75z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#91</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={64}
                          height={64}
                          viewBox="0 0 56 64"
                        >
                          <path d="M37.375 16.375c-2.375 0-4.25-1.75-4.25-4.125s1.875-4.25 4.25-4.25 4.125 1.875 4.125 4.25-1.75 4.125-4.125 4.125zM44.375 32.625c6.375 0 11.625 5.375 11.625 11.75s-5.25 11.625-11.625 11.625-11.75-5.25-11.75-11.625 5.375-11.75 11.75-11.75zM44.375 52.5c4.5 0 8.125-3.625 8.125-8.125s-3.625-8.25-8.125-8.25-8.25 3.75-8.25 8.25 3.75 8.125 8.25 8.125zM34.25 28l-3.75-5.625-5.375 5.625 4.875 4v14h-4v-10.75l-7.625-4.75c-1.125-0.75-2.375-1.875-2.375-3.375 0-1 0.375-2.125 1.125-2.875l9-8.625c0.75-0.75 1.75-1.125 2.75-1.125 1.375 0 2.75 0.875 3.5 2l4.25 7.5h7.375v4h-9.75zM11.625 32.625c6.375 0 11.75 5.375 11.75 11.75s-5.375 11.625-11.75 11.625-11.625-5.25-11.625-11.625 5.25-11.75 11.625-11.75zM11.625 52.5c4.5 0 8.25-3.625 8.25-8.125s-3.75-8.25-8.25-8.25-8.125 3.75-8.125 8.25 3.625 8.125 8.125 8.125z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#92</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={64}
                          height={64}
                          viewBox="0 0 56 64"
                        >
                          <path d="M6.5 51.625l-6.375-17.375c-0.25-0.75-0.125-1.5 0.125-2.125s1-1 1.625-1.25l4.75-1.625v-12.25c0-2.875 2.5-5.375 5.375-5.375h8l2-6.625h12l2 6.625h8c2.875 0 5.375 2.5 5.375 5.375v12.25l4.75 1.625c0.625 0.25 1.375 0.625 1.625 1.25s0.375 1.5 0.125 2.125l-6.375 17.375h-0.125c-4.25 0-8.125-2.5-10.75-5.375-2.625 2.875-6.375 5.375-10.625 5.375s-8-2.375-10.625-5.25c-2.625 2.875-6.5 5.25-10.75 5.25h-0.125zM12 17v10.5l16-5.125 16 5.125v-10.5h-32zM38.625 51c0 0 7.375 8 13.375 8h-2.625c-3.75 0-7.375-1.5-10.75-3.25-6.625 3.5-14.625 3.5-21.25 0-3.375 1.75-7 3.25-10.75 3.25h-2.625c6.125 0 13.375-8 13.375-8 6.5 4.5 14.75 4.5 21.25 0z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#93</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={36}
                          height={64}
                          viewBox="0 0 36 64"
                        >
                          <path d="M31 8c2.75 0 5 2.25 5 5v43l-18-8-18 8v-43c0-2.75 2.25-5 5-5h26z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#94</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={64}
                          height={64}
                          viewBox="0 0 56 64"
                        >
                          <path d="M28 21.25c-3.125 0-6.25 1.25-8.5 3.5s-3.5 5.375-3.5 8.5c0 4.25 2.25 8.25 6 10.375l2 1.25v11.125h8v-11.125l2-1.25c1.875-1 3.375-2.5 4.375-4.25 1.125-1.875 1.625-3.875 1.625-6.125 0-3.125-1.25-6.25-3.5-8.5s-5.375-3.5-8.5-3.5zM30.625 4v0 8h-5.25v-8h5.25zM46.75 10.75v0l3.75 3.75-4.75 4.75-3.75-3.75zM9.25 10.75v0l4.75 4.75-3.75 3.75-4.75-4.75zM28 17.25v0c8.75 0 16 7.25 16 16 0 6-3.25 11.125-8 13.875v12.875h-16v-12.875c-4.75-2.75-8-8-8-13.875 0-8.75 7.25-16 16-16zM56 30.625v0 5.25h-8v-5.25h8zM8 30.625v0 5.25h-8v-5.25h8z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#95</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={44}
                          height={64}
                          viewBox="0 0 44 64"
                        >
                          <path d="M0 44v-25.5c0-9.375 10.25-10.5 22-10.5s22 1.125 22 10.5v25.5c0 2.25-1.75 3-3.375 4.5v4.875c0 1.5-1.125 2.625-2.625 2.625h-2.625c-1.5 0-2.75-1.125-2.75-2.625v-2.75h-21.25v2.75c0 1.5-1.25 2.625-2.75 2.625h-2.625c-1.5 0-2.625-1.125-2.625-2.625v-4.875c-1.625-1.5-3.375-2.125-3.375-4.5zM10 46c2.25 0 4-1.75 4-4s-1.75-4-4-4-4 1.75-4 4 1.75 4 4 4zM34 46c2.25 0 4-1.75 4-4s-1.75-4-4-4-4 1.75-4 4 1.75 4 4 4zM38 30.625v-13.25h-32v13.25h32z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#96</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={48}
                          height={64}
                          viewBox="0 0 48 64"
                        >
                          <path d="M38 34v12h-12v-12h12zM34 8h6v4h3c2.75 0 5 2.25 5 5v34c0 2.75-2.25 5-5 5h-38c-2.75 0-5-2.25-5-5v-34c0-2.75 2.25-5 5-5h3v-4h6v4h20v-4zM43 51v-26.5h-38v26.5h38z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#97</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={48}
                          height={64}
                          viewBox="0 0 48 64"
                        >
                          <path d="M45.375 41.375c1.5 0 2.625 1.125 2.625 2.625v9.375c0 1.5-1.125 2.625-2.625 2.625-25.125 0-45.375-20.25-45.375-45.375 0-1.5 1.125-2.625 2.625-2.625h9.375c1.5 0 2.625 1.125 2.625 2.625 0 3.375 0.5 6.5 1.625 9.625 0.25 0.875 0 2-0.625 2.625l-5.875 5.875c3.875 7.625 10 13.75 17.625 17.625l5.875-5.875c0.625-0.75 1.75-0.875 2.625-0.625 2.875 0.875 6.125 1.5 9.5 1.5z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#98</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={64}
                          height={64}
                          viewBox="0 0 56 64"
                        >
                          <path d="M20.125 35c0-5.25 2.625-7.875 7.875-7.875s7.875 2.625 7.875 7.875-2.625 7.875-7.875 7.875-7.875-2.625-7.875-7.875zM51 12c1.375 0 2.5 0.5 3.5 1.5s1.5 2.125 1.5 3.5v34c0 1.375-0.5 2.5-1.5 3.5s-2.125 1.5-3.5 1.5h-46c-1.375 0-2.5-0.5-3.5-1.5s-1.5-2.125-1.5-3.5v-34c0-1.375 0.5-2.5 1.5-3.5s2.125-1.5 3.5-1.5h11l4-4h16l4 4h11zM28 49c3.875 0 7.125-1.375 9.875-4.125s4.125-6 4.125-9.875-1.375-7.125-4.125-9.875-6-4.125-9.875-4.125-7.125 1.375-9.875 4.125-4.125 6-4.125 9.875 1.375 7.125 4.125 9.875 6 4.125 9.875 4.125z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#99</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={52}
                          height={64}
                          viewBox="0 0 52 64"
                        >
                          <path d="M15.25 47.25c2.875 0 5.125 2.25 5.125 5.125s-2.25 5.25-5.125 5.25-5.25-2.375-5.25-5.25 2.375-5.125 5.25-5.125zM0 6.375h8.5l2.375 5.25h38.5c1.375 0 2.625 1.125 2.625 2.5 0 0.5-0.125 1-0.25 1.25l-9.375 16.125c-0.875 1.75-2.5 2.75-4.5 2.75h-19.375l-2.625 4s-0.25 0.625-0.25 0.75c0 0.375 0.25 0.625 0.625 0.625h29.75v5h-30.375c-3.25 0-5.625-1.75-5.625-5.25 0-0.875 0.25-1.875 0.625-2.5l3.875-6.375-9.25-18.875h-5.25v-5.25zM40.75 47.25c2.875 0 5.25 2.25 5.25 5.125s-2.375 5.25-5.25 5.25-5.125-2.375-5.125-5.25 2.25-5.125 5.125-5.125z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#100</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={52}
                          height={64}
                          viewBox="0 0 52 64"
                        >
                          <path d="M43 8c0.5 0 0.875 0.5 0.875 1v26.75c0 0.5-0.375 1.125-0.875 1.125h-23.375l-11.25 11.125v-11.125h-7.125c-0.5 0-1.25-0.625-1.25-1.125v-26.75c0-0.5 0.75-1 1.25-1h41.75zM51 15.875c0.5 0 1 0.625 1 1.125v26.75c0 0.5-0.5 1.125-1 1.125h-7.125v11.125l-11.25-11.125h-16.25l4.875-4.875h22.625c2.25 0 3.125-1.25 3.125-3.25v-20.875h4z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#101</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={52}
                          height={64}
                          viewBox="0 0 52 64"
                        >
                          <path d="M15.375 27l8 8 22.375-22.25 3.625 3.625-26 26-11.625-11.625zM46.75 32h5.25c0 14.25-11.75 26-26 26s-26-11.75-26-26 11.75-26 26-26c3.5 0 6.75 0.75 9.75 2l-4 4c-1.875-0.5-3.75-0.75-5.75-0.75-11.5 0-20.75 9.25-20.75 20.75s9.25 20.75 20.75 20.75 20.75-9.25 20.75-20.75z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#102</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={48}
                          height={64}
                          viewBox="0 0 48 64"
                        >
                          <path d="M42.625 10c2.875 0 5.375 2.5 5.375 5.375v39.25c0 2.875-2.5 5.375-5.375 5.375h-37.25c-2.875 0-5.375-2.5-5.375-5.375v-39.25c0-2.875 2.5-5.375 5.375-5.375h10.875c0.875-3.5 4-6 7.75-6s6.875 2.5 7.75 6h10.875zM24 10c-1.5 0-2.625 1.125-2.625 2.625s1.125 2.75 2.625 2.75 2.625-1.25 2.625-2.75-1.125-2.625-2.625-2.625zM43 55v-40h-5v9h-28v-9h-5v40h38z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#103</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={48}
                          height={64}
                          viewBox="0 0 48 64"
                        >
                          <path d="M24 8c13.25 0 24 9.625 24 21.375 0 7.375-6 13.25-13.375 13.25h-4.75c-2.25 0-4 1.75-4 4 0 1.125 0.375 2.125 1 2.75s1.125 1.5 1.125 2.625c0 2.25-1.75 4-4 4-13.25 0-24-10.75-24-24s10.75-24 24-24zM9.375 32c2.25 0 4-1.75 4-4s-1.75-4-4-4-4 1.75-4 4 1.75 4 4 4zM17.375 21.375c2.25 0 4-1.75 4-4s-1.75-4-4-4-4 1.75-4 4 1.75 4 4 4zM30.625 21.375c2.25 0 4-1.75 4-4s-1.75-4-4-4-4 1.75-4 4 1.75 4 4 4zM38.625 32c2.25 0 4-1.75 4-4s-1.75-4-4-4-4 1.75-4 4 1.75 4 4 4z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#104</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={64}
                          height={64}
                          viewBox="0 0 56 64"
                        >
                          <path d="M28 28.875c1.625 0 3.125 1.5 3.125 3.125s-1.5 3.125-3.125 3.125-3.125-1.5-3.125-3.125 1.5-3.125 3.125-3.125zM28 4c15.375 0 28 12.625 28 28s-12.625 28-28 28-28-12.625-28-28 12.625-28 28-28zM34.125 38.125l10.625-22.875-22.875 10.625-10.625 22.875z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#105</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={64}
                          height={64}
                          viewBox="0 0 56 64"
                        >
                          <path d="M25.875 43c5.875 1.75 9.5 7.75 10.875 13h-36.75c1.375-5.25 5-11.25 10.875-13 2.25 1.25 4.75 2 7.5 2s5.25-0.75 7.5-2zM18.375 15c7.25 0 13.25 6 13.25 13.25s-6 13.25-13.25 13.25-13.25-6-13.25-13.25 6-13.25 13.25-13.25zM18.375 38.375c4.25 0 7.75-2.875 9.25-6.375h-18.5c1.5 3.5 5 6.375 9.25 6.375zM36.375 48c-1.625-2.5-4.25-5.375-7.5-6.625 1.375-1.125 2.625-2.875 3.5-4.375 1.625 0.625 3.375 1 5.25 1 2.75 0 5.25-0.75 7.5-2 5.875 1.75 9.5 6.75 10.875 12h-19.625zM34.375 25c-1-4.625-3.875-8.625-7.875-10.875 2.375-3.625 6.5-6.125 11.125-6.125 7.25 0 13.25 6 13.25 13.25s-6 13.25-13.25 13.25c-1.375 0-2.75-0.25-4-0.625 0.375-1 0.75-2 0.875-3.125 1 0.375 2 0.5 3.125 0.5 4.25 0 7.75-2.75 9.25-6.25h-12.5z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#106</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={48}
                          height={64}
                          viewBox="0 0 48 64"
                        >
                          <path d="M0 46l29.5-29.5 10 10-29.5 29.5h-10v-10zM47.25 18.75l-5 5-10-10 5-5c1.125-1.125 2.5-1.125 3.625 0l6.375 6.375c1.125 1.125 1.125 2.5 0 3.625z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#107</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={40}
                          height={64}
                          viewBox="0 0 40 64"
                        >
                          <path d="M4 50.625v-30.625h32v30.625c0 2.875-2.5 5.375-5.375 5.375h-21.25c-2.875 0-5.375-2.5-5.375-5.375zM40 12v4h-40v-4h10l3.375-4h13.25l3.375 4h10z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#108</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={64}
                          height={64}
                          viewBox="0 0 56 64"
                        >
                          <path d="M50.625 4c2.875 0 5.375 2.5 5.375 5.375v35.25c0 2.875-2.5 5.375-5.375 5.375h-17.25l5.25 6v4h-21.25v-4l5.25-6h-17.25c-2.875 0-5.375-2.5-5.375-5.375v-35.25c0-2.875 2.5-5.375 5.375-5.375h45.25zM50.625 40v-30.625h-45.25v30.625h45.25z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#109</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={40}
                          height={64}
                          viewBox="0 0 40 64"
                        >
                          <path d="M24 6l16 16v31c0 2.75-2.25 5-5 5h-30c-2.75 0-5-2.25-5-5v-42c0-2.75 2.25-5 5-5h19zM22 24h14l-14-14v14z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#110</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={64}
                          height={64}
                          viewBox="0 0 64 64"
                        >
                          <path d="M48.5 17.5l-17.5 17.375-3.875-3.875 17.5-17.375zM60.125 13.625l3.875 3.875-33 32.875-15.25-15.375 3.75-3.875 11.5 11.375zM0 35l4-3.875 15.25 15.375-3.875 3.875z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#111</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={52}
                          height={64}
                          viewBox="0 0 52 64"
                        >
                          <path d="M26 56l-3.75-3.375c-13.375-12.25-22.25-20.25-22.25-30.25 0-8.125 6.25-14.375 14.25-14.375 4.5 0 8.875 2.125 11.75 5.5 2.875-3.375 7.25-5.5 11.75-5.5 8 0 14.25 6.25 14.25 14.375 0 10-8.875 18-22.25 30.25z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#112</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={40}
                          height={64}
                          viewBox="0 0 40 64"
                        >
                          <path d="M35 8h5v48h-5v-5.375h-5v5.375h-20v-5.375h-5v5.375h-5v-48h5v5.375h5v-5.375h20v5.375h5v-5.375zM10 45.375v-5.375h-5v5.375h5zM10 34.625v-5.25h-5v5.25h5zM10 24v-5.375h-5v5.375h5zM35 45.375v-5.375h-5v5.375h5zM35 34.625v-5.25h-5v5.25h5zM35 24v-5.375h-5v5.375h5z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#113</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={64}
                          height={64}
                          viewBox="0 0 56 64"
                        >
                          <path d="M22.625 12l5.375 6h22.625c2.875 0 5.375 2.5 5.375 5.375v23.25c0 2.875-2.5 5.375-5.375 5.375h-45.25c-2.875 0-5.375-2.5-5.375-5.375v-29.25c0-2.875 2.5-5.375 5.375-5.375h17.25z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#114</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={52}
                          height={64}
                          viewBox="0 0 52 64"
                        >
                          <path d="M26 6c14.375 0 26 11.625 26 26s-11.625 26-26 26-26-11.625-26-26 11.625-26 26-26zM23.25 54.125c0.75-1.875 2.625-3.625 1-4.875-1-0.875-2-1.75-2.875-2.625-0.25-0.25-1.375-2.5-1.125-2.875 0.625-1.125 0.75-1.75 1-3 0.375-1.5-0.375-2-1.625-2.75-1.875-1.25-3.625-2.875-5.375-4.25-0.875-0.625-2.125-1.25-2.5-2.375s-0.625-2.5-1.25-3.5c-1.75-2.5-1.5-4.25-1.25-7.25 0-0.875-0.125-2-0.25-3.125-3.5 4-5.25 9.125-5.25 14.5 0 6 2.25 11.5 6.5 15.75 3.625 3.625 8.125 5.75 13 6.375zM41.75 47.75c2.875-2.875 4.875-6.375 5.875-10.25-1 0.125-2.375-0.25-2.375-0.25s-2.625-3-2.875-5.625c-0.25-2.75 0-4.875-0.375-7.125-0.375-2-2.5-3.875-3.375-5.75-0.875-1.75-1.625-3.5-2.5-5.25 0.25 0.125 0.625 0.25 0.875 0.375 0.625-0.125 1.25-0.25 1.75-0.25-2.875-2-6.125-3.125-9.5-3.625v1l0.5 1.125-1.75 1.625-1.125-0.375-1.25-1.25-1.25-1.5-1.75-0.625c-2 0.25-3.875 0.875-5.625 1.625v0.875c0.875-0.375 2-0.625 2.875-1 0.375-0.125 1.625 0.875 2 1.125-0.5 0.625-2.625 1.875-2.75 2.625 0 0.25 0.875 0.75 0.875 1.25 0 0.75-0.125 1.375-0.125 2.125 0.375-0.375 2.5-2.625 2.75-2.625 1.625-0.375 4.375 2.375 4.625 3.25s-2.75 3-4.125 4.25c-1 1-3.125 1.5-2.5 3 0.25 0.5 1.25 2.5 0.625 3-0.75 0.625-1.75-1.125-2.125-1.5-1-1.25-3.25-0.875-4.75-0.875 0 2.125-0.125 3.875 1.875 5.375 1.875 1.375 3.75 3.125 5.875 4.125 1.625 0.75 4.5-0.875 5.875 0.125 2 1.375 3.625 2.625 5.875 3.625 1 0.375 4.125 2.5 3.25 3.875-0.625 1-1.25 1.875-1.75 2.875s-1.625 2.5-2.5 3.125c-1 0.75-2 2.125-2.625 3.625 4.375-0.875 8.25-2.875 11.5-6.125z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#115</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={52}
                          height={64}
                          viewBox="0 0 52 64"
                        >
                          <path d="M50.125 34.25c1.875 1.875 2.25 4.5 0.375 6.375 0 0-12 12.875-15.75 15.125v0c-3.5 2.625-8.125 4.25-12.5 4.25-6.875 0-12.625-4.5-14.625-10.625v0-0.125c0-0.125-0.125-0.25-0.125-0.375l-7.25-23.625c-0.625-1.875 0.25-4 2.125-4.625s3.75 0.375 4.375 2.25l4.25 11c0.125 0.5 0.25 0.25 0.25-0.125l-2.75-20.125c-0.375-1.875 0.875-3.75 2.75-4.125s3.75 1 4.125 2.875l3.125 17.25c0 0.25 0.25 0.25 0.25 0v-22.125c0-1.875 1.625-3.5 3.5-3.5s3.5 1.625 3.5 3.5l1 21.875c0 0.625 0.375 0.5 0.5 0.125l2.875-16.875c0.25-1.875 2-3.375 3.875-3.125s3.375 2.125 3.125 4l-2.625 21.5c-0.125 1.5-0.375 3.75 0.25 4.5 1 1.125 2.5 1.125 3.875-0.25l5.25-5.25c1.875-1.875 4.375-1.625 6.25 0.25z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#116</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={44}
                          height={64}
                          viewBox="0 0 44 64"
                        >
                          <path d="M22 6c12.125 0 22 9.625 22 21.5 0 11.375-9.5 24.5-22 30.5v-8.875c-12.125 0-22-9.75-22-21.625s9.875-21.5 22-21.5zM20.75 28.875v-7.625h-7.75v7.625h3.875l-2.625 5h3.875zM31 28.875v-7.625h-7.75v7.625h3.875l-2.5 5h3.875z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#117</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={52}
                          height={64}
                          viewBox="0 0 52 64"
                        >
                          <path d="M20 56h-12.25v-24h-7.75l26-24 26 24h-7.75v24h-12.25v-16h-12v16z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#118</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={48}
                          height={64}
                          viewBox="0 0 48 64"
                        >
                          <path d="M48 50.625c0 2.875-2.5 5.375-5.375 5.375h-37.25c-2.875 0-5.375-2.5-5.375-5.375v-37.25c0-2.875 2.5-5.375 5.375-5.375h37.25c2.875 0 5.375 2.5 5.375 5.375v37.25zM14.625 36l-9.25 12h37.25l-12-16-9.25 12z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#119</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={64}
                          height={64}
                          viewBox="0 0 64 64"
                        >
                          <path d="M54.625 52h9.375c0 2.875-8 4-12 4h-40c-4 0-12-1.125-12-4h9.375c-2.875 0-5.375-2.5-5.375-5.375v-33.25c0-2.875 2.5-5.375 5.375-5.375h45.25c2.875 0 5.375 2.5 5.375 5.375v33.25c0 2.875-2.5 5.375-5.375 5.375zM9.375 13.375v34h45.25v-34h-45.25zM32 54.375c1.5 0 2.625-1.25 2.625-2.75s-1.125-2.625-2.625-2.625-2.625 1.125-2.625 2.625 1.125 2.75 2.625 2.75z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#120</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={48}
                          height={64}
                          viewBox="0 0 48 64"
                        >
                          <path d="M43 8c2.75 0 5 2.25 5 5v38c0 2.75-2.25 5-5 5h-38c-2.75 0-5-2.25-5-5v-38c0-2.75 2.25-5 5-5h38zM30 46v-6h-20v6h20zM38 35v-6h-28v6h28zM38 24v-6h-28v6h28z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#121</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={40}
                          height={64}
                          viewBox="0 0 40 64"
                        >
                          <path d="M35 23.25c2.75 0 5 2.25 5 5v25c0 2.75-2.25 5-5 5h-30c-2.75 0-5-2.25-5-5v-25c0-2.75 2.25-5 5-5h2.5v-5c0-6.875 5.625-12.5 12.5-12.5s12.5 5.625 12.5 12.5v5h2.5zM20 46c2.75 0 5-2.25 5-5s-2.25-5-5-5-5 2.25-5 5 2.25 5 5 5zM27.75 23.25v-5c0-4.25-3.5-7.75-7.75-7.75s-7.75 3.5-7.75 7.75v5h15.5z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#122</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={64}
                          height={64}
                          viewBox="0 0 56 64"
                        >
                          <path d="M50.625 10c2.875 0 5.375 2.5 5.375 5.375v33.25c0 2.875-2.5 5.375-5.375 5.375h-45.25c-2.875 0-5.375-2.5-5.375-5.375v-33.25c0-2.875 2.5-5.375 5.375-5.375h45.25zM50 21.375v-5.375l-22 14.625-22-14.625v5.375l22 14.625z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#123</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={48}
                          height={64}
                          viewBox="0 0 48 64"
                        >
                          <path d="M46.625 8c0.75 0 1.375 0.625 1.375 1.375v40.25c0 0.625-0.375 1.125-0.875 1.25l-15.125 5.125-16-5.625s-13.125 5.125-13.5 5.25-0.875 0.375-1.125 0.375c-0.75 0-1.375-0.625-1.375-1.375v-40.25c0-0.625 0.375-1.125 0.875-1.25l15.125-5.125 16 5.625s12.875-5 13.5-5.25 0.875-0.375 1.125-0.375zM32 50.625v-31.75l-16-5.5v31.75z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#124</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={40}
                          height={64}
                          viewBox="0 0 40 64"
                        >
                          <path d="M20 40c-4.75 0-8.625-3.875-8.625-8.625v-18.75c0-4.75 3.875-8.625 8.625-8.625s8.625 3.875 8.625 8.625v18.75c0 4.75-3.875 8.625-8.625 8.625zM35.125 30.625h4.875c0 9.75-7.75 17.75-17.125 19.125v10.25h-5.75v-10.25c-9.375-1.25-17.125-9.375-17.125-19.125h4.875c0 8.625 7.25 14.5 15.125 14.5s15.125-5.875 15.125-14.5z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#125</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={44}
                          height={64}
                          viewBox="0 0 44 64"
                        >
                          <path d="M22 58c-2.875 0-5.125-2.375-5.125-5.25h10.25c0 2.875-2.25 5.25-5.125 5.25zM38.875 42.375l5.125 5.25v2.625h-44v-2.625l5.125-5.25v-14.25c0-7.875 5.625-14.625 13-16.375v-1.875c0-2.25 1.625-3.875 3.875-3.875s3.875 1.625 3.875 3.875v1.875c7.375 1.75 13 8.5 13 16.375v14.25z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#126</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={64}
                          height={64}
                          viewBox="0 0 56 64"
                        >
                          <path d="M0 52v-4h34v4h-34zM46 52v-4h10v4h-10zM44 56c0 2.25-1.75 4-4 4v0c-2.25 0-4-1.75-4-4v-12c0-2.25 1.75-4 4-4v0c2.25 0 4 1.75 4 4v12zM0 34v-4h10v4h-10zM22 34v-4h34v4h-34zM20 38c0 2.25-1.75 4-4 4v0c-2.25 0-4-1.75-4-4v-12c0-2.25 1.75-4 4-4v0c2.25 0 4 1.75 4 4v12zM0 16v-4h34v4h-34zM46 16v-4h10v4h-10zM44 20c0 2.25-1.75 4-4 4v0c-2.25 0-4-1.75-4-4v-12c0-2.25 1.75-4 4-4v0c2.25 0 4 1.75 4 4v12z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#127</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={64}
                          height={64}
                          viewBox="0 0 56 64"
                        >
                          <path d="M38.125 29c-4.25 0-7.625-3.375-7.625-7.5s3.375-7.5 7.625-7.5 7.75 3.375 7.75 7.5-3.5 7.5-7.75 7.5zM17.875 29c-4.25 0-7.75-3.375-7.75-7.5s3.5-7.5 7.75-7.5 7.625 3.375 7.625 7.5-3.375 7.5-7.625 7.5zM17.875 34.5c6 0 18.125 2.875 18.125 8.75v6.75h-36v-6.75c0-5.875 11.875-8.75 17.875-8.75zM38.125 35.875c6 0 17.875 1.5 17.875 7.375v6.75h-16v-6.75c0-3.75-1.125-5.125-4-7.25 0.875-0.125 1.375-0.125 2.125-0.125z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#128</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={40}
                          height={64}
                          viewBox="0 0 40 64"
                        >
                          <path d="M20 4c11 0 20 8.875 20 19.625 0 14.75-20 36.375-20 36.375s-20-21.625-20-36.375c0-10.75 9-19.625 20-19.625zM20 30.625c4 0 7.125-3.125 7.125-7s-3.125-7-7.125-7-7.125 3.125-7.125 7 3.125 7 7.125 7z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#129</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={52}
                          height={64}
                          viewBox="0 0 52 64"
                        >
                          <path d="M14.5 35l-11.375-11.125c-4.25-4.125-4.25-10.75 0-14.875l19.125 18.5zM33 30.25l-4.125 3.875 18.75 18.125-3.75 3.75-18.75-18.25-18.75 18.25-3.75-3.75s20.375-19.875 26.375-25.875c-1.875-4-0.5-9.625 3.875-13.875 5.125-5 12.625-6.125 16.5-2.125 4.125 3.875 3 11.125-2.125 16.125-4.25 4.25-10 5.625-14.25 3.75z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#130</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={48}
                          height={64}
                          viewBox="0 0 48 64"
                        >
                          <path d="M34.25 38.125l13.75 13.75-4.125 4.125-13.625-13.75v-2.125l-0.875-0.75c-3.125 2.625-7.25 4.25-11.625 4.25-9.875 0-17.75-7.875-17.75-17.75s7.875-17.875 17.625-17.875c9.875 0 17.75 8 17.75 17.875 0 4.5-1.625 8.5-4.25 11.625l0.875 0.625h2.25zM17.75 38.125c6.875 0 12.375-5.375 12.375-12.25s-5.5-12.375-12.375-12.375-12.25 5.5-12.25 12.375 5.375 12.25 12.25 12.25z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#131</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={52}
                          height={64}
                          viewBox="0 0 52 64"
                        >
                          <path d="M45.75 34.625l5.875 4.25c0.375 0.375 0.5 1.25 0.25 1.75l-5.375 8.875c-0.25 0.5-0.875 0.875-1.5 0.625l-6.75-2.625c-1.5 1-2.875 2-4.5 2.625l-1 6.875c-0.125 0.5-0.75 1-1.375 1h-10.625c-0.625 0-1.25-0.375-1.375-1l-1-6.875c-1.625-0.625-3.125-1.625-4.5-2.625l-6.75 2.625c-0.5 0.25-1.25-0.125-1.5-0.625l-5.375-8.875c-0.375-0.625-0.25-1.375 0.25-1.75l5.625-4.25c0-0.875-0.125-1.75-0.125-2.625s0.125-1.75 0.125-2.625l-5.75-4.25c-0.375-0.375-0.5-1.25-0.25-1.75l5.375-8.875c0.25-0.5 0.875-0.875 1.5-0.625l6.75 2.625c1.5-1 2.875-2 4.5-2.625l1-6.875c0.125-0.5 0.75-1 1.375-1h10.625c0.625 0 1.25 0.5 1.375 1l0.875 6.875c1.625 0.625 3.125 1.625 4.5 2.625l6.625-2.625c0.5-0.25 1.375 0.125 1.625 0.625l5.375 8.875c0.375 0.625 0.25 1.375-0.25 1.75l-5.625 4.25c0 0.875 0.125 1.75 0.125 2.625s0 1.875-0.125 2.625zM25.875 41.125c5.125 0 9.375-4 9.375-9.125s-4.25-9.125-9.375-9.125-9.25 4-9.25 9.125 4.125 9.125 9.25 9.125z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#132</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={51}
                          height={64}
                          viewBox="0 0 51 64"
                        >
                          <path d="M25.25 46.625l-15.625 9.375 4.125-17.75-13.75-12 18.125-1.5 7.125-16.75 7.125 16.75 18.125 1.5-13.75 12 4.125 17.75z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#133</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={40}
                          height={64}
                          viewBox="0 0 40 64"
                        >
                          <path d="M20 11.625c11 0 20 9.125 20 20.375 0 4-1.125 7.75-3.125 10.875l-3.625-3.75c1.125-2.125 1.75-4.625 1.75-7.125 0-8.375-6.75-15.25-15-15.25v7.625l-10-10.25 10-10.125v7.625zM20 47.25v-7.625l10 10.25-10 10.125v-7.625c-11 0-20-9.125-20-20.375 0-4 1.125-7.875 3.125-10.875l3.625 3.75c-1.125 2.125-1.75 4.625-1.75 7.125 0 8.375 6.75 15.25 15 15.25z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#134</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={48}
                          height={64}
                          viewBox="0 0 48 64"
                        >
                          <path d="M43 8c2.75 0 5 2.25 5 5v30c0 2.75-2.25 5-5 5h-35l-8 8v-43c0-2.75 1.25-5 4-5h39zM16.75 30.25v-5h-4.75v5h4.75zM26.375 30.25v-5h-4.75v5h4.75zM36 30.25v-5h-4.75v5h4.75z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#135</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={53}
                          height={64}
                          viewBox="0 0 53 64"
                        >
                          <path d="M26.625 5.375c14.625 0 26.625 12 26.625 26.625s-11.875 26.625-26.625 26.625-26.625-12-26.625-26.625 11.875-26.625 26.625-26.625zM26.625 53.25c11.75 0 21.25-9.5 21.25-21.25s-9.5-21.25-21.25-21.25-21.25 9.5-21.25 21.25 9.5 21.25 21.25 21.25zM28 18.75v13.875l12 7.125-2 3.25-14-8.375v-15.875h4z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#136</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={64}
                          height={64}
                          viewBox="0 0 56 64"
                        >
                          <path d="M36 16h20v20l-7.625-7.625-16.375 17.625-13.375-14-18.625 16 18.625-25.375 13.375 13.375 11.75-12.25z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#137</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={64}
                          height={64}
                          viewBox="0 0 56 64"
                        >
                          <path d="M52.75 50.875c-3 3.125-6.5 5.375-10.625 6.875s-8.625 2.25-13.125 2.25c-4.375 0-8.25-0.75-11.875-2.125s-6.625-3.25-9.125-5.75-4.5-5.375-5.875-8.875-2.125-7.25-2.125-11.25 0.75-7.75 2.25-11.125 3.625-6.375 6.25-8.875 5.75-4.375 9.25-5.875c3.5-1.375 7.25-2.125 11.25-2.125 3.5 0 6.875 0.5 10.125 1.5s6.125 2.5 8.625 4.5 4.5 4.5 6 7.5 2.25 6.625 2.25 10.625c0 3-0.375 5.75-1.25 8s-2 4.25-3.375 5.75-3 2.75-4.75 3.5-3.625 1.25-5.625 1.25-3.625-0.5-4.875-1.5-1.875-2.125-1.875-3.625h-0.375c-0.75 1.25-1.875 2.375-3.5 3.5s-3.5 1.625-5.75 1.625c-3.5 0-6.125-1.125-8-3.375s-2.875-5.25-2.875-8.875c0-2.125 0.375-4.25 1.125-6.25s1.75-3.875 3-5.5 2.875-2.875 4.75-3.875 3.875-1.5 6.125-1.5c1.875 0 3.375 0.5 4.75 1.25 1.25 0.75 2.25 1.875 2.625 3h0.125l0.625-3h6.75l-3 14.125c-0.125 0.75-0.25 1.5-0.375 2.375s-0.25 1.625-0.25 2.375c0 0.875 0.125 1.625 0.5 2.25s0.875 0.875 1.875 0.875c2 0 3.625-1.125 4.875-3.25s2-5 2-8.5c0-3-0.5-5.625-1.5-8s-2.5-4.25-4.25-5.875-4-2.875-6.5-3.625-5.125-1.125-8.125-1.125c-3.25 0-6.125 0.5-8.75 1.625s-4.875 2.75-6.75 4.75-3.375 4.25-4.375 7c-1 2.625-1.625 5.5-1.625 8.625 0 3.25 0.5 6.375 1.625 9s2.625 4.875 4.625 6.75 4.375 3.375 7.125 4.375 5.75 1.5 9 1.5c4.125 0 7.625-0.75 10.625-2s5.625-3.125 8.125-5.375zM28.875 23.5c-1.25 0-2.25 0.25-3.125 1s-1.75 1.625-2.375 2.75-1 2.25-1.375 3.5-0.5 2.5-0.5 3.75c0 0.625 0 1.25 0.125 2 0.125 0.625 0.375 1.25 0.75 1.875s0.875 1 1.5 1.375 1.375 0.625 2.375 0.625c1.375 0 2.5-0.375 3.5-1s1.75-1.625 2.375-2.625 1.125-2 1.375-3.25 0.375-2.375 0.375-3.375c0-0.75 0-1.625-0.125-2.375s-0.5-1.5-0.875-2.125-0.875-1.125-1.5-1.5-1.5-0.625-2.5-0.625z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#138</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={48}
                          height={64}
                          viewBox="0 0 48 64"
                        >
                          <path d="M10 24h30v28c0 1.125-0.875 2-2 2h-26c-1.125 0-2-0.875-2-2v-28zM37 43v-6c0-0.5-0.5-1-1-1s-1 0.5-1 1v6c0 0.5 0.5 1 1 1s1-0.5 1-1zM36 34c0.5 0 1-0.5 1-1s-0.5-1-1-1-1 0.5-1 1 0.5 1 1 1zM47.625 4c0.375 0 0.375 0.25 0.375 0.375s-0.25 0.375-0.375 0.625-1.625 2.5-1.625 5v42c0 4.375-3.625 8-8 8h-26c-4.375 0-8-3.625-8-8v-38.375c0-4-0.25-4.125-4-4.625 0-1.5 1.375-5 8.125-5h39.5zM42 10c0-0.625 0-2 0.125-2h-34.125c-0.125 0-0.375 0-0.5 0.125 0.625 0.875 0.5 4 0.5 5.5v38.375c0 2.25 1.75 4 4 4h26.25c2.125 0 3.75-1.75 3.75-4v-42z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#139</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={64}
                          height={64}
                          viewBox="0 0 56 64"
                        >
                          <path d="M48 20c4.375 0 8 3.625 8 8v12c0 4.375-3.625 8-8 8h-4v10c0 1.125-0.875 2-2 2h-32c-1.125 0-2-0.875-2-2v-27.875c-3.25 0-6-2.75-6-6v-6.875c-1.25-1.375-2-3.25-2-5.25 0-4.375 3.625-8 8-8 2.25 0 4.25 1 5.75 2.5 1.25-1.5 3.25-2.5 5.375-2.5 1.75 0 3.375 0.75 4.625 1.75 1.5-1.125 3.25-1.75 5.25-1.75 2.125 0 4.25 0.75 5.75 2 1.375-1.25 3.25-2 5.25-2 4.375 0 8 3.625 8 8 0 3-2.25 5.5-4 6v2h4zM37 38c0.5 0 1-0.375 1-1v0-6c0-0.5-0.5-1-1-1s-1 0.5-1 1v6c0 0.375 0.25 0.75 0.5 0.875 0.125 0.125 0.25 0.125 0.5 0.125zM37.875 28.5c0.125-0.25 0.125-0.5 0.125-0.75s-0.125-0.5-0.375-0.625-0.5-0.125-0.75-0.125-0.5 0.25-0.625 0.5-0.25 0.5-0.25 0.75 0.25 0.5 0.5 0.625 0.5 0.125 0.75 0.125 0.5-0.25 0.625-0.5zM40 20v-4h-2.5c-0.375 1-0.875 2-1.625 2.875-1.625 2-4.125 3.125-6.875 3.125-3.25 0-6-1.625-7.625-4.125-0.75 0.25-1.5 0.375-2.25 0.375-1.5 0-2.875-0.5-4-1.25-0.25-0.125-0.375-0.375-0.625-0.5-0.125 0.25-0.25 0.375-0.375 0.625-0.625 0.75-1.375 1.25-2.125 1.75v5.125h10c0-0.5 0.5-1 1-1s1 0.5 1 1h16v-4zM43.875 13.125c0.125-0.375 0.125-0.75 0.125-1.125 0-2.25-1.75-4-4-4-1.125 0-2.125 0.5-2.875 1.25-0.25 0.25-0.75 0.625-2 0.75h-1c-0.75-0.125-1.5-0.375-1.75-0.625-0.875-0.875-2-1.375-3.375-1.375-1.125 0-2.25 0.5-3.125 1.125l-0.875 0.875c0 0.125 0 0.125-0.125 0.25-0.375 0.375-0.875 0.625-1.375 0.625-0.625 0-1-0.375-1.375-0.75-0.125-0.25-0.25-0.375-0.375-0.625s-0.375-0.5-0.625-0.75-1.25-0.75-2-0.75c-1.25 0-2.25 1.125-3.125 2-0.875 1-3.375 1-4.25 0s-2.25-2-3.75-2c-2.25 0-4 1.75-4 4 0 0.25 0.125 0.625 0.125 0.875 0.25 1.125 0.875 2.125 1.875 2.625v8.625c0 1.125 0.875 2 2 2v-10.125c1.25 0 2.25-0.5 3-1.375 0.25-0.25 0.375-0.5 0.5-0.75 0 0 0.75-1.25 1.5-1.375s2.5-0.75 3.75 0.625c0.5 0.625 1.375 1.125 2.375 1.125 0.375 0 0.625-0.125 0.875-0.25 0.375-0.125 0.875-0.25 1.125-0.5v0c0.375-0.25 0.75-0.5 1.25-0.5 0.875 0 1.5 0.5 1.75 1.25 0 0 0.125 0.125 0.125 0.25 0.125 0.375 0.125 0.625 0.375 1 0.875 1.5 2.5 2.5 4.375 2.5 1.625 0 3.125-0.75 4-2 0.625-0.875 1-1.875 1-3s1.125-1 1.125-1h6.875c0.75 0 1.625 0.375 1.875 1.125zM52 40v-12c0-2.25-1.75-4-4-4h-4v20h4c2.25 0 4-1.75 4-4zM16 21c0-0.625 0.375-1 1-1s1 0.375 1 1-0.375 1-1 1-1-0.375-1-1zM36 21c0-0.625 0.375-1 1-1s1 0.375 1 1-0.375 1-1 1-1-0.375-1-1z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#140</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={64}
                          height={64}
                          viewBox="0 0 56 64"
                        >
                          <path d="M24 26.5c0 0 1-0.625 2.5-0.875 2.625-0.5 4.875-0.625 5.875 1.125 1.25 2.125 2.375 6.625 2.125 10.625-0.125 2.125-0.625 2.75-0.625 2.75s-1.875 1.25-5.875 0.875c-4.375-0.375-5-1.875-5-1.875s0.625-1.5 1-5.375 0-7.25 0-7.25zM19 35.625c-2.125 0.5-4.75 1.25-4.75 1.25s5.625-0.5 8-1.125c-0.5 2.625-1.25 4.25-1.25 4.25s-10.375 10-14.5 10c-3.5 0-6.5-8.5-6.5-18s3.25-18 6.5-18c4.375 0 13.25 7.125 16 12.125 0 0 0.375 2 0.25 4-1.25-0.625-3-1.25-5.5-1.75-3.5-0.75-5.25-0.375-5.25-0.375s2.25 0.5 7.125 2.125c1.875 0.625 2.75 1 3.625 1.25 0 0.375-0.125 0.875-0.125 1.25 0 0.625 0 1.25-0.125 1.875-0.625 0.25-1.875 0.75-3.5 1.125zM49.5 14c3.25 0 6.5 8.5 6.5 18s-3 18-6.5 18c-4.625 0-13-8.5-14-9.875 0 0 0.5-0.625 0.625-2.75v-1.125c2 0.875 8.75 1.625 8.75 1.625s-2.625-0.75-5-1.375c-1.625-0.5-3.125-1-3.75-1.25-0.125-1.375-0.25-2.875-0.5-4.125 2.125-1.375 8.625-4.25 8.625-4.25s-1.875 0.25-4.375 1.125c-1.75 0.625-3.625 1.375-4.625 1.75-0.375-1.25-0.875-2.25-1.25-3 0-0.125-0.125-0.5-0.125-0.5v-0.125c2.75-5 11.125-12.125 15.625-12.125z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#141</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={64}
                          height={64}
                          viewBox="0 0 56 64"
                        >
                          <path d="M30 34v-1h26v22c0 0.5-0.5 1-1 1h-54c-0.5 0-1-0.5-1-1v-22h26v1h4zM55 18c0.5 0 1 0.5 1 1v12h-26v-1h-4v1h-26v-12c0-0.5 0.5-1 1-1h15v-3.875c0.125-3.5 2.75-6.125 6.375-6.125h11.25c3.75 0 6.25 2.625 6.375 6.125v3.875h15zM36 14.5v-0.125c0-1.25-1.125-2.375-2.375-2.375h-11.25c-1.25 0-2.375 1.125-2.375 2.375v3.625h16v-3.5z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#142</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={64}
                          height={64}
                          viewBox="0 0 56 64"
                        >
                          <path d="M42.875 15.875c-0.75 2-2 3.875-3.5 5.375-3 3-7.125 4.625-11.375 4.625s-8.375-1.625-11.375-4.625c-1.5-1.5-2.75-3.375-3.5-5.375 3.625-4.875 9-7.875 14.875-7.875s11.25 3 14.875 7.875zM11.875 17.875c2.75 5.625 8.5 9.625 15.125 10v28.125c-5-0.25-9.625-2.75-13-6.75-0.875 0.75-1.25 1.125-1.625 1.875 1 1.125 0.875 2.75-0.125 3.875-1.125 1.25-3 1.375-4.25 0.25s-1.375-3-0.25-4.25l0.375-0.375s0.25-0.125 0.25-0.125c0.5-1.625 1.625-3.125 3.375-4.5-1.875-3.25-3.25-7.125-3.625-11.25-0.875 0-1.5 0.25-2.125 0.375-0.125 1.625-1.375 2.875-3 2.875s-3-1.375-3-3 1.375-3 3-3h0.375c0.5-0.25 1-0.625 1.5-0.75 0.875-0.25 1.75-0.5 3.125-0.5 0.125-2.875 0.75-5.625 1.625-8.125-0.75-0.5-1.375-0.875-1.875-1.375-0.75-0.625-1.375-1.625-1.75-2.375-0.125 0-0.375-0.125-0.5-0.25-1.5-0.75-1.875-2.625-1.125-4.125s2.625-1.875 4.125-1.125c1.375 0.75 1.875 2.5 1.25 3.875 0.25 0.375 0.375 0.875 0.5 1 0.25 0.25 0.625 0.375 1 0.625 0.25-0.375 0.375-0.625 0.625-1zM53 32c1.625 0 3 1.375 3 3s-1.375 3-3 3-2.875-1.25-3-2.875c-0.625-0.125-1.25-0.375-2.125-0.375-0.375 4.125-1.75 8-3.625 11.25 1.75 1.375 2.875 2.875 3.375 4.5 0 0 0.125 0 0.25 0.125l0.375 0.375c1.125 1.25 1 3.125-0.25 4.25s-3.125 1-4.25-0.25c-1-1.125-1.125-2.75-0.125-3.875-0.375-0.75-0.75-1.125-1.625-1.875-3.375 4-8 6.5-13 6.75v-28.125c6.625-0.375 12.375-4.375 15.125-10 0.25 0.375 0.375 0.625 0.625 1 0.375-0.25 0.75-0.375 1-0.625 0.125-0.125 0.25-0.625 0.5-1-0.625-1.375-0.125-3.125 1.25-3.875 1.5-0.75 3.375-0.375 4.125 1.125s0.375 3.375-1.125 4.125c-0.125 0.125-0.375 0.25-0.5 0.25-0.375 0.75-1 1.75-1.75 2.375-0.5 0.5-1.125 0.875-1.875 1.375 0.875 2.5 1.5 5.25 1.625 8.125 1.375 0 2.25 0.25 3.125 0.5 0.5 0.125 1 0.5 1.5 0.75h0.375z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#143</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={40}
                          height={64}
                          viewBox="0 0 40 64"
                        >
                          <path d="M38 4c1.125 0 2 0.875 2 2v52c0 1.125-0.875 2-2 2h-36c-1.125 0-2-0.875-2-2v-52c0-1.125 0.875-2 2-2h36zM6 26v4h4v-4h-4zM6 34v4h4v-4h-4zM6 42v4h4v-4h-4zM18 54v-4h-12v4h12zM18 46v-4h-4v4h4zM18 38v-4h-4v4h4zM18 30v-4h-4v4h4zM26 54v-4h-4v4h4zM26 46v-4h-4v4h4zM26 38v-4h-4v4h4zM26 30v-4h-4v4h4zM34 54v-12h-4v12h4zM34 38v-4h-4v4h4zM34 30v-4h-4v4h4zM34 20v-10h-28v10h28z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#144</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={64}
                          height={64}
                          viewBox="0 0 56 64"
                        >
                          <path d="M14 16c-2.25 0-4-1.75-4-4v-4c0-2.25 1.75-4 4-4s4 1.75 4 4v4c0 2.25-1.75 4-4 4zM42 16c-2.25 0-4-1.75-4-4v-4c0-2.25 1.75-4 4-4s4 1.75 4 4v4c0 2.25-1.75 4-4 4zM55 8c0.5 0 1 0.5 1 1v50c0 0.5-0.5 1-1 1h-54c-0.5 0-1-0.5-1-1v-50c0-0.5 0.5-1 1-1h7v5.125c0 2.75 3 4.875 6 4.875s6-2.125 6-4.875v-5.125h16v5.125c0 2.75 3.125 4.875 6.125 4.875s5.875-2.125 5.875-4.875v-5.125h7zM50 54v-32h-44v32h44z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#145</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={52}
                          height={64}
                          viewBox="0 0 52 64"
                        >
                          <path d="M47.75 18.375c2.25 0 4.25 1.75 4.25 4.125v25.25c0 2.375-2 4.25-4.25 4.25h-43.5c-2.375 0-4.25-1.875-4.25-4.25v-25.25c0-2.375 1.875-4.125 4.25-4.125h8.625l4.875-5c0.75-0.875 1.875-1.375 3.125-1.375h10.5c1.125 0 2.125 0.5 2.875 1.25v0 0 0l5.125 5.125h8.375zM26 45.75c6.375 0 11.5-5.25 11.5-11.625s-5.125-11.625-11.5-11.625-11.5 5.25-11.5 11.625 5.125 11.625 11.5 11.625zM47 25c1 0 1.75-0.75 1.75-1.75s-0.75-1.75-1.75-1.75-1.75 0.75-1.75 1.75 0.75 1.75 1.75 1.75zM26 25.375c4.75 0 8.75 3.875 8.75 8.75s-4 8.75-8.75 8.75c-4.875 0-8.75-3.875-8.75-8.75s3.875-8.75 8.75-8.75z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#146</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={64}
                          height={64}
                          viewBox="0 0 56 64"
                        >
                          <path d="M52.5 12c2 0 3.5 1.5 3.5 3.5v0 33c0 2-1.5 3.5-3.5 3.5h-49c-2 0-3.5-1.5-3.5-3.5v0 0-33c0-2 1.5-3.5 3.5-3.5h49zM5.625 16c-0.875 0-1.5 0.625-1.625 1.5v2.5h48v-2.5c-0.125-0.875-0.75-1.5-1.625-1.5h-44.75zM50.375 48c0.875 0 1.5-0.625 1.625-1.5v-14.5h-48v14.5c0.125 0.875 0.75 1.5 1.625 1.5h44.75zM8 40v-2h24v2h-24zM8 44v-2h12v2h-12zM40 44v-6h8v6h-8z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#147</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={64}
                          height={64}
                          viewBox="0 0 64 64"
                        >
                          <path d="M0 12h64v32h-64v-32zM24.125 40c-2.5-2.875-4.125-7.25-4.125-12s1.625-9.125 4.125-12h-12.125c0 4.375-3.625 8-8 8v10c3.375 0 6 2.625 6 6h14.125zM37.25 32.625c0.375-0.5 0.5-1.125 0.5-1.875 0-0.375 0-0.625-0.125-1s-0.25-0.75-0.5-1-0.5-0.5-0.875-0.75-0.75-0.5-1.25-0.625c-0.125 0-0.5-0.125-0.875-0.25s-0.625 0-1-0.125v-3.875c0.25 0.125 0.625 0.25 0.875 0.375 0.5 0.375 0.75 0.875 0.875 1.625h2.5c0-0.625-0.25-1.125-0.5-1.625s-0.625-1-1.125-1.375-1.125-0.625-1.75-0.75c-0.25-0.125-0.625-0.25-0.875-0.25v-1.125h-2.25v1.125c-0.25 0-0.5 0.125-0.75 0.25-0.625 0.125-1.25 0.25-1.75 0.625s-0.875 0.75-1.125 1.25-0.5 1.125-0.5 1.75c0 0.375 0 0.625 0.125 1s0.25 0.625 0.5 0.875 0.625 0.625 1 0.875 0.875 0.5 1.5 0.625c0.375 0.125 0.75 0 1 0.125v4.375c-0.375-0.125-0.75-0.25-1.125-0.5s-0.625-0.5-0.75-0.875-0.25-0.75-0.25-1.125h-2.5c0 0.625 0.25 1.375 0.5 2 0.375 0.625 0.75 1 1.25 1.375s1.125 0.75 1.875 0.875c0.375 0.125 0.625 0.25 1 0.25v1.125h2.25v-1.125c0.375 0 0.75-0.125 1.125-0.25 0.625-0.125 1.25-0.25 1.75-0.625s0.875-0.875 1.25-1.375zM60 34v-10c-4.375 0-8-3.625-8-8h-12.125c2.5 2.875 4.125 7.25 4.125 12s-1.625 9.125-4.125 12h14.125c0-3.375 2.75-6 6-6zM8 28c0-2.625 1.375-4 4-4s4 1.375 4 4-1.375 4-4 4-4-1.375-4-4zM48 28c0-2.625 1.375-4 4-4s4 1.375 4 4-1.375 4-4 4-4-1.375-4-4zM34.125 29.375c0.25 0.125 0.5 0.25 0.75 0.5s0.375 0.625 0.375 1.125c0 0.25 0 0.5-0.125 0.75s-0.25 0.5-0.5 0.625-0.625 0.375-1 0.5c-0.125 0-0.25 0.125-0.5 0.125v-3.875c0.375 0.125 0.75 0.125 1 0.25zM29.5 23.875c0.125-0.25 0.375-0.375 0.625-0.5s0.5-0.25 0.75-0.25v3.25c-0.5-0.125-0.875-0.375-1.125-0.625s-0.5-0.5-0.5-1c0-0.375 0.125-0.625 0.25-0.875zM0 52v-4h64v4h-64z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#148</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={52}
                          height={64}
                          viewBox="0 0 52 64"
                        >
                          <path d="M30.75 45.75l3.25 2.25c-0.5 2.625-3.625 4-6.5 4h-11.25c-1 0-1.375 0.25-1.625 0.375l-6.625 5.625v-6h-2c-3.25 0-6-2-6-5.125v-16.125c0-3.125 2.5-5.625 5.75-5.625h0.25v12.625c0 4.125 3.625 7.375 8 7.375h14.625c1.25 0 1.75 0.375 2.125 0.625zM44.125 6c4.375 0 7.875 3.375 7.875 7.5v21c0 4.125-3.5 7.5-7.875 7.5h-2.125v8l-9.375-7.5c-0.25-0.25-0.875-0.5-2.125-0.5h-12.625c-4.375 0-7.875-3.375-7.875-7.5v-21c0-4.125 2.625-7.5 7-7.5h27.125z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#149</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={52}
                          height={64}
                          viewBox="0 0 52 64"
                        >
                          <path d="M3.125 48.875c-0.125-0.125 0-0.25-0.125-0.375-1.875-2.75-3-6.125-3-9.625 0-5.25 2.375-10 6.125-13.25-0.25 1.375-0.5 2.75-0.5 4.25 0 11.5 9.75 21 21.75 21 1.875 0 3.75-0.25 5.5-0.75-3.375 4-8.625 6.625-14.375 6.625-2.5 0-5-0.625-7.25-1.5h-0.125c-0.25-0.125-0.625-0.25-1-0.25s-0.75 0.125-1.125 0.25l-7 2.75 1.5-7.875c0-0.5-0.125-0.875-0.375-1.25v0zM30.25 6c12 0 21.75 9.5 21.75 21 0 4.125-1.375 8-3.5 11.25-0.125 0.125-0.125 0.25-0.25 0.375v0c-0.25 0.5-0.375 1-0.375 1.5l2.125 9.25-8.625-3.25c-0.375-0.125-0.75-0.25-1.25-0.25-0.375 0-0.75 0.125-1.125 0.25v0l-0.25 0.125c-1 0.375-2 0.625-3 0.875-1.75 0.5-3.625 0.75-5.5 0.75-12 0-21.625-9.375-21.625-20.875 0-1.5 0.125-3 0.375-4.375 2-9.5 10.75-16.625 21.25-16.625z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#150</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={64}
                          height={64}
                          viewBox="0 0 56 64"
                        >
                          <path d="M28 4c15.5 0 28 12.5 28 28s-12.5 28-28 28-28-12.5-28-28 12.5-28 28-28zM42.375 22.625c0.125-0.125 0.125-0.25 0.125-0.375s0-0.375-0.125-0.5l-3.875-3c-0.125-0.125-0.375-0.125-0.5-0.125s-0.25 0-0.375 0.125l-13.875 17.875s-5.5-5.25-5.625-5.375-0.5-0.375-0.75-0.375-0.375 0.25-0.5 0.375l-3.25 3.25c-0.125 0.125-0.125 0.375-0.125 0.5s0 0.25 0.125 0.375l0.25 0.125s9.75 9.375 9.875 9.5 0.375 0.375 0.625 0.375 0.5-0.25 0.625-0.375z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#151</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={44}
                          height={64}
                          viewBox="0 0 44 64"
                        >
                          <path d="M10 20c0.25-2.5 1.25-4.375 3.5-5l0.125-0.125c1.5-0.375 2.625-0.875 2.625-2.5v-2.625c0-3.25 2.625-5.75 5.75-5.75s5.75 2.5 5.75 5.75v2.625c0 1.625 1.125 2.25 2.625 2.625h0.25c2.25 0.625 3.125 2.5 3.375 5h-24zM22 8c-1 0-1.625 0.75-1.625 1.75s0.625 1.75 1.625 1.75 1.75-0.75 1.75-1.75-0.75-1.75-1.75-1.75zM40.625 8c1.875 0 3.375 1.5 3.375 3.5v45c0 2-1.5 3.5-3.375 3.5h-37.125c-1.875 0-3.5-1.5-3.5-3.5v-45c0-2 1.625-3.5 3.5-3.5h9.125v1.625c0 1.375-1.125 2.375-2.375 2.375h-4.625c-0.875 0-1.5 0.75-1.5 1.625v40.875c0 0.75 0.625 1.5 1.375 1.5h33.125c0.75 0 1.375-0.75 1.375-1.5v-40.875c0-0.875-0.625-1.625-1.5-1.625h-4.625c-1.25 0-2.5-1-2.5-2.375v-1.625h9.25zM8 28v-4h14v4h-14zM8 52v-4h20v4h-20zM8 44v-4h16.125v4h-16.125zM8 36v-4h26v4h-26z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#152</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={64}
                          height={64}
                          viewBox="0 0 56 64"
                        >
                          <path d="M45.75 29.125c5.625 0 10.25 4.75 10.25 10.5s-4.625 10.375-10.25 10.375v0h-34.5c-6.125 0-11.25-5.125-11.25-11.375 0-5 3.25-9.25 7.625-10.75 0.625-3.625 3.625-6.375 7.375-6.375 1.25 0 2.25 0.375 3.25 0.875 2.375-5 7.375-8.375 13.125-8.375 8 0 14.375 6.625 14.375 14.75v0.375z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#153</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={64}
                          height={64}
                          viewBox="0 0 56 64"
                        >
                          <path d="M17 49c-0.75 0-1.5-0.25-2.125-0.875l-14-14c-1.125-1.125-1.125-3.125 0-4.25l14-14c1.125-1.125 3.125-1.125 4.25 0s1.125 3.125 0 4.25l-11.875 11.875 11.875 11.875c1.125 1.125 1.125 3.125 0 4.25-0.625 0.625-1.375 0.875-2.125 0.875zM39 49c-0.75 0-1.5-0.25-2.125-0.875-1.125-1.125-1.125-3.125 0-4.25l11.875-11.875-11.875-11.875c-1.125-1.125-1.125-3.125 0-4.25s3.125-1.125 4.25 0l14 14c1.125 1.125 1.125 3.125 0 4.25l-14 14c-0.625 0.625-1.375 0.875-2.125 0.875z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#154</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={48}
                          height={64}
                          viewBox="0 0 48 64"
                        >
                          <path d="M39.875 32.125c4.625 0.875 8.125 5 8.125 9.875 0 2.5-1 4.875-2.625 6.75-1.875 2.125-4.625 3.25-7.625 3.25-1 0-2.125-0.125-3.125-0.375-0.75-0.125-1.25-0.375-1.875-0.625-1.375 1.875-2.875 3.125-4 4.125v0c-0.625 0.625-1.5 0.875-2.375 0.875h-12.75c-0.875 0-1.75-0.25-2.375-0.875v0c-2.125-1.875-5.125-4.5-7.75-10.75s-3.5-11.375-3.5-13.875 0.375-2.5 2-2.5h12.625c-0.625-2.125-4.625-2.375-4.625-5.75 0-2.125 1.875-4 3.5-4.625-0.25 1-0.375 1.75-0.375 2.625 0 2.375 4.875 3.75 4.875 6.625 0 0.375 0 0.75-0.125 1.125h7c0.125-0.625 0.25-1.25 0.25-1.75 0-4.5-7-4.5-7-10.5 0-3.5 2.625-6.875 5.875-7.75-0.5 1.75-1.125 2.875-1.125 4.375 0 4 7.125 6.25 7.125 11 0 1.625-0.625 3.125-1.5 4.625h9.5c1.625 0 2 0 2 2.5 0 0.5 0 1-0.125 1.625zM37.75 48c4.125 0 6.25-3.125 6.25-6s-2.125-5.375-4.875-5.875c-0.5 2.375-1.375 5.25-2.625 8.25-0.5 1.125-1 2.125-1.5 3.125 0.75 0.375 1.625 0.5 2.75 0.5z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#155</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={48}
                          height={64}
                          viewBox="0 0 48 64"
                        >
                          <path d="M47.375 12.5c0.875 0.875 0.875 2.25 0 3.125l-4 3.875-6.875-6.875 3.875-4c0.875-0.875 2.25-0.875 3.125 0zM35.25 13.75l6.875 6.875-22.125 21.625-8 1.75 1.75-8zM40 32l4-4v25.125c0 1.625-1.25 2.875-2.875 2.875h-38.25c-1.625 0-2.875-1.25-2.875-2.875v-38.25c0-1.625 1.25-2.875 2.875-2.875h25.125l-4 4h-18.625c-0.75 0-1.375 0.625-1.375 1.25v33.5s0.5 1.25 1.25 1.25h33.625s1.125-0.625 1.125-1.25v-18.75z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#156</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={64}
                          height={64}
                          viewBox="0 0 56 64"
                        >
                          <path d="M54.375 21c0.875 0 1.625 0.75 1.625 1.5v22.875c0 1.125-0.75 2.125-1.75 2.75v0.125l-21.875 11.5v0.125c-0.25 0.125-0.5 0.125-0.75 0.125-0.875 0-1.625-0.75-1.625-1.5v-23.125c0-1.125 0.625-2.125 1.625-2.75v0l0.375-0.25 21.75-11.25c0.25-0.125 0.375-0.125 0.625-0.125zM52.75 14.875c0 0 1 0.375 1 1.125 0 0.875-1 1.375-1 1.375l-23.125 12.25c-0.5 0.25-1 0.375-1.625 0.375s-1.125-0.125-1.625-0.375l-0.25-0.125-22.875-12s-1-0.625-1-1.5c0-0.75 1-1.125 1-1.125l22.625-10.25s1.375-0.625 2.125-0.625 2.125 0.625 2.125 0.625zM24.375 32.625c1 0.625 1.625 1.625 1.625 2.75v23.125c0 0.75-0.75 1.5-1.625 1.5-0.25 0-0.5-0.125-0.75-0.25v0l-21.875-11.5v-0.125c-1-0.625-1.75-1.625-1.75-2.75v-22.875c0-0.75 0.75-1.5 1.625-1.5 0.25 0 0.5 0 0.625 0.125l0.25 0.125 21.375 11.125z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#157</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={36}
                          height={64}
                          viewBox="0 0 36 64"
                        >
                          <path d="M35.75 21.125c0.125 0.375 0.25 0.75 0.25 1.25v30.625c0 1.625-1.25 3-2.75 3h-30.375c-1.5 0-2.875-1.375-2.875-3v-42c0-1.625 1.375-3 2.875-3h20c0.375 0 0.75 0 1.125 0.25 0.25 0.125 0.625 0.375 0.875 0.625l10.5 11.5c0.25 0.25 0.25 0.5 0.375 0.75zM6 22.375v1.25c0 0.125 0.125 0.375 0.375 0.375h8.875c0.25 0 0.375-0.25 0.375-0.375v-1.25c0-0.25-0.125-0.375-0.375-0.375h-8.875c-0.25 0-0.375 0.125-0.375 0.375zM6 38.375v1.25c0 0.125 0.125 0.375 0.375 0.375h15.375c0.25 0 0.25-0.25 0.25-0.375v-1.25c0-0.25 0-0.375-0.25-0.375h-15.375c-0.25 0-0.375 0.125-0.375 0.375zM26 47.625v-1.25c0-0.25 0-0.375-0.25-0.375h-19.375c-0.25 0-0.375 0.125-0.375 0.375v1.25c0 0.125 0.125 0.375 0.375 0.375h19.375c0.25 0 0.25-0.25 0.25-0.375zM30 31.625v-1.25c0-0.25 0-0.375-0.25-0.375h-23.375c-0.25 0-0.375 0.125-0.375 0.375v1.25c0 0.125 0.125 0.375 0.375 0.375h23.375c0.25 0 0.25-0.25 0.25-0.375zM24.125 22.25h7.5l-8.875-9.75v8.25c0 0.75 0.625 1.5 1.375 1.5z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#158</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={64}
                          height={64}
                          viewBox="0 0 56 64"
                        >
                          <path d="M40.625 15.75c0.25 0.5 0.875 1.5 0.375 1.875-0.375 0.25-1.25 0.25-1.625-0.625s0-1.375-0.625-1.125-0.875-0.375-0.75-0.5c0.125-0.25 0.375-0.375 0.625-0.5 0-0.25-0.5-1 0.25-0.875 0.5 0.125 1.5 1.25 1.75 1.75zM43 21.375v0 0zM50.375 24.625c0 0-0.25 0 0 0v0zM28 4c15.5 0 28 12.5 28 28s-12.5 28-28 28-28-12.5-28-28 12.5-28 28-28zM17.625 53.625l1 0.5c0.375 0.125 0.75 0.25 1.25 0.375 1.75 0.625 3.5 1 5.375 1.25 3.5 0.375 7 0.125 10.375-1 1.875-0.625 3.75-1.375 5.375-2.5 0.75-0.5 0.75-2 1.25-3 1-2-0.25-4.125 1.5-5.875 1.5-1.75 0.5-2.375 0.5-4.25 0-1.25 1-2.25 0.5-3.625-0.125-0.5-0.875 0.375-1.125-0.125-0.625-0.875-2.625-0.125-3.5-0.25-1.625-0.25-3-1.75-4.125-2.875-0.625-0.625 0-2.5 0.125-3.25 0.5-1.875 0-4.125 2.375-4.75 0.625-0.125 0.625-1.125 1.25-1.375 0.625-0.125 1.25-0.375 1.875-0.5 1.125-0.125 2.125 0.25 3.25 0.25 1.25 0 1.75 0.625 2.75 1.375 0.875 0.75 1.625 0.375 2.75 0.625 0.875 0 0-0.625-0.25-1-0.375-0.25-0.75-0.25-1-0.25-2-0.5-2.875-2.75-4.5-3.75-0.75-0.375-1.125-0.25-1.375 0-0.125 0.125 0.125 1.5 0.125 1.5-0.125 0.375-1.25 0.5-1.625 0.625-1.125 0.25-3.625-2.125-1.875-2.75 0.5-0.125 3.375-0.625 3-1.875-0.375-0.75 0.25-1.625-0.625-1.75-1-0.125-0.875-0.875-1.875-1-0.625-0.125-0.625-1.375-0.625-1.75 0-1.125 0.25-0.75 1.125-0.875-2.125-1.375-4.625-2.375-7.125-3-0.125 0.375-0.625 1.5-1 1.5-0.625 0.125-0.75 0-1.125 0.375-1.125 1.25-2 3.5-3.125 0.875-0.5-1.375 0.625-2.375 0.25-3.5h-1.125c0.75 1.5-0.625 2.25-1 2.375-1 0-1.25-0.625-2.125-0.5-0.5 0.125-0.875-0.5-1.375-0.25s-1.625 1-1.75 1.5c-0.375 1.5 0.75 1.625 1.75 0.75 0.75-0.75 2.125-1.5 3.125-0.75 0.75 0.625 0.625 1.125 0.625 1.75s-0.125 2.25-1.125 2c-0.5-0.125-0.875-0.75-1.375-0.375-1 0.875-2.25 0.75-3.625 1.125-1.25 0.25-2 0.75-3.125 1.125-1 0.375-1.375 0.5-1.5 1.5 0 0.25 0 1.75-0.375 1.875-0.625 0.25-1-2.75-2.75-2.5-1.5 0.125-3.75 1.625-3.125 3.5 0.25 0.625 3.5 0.375 1.25 1.75-0.25 0.125 0.25 2.125 0.25 2.5 0.125 1 1.625 2.25 2.625 1.25 0.75-0.75 0.75-0.625 1.75-0.25 1.875 1 4.125 1.875 5.625 3.375 0.75 0.75 1.125 3 2.125 3.5 1.125 0.625 2.375 0.625 3.25 1.75 0.75 0.875-0.25 2.375-1 2.875-0.5 0.25-1.5 3-2 3.625-0.25 0.5-1.5 0.75-2 0.875-0.375 0-0.875 1.125-1.125 1.375-0.875 0.875-1 1.625-2.125 2.375-2.25 1.5-2.75 2.875-2.25 5.5 0.25 1 0.625 1.625 1.375 2zM12.5 50.25l0.25 0.25c0.875 0.75 1.875 1.375 2.875 2-2.625-2.625-2.875-6.125-2.625-9.75l0.375-3c0.125-0.375-0.5-0.875-0.5-1.375 0-1.25 0-0.625-1-1.625-0.5-0.5-1.25-1.375-1.5-2.125-0.875-2 0.125-3.75 1.25-5.375 1.125-1.75-0.875-2.5-1.25-4-0.125-0.75-0.875-0.75-0.75-1.5 0.125-0.875-0.5-0.625-1.125-1.125-1.5-1-0.125-2.5-0.875-3.25-5.375 8.75-4.5 20.25 2 28 0.125 0.125 0 0.125 0.125 0.25h0.125c0.375 0.5 0.75 1 1.125 1.375s0.875 0.75 1.25 1.125z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#159</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={64}
                          height={64}
                          viewBox="0 0 56 64"
                        >
                          <path d="M6 42v-24h44v24h-44zM54 12c1.125 0 2 0.875 2 2v32c0 1.125-0.875 2-2 2h-52c-1.125 0-2-0.875-2-2v-32c0-1.125 0.875-2 2-2h52zM52 44v-28h-48v28h48zM6 60l3.625-10h3.875l-3.5 10h-4zM29.875 4l2.125 6h-8l2.125-6h3.75zM42.5 50h3.875l3.625 10h-4zM26 56v-6h4v6h-4z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#160</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={52}
                          height={64}
                          viewBox="0 0 52 64"
                        >
                          <path d="M2.375 18.625c-0.5-0.25-1.375-0.875-1.625-1.375-0.375-1 0.125-1.25 1.5-1.25h47.75c1.375 0 1.875 0.25 1.5 1.25-0.25 0.5-1.125 1.125-1.625 1.375-1.375 0.75-20.375 11.125-21.125 11.5s-1.5 0.5-2.625 0.5-1.875-0.125-2.625-0.5-19.75-10.75-21.125-11.5zM51 19.125c1.125-0.5 1 0.125 1 0.625v25.625c0 1.125-1.5 2.625-2.75 2.625h-46.25c-1.25 0-3-1.5-3-2.625v-25.625s0-1.125 1.125-0.625c1 0.5 10.375 7 16.5 11l-10.375 11.625c-0.25 0.25-0.25 0.5-0.125 0.625s0.5 0.125 0.75-0.125l12.25-10.375c1.875 1.25 3.125 2 3.375 2.125 1 0.5 1.75 0.5 2.625 0.5s1.625 0 2.625-0.5c0.25-0.125 1.5-0.875 3.375-2.125l12.25 10.375c0.25 0.25 0.625 0.25 0.75 0.125s0-0.375-0.25-0.625l-10.25-11.625c6.125-4 15.375-10.5 16.375-11z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#161</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={48}
                          height={64}
                          viewBox="0 0 48 64"
                        >
                          <path d="M46.875 49.5c0.75 1.125 1.125 2.5 1.125 4 0 3.5-2 6.5-7.875 6.5h-32.25c-5.875 0-7.875-3-7.875-6.5 0-1.5 0.375-2.875 1.125-4l6.125-9.125 6.125-9.625c1.625-2.5 2.625-5.5 2.625-8.75v-11.5s-1.75-4.25-2-5.375c-0.25-1 0.125-1.125 2.125-1.125h15.75c2 0 2.25 0.125 2 1.125-0.25 1.125-1.875 2.75-1.875 5.25v11.625c0 3.25 0.75 6.25 2.375 8.75zM43.125 55.125c0.375-0.375 0.875-1 0.875-1.75 0-0.625-0.25-1.25-0.5-1.75l-12.625-18.75c-2-3.25-2.875-7-2.875-10.875v-14h-8v14c0 4-1.125 7.75-3.125 10.875l-12.375 18.75c-0.25 0.5-0.5 1.125-0.5 1.75 0 0.75 0.375 1.375 0.75 1.75 0.5 0.5 1.5 0.875 3.125 0.875h32.25c1.625 0 2.5-0.375 3-0.875zM40.625 51.375c0.125 0.25 0.375 0.75 0.375 1 0 0.875-0.75 1.875-1.75 1.875h-30.5c-0.875 0-1.75-0.75-1.75-1.75 0-0.375 0.125-0.75 0.375-1l10.125-15.5h12.875l10.25 15.5v-0.125zM29.75 42.75c0.25 0.125 0.5 0.25 0.75 0.25s0.375 0 0.625-0.25c0.125-0.25 0.375-0.5 0.375-0.75s-0.125-0.5-0.375-0.75c-0.125-0.25-0.375-0.25-0.625-0.25s-0.5 0-0.75 0.25c-0.125 0.25-0.25 0.5-0.25 0.75s0 0.5 0.25 0.75zM35.625 50.125c0.5-0.25 0.5-0.875 0.25-1.375l-2.875-4.5c-0.125-0.25-0.5-0.5-0.875-0.5-0.25 0-0.375 0-0.5 0.125-0.5 0.25-0.5 0.875-0.25 1.375l2.875 4.5c0.125 0.25 0.625 0.5 0.875 0.5 0.125 0 0.375 0 0.5-0.125z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#162</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={64}
                          height={64}
                          viewBox="0 0 56 64"
                        >
                          <path d="M28 16c12.375 0 21.5 8.75 28 16.125-6.375 6.25-15.5 15.875-28 15.875s-19.625-7.5-28-16c9.75-9.875 17.75-16 28-16zM28 43.375c6.125 0 11.25-5.125 11.25-11.375s-5.125-11.375-11.25-11.375-11.25 5.125-11.25 11.375 5.125 11.375 11.25 11.375zM28 28c0 2.25 1.75 4 4 4 1 0 1.75-0.375 2.5-0.875v0.875c0 3.625-2.875 6.625-6.5 6.625s-6.5-3-6.5-6.625 2.875-6.625 6.5-6.625h1c-0.625 0.75-1 1.625-1 2.625z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#163</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={48}
                          height={64}
                          viewBox="0 0 48 64"
                        >
                          <path d="M39.625 16.125c1.5 0 2.375 0 2.375 2.5v3.5h-36v-3.5c0-2.5 1-2.5 2.5-2.5h31.125zM33.625 12c1.625 0 2.375 0.125 2.375 2.375h-24c0-2.25 0.875-2.375 2.5-2.375h19.125zM46 21.25c1.625 1 2.125 2.125 1.875 5.125l-2.125 23c-0.5 2.625-2 2.625-3 2.625h-37.5c-1 0-2.5 0-3-2.625l-2.125-23.125c-0.375-3.25 0.125-3.875 1.875-5l1.875-1.25v4h40.125v-4z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#164</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={52}
                          height={64}
                          viewBox="0 0 52 64"
                        >
                          <path d="M50 26c1.125 0 2 0.875 2 1.875v26.25c0 1-0.875 1.875-2 1.875h-48c-1.125 0-2-0.875-2-1.875v-26.25c0-1 0.75-1.75 1.625-1.875-0.25-0.25-0.375-0.5-0.5-0.875l-1.125-5.625c-0.25-1 0.625-2 1.625-2.25l46.25-9.25c1-0.25 2 0.5 2.25 1.5l1.125 5.75c0.25 1-0.5 2-1.5 2.25l-42.75 8.5h43zM32.125 50.25l-2.5-7.25 6.375-4.5h-7.75l-2.5-7.25-2.375 7.25h-7.875l6.375 4.5-2.375 7.25 6.25-4.5z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#165</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={40}
                          height={64}
                          viewBox="0 0 40 64"
                        >
                          <path d="M37.125 29.75c1.75 3 2.875 6.5 2.875 10.25 0 4.125-1.25 7.875-3.25 11v0 0c-3.625 5.375-9.75 9-16.75 9-2.125 0-4-0.125-5.75-0.875s-3.125-1.625-4.125-3.125c-1.375-2-2.125-3.5-2.625-6.5-0.75 3.125 0.25 6 1.125 7.5-5.375-3.25-8.625-8.875-8.625-15.625v-0.5c0.625-9.75 8.125-13.625 11.25-18.875 1-1.75 1.625-3.75 1.25-6 1.375 1.125 1.875 3.125 1.875 4.875 0 2-0.375 3.625-0.375 3.625 0.5-1 0.875-2.25 1.125-3.875 0.75-4.375 0.25-10.625-4.625-16.5l-0.125-0.125s0.875 0 2.25 0.375c11.875 2 21.125 11.375 23 23.25 0.25 1.5 0.375 2.875 0.375 4.375 0 2-0.25 4-0.625 5.875 1.25-2.875 1.625-5.375 1.75-6.875v-1.25z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#166</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={48}
                          height={64}
                          viewBox="0 0 48 64"
                        >
                          <path d="M45.25 22.75c0 0 1.5-0.25 2.75-0.75 0 2-0.875 4-1.125 4.5-3.5 6.25-12.375 15.375-22.625 10.5-8.125-3.875-11.5-3.75-14.625-3-0.125 0-0.25 0.125-0.375 0.125-0.375 0.125-1.875 0.625-3.25 0.125v-24.625c0-2 1.75-3.875 4.125-4.375 4.875-0.875 13.25-0.625 18.5 9.25 4.875 9.25 12.125 9 16.625 8.25zM3 4c0.5 0 1 0.5 1 1v54c0 0.5-0.5 1-1 1h-2c-0.5 0-1-0.5-1-1v-54c0-0.5 0.5-1 1-1h2z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#167</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={40}
                          height={64}
                          viewBox="0 0 40 64"
                        >
                          <path d="M0 36l28-32-6.375 24h18.375l-28 32 6.375-24h-18.375z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#168</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={48}
                          height={64}
                          viewBox="0 0 48 64"
                        >
                          <path d="M45.75 24c2.25 0 2.375 0.875 2.25 2.25l-1.5 23.25c-0.125 1.375-0.375 2.5-2.625 2.5h-39.625c-2.25 0-2.5-1.125-2.625-2.5l-1.625-23c-0.125-1.375 0-2.5 2.25-2.5h43.5zM45.25 17.875l0.25 4.125h-43c0-0.75 0.5-5.75 0.75-7.875 0.25-2.25 1-2.125 3.125-2.125h9.375c3.5 0 2.875 0 4.625 1.875 2 2.25 2.375 2.125 5.125 2.125h17.875c1.375 0 1.875 0.375 1.875 1.875z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#169</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={64}
                          height={64}
                          viewBox="0 0 56 64"
                        >
                          <path d="M28 4c15.5 0 28 4.5 28 10 0 1-0.375 1.875-1.125 2.75v0c-4.375 5.375-18.875 22.375-18.875 27.25v10.875c0 2.875-3.625 5.125-8 5.125s-8-2.25-8-5.125v0-10.875c0-4.875-14.625-22.125-18.625-27v0c-0.875-1-1.375-2-1.375-3 0-5.5 12.5-10 28-10zM28 20c11.5 0 22-2.75 22-6s-10.375-6-22-6-22 2.75-22 6 10.5 6 22 6z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#170</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={48}
                          height={64}
                          viewBox="0 0 48 64"
                        >
                          <path d="M43.375 32c0 3 1.875 5.375 4.625 7-0.5 1.625-1.25 3.25-2 4.75-3.125-0.75-5.625 0.375-7.75 2.5s-2.75 4.625-2 7.75c-1.5 0.75-3.125 1.5-4.75 2-1.625-2.75-4.5-4.625-7.5-4.625s-5.875 1.875-7.5 4.625c-1.625-0.5-3.375-1.25-4.875-2 0.75-3.125 0.25-5.625-1.875-7.75s-4.625-2.625-7.75-1.875c-0.75-1.5-1.5-3.25-2-4.875 2.75-1.625 4.625-4.5 4.625-7.5s-1.875-5.375-4.625-7c0.5-1.625 1.125-3.25 2-4.75 3.125 0.75 5.625-0.375 7.75-2.5s2.625-4.625 1.875-7.75c1.5-0.75 3.25-1.5 4.875-2 1.625 2.75 4.5 4.625 7.5 4.625s5.875-1.875 7.5-4.625c1.625 0.5 3.375 1.25 4.875 2-0.75 3.125-0.25 5.625 1.875 7.75s4.625 3.25 7.75 2.5c0.75 1.5 1.5 3.125 2 4.75-2.75 1.625-4.625 4-4.625 7zM24 44.25c6.75 0 12.25-5.5 12.25-12.25s-5.5-12.25-12.25-12.25-12.25 5.5-12.25 12.25 5.5 12.25 12.25 12.25z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#171</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={40}
                          height={64}
                          viewBox="0 0 40 64"
                        >
                          <path d="M8 19.125c0 0.5-0.375 0.875-0.875 0.875h-6.25c-0.5 0-0.875-0.375-0.875-0.875v-6.25c0-0.5 0.375-0.875 0.875-0.875h6.25c0.5 0 0.875 0.375 0.875 0.875v6.25zM24 19.125c0 0.5-0.375 0.875-0.875 0.875h-6.25c-0.5 0-0.875-0.375-0.875-0.875v-6.25c0-0.5 0.375-0.875 0.875-0.875h6.25c0.5 0 0.875 0.375 0.875 0.875v6.25zM40 19.125c0 0.5-0.375 0.875-0.875 0.875h-6.25c-0.5 0-0.875-0.375-0.875-0.875v-6.25c0-0.5 0.375-0.875 0.875-0.875h6.25c0.5 0 0.875 0.375 0.875 0.875v6.25zM8 35.125c0 0.5-0.375 0.875-0.875 0.875h-6.25c-0.5 0-0.875-0.375-0.875-0.875v-6.25c0-0.5 0.375-0.875 0.875-0.875h6.25c0.5 0 0.875 0.375 0.875 0.875v6.25zM24 35.125c0 0.5-0.375 0.875-0.875 0.875h-6.25c-0.5 0-0.875-0.375-0.875-0.875v-6.25c0-0.5 0.375-0.875 0.875-0.875h6.25c0.5 0 0.875 0.375 0.875 0.875v6.25zM40 35.125c0 0.5-0.375 0.875-0.875 0.875h-6.25c-0.5 0-0.875-0.375-0.875-0.875v-6.25c0-0.5 0.375-0.875 0.875-0.875h6.25c0.5 0 0.875 0.375 0.875 0.875v6.25zM8 51.125c0 0.5-0.375 0.875-0.875 0.875h-6.25c-0.5 0-0.875-0.375-0.875-0.875v-6.25c0-0.5 0.375-0.875 0.875-0.875h6.25c0.5 0 0.875 0.375 0.875 0.875v6.25zM24 51.125c0 0.5-0.375 0.875-0.875 0.875h-6.25c-0.5 0-0.875-0.375-0.875-0.875v-6.25c0-0.5 0.375-0.875 0.875-0.875h6.25c0.5 0 0.875 0.375 0.875 0.875v6.25zM40 51.125c0 0.5-0.375 0.875-0.875 0.875h-6.25c-0.5 0-0.875-0.375-0.875-0.875v-6.25c0-0.5 0.375-0.875 0.875-0.875h6.25c0.5 0 0.875 0.375 0.875 0.875v6.25z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#172</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={40}
                          height={64}
                          viewBox="0 0 40 64"
                        >
                          <path d="M39.25 4c0.375 0 0.75 0.375 0.75 0.75v10.5c0 0.375-0.375 0.75-0.75 0.75h-6.5c-0.375 0-0.75-0.375-0.75-0.75v-1.75c-0.75-0.625-2-1.125-2.75-0.875-0.875 0.25-2.875 1.625-3.75 3.125s-0.75 3.5-0.75 8.25l1 0.25c0.625 0.125 0.875 0.75 0.875 1.125v8.75c0 11.875 1.375 25.125 1.375 25.125 0 0.375-0.375 0.75-0.75 0.75h-10.5c-0.375 0-0.75-0.375-0.75-0.75 0 0 1.375-13.25 1.375-25.125v-8.75c0-0.375 0.375-1 0.875-1.125l0.875-0.25c0-5.375-0.625-7.25-2.75-9.25-2.25-2-5.125-2.375-7.875-2.125s-6.375 4.375-7.25 5.625-1.25-0.25-1.25-1.375c0.125-2 2.75-7.5 9-10.125s11.375-2.75 12.75-2.75 3.375 0.125 4.75 0.375 2 2.25 3.25 2.25c0.875 0 1.75-0.625 2.25-1.125v-0.75c0-0.375 0.375-0.75 0.75-0.75h6.5z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#173</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={48}
                          height={64}
                          viewBox="0 0 48 64"
                        >
                          <path d="M47.875 29.75c0.375 6.375-0.375 16.25-1.625 20.25-2.5 8.375-5 10-9 10s-7.25-3.375-7.25-7.375v-13.25c0-4.125 2.875-7.375 6.625-7.375 2.25 0 4.25 1.125 5.5 3 0 0 1.375-0.875 1.625-2.75s0.5-4.25-0.625-8-2.625-2.375-4.5-4.75c-0.25-0.375-0.625-0.875-1-1.25l-1.25-1.25c-0.25-0.25-0.375-0.375-0.625-0.5-1.375-1.125-2.625-2.125-4.25-2.875-2.375-1.125-4.875-1.625-7.5-1.625s-5.25 0.5-7.625 1.625c-1.625 0.75-2.75 1.75-4.125 2.875-0.25 0.125-0.375 0.25-0.625 0.5l-1.25 1.25s-0.75 0.875-1 1.25c-1.875 2.375-3.375 1-4.5 4.75-1.125 3.875-0.875 6.125-0.625 8s1.625 2.75 1.625 2.75c1.25-1.875 3.25-3 5.5-3 3.75 0 6.625 3.375 6.625 7.375v13.25c0 4-3.25 7.375-7.25 7.375s-6.5-1.625-9-10c-1.25-4-2-13.875-1.625-20.25 0.375-7.5 2.75-13.5 7-18.125v0c1-1 1.875-2 3-2.875s2.375-1.625 3.625-2.25c3.125-1.625 6.625-2.5 10.25-2.5s7.125 0.875 10.25 2.5c1.25 0.625 2.375 1.375 3.5 2.25s2.125 1.875 3.125 2.875v0c4.25 4.625 6.625 10.625 7 18.125z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#174</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={52}
                          height={64}
                          viewBox="0 0 52 64"
                        >
                          <path d="M47.75 12c5.75 5.875 5.75 15.5 0 21.375l-21.75 22.625-21.75-22.625c-5.75-5.875-5.75-15.5 0-21.375 5-5.25 13.375-5.25 18.375 0l3.375 3.5 3.5-3.5c5-5.25 13.25-5.25 18.25 0z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#175</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={32}
                          height={64}
                          viewBox="0 0 32 64"
                        >
                          <path d="M27.125 9.625c3.125 2.375 4.875 5.75 4.875 10.375 0 2.75-1 5.25-2.375 7.125-0.875 1.125-2.625 2.625-5 4.5l-2.625 1.75c-1.25 1-2.125 2.25-2.5 3.5-0.25 0.75-0.375 2.375-0.375 3.625 0 0.25-0.125 0.75-0.875 0.75h-7.75c-0.875 0-0.875-0.375-0.875-0.625 0.125-3.25 0.5-6.125 1.875-8.25 1.875-2.875 7.125-6 7.125-6 0.75-0.625 1.375-1.125 1.875-1.875 0.875-1.25 1.5-2.625 1.5-4 0-1.625-0.375-3.25-1.375-4.5-1.25-1.5-2.625-2.25-5.125-2.25s-4 1.375-5 3-0.875 3.625-0.875 5.375h-9.625c0-6.75 1.75-11 5.5-13.5 2.5-1.75 5.625-2.5 9.375-2.5 4.875 0 8.75 0.875 12.25 3.5zM14.25 46.25c3.375 0.125 5.875 2.5 5.75 6s-2.75 5.75-6.125 5.625c-3.25-0.125-5.75-2.375-5.625-5.875s2.75-5.875 6-5.75z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#176</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={64}
                          height={64}
                          viewBox="0 0 56 64"
                        >
                          <path d="M28 4c15.5 0 28 12.5 28 28s-12.5 28-28 28-28-12.5-28-28 12.5-28 28-28zM50.25 23c-1.25-3-2.875-5.625-5.25-8s-5.125-4-8.125-5.25l-2.375 7.625c1.75 0.75 3.375 1.875 4.75 3.25s2.625 3 3.375 4.75zM28 44c6.625 0 12-5.375 12-12s-5.375-12-12-12-12 5.375-12 12 5.375 12 12 12zM11 15c-2.375 2.375-4 5.125-5.25 8.125l7.625 2.375c0.75-1.75 1.875-3.375 3.25-4.75s3-2.625 4.75-3.375l-2.375-7.625c-3 1.25-5.625 2.875-8 5.25zM5.75 41c1.25 3 2.875 5.625 5.25 8s5.125 4 8.125 5.25l2.375-7.625c-1.75-0.75-3.375-1.875-4.75-3.25s-2.625-3-3.375-4.75zM45 49c2.375-2.375 4-5.125 5.25-8.125l-7.625-2.375c-0.75 1.75-1.875 3.375-3.25 4.75s-3 2.625-4.75 3.375l2.375 7.625c3-1.25 5.625-2.875 8-5.25z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#177</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={48}
                          height={64}
                          viewBox="0 0 48 64"
                        >
                          <path d="M48 36h-6v20h-12v-16h-12v16h-12v-20h-6l24-28z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#178</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={40}
                          height={64}
                          viewBox="0 0 40 64"
                        >
                          <path d="M4 32h32l-16 28zM38.375 21.625c1 0.625 1.625 1.625 1.625 2.875 0 2-1.75 3.5-3.75 3.5h-32.5c-2 0-3.75-1.625-3.75-3.5 0-1.25 0.75-2.25 1.75-2.875 0.125 0 0.125-0.25 0.25-0.25 0.5-0.375 0.875-0.875 1-1.5v-0.125c-0.25-0.75-0.25-1.5-0.25-2.25 0-5.25 4.25-9.5 9.5-9.5 1 0 2 0.25 2.875 0.5-0.375 1.5-0.5 3.875-0.5 3.875 0.25-1.875 1.375-3.625 1.375-3.625 2.25-2.875 5.75-4.75 9.625-4.75 6.625 0 12 5.375 12 12 0 1.375-0.25 2.625-0.625 3.75v0.125c0 0.5 0.5 1.125 1 1.5 0.125 0 0.25 0.25 0.375 0.25z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#179</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={64}
                          height={64}
                          viewBox="0 0 56 64"
                        >
                          <path d="M42 28c-3.25 0-6-2.75-6-6s2.75-6 6-6 6 2.75 6 6-2.75 6-6 6zM52.5 8c2 0 3.5 1.5 3.5 3.5v41c0 2-1.5 3.5-3.5 3.5h-49c-2 0-3.5-1.5-3.5-3.5v-41c0-2 1.5-3.5 3.5-3.5h49zM39.625 32.75l12.375 13.25v-32.5c0-0.875-0.75-1.5-1.625-1.5h-44.75c-0.875 0-1.5 0.625-1.625 1.5v32.5l15.75-19c0.5-0.5 1.25-1 2.125-1s1.625 0.25 2.125 0.875l6.75 7.375 0.5 0.5c0.375 0.25 0.875 0.5 1.375 0.5s1-0.25 1.5-0.625l2.25-2c0.5-0.375 1-0.625 1.625-0.625s1.25 0.25 1.625 0.75z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#180</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={64}
                          height={64}
                          viewBox="0 0 56 64"
                        >
                          <path d="M53.25 17.5c1.625 0.125 2.875 1.5 2.75 3l-1.75 32.875c-0.125 1.625-1.5 2.75-3.125 2.625l-41.25-2c-1.625-0.125-2.875-1.25-2.75-2.875l0.25-5.75-1.875 0.125c-1.5 0.125-2.75-0.875-2.875-2.25l-2.625-29.5c-0.125-1.375 0.875-2.625 2.375-2.75l37-3c1.5-0.125 2.75 0.875 2.875 2.25l0.625 6.75zM8.875 18.25c0.125-1.5 1.375-2.75 3-2.75l27.375 1.375-0.25-3.875h-0.125v-0.125c-0.125-0.625-0.625-1-1.25-1l-32.625 2.75c-0.625 0-1.25 0.5-1.25 1.125v0 0.125l2 22.25 2.25-3.125zM50.625 47.75l1.25-24.75v-0.125c0-0.75-0.625-1.25-1.375-1.25l-7.25-0.375-3.625-0.25-25.5-1.125c-0.75 0-1.375 0.5-1.5 1.125v0 0.125l-0.375 7.875-0.875 16v0.875l0.75-0.875 12.75-13.625c0.5-0.5 1-0.75 1.75-0.75s1.375 0.375 1.75 0.875l5.375 6.125 0.375 0.375c0.25 0.25 0.75 0.5 1.25 0.5s0.625-0.125 1.125-0.375l2.125-1.5c0.5-0.375 0.875-0.5 1.375-0.5s1.125 0.25 1.375 0.625l3.375 4.125zM42.625 32.75c-2.5 0-4.375-1.875-4.375-4.375s2-4.375 4.375-4.375c2.5 0 4.375 2 4.375 4.375s-2 4.375-4.375 4.375z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#181</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30">
                    <div className="icons-example-box">
                      <div className="icons-example-box-icon">
                        {/* Icon Code */}
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          width={64}
                          height={64}
                          viewBox="0 0 56 64"
                        >
                          <path d="M56 31.625c0.25 15.5-12.125 28.125-27.625 28.375s-28.125-12.125-28.375-27.625 12.125-28.125 27.625-28.375 28.125 12.125 28.375 27.625zM28 14c-2.25 0-4 1.75-4 4s1.75 4 4 4 4-1.75 4-4-1.75-4-4-4zM33.5 49.375v-1.375h-2.75v-21.5h-8.25v1.5h2.75v20h-2.75v1.375h11z" />
                        </svg>
                        {/* End Icon Code */}
                        <div className="icons-example-box-number">#182</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
          <Footer1 />
        </div>{" "}
      </div>
    </>
  );
}
