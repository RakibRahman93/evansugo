import Footer1 from "@/components/footers/Footer1";

import dynamic from "next/dynamic";

const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);

import Header1Multipage from "@/components/headers/Header1Multipage";

import React from "react";

import Faq from "@/components/common/Faq";
import Contact from "@/components/homes/home-5/Contact";
import Map from "@/components/common/Map";
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
                  className="page-section pb-100 pb-sm-60 bg-dark-1 bg-dark-alpha-80 light-content parallax-5"
                  style={{
                    backgroundImage:
                      "url(/assets/images/full-width-images/page-title-bg-4.jpg)",
                  }}
                >
                  <>
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
                                Contact Us
                              </h2>
                              <h1 className="hs-title-1 mb-0">
                                <span
                                  className="wow charsAnimIn"
                                  data-splitting="chars"
                                >
                                  Say hello and let’s start the productive work.
                                </span>
                              </h1>
                            </div>
                            {/* End Page Title */}
                          </div>
                        </div>
                        {/* End Section Content */}
                      </div>
                    </>
                  </>
                </ParallaxContainer>
              </section>
              <>
                {/* Contact Section */}
                <section
                  className="page-section bg-dark-1 light-content pt-0"
                  id="contact"
                >
                  <Contact />
                </section>
                <div className="google-map light-content">
                  <Map />
                </div>
                {/* End Contact Section */}
                {/* Divider */}
                {/* <hr className="mt-0 mb-0 white" /> */}
                {/* End Divider */}
                {/* FAQ Section */}
                <section className="page-section bg-dark-1 light-content">
                  <div className="container position-relative">
                    {/* Decorative Waves */}

                    {/* End Decorative Waves */}
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
              </>
            </main>
            <Footer1 dark />
          </div>{" "}
        </div>
      </div>
    </>
  );
}
