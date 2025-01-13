import Footer1 from "@/components/footers/Footer1";

import dynamic from "next/dynamic";
const onePage = false;
const dark = false;
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
import Service from "@/components/homes/home-10/Service";
import Steps from "@/components/homes/home-7/Steps";
import { menuItems } from "@/data/menu";
export const metadata = {
  title:
    "Main Services 1 || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function MainServicesPage1() {
  return (
    <>
      <div className="theme-main">
        <div className="page" id="top">
          <nav className="main-nav transparent stick-fixed wow-menubar">
            <Header1Multipage links={menuItems} />
          </nav>
          <main id="main">
            <ParallaxContainer
              className="page-section bg-gray-light-1 bg-light-alpha-80 parallax-5"
              style={{
                backgroundImage:
                  "url(/assets/images/full-width-images/section-bg-10.jpg)",
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
                        Our Services
                      </h2>
                      <h1 className="hs-title-1 mb-30">
                        <span
                          className="wow charsAnimIn"
                          data-splitting="chars"
                        >
                          <AnimatedText text="Creative solutions makes you want to stay." />
                        </span>
                      </h1>
                      <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                          <p
                            className="section-descr mb-0 wow fadeInUp"
                            data-wow-delay="0.6s"
                            data-wow-duration="1.2s"
                          >
                            The power of design help us to solve complex
                            problems and cultivate business solutions.
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
            <section
              className={`page-section pt-0 px-2 px-lg-0  scrollSpysection  ${
                dark ? "bg-dark-1 light-content" : ""
              }`}
              id="services"
            >
              <div className="container position-relative pt-30 bg-white round mt-n120 mt-sm-n60">
                {/* Nav tabs */}

                <Service />
                {/* End Tab panes */}
              </div>
            </section>
            <>
              {/* Divider */}
              <hr className="mt-0 mb-0" />
              {/* End Divider */}
              {/* Benefits Section */}
              <section className="page-section">
                <div className="container position-relative">
                  <div className="row">
                    {/* Section Text */}
                    <div className="col-lg-5 col-xl-5 d-flex align-items-center mb-md-60 mb-sm-40">
                      <div className="w-100">
                        <h2 className="section-caption mb-30 mb-xs-10">
                          Benefits
                        </h2>
                        <h3 className="section-title mb-30">
                          Why choose Resonance?
                        </h3>
                        <p className="section-descr mb-50 mb-sm-30">
                          A static website stores a unique file for every page
                          of a static website. Each time that page is requested,
                          the same content is returned.
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
                    {/* Image Column */}
                    <div className="col-lg-7 col-xl-6 offset-xl-1 d-flex align-items-center">
                      <div className="position-relative">
                        {/* Image */}
                        <div className="position-relative overflow-hidden">
                          <Image
                            src="/assets/images/services-image.jpg"
                            className="image-fullwidth relative"
                            width={960}
                            height={700}
                            alt="Image Description"
                          />
                        </div>
                        {/* End Image */}
                      </div>
                    </div>
                    {/* End Image Column */}
                  </div>
                </div>
              </section>
              {/* End Benefits Section */}
              {/* Parallax Image Section */}
              <section
                className="page-section bg-gray-light-1 bg-light-alpha-70 bg-scroll pb-0 mb-100 mb-md-70 mb-sm-50 z-index-1"
                style={{
                  backgroundImage:
                    "url(/assets/images/full-width-images/section-bg-9.jpg)",
                }}
              >
                <div className="container position-relative">
                  <div className="row">
                    <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
                      <h2 className="section-caption mb-xs-10 wow fadeInUp">
                        Our Values
                      </h2>
                      <h3 className="section-title mb-60 mb-sm-40">
                        <span
                          className="wow charsAnimIn"
                          data-splitting="chars"
                        >
                          We belive in smart design, trust, and collaboration.
                        </span>
                      </h3>
                      <div className="overflow-hidden mb-n100 mb-md-n70 mb-sm-n50">
                        <Image
                          src="/assets/images/about-image-2.jpg"
                          className="wow scaleOutIn"
                          width={1200}
                          height={675}
                          data-wow-offset={50}
                          alt="Image Description"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </>
            <section
              className={`page-section   ${
                dark ? "bg-dark-1 light-content" : ""
              }`}
            >
              <Steps />
            </section>
            <hr className={`mt-0 mb-0 ${dark ? "white" : ""}`} />
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
                      The power of design help us to solve complex problems and
                      cultivate business solutions.
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
          </main>
          <Footer1 />
        </div>{" "}
      </div>
    </>
  );
}
