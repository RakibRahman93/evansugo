import Footer7 from "@/components/footers/Footer7";
import Header7 from "@/components/headers/Header7";
import Cta3 from "@/components/homes/home-7/Cta3";
import Service from "@/components/homes/home-7/Service";
import Testimonials from "@/components/homes/home-7/Testimonials";
import { features5 } from "@/data/features";

import { gradientMultipage } from "@/data/menu";
import { progressData } from "@/data/skills";
import Image from "next/image";
import Link from "next/link";
const onePage = false;
const dark = false;
export const metadata = {
  title:
    "Gradient Services || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function GradientServicesPage() {
  return (
    <>
      <div className="theme-gradient">
        <div className="page" id="top">
          <nav className="main-nav transparent stick-fixed wow-menubar wch-unset">
            <Header7 links={gradientMultipage} />
          </nav>
          <main id="main">
            <section className="page-section bg-gradient-gray-light-1 bg-scroll overflow-hidden">
              <div className="bg-shape-1 wow fadeIn">
                <Image
                  src="/assets/images/demo-fancy/bg-shape-1.svg"
                  width={1443}
                  height={844}
                  alt=""
                />
              </div>

              <div className="container position-relative pt-10 pt-sm-40 text-center">
                <div className="row">
                  <div className="col-lg-10 offset-lg-1">
                    <h1
                      className="hs-title-1 mb-10 wow fadeInUpShort"
                      data-wow-duration="0.75s"
                    >
                      Our Services
                    </h1>

                    <p
                      className="section-descr mb-0 wow fadeIn"
                      data-wow-delay="0.2s"
                    >
                      Web design that leaves an impression.
                    </p>
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
                        Looking for exclusive creative services? Contact us and
                        get free online consultation for your brand or your
                        client's brand.
                      </p>
                      <div className="local-scroll">
                        <Link
                          href={`/gradient-contact${dark ? "-dark" : ""}`}
                          className="btn btn-mod btn-medium btn-grad btn-round"
                          data-btn-animate="y"
                        >
                          <span className="btn-animate-y">
                            <span className="btn-animate-y-1">
                              Contact Us
                              <i
                                className="mi-arrow-right size-24 align-center"
                                aria-hidden="true"
                              ></i>
                            </span>
                            <span
                              className="btn-animate-y-2"
                              aria-hidden="true"
                            >
                              Contact Us
                              <i
                                className="mi-arrow-right size-24 align-center"
                                aria-hidden="true"
                              ></i>
                            </span>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
                backgroundImage:
                  "url(/assets/images/demo-gradient/section-bg-3.jpg)",
              }}
            >
              {/* <!-- Desktop Overlay --> */}
              <div className="bg-overlay bg-gradient-dark-alpha-1 d-none d-md-block"></div>
              {/* <!-- End Desktop Overlay --> */}

              {/* <!-- Mobile Overlay --> */}
              <div className="bg-overlay bg-dark-1 opacity-09 d-md-none"></div>
              {/* <!-- End Mobile Overlay --> */}
              <div className="container position-relative">
                <div className="row wow fadeInUp">
                  <div className="col-md-7 col-lg-6 col-xl-5">
                    <h2 className="section-title mb-40 mb-sm-30">
                      Design Jumpstart for Your Business
                    </h2>
                    <p className="mb-50 mb-sm-40">
                      Praesent venenatis justo in ultrices tempor. Donec
                      maximus, dolor a condimentum congue, tellus nisi dictum
                      magna, uttere lorem ipsum viverra massa ex sit amet nulla.
                      Duis lobortis nisl sed aliquam sollicitudin.
                    </p>
                    <div className="local-scroll mb-70 mb-sm-50">
                      <Link
                        href={`/gradient-contact${dark ? "-dark" : ""}`}
                        className="btn btn-mod btn-medium btn-grad btn-round"
                        data-btn-animate="y"
                      >
                        <span className="btn-animate-y">
                          <span className="btn-animate-y-1">
                            Contact Us
                            <i
                              className="mi-arrow-right size-24 align-center"
                              aria-hidden="true"
                            ></i>
                          </span>
                          <span className="btn-animate-y-2" aria-hidden="true">
                            Contact Us
                            <i
                              className="mi-arrow-right size-24 align-center"
                              aria-hidden="true"
                            ></i>
                          </span>
                        </span>
                      </Link>
                    </div>
                    {/* Features List */}
                    <Cta3 />
                    {/* End Features List */}
                  </div>
                </div>
              </div>
            </section>
            <section className="page-section z-index-1">
              <div className="container position-relative">
                <div className="row position-relative">
                  <div className="col-md-6 col-lg-5 mb-md-50 mb-sm-30">
                    <h3 className="section-title mb-30">
                      What our area of&nbsp;expertise?
                    </h3>
                    <p className="text-gray mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nam pulvinar vitae neque et porttitor. Integer non dapibus
                      diam, ac eleifend lectus. In maximus ligula semper metus
                      pellentesque mattis. Maecenas volutpat, diam enim sagittis
                      quam.
                    </p>
                  </div>
                  <div className="col-md-6 offset-lg-1 pt-10 pt-sm-0">
                    {/* Bar Item */}
                    {progressData.map((elm, i) => (
                      <div key={i} className="progress tpl-progress">
                        <div
                          className="progress-bar bg-gradient-primary-1"
                          role="progressbar"
                          style={{ width: `${elm.value}%` }}
                        >
                          <div>{elm.label}, %</div>
                          <span>{elm.value}</span>
                        </div>
                      </div>
                    ))}

                    {/* End Bar Item */}
                  </div>
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
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
                        <div className="alt-features-icon mb-10 color-primary-1">
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
                </div>
                {/* End Features Grid */}
              </div>
            </section>
          </main>
          <footer className="page-section footer bg-dark-1 light-content overflow-hidden pb-30">
            <div className="bg-shape-4">
              <Image
                width="1443"
                height="644"
                src="/assets/images/demo-gradient/bg-shape-1.svg"
                alt=""
              />
            </div>
            <Footer7 />
          </footer>
        </div>{" "}
      </div>
    </>
  );
}
