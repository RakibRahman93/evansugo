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
import Facts from "@/components/homes/home-1/Facts";
import Testimonials3 from "@/components/homes/home-1/Testimonials3";
import Faq from "@/components/common/Faq";
import Features from "@/components/homes/home-1/Features";
import Brands2 from "@/components/homes/home-1/Brands2";
import Brands from "@/components/homes/home-1/Brands";
import Benefits from "@/components/homes/home-1/Benefits";
import { menuItems } from "@/data/menu";

export const metadata = {
  title:
    "Main About 2 || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function MainAboutPage2() {
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
                        <h1 className="hs-title-1 mb-30">
                          <span
                            className="wow charsAnimIn"
                            data-splitting="chars"
                          >
                            <AnimatedText text="Hey! It's Resonance Creative Studio Here." />
                          </span>
                        </h1>
                        <div className="row">
                          <div className="col-lg-10 offset-lg-1">
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
            </section>
            <div className="page-section overflow-hidden pt-0 pb-0">
              <div className="marquee marquee-style-2 no-rotate">
                <div className="marquee-track marquee-animation-1">
                  <div>Based in London</div>
                  <div>Since 2010</div>
                  <div aria-hidden="true">Based in London</div>
                  <div aria-hidden="true">Since 2010</div>
                  <div aria-hidden="true">Based in London</div>
                  <div aria-hidden="true">Since 2010</div>
                  <div aria-hidden="true">Based in London</div>
                  <div aria-hidden="true">Since 2010</div>
                  <div aria-hidden="true">Based in London</div>
                  <div aria-hidden="true">Since 2010</div>
                  <div aria-hidden="true">Based in London</div>
                  <div aria-hidden="true">Since 2010</div>
                  <div aria-hidden="true">Based in London</div>
                  <div aria-hidden="true">Since 2010</div>
                  <div aria-hidden="true">Based in London</div>
                  <div aria-hidden="true">Since 2010</div>
                  <div aria-hidden="true">Based in London</div>
                  <div aria-hidden="true">Since 2010</div>
                  <div aria-hidden="true">Based in London</div>
                  <div aria-hidden="true">Since 2010</div>
                  <div aria-hidden="true">Based in London</div>
                  <div aria-hidden="true">Since 2010</div>
                  <div aria-hidden="true">Based in London</div>
                  <div aria-hidden="true">Since 2010</div>
                  <div aria-hidden="true">Based in London</div>
                  <div aria-hidden="true">Since 2010</div>
                  <div aria-hidden="true">Based in London</div>
                  <div aria-hidden="true">Since 2010</div>
                  <div aria-hidden="true">Based in London</div>
                  <div aria-hidden="true">Since 2010</div>
                  <div aria-hidden="true">Based in London</div>
                  <div aria-hidden="true">Since 2010</div>
                  <div aria-hidden="true">Based in London</div>
                  <div aria-hidden="true">Since 2010</div>
                </div>
              </div>
            </div>
            <section className="page-section" id="about">
              <div className="container">
                <div className="row">
                  <div className="col-sm-4 mb-xs-50">
                    <div className="call-action-4-images">
                      <div className="call-action-4-image-1">
                        <Image
                          src="/assets/images/demo-strong/section-image-1.jpg"
                          alt="Image description"
                          width={500}
                          height={692}
                          className="wow scaleOutIn"
                          data-wow-duration="1.2s"
                        />
                      </div>
                      <div className="call-action-4-image-2">
                        <Image
                          src="/assets/images/demo-strong/section-image-2.jpg"
                          alt="Image description"
                          width={500}
                          height={692}
                          className="wow scaleOutIn"
                          data-wow-duration="1.2s"
                          data-wow-offset="0"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-8 col-lg-6 col-xl-4 offset-xl-1 mt-n10">
                    <div className="wow linesAnimIn" data-splitting="lines">
                      <h3 className="h5">Our Mission</h3>

                      <p className="text-gray">
                        Resonance is an innovative and dynamic full-service
                        creative studio that is passionate about crafting
                        exceptional digital experiences and products. We
                        specialize in branding, design, and engineering, and we
                        are committed to producing work that not only looks
                        amazing but also functions seamlessly.
                      </p>

                      <h3 className="h5">Our Vision</h3>

                      <p className="text-gray mb-0">
                        We work closely with our clients to develop websites,
                        apps, and other digital products that are not only
                        visually stunning but also intuitive and user-friendly.
                        We always strive to ensure that our clients are
                        completely satisfied with the final product.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-2 offset-xl-1 d-none d-lg-block">
                    <div className="overflow-hidden">
                      <Image
                        src="/assets/images/demo-strong/section-image-3.jpg"
                        alt="Image description"
                        width={330}
                        height={894}
                        className="wow scaleOutIn"
                        data-wow-duration="1.2s"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <ParallaxContainer
              className="page-section bg-dark-1 bg-dark-alpha-90 parallax-5 light-content"
              style={{
                backgroundImage:
                  "url(/assets/images/full-width-images/section-bg-2.jpg)",
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
                      We provide the effective ideas that grow businesses of our
                      clients.
                    </p>
                    <div
                      className="local-scroll wow fadeInUp"
                      data-wow-delay="0.2s"
                    >
                      <Link
                        href={`/main-pages-contact-1${dark ? "-dark" : ""}`}
                        className="btn btn-mod btn-w btn-large btn-round btn-hover-anim"
                      >
                        <span>Request Price</span>
                      </Link>
                    </div>
                  </div>{" "}
                  <Facts />
                </div>
              </div>
            </ParallaxContainer>
            <section className="page-section bg-gray-light-2 overflow-hidden">
              <Testimonials3 />
            </section>
            <section
              className={`page-section  ${dark ? " light-content" : ""}`}
            >
              {dark ? <Brands2 /> : <Brands />}
            </section>
            <hr className={`mt-0 mb-0 ${dark ? "white" : ""}`} />
            <section
              className={`page-section  ${
                dark ? "bg-dark-1 light-content" : ""
              }`}
            >
              <Benefits />{" "}
            </section>
            <hr className={`mt-0 mb-0 ${dark ? "white" : ""}`} />
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
          </main>
          <Footer1 />
        </div>{" "}
      </div>
    </>
  );
}
