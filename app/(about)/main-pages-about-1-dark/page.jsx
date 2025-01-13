import Footer1 from "@/components/footers/Footer1";

import dynamic from "next/dynamic";
const dark = true;
const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);

import Header1Multipage from "@/components/headers/Header1Multipage";
import AnimatedText from "@/components/common/AnimatedText";
import Image from "next/image";
import Link from "next/link";
import About from "@/components/homes/home-1/About";
import Team from "@/components/homes/home-1/Team";
import Benefits from "@/components/homes/home-1/Benefits";
import Testimonials2 from "@/components/homes/home-1/Teatimonials2";
import Testimonials from "@/components/homes/home-1/Testimonials";
import Brands2 from "@/components/homes/home-1/Brands2";
import Brands from "@/components/homes/home-1/Brands";
import Features from "@/components/homes/home-1/Features";
import Promo from "@/components/homes/home-1/Promo";
import Faq from "@/components/homes/home-1/Faq";
import { menuItemsDark } from "@/data/menu";

export const metadata = {
  title:
    "Main About 1 Dark || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function MainAboutPage1Dark() {
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
              <hr className="mt-0 mb-0" />
              <section
                className={`page-section scrollSpysection ${
                  dark ? "bg-dark-1 light-content" : ""
                }`}
                id="about"
              >
                <div className="container position-relative">
                  <div className="row mb-60 mb-xs-30">
                    <div className="col-md-6">
                      <h2 className="section-caption mb-xs-10">Our Story</h2>
                      <h3 className="section-title mb-0">
                        <AnimatedText text="Better way to create stanning layouts." />
                      </h3>
                    </div>
                    <div className="col-md-5 offset-md-1 relative text-start text-md-end pt-40 pt-sm-20 local-scroll">
                      {/* Decorative Dots */}
                      <div
                        className="decoration-2 d-none d-md-block"
                        data-rellax-y=""
                        data-rellax-speed="0.7"
                        data-rellax-percentage="-0.2"
                      >
                        <Image
                          width="103"
                          height="223"
                          src="/assets/images/decoration-2.svg"
                          alt=""
                        />
                      </div>
                      {/* End Decorative Dots */}

                      <Link
                        href={`/main-pages-services-1${dark ? "-dark" : ""}`}
                        className="link-hover-anim underline align-middle"
                        data-link-animate="y"
                      >
                        <span className="link-strong link-strong-unhovered">
                          Explore Our Services{" "}
                          <i
                            className="mi-arrow-right size-18"
                            aria-hidden="true"
                          ></i>
                        </span>
                        <span
                          className="link-strong link-strong-hovered"
                          aria-hidden="true"
                        >
                          Explore Our Services{" "}
                          <i
                            className="mi-arrow-right size-18"
                            aria-hidden="true"
                          ></i>
                        </span>
                      </Link>
                    </div>
                  </div>
                  <About />
                </div>
              </section>
              <section
                className={`page-section  scrollSpysection  ${
                  dark ? "bg-dark-2 light-content" : "bg-gray-light-1 "
                }`}
                id="team"
              >
                <Team />
              </section>
              <section
                className={`page-section  ${
                  dark ? "bg-dark-1 light-content" : ""
                }`}
              >
                <Benefits />{" "}
              </section>
              <section
                className={`page-section pt-0 pb-0  ${
                  dark ? "light-content" : ""
                }`}
              >
                {" "}
                {dark ? <Testimonials2 /> : <Testimonials />}
              </section>
              <section
                className={`page-section  ${dark ? " light-content" : ""}`}
              >
                {dark ? <Brands2 /> : <Brands />}
              </section>
              <section
                className="page-section bg-dark bg-dark-alpha-70 light-content"
                style={{
                  backgroundImage:
                    "url(/assets/images/full-width-images/section-bg-4.jpg)",
                }}
              >
                <Features />
              </section>
              <section
                className={`page-section  ${
                  dark ? "bg-dark-1 light-content" : ""
                }`}
              >
                <div className="container position-relative">
                  <div className="row">
                    {/* Images */}
                    <div className="col-lg-7 d-flex align-items-start mb-md-60 mb-xs-30">
                      <div className="call-action-2-images">
                        <div
                          className="call-action-2-image-1"
                          data-rellax-y=""
                          data-rellax-speed="0.5"
                          data-rellax-percentage="0.7"
                        >
                          <Image
                            width={386}
                            height={400}
                            src="/assets/images/promo-3.jpg"
                            alt="Image Description"
                            className="wow scaleOutIn"
                            data-wow-duration="1.2s"
                            data-wow-offset={255}
                          />
                        </div>
                        <div className="call-action-2-image-2">
                          <Image
                            width={810}
                            height={512}
                            src="/assets/images/promo-4.jpg"
                            alt="Image Description"
                            className="wow scaleOutIn"
                            data-wow-duration="1.2s"
                            data-wow-offset={134}
                          />
                        </div>
                        <div
                          className="call-action-2-image-3"
                          data-rellax-y=""
                          data-rellax-speed="-0.5"
                          data-rellax-percentage="0.5"
                        >
                          <Image
                            width={386}
                            height={500}
                            src="/assets/images/promo-5.jpg"
                            alt="Image Description"
                            className="wow scaleOutIn"
                            data-wow-duration="1.2s"
                            data-wow-offset={0}
                          />
                        </div>
                      </div>
                    </div>
                    {/* End Images */}
                    {/* Text */}
                    <div className="col-lg-5 d-flex align-items-center">
                      <div
                        className="wow fadeInUp"
                        data-wow-duration="1.2s"
                        data-wow-offset={255}
                      >
                        <h2 className="section-title mb-50 mb-sm-20">
                          How we work?
                        </h2>
                        <Faq />
                        <div className="local-scroll">
                          <Link
                            href={`/main-pages-contact-1${dark ? "-dark" : ""}`}
                            className="btn btn-mod btn-large btn-round btn-hover-anim"
                          >
                            <span>Start a Project</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/* End Text */}
                  </div>
                </div>
              </section>

              <hr className={`mt-0 mb-0 ${dark ? "white" : ""}`} />
              <section
                className={`page-section  ${
                  dark ? "bg-dark-1 light-content" : ""
                }`}
              >
                <Promo />{" "}
              </section>
            </main>
            <Footer1 dark={true} />
          </div>{" "}
        </div>
      </div>
    </>
  );
}
