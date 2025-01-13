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
import Features from "@/components/homes/home-1/Features";
import { menuItemsDark } from "@/data/menu";

export const metadata = {
  title:
    "Element Page Features Dark || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function ElementPageFeaturesDark() {
  return (
    <>
      <div className="theme-main">
        <div className="dark-mode">
          <div className="page bg-dark-1" id="top">
            <nav className="main-nav dark dark-mode transparent stick-fixed wow-menubar">
              <Header1Multipage links={menuItemsDark} />
            </nav>
            <main id="main">
              <section className="page-section pt-0 pb-0" id="home">
                <ParallaxContainer
                  className="page-section bg-dark-1 bg-dark-alpha-80 light-content parallax-5"
                  style={{
                    backgroundImage:
                      "url(/assets/images/full-width-images/section-bg-2.jpg)",
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
                              <AnimatedText text="Features Boxes" />
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
              <>
                {/* Section */}
                <section className="page-section bg-dark-1 light-content">
                  <div className="container position-relative">
                    <div className="row mb-n30">
                      {/* Services Item*/}
                      <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-30">
                        <div className="services-3-item round text-center">
                          <div
                            className="wow fadeInUpShort"
                            data-wow-offset={50}
                          >
                            <div className="services-3-icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={48}
                                height={64}
                                viewBox="0 0 48 64"
                                aria-hidden="true"
                              >
                                <path d="M16 18.75l32 32-4.25 4.25-32-32zM18.625 27l25.125 25.125 1.375-1.375-25.125-25.25zM15 13v-5h2v5h-2zM15 38.5v-5h2v5h-2zM27 24v-2h5v2h-5zM0 24v-2h5v2h-5zM5.875 11.75l3.625 3.625-1.5 1.375-3.5-3.5zM9.5 31.25l-3.625 3.5-1.375-1.375 3.5-3.5zM27.5 13.25l-3.5 3.5-1.5-1.375 3.625-3.625z" />
                              </svg>
                            </div>
                            <h3 className="services-3-title">Brand Strategy</h3>
                            <div className="services-3-text">
                              A brand is a name, term, design, lorem ipsum
                              symbol or any other feature that identifies one
                              seller's good or service as distinct from those of
                              other sellers.
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* End Services Item*/}
                      {/* Services Item*/}
                      <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-30">
                        <div className="services-3-item round text-center">
                          <div
                            className="wow fadeInUpShort"
                            data-wow-offset={50}
                          >
                            <div className="services-3-icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={60}
                                height={64}
                                viewBox="0 0 60 64"
                                aria-hidden="true"
                              >
                                <path d="M60 48h-22v2h8v2h-32.125v-2h8v-2h-21.875v-36h60v36zM2 14v32h56v-32h-56z" />
                              </svg>
                            </div>
                            <h3 className="services-3-title">UI/UX Design</h3>
                            <div className="services-3-text">
                              Product design is sometimes confused with
                              industrial design, and has recently become a broad
                              term inclusive of service, and physical product
                              design.
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* End Services Item*/}
                      {/* Services Item*/}
                      <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-30">
                        <div className="services-3-item round text-center">
                          <div
                            className="wow fadeInUpShort"
                            data-wow-offset={50}
                          >
                            <div className="services-3-icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={50}
                                height={64}
                                viewBox="0 0 50 64"
                                aria-hidden="true"
                              >
                                <path d="M0 11h50v42h-50v-42zM9 51v-6h-7v6h7zM9 43v-6h-7v6h7zM9 35v-6h-7v6h7zM9 27v-6h-7v6h7zM9 19v-6h-7v6h7zM39 51v-18h-28v18h28zM39 31v-18h-28v18h28zM48 51v-6h-7v6h7zM48 43v-6h-7v6h7zM48 35v-6h-7v6h7zM48 27v-6h-7v6h7zM48 19v-6h-7v6h7z" />
                              </svg>
                            </div>
                            <h3 className="services-3-title">
                              Animation Design
                            </h3>
                            <div className="services-3-text">
                              In traditional animation, images are drawn or
                              painted by hand on transparent celluloid sheets to
                              be photographed and exhibited on film or other
                              media.
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* End Services Item*/}
                      {/* Services Item*/}
                      <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-30">
                        <div className="services-3-item round text-center">
                          <div
                            className="wow fadeInUpShort"
                            data-wow-offset={50}
                          >
                            <div className="services-3-icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={48}
                                height={64}
                                viewBox="0 0 48 64"
                                aria-hidden="true"
                              >
                                <path d="M24.125 20c3.25 0 6.25 1.25 8.5 3.5s3.5 5.25 3.5 8.5-1.25 6.25-3.5 8.5-5.25 3.5-8.5 3.5-6.25-1.25-8.5-3.5-3.5-5.25-3.5-8.5 1.25-6.25 3.5-8.5 5.25-3.5 8.5-3.5zM24.125 42c5.5 0 10-4.5 10-10s-4.5-10-10-10-10 4.5-10 10 4.5 10 10 10zM17.25 10.375c-1.25 0.375-2.5 0.875-3.75 1.5 0.25 1 0.125 2 0 3-0.25 1.625-1 3.125-2.25 4.375-1.5 1.5-3.625 2.375-5.75 2.375-0.5 0-1.125 0-1.625-0.125-0.625 1.25-1.125 2.5-1.5 3.75 0.875 0.5 1.5 1.25 2.125 2.125 1 1.375 1.5 3 1.5 4.625s-0.5 3.25-1.5 4.625c-0.625 0.875-1.25 1.625-2.125 2.125 0.375 1.25 0.875 2.5 1.5 3.75 0.5-0.125 1.125-0.125 1.625-0.125 2.125 0 4.25 0.875 5.75 2.375 1.25 1.25 2 2.75 2.25 4.375 0.125 1 0.25 2 0 3 1.25 0.625 2.5 1.125 3.75 1.5 0.5-0.875 1.25-1.5 2.125-2.125 1.375-1 3-1.5 4.625-1.5s3.25 0.5 4.625 1.5c0.875 0.625 1.625 1.25 2.125 2.125 1.25-0.375 2.5-0.875 3.75-1.5-0.25-1-0.125-2 0-3 0.25-1.625 1-3.125 2.25-4.375 1.5-1.5 3.625-2.375 5.75-2.375 0.5 0 1.125 0 1.625 0.125 0.625-1.25 1.125-2.5 1.5-3.75-0.875-0.5-1.5-1.25-2.125-2.125-1-1.375-1.5-3-1.5-4.625s0.5-3.25 1.5-4.625c0.625-0.875 1.25-1.625 2.125-2.125-0.375-1.25-0.875-2.5-1.5-3.75-0.5 0.125-1.125 0.125-1.625 0.125-2.125 0-4.25-0.875-5.75-2.375-1.25-1.25-2-2.75-2.25-4.375-0.125-1-0.25-2 0-3-1.25-0.625-2.5-1.125-3.75-1.5-0.5 0.875-1.25 1.5-2.125 2.125-1.375 1-3 1.5-4.625 1.5s-3.25-0.5-4.625-1.5c-0.875-0.625-1.625-1.25-2.125-2.125zM29.75 8v0c2.5 0.625 5 1.625 7.125 3-1 2.25-0.625 5 1.25 6.875 1.25 1.25 2.75 1.75 4.375 1.75 0.875 0 1.75-0.125 2.5-0.5 1.375 2.125 2.375 4.625 3 7.125-2.375 0.875-4 3.125-4 5.75s1.75 4.875 4 5.75c-0.625 2.5-1.625 5-3 7.125-0.75-0.375-1.625-0.5-2.5-0.5-1.625 0-3.125 0.5-4.375 1.75-1.875 1.875-2.25 4.625-1.25 6.875-2.125 1.375-4.625 2.375-7.125 3-0.875-2.25-3.125-4-5.75-4s-4.875 1.75-5.75 4c-2.5-0.625-5-1.625-7.125-3 1-2.25 0.625-5-1.25-6.875-1.25-1.25-2.75-1.75-4.375-1.75-0.875 0-1.75 0.125-2.5 0.5-1.375-2.125-2.375-4.625-3-7.125 2.25-0.875 4-3.125 4-5.75s-1.625-4.875-4-5.75c0.625-2.5 1.625-5 3-7.125 0.75 0.375 1.625 0.5 2.5 0.5 1.625 0 3.125-0.5 4.375-1.75 1.875-1.875 2.25-4.625 1.25-6.875 2.125-1.375 4.625-2.375 7.125-3 0.875 2.375 3.125 4 5.75 4s4.875-1.625 5.75-4z" />
                              </svg>
                            </div>
                            <h3 className="services-3-title">Development</h3>
                            <div className="services-3-text">
                              Web development can range from developing a simple
                              single static page of plain text to complex web
                              applications and social network services.
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* End Services Item*/}
                      {/* Services Item*/}
                      <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-30">
                        <div className="services-3-item round text-center">
                          <div
                            className="wow fadeInUpShort"
                            data-wow-offset={50}
                          >
                            <div className="services-3-icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={48}
                                height={64}
                                viewBox="0 0 48 64"
                                aria-hidden="true"
                              >
                                <path d="M44.25 20c2.25 0 3.75 1.625 3.75 3.875v22c0 2.25-1.5 4.125-3.75 4.125h-40c-2.25 0-4.25-1.875-4.25-4.125v-22c0-2.25 2-3.875 4.25-3.875h1.625v-2h4.25v2h1.625c4-4.5 5.375-6 6.875-6h11c1.5 0 2.875 1.5 6.875 6h7.75zM46 45.875v-22c0-1.125-0.625-1.875-1.75-1.875h-8.625l-0.625-0.375c-0.375-0.5-0.875-1-1.25-1.375-1.5-1.625-2.5-3-3.25-3.75-0.625-0.625-0.875-0.5-0.875-0.5h-11s-0.25 0-0.875 0.5c-0.75 0.625-1.75 1.75-3.125 3.375-0.375 0.5-0.875 1.25-1.375 1.75l-0.625 0.375h-8.375c-1.125 0-2.25 0.875-2.25 1.875v22c0 1.125 1.125 2.125 2.25 2.125h40c1 0 1.75-1 1.75-2.125zM24 23.75c5.875 0 10.75 4.75 10.75 10.625s-4.875 10.625-10.75 10.625-10.75-4.75-10.75-10.625 4.875-10.625 10.75-10.625zM24 43c4.75 0 8.75-3.875 8.75-8.625s-4-8.625-8.75-8.625-8.75 3.875-8.75 8.625 4 8.625 8.75 8.625zM36 26.125v-2.125h2.125v2.125h-2.125zM20 34.375c0-2.625 1.375-4 4-4s4 1.375 4 4-1.375 4-4 4-4-1.375-4-4z" />
                              </svg>
                            </div>
                            <h3 className="services-3-title">Photography</h3>
                            <div className="services-3-text">
                              A brand is a name, term, design, symbol or any
                              other feature that identifies one seller's good or
                              service as distinct from those of other sellers.
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* End Services Item*/}
                      {/* Services Item*/}
                      <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-30">
                        <div className="services-3-item round text-center">
                          <div
                            className="wow fadeInUpShort"
                            data-wow-offset={50}
                          >
                            <div className="services-3-icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={36}
                                height={64}
                                viewBox="0 0 36 64"
                                aria-hidden="true"
                              >
                                <path d="M4 20v-8h28v8h-28zM6 14v4h24v-4h-24zM32 8c2.25 0 4 1.75 4 4v40c0 2.25-1.75 4-4 4h-28c-2.25 0-4-1.75-4-4v-40c0-2.25 1.75-4 4-4h28zM34 52v-40c0-1.125-0.875-2-2-2h-28c-1.125 0-2 0.875-2 2v40c0 1.125 0.875 2 2 2h28c1.125 0 2-0.875 2-2zM6 30h6v2h-8v-8h2v6zM6 40h6v2h-8v-8h2v6zM6 50h6v2h-8v-8h2v6zM16 30h6v2h-8v-8h2v6zM26 30h6v2h-8v-8h2v6zM16 40h6v2h-8v-8h2v6zM16 50h6v2h-8v-8h2v6zM26 50h6v2h-8v-18h2v16z" />
                              </svg>
                            </div>
                            <h3 className="services-3-title">Marketing</h3>
                            <div className="services-3-text">
                              Marketing is typically done by the seller or
                              retailer. Sometimes tasks are contracted to a
                              dedicated marketing firm or advertising agency and
                              business.
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* End Services Item*/}
                    </div>
                  </div>
                </section>
                {/* End Section */}
                {/* Divider */}
                <hr className="mt-0 mb-0 white" />
                {/* End Divider */}
                {/* Benefits Section */}
                <section className="page-section bg-dark-1 light-content">
                  <div className="container position-relative">
                    <div className="row">
                      {/* Section Text */}
                      <div className="col-lg-5 col-xl-5 offset-xl-1 d-flex align-items-center mb-md-60 mb-sm-40">
                        <div className="w-100">
                          <h2 className="section-caption mb-30 mb-xs-10">
                            Benefits
                          </h2>
                          <h3 className="section-title mb-30">
                            Why choose Resonance?
                          </h3>
                          <p className="section-descr mb-50 mb-sm-30">
                            A static website stores a unique file for every page
                            of a static website. Each time that page is
                            requested, the same content is returned.
                          </p>
                          {/* Numbers */}
                          <div className="row mt-sm-n10">
                            <div className="col-md-6 mt-sm-10">
                              <div className="number-3-title black">5,000+</div>
                              <div className="number-3-descr">
                                Customers Reviews
                              </div>
                            </div>
                            <div className="col-md-6 mt-sm-10">
                              <div className="number-3-title black">99.9%</div>
                              <div className="number-3-descr">
                                Satisfied Customers
                              </div>
                            </div>
                          </div>
                          {/* End Numbers */}
                        </div>
                      </div>
                      {/* End Section Text */}
                      {/* Benefits Grid */}
                      <div className="col-lg-7 col-xl-6 d-flex align-items-center order-lg-first">
                        <div className="w-100 position-relative">
                          <div className="row masonry mb-n30 wow fadeInUp">
                            {/* Benefits Item */}
                            <div className="col-md-6 mb-30">
                              <div className="alt-features-item box-shadow text-center mt-0">
                                <div className="alt-features-icon mb-10">
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
                                    <path d="M21.62 20.196c1.055-.922 1.737-2.262 1.737-3.772 0-1.321-.521-2.515-1.357-3.412v-6.946l-11.001-6.066-11 6v12.131l11 5.869 5.468-2.917c.578.231 1.205.367 1.865.367.903 0 1.739-.258 2.471-.676l2.394 3.226.803-.596-2.38-3.208zm-11.121 2.404l-9.5-5.069v-10.447l9.5 4.946v10.57zm1-.001v-10.567l5.067-2.608.029.015.021-.04 4.384-2.256v5.039c-.774-.488-1.686-.782-2.668-.782-2.773 0-5.024 2.252-5.024 5.024 0 1.686.838 3.171 2.113 4.083l-3.922 2.092zm6.833-2.149c-2.219 0-4.024-1.808-4.024-4.026s1.805-4.025 4.024-4.025c2.22 0 4.025 1.807 4.025 4.025 0 2.218-1.805 4.026-4.025 4.026zm-.364-3.333l-1.306-1.147-.66.751 2.029 1.782 2.966-3.12-.725-.689-2.304 2.423zm-16.371-10.85l4.349-2.372 9.534 4.964-4.479 2.305-9.404-4.897zm9.4-5.127l9.404 5.186-3.832 1.972-9.565-4.98 3.993-2.178z" />
                                  </svg>
                                </div>
                                <h4 className="alt-features-title">
                                  Unique Design
                                </h4>
                                <div className="alt-features-descr">
                                  Fusce aliquet quam eget neque ultrices
                                  elementum felis id arcu blandit sagittis.
                                </div>
                              </div>
                            </div>
                            {/* End Benefits Item */}
                            {/* Benefits Item */}
                            <div className="col-md-6 mt-50 mt-sm-0 mb-30">
                              <div className="alt-features-item box-shadow text-center mt-0">
                                <div className="alt-features-icon mb-10">
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
                                    <path d="M12 0c-3.371 2.866-5.484 3-9 3v11.535c0 4.603 3.203 5.804 9 9.465 5.797-3.661 9-4.862 9-9.465v-11.535c-3.516 0-5.629-.134-9-3zm0 1.292c2.942 2.31 5.12 2.655 8 2.701v10.542c0 3.891-2.638 4.943-8 8.284-5.375-3.35-8-4.414-8-8.284v-10.542c2.88-.046 5.058-.391 8-2.701zm5 7.739l-5.992 6.623-3.672-3.931.701-.683 3.008 3.184 5.227-5.878.728.685z" />
                                  </svg>
                                </div>
                                <h4 className="alt-features-title">
                                  Quality Code
                                </h4>
                                <div className="alt-features-descr">
                                  Lorem ipsum dolor sit amet rembe adipiscing
                                  elite Inwege maximus ligula imsum.
                                </div>
                              </div>
                            </div>
                            {/* End Benefits Item */}
                            {/* Benefits Item */}
                            <div className="col-md-6 mb-30">
                              <div className="alt-features-item box-shadow text-center mt-0">
                                <div className="alt-features-icon mb-10">
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
                                    <path d="M6.514 24.015h-3v-3.39c-2.08-.638-3.5-2.652-3.5-5.04 0-1.19.202-1.693 1.774-5.603.521-1.294 1.195-2.97 2.068-5.179.204-.518.67-.806 1.17-.802.482.004.941.284 1.146.802.718 1.817 1.302 3.274 1.777 4.454.26-.596.567-1.288.928-2.103.694-1.565 1.591-3.592 2.754-6.265.258-.592.881-.906 1.397-.888.572.015 1.126.329 1.369.888 1.163 2.673 2.06 4.7 2.754 6.265 2.094 4.727 2.363 5.334 2.363 6.764 0 2.927-2.078 5.422-5 6.082v4.015h-3v-4.015c-.943-.213-1.797-.617-2.523-1.165-.612.845-1.466 1.48-2.477 1.79v3.39zm14.493-6c1.652 0 2.993 1.341 2.993 2.993s-1.341 2.993-2.993 2.993-2.993-1.341-2.993-2.993 1.341-2.993 2.993-2.993zm.007.993c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2zm-7.5 3.993v-3.839c4.906-.786 5-4.751 5-5.244 0-1.218-.216-1.705-2.277-6.359-2.134-4.82-2.721-6.198-2.755-6.261-.079-.145-.193-.292-.455-.297-.238 0-.37.092-.481.297-.034.063-.621 1.441-2.755 6.261-2.061 4.654-2.277 5.141-2.277 6.359 0 .493.094 4.458 5 5.244v3.839h1zm-6.123-12.448l-.08-.198c-1.589-3.957-2.04-5.116-2.067-5.171-.072-.151-.15-.226-.226-.228-.109 0-.188.13-.235.228-.028.05-.316.818-2.066 5.171-1.542 3.833-1.703 4.233-1.703 5.23 0 1.988 1.076 3.728 3.5 4.25v3.166h1v-3.166c1.266-.273 2.159-.876 2.725-1.666-1.078-1.12-1.725-2.619-1.725-4.251 0-.979.126-1.572.877-3.365z" />
                                  </svg>
                                </div>
                                <h4 className="alt-features-title">
                                  Clean &amp; Minimal
                                </h4>
                                <div className="alt-features-descr">
                                  Maecenas volutpat, diam enime volutpa cramas
                                  luctus interdum sodales.
                                </div>
                              </div>
                            </div>
                            {/* End Benefits Item */}
                            {/* Benefits Item */}
                            <div className="col-md-6 mb-30">
                              <div className="alt-features-item box-shadow text-center mt-0">
                                <div className="alt-features-icon mb-10">
                                  <svg
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                  >
                                    <path d="M4.57 18.55l2.43.335-1.769 1.7.432 2.415-2.163-1.157-2.163 1.157.432-2.415-1.769-1.7 2.43-.335 1.07-2.207 1.07 2.207zm8.5 0l2.43.335-1.769 1.7.432 2.415-2.163-1.157-2.163 1.157.432-2.415-1.769-1.7 2.43-.335 1.07-2.207 1.07 2.207zm8.5 0l2.43.335-1.769 1.7.432 2.415-2.163-1.157-2.163 1.157.432-2.415-1.769-1.7 2.43-.335 1.07-2.207 1.07 2.207zm-18.473.918l-.917.126.667.641-.163.91.816-.436.816.436-.163-.91.667-.641-.917-.126-.403-.832-.403.832zm8.5 0l-.917.126.667.641-.163.91.816-.436.816.436-.163-.91.667-.641-.917-.126-.403-.832-.403.832zm8.5 0l-.917.126.667.641-.163.91.816-.436.816.436-.163-.91.667-.641-.917-.126-.403-.832-.403.832zm3.903-4.468h-24v-2.059c0-.99.079-1.562 1.249-1.833 1.352-.311 2.61-.585 1.999-1.734-1.852-3.502-.49-5.374 1.468-5.374 1.994 0 3.324 1.943 1.466 5.374-.318.585-.14.944.284 1.195.237-.226.591-.398 1.122-.521 1.683-.389 3.344-.736 2.545-2.209-2.366-4.364-.674-6.839 1.866-6.839 2.491 0 4.226 2.383 1.866 6.839-.775 1.464.826 1.812 2.545 2.209.532.123.887.295 1.123.522.425-.252.604-.61.285-1.196-1.858-3.431-.528-5.374 1.466-5.374 1.958 0 3.32 1.872 1.468 5.374-.61 1.149.647 1.423 1.999 1.734 1.17.271 1.249.843 1.249 1.833v2.059zm-6-1h5v-1.059c0-.783.021-.744-.475-.858-2.277-.536-2.551-.979-2.785-1.49-.162-.355-.27-.936.129-1.688.765-1.447.968-2.67.555-3.354-.393-.652-1.789-.83-2.289.012-.408.685-.197 1.931.562 3.334.407.749.301 1.332.141 1.688-.129.286-.282.581-.886.884.04.266.048.57.048.912v1.619zm-11.953-2.531c-.602-.304-.756-.598-.885-.884-.16-.356-.266-.939.141-1.688.76-1.403.971-2.649.562-3.334-.5-.842-1.896-.664-2.289-.012-.413.684-.21 1.907.555 3.354.399.752.291 1.333.129 1.688-.233.511-.508.954-2.785 1.49-.495.114-.475.075-.475.858v1.059h5v-1.623c0-.341.007-.643.047-.908zm10.953 2.531v-1.619c0-1.127-.03-1.178-.814-1.359-2.751-.634-3.093-1.162-3.359-1.744-.181-.395-.301-1.048.154-1.907 1.022-1.929 1.278-3.582.703-4.538-.437-.725-1.244-.833-1.685-.833-.446 0-1.259.11-1.699.85-.577.969-.318 2.613.712 4.512.465.857.348 1.51.169 1.909-.289.641-.679 1.114-3.368 1.751-.783.181-.813.232-.813 1.355v1.623h10z" />
                                  </svg>
                                </div>
                                <h4 className="alt-features-title">
                                  Premium Support
                                </h4>
                                <div className="alt-features-descr">
                                  Vivamus varius, nisi vel dictum tempor, libero
                                  nisl iaculis est, ut rutrum elit ante ac
                                  velit.
                                </div>
                              </div>
                            </div>
                            {/* End Benefits Item */}
                          </div>
                        </div>
                      </div>
                      {/* Benefits Grid */}
                    </div>
                  </div>
                </section>
                {/* End Benefits Section */}
                {/* Divider */}
                <hr className="mt-0 mb-0 white" />
                {/* End Divider */}
                {/* Steps Section */}
                <section className="page-section bg-dark-1 light-content">
                  <div className="container position-relative">
                    {/* Steps Grid */}
                    <div className="row mt-n30">
                      {/* Steps Item */}
                      <div
                        className="col-md-6 col-lg-4 d-flex align-items-stretch mt-30 wow fadeIn"
                        data-wow-duration="1.2s"
                        data-wow-delay={0}
                      >
                        <div className="features-2-item pt-sm-40 pb-sm-40">
                          <div className="features-2-label">Step 1</div>
                          <div className="features-2-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path d="M7 22v-16h14v7.543c0 4.107-6 2.457-6 2.457s1.518 6-2.638 6h-5.362zm16-7.614v-10.386h-18v20h8.189c3.163 0 9.811-7.223 9.811-9.614zm-10 1.614h-4v-1h4v1zm6-4h-10v1h10v-1zm0-3h-10v1h10v-1zm1-7h-17v19h-2v-21h19v2z" />
                            </svg>
                          </div>
                          <h4 className="features-2-title">Research</h4>
                          <div className="features-2-descr">
                            Integer commodo mi ut velit bibendum eleifend. Duis
                            nulla lectus, pharetra eu rhoncus id, pharetra ut
                            turpis.
                          </div>
                        </div>
                      </div>
                      {/* End Steps Items */}
                      {/* Steps Item */}
                      <div
                        className="col-md-6 col-lg-4 d-flex align-items-stretch mt-30 wow fadeIn"
                        data-wow-duration="1.2s"
                        data-wow-delay="0.15s"
                      >
                        <div className="features-2-item pt-sm-40 pb-sm-40">
                          <div className="features-2-label">Step 2</div>
                          <div className="features-2-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path d="M6.676 9.18c-1.426-.009-3.217.764-4.583 2.13-.521.521-.979 1.129-1.333 1.812 1.232-.933 2.547-1.225 4.086-.361.453-1.199 1.056-2.418 1.83-3.581zm8.154 8.143c-1.264.826-2.506 1.422-3.581 1.842.863 1.54.571 2.853-.361 4.085.684-.353 1.291-.812 1.812-1.334 1.37-1.369 2.144-3.165 2.13-4.593zm5.127-13.288c-.344-.024-.681-.035-1.011-.035-7.169 0-11.249 5.465-12.733 9.86l3.939 3.94c4.525-1.62 9.848-5.549 9.848-12.642 0-.366-.014-.74-.043-1.123zm-8.24 8.258c-.326-.325-.326-.853 0-1.178.325-.326.853-.326 1.178 0 .326.326.326.853 0 1.178-.326.326-.853.326-1.178 0zm2.356-2.356c-.651-.65-.651-1.706 0-2.357s1.706-.651 2.356 0c.651.651.651 1.706 0 2.357-.65.65-1.704.65-2.356 0zm-12.432 10.378l-.755-.755 4.34-4.323.755.755-4.34 4.323zm4.149 1.547l-.755-.755 3.029-3.054.755.755-3.029 3.054zm-5.035 2.138l-.755-.755 5.373-5.364.756.755-5.374 5.364zm21.083-14.291c-.188.618-.673 1.102-1.291 1.291.618.188 1.103.672 1.291 1.291.189-.619.673-1.103 1.291-1.291-.618-.188-1.102-.672-1.291-1.291zm-14.655-6.504c-.247.81-.881 1.443-1.69 1.69.81.247 1.443.881 1.69 1.69.248-.809.881-1.443 1.69-1.69-.81-.247-1.442-.88-1.69-1.69zm-1.827-3.205c-.199.649-.706 1.157-1.356 1.355.65.199 1.157.707 1.356 1.355.198-.649.706-1.157 1.354-1.355-.648-.198-1.155-.706-1.354-1.355zm5.387 0c-.316 1.035-1.127 1.846-2.163 2.163 1.036.316 1.847 1.126 2.163 2.163.316-1.036 1.127-1.846 2.162-2.163-1.035-.317-1.845-1.128-2.162-2.163zm11.095 13.64c-.316 1.036-1.127 1.846-2.163 2.163 1.036.316 1.847 1.162 2.163 2.197.316-1.036 1.127-1.881 2.162-2.197-1.035-.317-1.846-1.127-2.162-2.163z" />
                            </svg>
                          </div>
                          <h4 className="features-2-title">Implementation</h4>
                          <div className="features-2-descr">
                            Doneck maximus, dolor a condimentum congue, tellus
                            nisi dictum magna, ut viverra massa ex sit amet
                            nulla.
                          </div>
                        </div>
                      </div>
                      {/* End Steps Items */}
                      {/* Steps Item */}
                      <div
                        className="col-md-6 col-lg-4 d-flex align-items-stretch mt-30 wow fadeIn"
                        data-wow-duration="1.2s"
                        data-wow-delay="0.3s"
                      >
                        <div className="features-2-item pt-sm-40 pb-sm-40">
                          <div className="features-2-label">Step 3</div>
                          <div className="features-2-icon">
                            <svg
                              width={24}
                              height={24}
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path d="M24 20h-3v4l-5.333-4h-7.667v-4h2v2h6.333l2.667 2v-2h3v-8.001h-2v-2h4v12.001zm-6-6h-9.667l-5.333 4v-4h-3v-14.001h18v14.001zm-9-4.084h-5v1.084h5v-1.084zm5-2.916h-10v1h10v-1zm0-3h-10v1h10v-1z" />
                            </svg>
                          </div>
                          <h4 className="features-2-title">Production</h4>
                          <div className="features-2-descr">
                            Curabitur efficitur, nibh sed vestibulum facilisis,
                            libero lacus accumsan erat, quis ultrices risus urna
                            a lectus.
                          </div>
                        </div>
                      </div>
                      {/* End Steps Items */}
                    </div>
                    {/* End Steps Grid */}
                  </div>
                </section>
                {/* End Steps Section */}
                {/* Divider */}
                <hr className="mt-0 mb-0 white" />
                {/* End Divider */}
                {/* Features Section */}
                <section className="page-section bg-dark-1 light-content">
                  <div className="container position-relative">
                    {/* Features Grid */}
                    <div className="row mt-n30">
                      {/* Feature Item */}
                      <div
                        className="col-sm-6 col-xl-3 d-flex align-items-stretch wow fadeScaleIn"
                        data-wow-delay={0}
                      >
                        <div className="alt-features-item box-shadow text-center mt-30">
                          <div className="alt-features-icon mb-10">
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
                              <path d="M21.62 20.196c1.055-.922 1.737-2.262 1.737-3.772 0-1.321-.521-2.515-1.357-3.412v-6.946l-11.001-6.066-11 6v12.131l11 5.869 5.468-2.917c.578.231 1.205.367 1.865.367.903 0 1.739-.258 2.471-.676l2.394 3.226.803-.596-2.38-3.208zm-11.121 2.404l-9.5-5.069v-10.447l9.5 4.946v10.57zm1-.001v-10.567l5.067-2.608.029.015.021-.04 4.384-2.256v5.039c-.774-.488-1.686-.782-2.668-.782-2.773 0-5.024 2.252-5.024 5.024 0 1.686.838 3.171 2.113 4.083l-3.922 2.092zm6.833-2.149c-2.219 0-4.024-1.808-4.024-4.026s1.805-4.025 4.024-4.025c2.22 0 4.025 1.807 4.025 4.025 0 2.218-1.805 4.026-4.025 4.026zm-.364-3.333l-1.306-1.147-.66.751 2.029 1.782 2.966-3.12-.725-.689-2.304 2.423zm-16.371-10.85l4.349-2.372 9.534 4.964-4.479 2.305-9.404-4.897zm9.4-5.127l9.404 5.186-3.832 1.972-9.565-4.98 3.993-2.178z" />
                            </svg>
                          </div>
                          <h4 className="alt-features-title">Unique Design</h4>
                          <div className="alt-features-descr">
                            Fusce aliquet quam eget neque ultrices elementum
                            felis id arcu blandit sagittis.
                          </div>
                        </div>
                      </div>
                      {/* End Feature Item */}
                      {/* Feature Item */}
                      <div
                        className="col-sm-6 col-xl-3 d-flex align-items-stretch wow fadeScaleIn"
                        data-wow-delay="0.1s"
                      >
                        <div className="alt-features-item box-shadow text-center mt-30">
                          <div className="alt-features-icon mb-10">
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
                              <path d="M12 0c-3.371 2.866-5.484 3-9 3v11.535c0 4.603 3.203 5.804 9 9.465 5.797-3.661 9-4.862 9-9.465v-11.535c-3.516 0-5.629-.134-9-3zm0 1.292c2.942 2.31 5.12 2.655 8 2.701v10.542c0 3.891-2.638 4.943-8 8.284-5.375-3.35-8-4.414-8-8.284v-10.542c2.88-.046 5.058-.391 8-2.701zm5 7.739l-5.992 6.623-3.672-3.931.701-.683 3.008 3.184 5.227-5.878.728.685z" />
                            </svg>
                          </div>
                          <h4 className="alt-features-title">Quality Code</h4>
                          <div className="alt-features-descr">
                            Lorem ipsum dolor sit amet rembe adipiscing elite
                            Inwege maximus ligula imsum.
                          </div>
                        </div>
                      </div>
                      {/* End Feature Item */}
                      {/* Feature Item */}
                      <div
                        className="col-sm-6 col-xl-3 d-flex align-items-stretch wow fadeScaleIn"
                        data-wow-delay="0.2s"
                      >
                        <div className="alt-features-item box-shadow text-center mt-30">
                          <div className="alt-features-icon mb-10">
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
                              <path d="M6.514 24.015h-3v-3.39c-2.08-.638-3.5-2.652-3.5-5.04 0-1.19.202-1.693 1.774-5.603.521-1.294 1.195-2.97 2.068-5.179.204-.518.67-.806 1.17-.802.482.004.941.284 1.146.802.718 1.817 1.302 3.274 1.777 4.454.26-.596.567-1.288.928-2.103.694-1.565 1.591-3.592 2.754-6.265.258-.592.881-.906 1.397-.888.572.015 1.126.329 1.369.888 1.163 2.673 2.06 4.7 2.754 6.265 2.094 4.727 2.363 5.334 2.363 6.764 0 2.927-2.078 5.422-5 6.082v4.015h-3v-4.015c-.943-.213-1.797-.617-2.523-1.165-.612.845-1.466 1.48-2.477 1.79v3.39zm14.493-6c1.652 0 2.993 1.341 2.993 2.993s-1.341 2.993-2.993 2.993-2.993-1.341-2.993-2.993 1.341-2.993 2.993-2.993zm.007.993c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2zm-7.5 3.993v-3.839c4.906-.786 5-4.751 5-5.244 0-1.218-.216-1.705-2.277-6.359-2.134-4.82-2.721-6.198-2.755-6.261-.079-.145-.193-.292-.455-.297-.238 0-.37.092-.481.297-.034.063-.621 1.441-2.755 6.261-2.061 4.654-2.277 5.141-2.277 6.359 0 .493.094 4.458 5 5.244v3.839h1zm-6.123-12.448l-.08-.198c-1.589-3.957-2.04-5.116-2.067-5.171-.072-.151-.15-.226-.226-.228-.109 0-.188.13-.235.228-.028.05-.316.818-2.066 5.171-1.542 3.833-1.703 4.233-1.703 5.23 0 1.988 1.076 3.728 3.5 4.25v3.166h1v-3.166c1.266-.273 2.159-.876 2.725-1.666-1.078-1.12-1.725-2.619-1.725-4.251 0-.979.126-1.572.877-3.365z" />
                            </svg>
                          </div>
                          <h4 className="alt-features-title">
                            Clean &amp; Minimal
                          </h4>
                          <div className="alt-features-descr">
                            Maecenas volutpat, diam enime volutpa cramas luctus
                            interdum sodales.
                          </div>
                        </div>
                      </div>
                      {/* End Feature Item */}
                      {/* Feature Item */}
                      <div
                        className="col-sm-6 col-xl-3 d-flex align-items-stretch wow fadeScaleIn"
                        data-wow-delay="0.3s"
                      >
                        <div className="alt-features-item box-shadow text-center mt-30">
                          <div className="alt-features-icon mb-10">
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fillRule="evenodd"
                              clipRule="evenodd"
                            >
                              <path d="M4.57 18.55l2.43.335-1.769 1.7.432 2.415-2.163-1.157-2.163 1.157.432-2.415-1.769-1.7 2.43-.335 1.07-2.207 1.07 2.207zm8.5 0l2.43.335-1.769 1.7.432 2.415-2.163-1.157-2.163 1.157.432-2.415-1.769-1.7 2.43-.335 1.07-2.207 1.07 2.207zm8.5 0l2.43.335-1.769 1.7.432 2.415-2.163-1.157-2.163 1.157.432-2.415-1.769-1.7 2.43-.335 1.07-2.207 1.07 2.207zm-18.473.918l-.917.126.667.641-.163.91.816-.436.816.436-.163-.91.667-.641-.917-.126-.403-.832-.403.832zm8.5 0l-.917.126.667.641-.163.91.816-.436.816.436-.163-.91.667-.641-.917-.126-.403-.832-.403.832zm8.5 0l-.917.126.667.641-.163.91.816-.436.816.436-.163-.91.667-.641-.917-.126-.403-.832-.403.832zm3.903-4.468h-24v-2.059c0-.99.079-1.562 1.249-1.833 1.352-.311 2.61-.585 1.999-1.734-1.852-3.502-.49-5.374 1.468-5.374 1.994 0 3.324 1.943 1.466 5.374-.318.585-.14.944.284 1.195.237-.226.591-.398 1.122-.521 1.683-.389 3.344-.736 2.545-2.209-2.366-4.364-.674-6.839 1.866-6.839 2.491 0 4.226 2.383 1.866 6.839-.775 1.464.826 1.812 2.545 2.209.532.123.887.295 1.123.522.425-.252.604-.61.285-1.196-1.858-3.431-.528-5.374 1.466-5.374 1.958 0 3.32 1.872 1.468 5.374-.61 1.149.647 1.423 1.999 1.734 1.17.271 1.249.843 1.249 1.833v2.059zm-6-1h5v-1.059c0-.783.021-.744-.475-.858-2.277-.536-2.551-.979-2.785-1.49-.162-.355-.27-.936.129-1.688.765-1.447.968-2.67.555-3.354-.393-.652-1.789-.83-2.289.012-.408.685-.197 1.931.562 3.334.407.749.301 1.332.141 1.688-.129.286-.282.581-.886.884.04.266.048.57.048.912v1.619zm-11.953-2.531c-.602-.304-.756-.598-.885-.884-.16-.356-.266-.939.141-1.688.76-1.403.971-2.649.562-3.334-.5-.842-1.896-.664-2.289-.012-.413.684-.21 1.907.555 3.354.399.752.291 1.333.129 1.688-.233.511-.508.954-2.785 1.49-.495.114-.475.075-.475.858v1.059h5v-1.623c0-.341.007-.643.047-.908zm10.953 2.531v-1.619c0-1.127-.03-1.178-.814-1.359-2.751-.634-3.093-1.162-3.359-1.744-.181-.395-.301-1.048.154-1.907 1.022-1.929 1.278-3.582.703-4.538-.437-.725-1.244-.833-1.685-.833-.446 0-1.259.11-1.699.85-.577.969-.318 2.613.712 4.512.465.857.348 1.51.169 1.909-.289.641-.679 1.114-3.368 1.751-.783.181-.813.232-.813 1.355v1.623h10z" />
                            </svg>
                          </div>
                          <h4 className="alt-features-title">
                            Premium Support
                          </h4>
                          <div className="alt-features-descr">
                            Vivamus varius, nisi vel dictum tempor, libero nisl
                            iaculis est, ut rutrum elit ante ac velit.
                          </div>
                        </div>
                      </div>
                      {/* End Feature Item */}
                    </div>
                    {/* End Features Grid */}
                  </div>
                </section>
                {/* End Features Section */}
                {/* Features Slider Section */}
                <section
                  className="page-section bg-dark bg-dark-alpha-70 light-content"
                  style={{
                    backgroundImage:
                      "url(/assets/images/full-width-images/section-bg-4.jpg)",
                  }}
                >
                  <Features />
                </section>
                {/* End Features Slider Section */}
                {/* Benefits Section */}
                <section className="page-section bg-dark-1 light-content">
                  <div className="container position-relative">
                    {/* Grid */}
                    <div className="row">
                      {/* Text */}
                      <div className="col-md-12 col-lg-3 mb-md-50">
                        <h2 className="section-caption mb-xs-10">
                          Primary Benefits
                        </h2>
                        <h3 className="section-title-small mb-40">
                          Why choose Resonance?
                        </h3>
                        <div className="section-line" />
                      </div>
                      {/* End Text */}
                      {/* Feature Item */}
                      <div className="col-md-4 col-lg-3 d-flex align-items-stretch mb-sm-30">
                        <div className="alt-features-item border-left mt-0">
                          <div className="alt-features-icon">
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
                              <path d="M21.62 20.196c1.055-.922 1.737-2.262 1.737-3.772 0-1.321-.521-2.515-1.357-3.412v-6.946l-11.001-6.066-11 6v12.131l11 5.869 5.468-2.917c.578.231 1.205.367 1.865.367.903 0 1.739-.258 2.471-.676l2.394 3.226.803-.596-2.38-3.208zm-11.121 2.404l-9.5-5.069v-10.447l9.5 4.946v10.57zm1-.001v-10.567l5.067-2.608.029.015.021-.04 4.384-2.256v5.039c-.774-.488-1.686-.782-2.668-.782-2.773 0-5.024 2.252-5.024 5.024 0 1.686.838 3.171 2.113 4.083l-3.922 2.092zm6.833-2.149c-2.219 0-4.024-1.808-4.024-4.026s1.805-4.025 4.024-4.025c2.22 0 4.025 1.807 4.025 4.025 0 2.218-1.805 4.026-4.025 4.026zm-.364-3.333l-1.306-1.147-.66.751 2.029 1.782 2.966-3.12-.725-.689-2.304 2.423zm-16.371-10.85l4.349-2.372 9.534 4.964-4.479 2.305-9.404-4.897zm9.4-5.127l9.404 5.186-3.832 1.972-9.565-4.98 3.993-2.178z" />
                            </svg>
                          </div>
                          <h4 className="alt-features-title">Unique Design</h4>
                          <div className="alt-features-descr">
                            Fusce aliquet quam eget neque ultrices elementum
                            felis id arcu blandit sagittis.
                          </div>
                        </div>
                      </div>
                      {/* End Feature Item */}
                      {/* Feature Item */}
                      <div className="col-md-4 col-lg-3 d-flex align-items-stretch mb-sm-30">
                        <div className="alt-features-item border-left mt-0">
                          <div className="alt-features-icon">
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
                              <path d="M12 0c-3.371 2.866-5.484 3-9 3v11.535c0 4.603 3.203 5.804 9 9.465 5.797-3.661 9-4.862 9-9.465v-11.535c-3.516 0-5.629-.134-9-3zm0 1.292c2.942 2.31 5.12 2.655 8 2.701v10.542c0 3.891-2.638 4.943-8 8.284-5.375-3.35-8-4.414-8-8.284v-10.542c2.88-.046 5.058-.391 8-2.701zm5 7.739l-5.992 6.623-3.672-3.931.701-.683 3.008 3.184 5.227-5.878.728.685z" />
                            </svg>
                          </div>
                          <h4 className="alt-features-title">Quality Code</h4>
                          <div className="alt-features-descr">
                            Lorem ipsum dolor sit amet rembe adipiscing elite
                            Inwege maximus ligula imsum.
                          </div>
                        </div>
                      </div>
                      {/* End Feature Item */}
                      {/* Feature Item */}
                      <div className="col-md-4 col-lg-3 d-flex align-items-stretch">
                        <div className="alt-features-item border-left mt-0">
                          <div className="alt-features-icon">
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
                              <path d="M6.514 24.015h-3v-3.39c-2.08-.638-3.5-2.652-3.5-5.04 0-1.19.202-1.693 1.774-5.603.521-1.294 1.195-2.97 2.068-5.179.204-.518.67-.806 1.17-.802.482.004.941.284 1.146.802.718 1.817 1.302 3.274 1.777 4.454.26-.596.567-1.288.928-2.103.694-1.565 1.591-3.592 2.754-6.265.258-.592.881-.906 1.397-.888.572.015 1.126.329 1.369.888 1.163 2.673 2.06 4.7 2.754 6.265 2.094 4.727 2.363 5.334 2.363 6.764 0 2.927-2.078 5.422-5 6.082v4.015h-3v-4.015c-.943-.213-1.797-.617-2.523-1.165-.612.845-1.466 1.48-2.477 1.79v3.39zm14.493-6c1.652 0 2.993 1.341 2.993 2.993s-1.341 2.993-2.993 2.993-2.993-1.341-2.993-2.993 1.341-2.993 2.993-2.993zm.007.993c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2zm-7.5 3.993v-3.839c4.906-.786 5-4.751 5-5.244 0-1.218-.216-1.705-2.277-6.359-2.134-4.82-2.721-6.198-2.755-6.261-.079-.145-.193-.292-.455-.297-.238 0-.37.092-.481.297-.034.063-.621 1.441-2.755 6.261-2.061 4.654-2.277 5.141-2.277 6.359 0 .493.094 4.458 5 5.244v3.839h1zm-6.123-12.448l-.08-.198c-1.589-3.957-2.04-5.116-2.067-5.171-.072-.151-.15-.226-.226-.228-.109 0-.188.13-.235.228-.028.05-.316.818-2.066 5.171-1.542 3.833-1.703 4.233-1.703 5.23 0 1.988 1.076 3.728 3.5 4.25v3.166h1v-3.166c1.266-.273 2.159-.876 2.725-1.666-1.078-1.12-1.725-2.619-1.725-4.251 0-.979.126-1.572.877-3.365z" />
                            </svg>
                          </div>
                          <h4 className="alt-features-title">
                            Clean and Minimal
                          </h4>
                          <div className="alt-features-descr">
                            Maecenas volutpat, diam enime volutpa cramas luctus
                            interdum sodales.
                          </div>
                        </div>
                      </div>
                      {/* End Feature Item */}
                    </div>
                    {/* End Grid */}
                  </div>
                </section>
                {/* End Benefits Section */}
              </>
            </main>
            <Footer1 dark />
          </div>{" "}
        </div>
      </div>
    </>
  );
}
