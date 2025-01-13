import Footer7 from "@/components/footers/Footer7";
import Header7 from "@/components/headers/Header7";
import Achievement from "@/components/homes/home-7/Achievement";
import Banner from "@/components/homes/home-7/Banner";
import Steps from "@/components/homes/home-7/Steps";
import Testimonials from "@/components/homes/home-7/Testimonials";

import { gradientMultipage, gradientMultipageDark } from "@/data/menu";
import Image from "next/image";
import Link from "next/link";
const onePage = false;
const dark = true;
export const metadata = {
  title:
    "Gradient About Dark || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function GradientAboutPageDark() {
  return (
    <>
      <div className="theme-gradient">
        <div className="dark-mode">
          <div className="page bg-dark-1" id="top">
            <nav className="main-nav dark dark-mode transparent stick-fixed wow-menubar wch-unset">
              <Header7 links={gradientMultipageDark} />
            </nav>
            <main id="main">
              <section className="page-section bg-dark-1 bg-gradient-gray-dark-1 light-content bg-scroll overflow-hidden">
                <div className="bg-shape-1 opacity-003">
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
                        About Studio
                      </h1>

                      <p
                        className="section-descr mb-0 wow fadeIn"
                        data-wow-delay="0.2s"
                      >
                        Crafting immersive digital journeys for brands.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              <section
                className={`page-section  scrollSpysection  bg-scroll ${
                  dark ? "bg-dark-1 bg-gradient-gray-dark-2 light-content" : ""
                }`}
                id="about"
              >
                <div className="container position-relative">
                  <div className="row">
                    <div className="col-lg-8 offset-lg-2 text-center">
                      <div className="row text-start text-gray mb-80 mb-sm-60">
                        <div
                          className="col-md-6 mb-sm-20 wow linesAnimInLong"
                          data-splitting="lines"
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. In maximus ligula semper metus pellentesque
                          mattis. Maecenas volutpat, diam enim sagittis quam, id
                          porta quam. Sed id dolor consectetur fermentum nibh
                          volutpat.
                        </div>
                        <div
                          className="col-md-6 wow linesAnimInLong"
                          data-splitting="lines"
                        >
                          Etiam sit amet fringilla lacus. Pellentesque suscipit
                          ante ullamcorper pulvinar neque porttitor integer
                          lectus. Praesent sed nisi eleifend, fermentum
                          orcilorem amet, iaculis libero lorem. Donec vel
                          ultricies purus lorem ipsum sit amet.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Images Composition */}
                <div className="possition-relaive">
                  {/* Decorative Line */}
                  <div className="bg-line-1 z-index-1">
                    <Image
                      src="/assets/images/demo-gradient/decoration-2.png"
                      width={1920}
                      height={616}
                      alt=""
                    />
                  </div>
                  {/* End Decorative Line */}
                  <div className="container position-relative">
                    <div className="row">
                      <div className="col-lg-10 offset-lg-1">
                        <div className="composition-7">
                          <div className="composition-7-image-1">
                            <div className="composition-7-border" />
                            <div className="composition-7-inner">
                              <Image
                                src="/assets/images/demo-gradient/section-image-1.jpg"
                                alt="Image Description"
                                width={238}
                                height={296}
                              />
                            </div>
                          </div>
                          <div className="composition-7-image-2">
                            <div className="composition-7-border" />
                            <div className="composition-7-inner">
                              <Image
                                src="/assets/images/demo-gradient/section-image-2.jpg"
                                alt="Image Description"
                                width={398}
                                height={482}
                              />
                            </div>
                          </div>
                          <div className="composition-7-image-3">
                            <div className="composition-7-border" />
                            <div className="composition-7-inner">
                              <Image
                                src="/assets/images/demo-gradient/section-image-3.jpg"
                                alt="Image Description"
                                width={460}
                                height={308}
                              />
                            </div>
                          </div>
                          <div className="composition-7-image-4">
                            <div className="composition-7-border" />
                            <div className="composition-7-inner">
                              <Image
                                src="/assets/images/demo-gradient/section-image-4.jpg"
                                alt="Image Description"
                                width={368}
                                height={456}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
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
                            We provide the effective ideas that grow businesses
                            of our clients.
                          </p>
                          <div
                            className="local-scroll wow fadeInUp"
                            data-wow-delay="0.2s"
                          >
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
                          </div>
                        </div>
                        <Achievement />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section
                className={`page-section   ${
                  dark ? "bg-dark-1 light-content" : ""
                }`}
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
                className={`page-section overflow-hidden   ${
                  dark ? "bg-dark-2 light-content" : ""
                }`}
              >
                <Testimonials />
              </section>
            </main>
            <footer className="page-section footer bg-dark-2 light-content overflow-hidden pb-30">
              <div className="bg-shape-4 opacity-003">
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
      </div>
    </>
  );
}
