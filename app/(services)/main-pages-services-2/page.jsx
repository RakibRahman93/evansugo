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
import Service2 from "@/components/homes/home-1/Service2";
import { features5 } from "@/data/features";
import Brands2 from "@/components/homes/home-1/Brands2";
import Brands from "@/components/homes/home-1/Brands";
import { menuItems } from "@/data/menu";
export const metadata = {
  title:
    "Main Services 2 || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function MainServicesPage2() {
  return (
    <>
      <div className="theme-main">
        <div className="page" id="top">
          <nav className="main-nav transparent stick-fixed wow-menubar">
            <Header1Multipage links={menuItems} />
          </nav>
          <main id="main">
            <>
              <ParallaxContainer
                className="page-section bg-gray-light-1 bg-light-alpha-90 parallax-5"
                style={{
                  backgroundImage:
                    "url(/assets/images/full-width-images/section-bg-1.jpg)",
                }}
              >
                <div className="container position-relative pt-50">
                  {/* Section Content */}
                  <div className="text-center">
                    <div className="row">
                      {/* Page Title */}
                      <div className="col-md-8 offset-md-2">
                        <h1 className="hs-title-1 mb-30">
                          <span
                            className="wow charsAnimIn"
                            data-splitting="chars"
                          >
                            We provide the best development solutions.
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
              {/* End Header Section */}
              {/* Marquee Section */}
              <div className="page-section overflow-hidden pt-0 pb-0">
                {/* Marquee Text Line */}
                <div className="marquee marquee-style-2 no-rotate">
                  <div className="marquee-track marquee-animation-1">
                    <div>10 Years of Experience</div>
                    <div aria-hidden="true">10 Years of Experience</div>
                    <div aria-hidden="true">10 Years of Experience</div>
                    <div aria-hidden="true">10 Years of Experience</div>
                    <div aria-hidden="true">10 Years of Experience</div>
                    <div aria-hidden="true">10 Years of Experience</div>
                    <div aria-hidden="true">10 Years of Experience</div>
                    <div aria-hidden="true">10 Years of Experience</div>
                    <div aria-hidden="true">10 Years of Experience</div>
                    <div aria-hidden="true">10 Years of Experience</div>
                    <div aria-hidden="true">10 Years of Experience</div>
                    <div aria-hidden="true">10 Years of Experience</div>
                    <div aria-hidden="true">10 Years of Experience</div>
                    <div aria-hidden="true">10 Years of Experience</div>
                    <div aria-hidden="true">10 Years of Experience</div>
                    <div aria-hidden="true">10 Years of Experience</div>
                    <div aria-hidden="true">10 Years of Experience</div>
                    <div aria-hidden="true">10 Years of Experience</div>
                    <div aria-hidden="true">10 Years of Experience</div>
                    <div aria-hidden="true">10 Years of Experience</div>
                    <div aria-hidden="true">10 Years of Experience</div>
                    <div aria-hidden="true">10 Years of Experience</div>
                    <div aria-hidden="true">10 Years of Experience</div>
                    <div aria-hidden="true">10 Years of Experience</div>
                    <div aria-hidden="true">10 Years of Experience</div>
                    <div aria-hidden="true">10 Years of Experience</div>
                    <div aria-hidden="true">10 Years of Experience</div>
                    <div aria-hidden="true">10 Years of Experience</div>
                    <div aria-hidden="true">10 Years of Experience</div>
                    <div aria-hidden="true">10 Years of Experience</div>
                    <div aria-hidden="true">10 Years of Experience</div>
                    <div aria-hidden="true">10 Years of Experience</div>
                    <div aria-hidden="true">10 Years of Experience</div>
                    <div aria-hidden="true">10 Years of Experience</div>
                  </div>
                </div>
                {/* End Marquee Text Line */}
              </div>
              <section
                className={`page-section  scrollSpysection  ${
                  dark ? "bg-dark-1 light-content" : ""
                }`}
                id="services"
              >
                {" "}
                <Service2 />
              </section>
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
                      <h2 className="section-caption mb-xs-10">Our Values</h2>
                      <h3 className="section-title mb-60 mb-sm-50">
                        <span
                          className="wow charsAnimIn"
                          data-splitting="chars"
                        >
                          <AnimatedText text=" We belive in smart design, trust, and collaboration." />
                        </span>
                      </h3>
                      <div className="overflow-hidden mb-n100 mb-md-n70 mb-sm-n50">
                        <Image
                          src="/assets/images/about-image-2.jpg"
                          className="wow scaleOutIn"
                          width={1200}
                          height={675}
                          data-wow-offset={0}
                          alt="Image Description"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section
                className={`page-section  ${dark ? " light-content" : ""}`}
              >
                {dark ? <Brands2 /> : <Brands />}
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
            </>
          </main>
          <Footer1 />
        </div>{" "}
      </div>
    </>
  );
}
