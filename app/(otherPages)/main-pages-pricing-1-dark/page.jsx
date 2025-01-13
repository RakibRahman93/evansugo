import Footer1 from "@/components/footers/Footer1";

import dynamic from "next/dynamic";
import Link from "next/link";
const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);

import Header1Multipage from "@/components/headers/Header1Multipage";
import AnimatedText from "@/components/common/AnimatedText";
import Image from "next/image";

import React from "react";
import { menuItemsDark } from "@/data/menu";
import Faq from "@/components/common/Faq";
import Pricing from "@/components/homes/home-1/Pricing";

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
                  className="page-section pb-100 pb-sm-60 bg-dark-1 bg-dark-alpha-80 light-content parallax-5"
                  style={{
                    backgroundImage:
                      "url(/assets/images/full-width-images/page-title-bg-1.jpg)",
                  }}
                >
                  <>
                    <div className="position-absolute top-0 bottom-0 start-0 end-0 bg-gradient-dark"></div>
                    <div className="container position-relative pt-50">
                      {/* Section Content */}
                      <div className="text-center">
                        <div className="row">
                          {/* Page Title */}
                          <div className="col-md-8 offset-md-2">
                            <h2
                              className="section-caption-border mb-30 mb-xs-20 wow fadeInUp"
                              data-wow-duration="1.2s"
                            >
                              OUR PRICING
                            </h2>
                            <h1 className="hs-title-1 mb-0">
                              <span
                                className="wow charsAnimIn"
                                data-splitting="chars"
                              >
                                <AnimatedText text="Choose the best plan for your business." />
                              </span>
                            </h1>
                          </div>
                          {/* End Page Title */}
                        </div>
                      </div>
                      {/* End Section Content */}
                    </div>
                  </>
                </ParallaxContainer>
              </section>
              <>
                {/* Pricing Section */}
                <section className="page-section pt-0 bg-gradient-gray-dark-1 light-content bg-scroll">
                  <div className="container">
                    <div className="row wow fadeInUp">
                      <div className="col-xl-10 offset-xl-1">
                        {/* Nav Tabs */}
                        <Pricing />
                        {/* End Tab panes */}
                      </div>
                    </div>
                  </div>
                </section>
                {/* End Pricing Section */}
                {/* FAQ Section */}
                <section className="page-section bg-dark-1 light-content">
                  <div className="container position-relative">
                    <div className="row position-relative">
                      <div className="col-md-6 col-lg-5 mb-md-50 mb-sm-30">
                        <h3 className="section-title mb-30">
                          Frequently Asked Questions
                        </h3>
                        <p className="text-gray mb-0">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nam pulvinar vitae neque et porttitor. Integer
                          non dapibus diam, ac eleifend lectus. In maximus
                          ligula semper metus pellentesque mattis. Maecenas
                          volutpat, diam enim sagittis quam.
                        </p>
                      </div>
                      <div className="col-md-6 offset-lg-1 pt-10 pt-sm-0">
                        {/* Accordion */}
                        <Faq />
                        {/* End Accordion */}
                      </div>
                    </div>
                  </div>
                </section>
                {/* End FAQ Section */}
                {/* Divider */}
                <hr className="mt-0 mb-0 white" />
                {/* End Divider */}
                {/* Call Action Section */}
                <section className="page-section bg-dark-1 light-content">
                  <div className="container position-relative">
                    {/* Decorative Waves */}
                    <div className="position-relative">
                      <div
                        className="decoration-21 d-none d-lg-block"
                        data-rellax-y=""
                        data-rellax-speed="0.7"
                        data-rellax-percentage="0.5"
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
                    <div className="row wow fadeInUp">
                      <div className="col-md-6 offset-md-1 col-lg-5 offset-lg-2 text-md-start mb-sm-30">
                        <p className="section-descr mb-0">
                          Looking for exclusive digital services? Contact us,
                          and we'll start productive cooperation.
                        </p>
                      </div>
                      <div className="col-md-4 col-lg-3 text-md-end">
                        <div className="local-scroll">
                          <Link
                            href={`/main-pages-contact-1`}
                            className="btn btn-mod btn-w btn-large btn-round btn-hover-anim"
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
            <Footer1 dark />
          </div>{" "}
        </div>
      </div>
    </>
  );
}
