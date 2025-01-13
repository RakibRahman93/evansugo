import Footer5 from "@/components/footers/Footer5";

import Header5 from "@/components/headers/Header5";
import Image from "next/image";
import Link from "next/link";
const onePage = false;
const dark = false;
import { elegantMultipage } from "@/data/menu";
import About from "@/components/homes/home-5/About";
import Team from "@/components/homes/home-5/Team";
import MarqueeDark from "@/components/homes/home-5/MarqueeDark";
import Marquee from "@/components/homes/home-5/Marquee";
import { progressData } from "@/data/skills";

export const metadata = {
  title:
    "Elegant About || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function ElegantAboutPage() {
  return (
    <>
      <div className="theme-elegant">
        <div className="page" id="top">
          <nav className="main-nav dark transparent stick-fixed wow-menubar">
            <Header5 links={elegantMultipage} />
          </nav>
          <main id="main">
            <section
              className="page-section bg-dark-alpha-50 light-content"
              style={{
                backgroundImage:
                  "url(/assets/images/demo-elegant/section-bg-1.jpg)",
              }}
              id="home"
            >
              <div className="container position-relative pt-20 pt-sm-20 text-center">
                <h1
                  className="hs-title-3 mb-10 wow fadeInUpShort"
                  data-wow-duration="0.6s"
                >
                  About Us
                </h1>
                <div className="row wow fadeIn" data-wow-delay="0.2s">
                  <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                    <p className="section-title-tiny mb-0 opacity-075">
                      Crafting immersive digital journeys for brands.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section
              className={`page-section  scrollSpysection pb-0 ${
                dark ? "bg-dark-1 light-content" : ""
              } `}
              id="about"
            >
              <div className="container position-relative">
                <div className="row">
                  <div className="col-lg-5 d-flex align-items-center mb-md-50">
                    <div>
                      <div className="wow linesAnimIn" data-splitting="lines">
                        <h2 className="section-title mb-30 mb-sm-20">
                          <span className="text-gray">Our</span> Story
                          <span className="text-gray">.</span>
                        </h2>
                        <div className="text-gray mb-30 mb-sm-20">
                          <p className="mb-0">
                            Design elements are the basic units of any design
                            which form its structure and convey visual messages.
                            Color is the result of light reflecting back from an
                            object to our eyes. Curvilinear shapes are composed
                            of curved lines and smooth edges. Lines can be
                            vertical, horizontal, diagonal, or curved. They can
                            be any width or texture, and can be continuous,
                            implied, or broken. On top of that, there are
                            different types of lines aside from the ones
                            previously mentioned.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <About />
                </div>
              </div>
            </section>
            <div className="page-section overflow-hidden">
              {dark ? <MarqueeDark /> : <Marquee />}
            </div>
            <section
              className="page-section pt-0 pb-0 bg-dark-1 bg-dark-alpha-80 parallax-6 light-content"
              style={{
                backgroundImage:
                  "url(/assets/images/demo-elegant/section-bg-2.jpg)",
              }}
            >
              <div className="container position-relative">
                <div className="row">
                  <div className="col-md-6 col-xl-5">
                    <div className="call-action-1-images pb-60 pb-md-0 mt-n30 mt-md-70 mb-n30 mb-md-70 mb-sm-0">
                      <div className="call-action-1-image-1 round">
                        <Image
                          src="/assets/images/demo-elegant/call-action-1-image-1.jpg"
                          width={678}
                          height={840}
                          alt="Image Description"
                        />
                      </div>
                      <div className="call-action-1-image-2">
                        <div
                          className="call-action-1-image-2-inner"
                          data-rellax-y=""
                          data-rellax-speed="0.7"
                          data-rellax-percentage="0.427"
                        >
                          <Image
                            src="/assets/images/demo-elegant/call-action-1-image-2.jpg"
                            alt="Image Description"
                            width={300}
                            height={409}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 offset-xl-1 d-flex align-items-center">
                    <div className="row small-section">
                      <div className="col-xl-11">
                        <h2 className="section-title mb-30 mb-sm-20">
                          Looking for digital services?
                        </h2>
                        <div className="text-gray mb-30 mb-sm-20">
                          <p className="mb-0">
                            Product design process the set of strategic and
                            tactical activities, from idea generation to
                            commercialization.
                          </p>
                        </div>
                        <div className="local-scroll">
                          <Link
                            href={`/alegant-services${dark ? "-dark" : ""}`}
                            className="link-hover-anim link-circle-1 align-middle"
                            data-link-animate="y"
                          >
                            <span className="link-strong link-strong-unhovered">
                              View Services{" "}
                              <i
                                className="mi-arrow-right size-18 align-middle"
                                aria-hidden="true"
                              ></i>
                            </span>
                            <span
                              className="link-strong link-strong-hovered"
                              aria-hidden="true"
                            >
                              View Services{" "}
                              <i
                                className="mi-arrow-right size-18 align-middle"
                                aria-hidden="true"
                              ></i>
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              className={`page-section pb-0  scrollSpysection  ${
                dark ? "bg-dark-1 light-content" : ""
              } `}
              id="team"
            >
              <Team />
            </section>
            <div className="page-section overflow-hidden">
              {dark ? <MarqueeDark /> : <Marquee />}
            </div>
            <>
              <section className="page-section z-index-1">
                <div className="container position-relative">
                  <div className="row position-relative">
                    <div className="col-md-6 col-lg-5 mb-md-50 mb-sm-30">
                      <h3 className="section-title mb-30">
                        What our area of&nbsp;expertise?
                      </h3>
                      <p className="text-gray mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nam pulvinar vitae neque et porttitor. Integer non
                        dapibus diam, ac eleifend lectus. In maximus ligula
                        semper metus pellentesque mattis. Maecenas volutpat,
                        diam enim sagittis quam. Etiam vel enim eget felis
                        laoreet auctor.
                      </p>
                    </div>
                    <div className="col-md-6 offset-lg-1 pt-10 pt-sm-0">
                      {/* Bar Item */}
                      {progressData.map((elm, i) => (
                        <div key={i} className="progress tpl-progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: `${elm.value}%` }}
                          >
                            <div>{elm.label}, %</div>
                            <span>{elm.value}</span>
                          </div>
                        </div>
                      ))}
                      {/* End Bar Item */}

                      {/* End Bar Item */}
                    </div>
                  </div>
                </div>
              </section>
              {/* End Skill Section */}
              {/* Divider */}
              <hr className="mt-0 mb-0" />
              {/* End Divider */}
              {/* Call Action Section */}
              <section className="page-section">
                <div className="container position-relative">
                  {/* Decorative Waves */}
                  <div className="position-relative">
                    <div
                      className="decoration-21 d-none d-lg-block"
                      data-rellax-y=""
                      data-rellax-speed="0.7"
                      data-rellax-percentage="0.35"
                    >
                      <Image
                        src="/assets/images/decoration-3.svg"
                        className="svg-shape"
                        width={148}
                        height={148}
                        alt=""
                      />
                    </div>
                  </div>
                  {/* End Decorative Waves */}
                  <div className="row text-center wow fadeInUp">
                    <div className="col-md-10 offset-md-1 col-lg-6 offset-lg-3">
                      <p className="section-descr mb-50 mb-sm-30">
                        The power of design help us to solve complex problems
                        and cultivate business solutions.
                      </p>
                      <div className="local-scroll">
                        <Link
                          href={`/elegant-contact`}
                          className="btn btn-mod btn-large btn-circle btn-hover-anim"
                        >
                          <span>Contact us</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </>
          </main>
          <footer className="bg-dark-1 light-content footer z-index-1 position-relative">
            <Footer5 />
          </footer>
        </div>{" "}
      </div>
    </>
  );
}
