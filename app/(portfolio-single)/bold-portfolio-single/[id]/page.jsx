import AnimatedText from "@/components/common/AnimatedText";
import Footer2 from "@/components/footers/Footer2";
import Header2 from "@/components/headers/Header2";
import RelatedProject9 from "@/components/portfolio/relatedProjects/RelatedProject9";
import Image from "next/image";
import { boldMultipage } from "@/data/menu";
import dynamic from "next/dynamic";

import React from "react";
import { allPortfolios } from "@/data/portfolio";
const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);
export const metadata = {
  title:
    "Bold Portfolio Single || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};

export default function BoldPortfolioSinglePage({ params }) {
  const portfolioItem =
    allPortfolios.filter((elm) => elm.id == params.id)[0] || allPortfolios[0];

  return (
    <>
      <div className="theme-bold">
        <div className="page" id="top">
          <nav className="main-nav dark transparent stick-fixed wow-menubar">
            <Header2 links={boldMultipage} />
          </nav>
          <main id="main">
            <ParallaxContainer
              className="page-section bg-dark-alpha-30 parallax-5 light-content"
              style={{
                backgroundImage:
                  "url(/assets/images/demo-bold/section-bg-2.jpg)",
              }}
              id="home"
            >
              <div className="container position-relative pt-sm-40">
                <div className="text-center">
                  <h1 className="hs-title-4 font-alt mb-0">
                    <span
                      className="wow charsAnimInLong-1"
                      data-splitting="chars"
                    >
                      <AnimatedText text={portfolioItem.title} />
                    </span>
                  </h1>
                </div>
              </div>
            </ParallaxContainer>
            <>
              {/* Section */}
              <section className="page-section">
                <div className="container position-relative">
                  <div className="row">
                    {/* Project Details */}
                    <div
                      className="col-md-4 mb-sm-40 wow fadeInUp"
                      data-wow-offset={0}
                    >
                      <div className="block-sticky">
                        <h2 className="h3 mb-20">Project Details</h2>
                        <hr className="mb-20" />
                        <div className="row small">
                          <div className="col-sm-4">
                            <b>Date:</b>
                          </div>
                          <div className="col-sm-8">May 1th, 2023</div>
                        </div>
                        <hr className="mb-20" />
                        <div className="row small">
                          <div className="col-sm-4">
                            <b>Client:</b>
                          </div>
                          <div className="col-sm-8">Envato Users</div>
                        </div>
                        <hr className="mb-20" />
                        <div className="row small">
                          <div className="col-sm-4">
                            <b>Services:</b>
                          </div>
                          <div className="col-sm-8">
                            Branding, UI/UX Design, Front-end Development,
                            Back-end Development
                          </div>
                        </div>
                        <hr className="mb-20" />
                        <div className="small">
                          <div>
                            <b>Description:</b>
                          </div>
                          <div>
                            Lorem ipsum dolor sit amet conseur adipisci inerene.
                            Maecenas volutpat, diam eni sagittis quam porta
                            quam. Sed id dolor consectetur fermentum volutpat
                            accumsan purus iaculis libero.
                          </div>
                        </div>
                        <hr className="mb-20" />
                      </div>
                    </div>
                    {/* End Project Details */}
                    <div className="col-md-8">
                      <div className="mb-n30">
                        {/* Photo Item */}
                        <div className="mb-30 wow fadeInUp" data-wow-offset={0}>
                          <Image
                            src="/assets/images/demo-bold/portfolio/2.jpg"
                            alt="Image Description"
                            width={1200}
                            height={819}
                          />
                        </div>
                        {/* End Photo Item */}
                        {/* Photo Item */}
                        <div className="mb-30 wow fadeInUp">
                          <Image
                            src="/assets/images/demo-bold/portfolio/1.jpg"
                            alt="Image Description"
                            width={1200}
                            height={819}
                          />
                        </div>
                        {/* End Photo Item */}
                        {/* Photo Item */}
                        <div className="mb-30 wow fadeInUp">
                          <Image
                            src="/assets/images/demo-bold/portfolio/3.jpg"
                            alt="Image Description"
                            width={1200}
                            height={819}
                          />
                        </div>
                        {/* End Photo Item */}
                        {/* Photo Item */}
                        <div className="mb-30 wow fadeInUp">
                          <Image
                            src="/assets/images/demo-bold/portfolio/4.jpg"
                            alt="Image Description"
                            width={1200}
                            height={819}
                          />
                        </div>
                        {/* End Photo Item */}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* End Section */}
              {/* Divider */}
              <hr className="black mt-0 mb-0" />
              {/* End Divider */}
            </>
            <section className="page-section">
              <RelatedProject9 />
            </section>
          </main>
          <footer className="footer-1 bg-dark-1 light-content">
            <Footer2 />
          </footer>
        </div>{" "}
      </div>{" "}
    </>
  );
}
