import Footer1 from "@/components/footers/Footer1";
import Link from "next/link";
import dynamic from "next/dynamic";
import Image from "next/image";
const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);

import Header1Multipage from "@/components/headers/Header1Multipage";
import AnimatedText from "@/components/common/AnimatedText";
import { allPortfolios } from "@/data/portfolio";
import { menuItemsDark } from "@/data/menu";
import RelatedProject10 from "@/components/portfolio/relatedProjects/RelatedProject10";

export const metadata = {
  title:
    "Main Portfolio Single Page 2 Dark || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function MainPortfolioSinglePage2Dark({ params }) {
  const portfolioItem =
    allPortfolios.filter((elm) => elm.id == params.id)[0] || allPortfolios[0];
  return (
    <>
      <div className="theme-main">
        <div className="dark-mode">
          <div className="page bg-dark-1" id="top">
            <nav className="main-nav dark dark-mode transparent stick-fixed wow-menubar">
              {" "}
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
                  <>
                    <div className="position-absolute top-0 bottom-0 start-0 end-0 bg-gradient-dark opacity-07" />
                    <div className="container position-relative min-height-100vh d-flex align-items-end pt-100 pb-100">
                      {/* Section Content */}
                      <div className="home-content text-center">
                        <div className="row">
                          {/* Page Title */}
                          <div className="col-md-8 offset-md-2">
                            <div className="mb-20">
                              <a
                                href="#"
                                className="btn btn-mod btn-small btn-border-w btn-circle"
                                data-btn-animate="y"
                              >
                                <i className="mi-arrow-left align-center size-18" />{" "}
                                Back to portfolio
                              </a>
                            </div>
                            <h1 className="hs-title-1 mb-20">
                              <span
                                className="wow charsAnimIn"
                                data-splitting="chars"
                              >
                                <AnimatedText text={portfolioItem.title} />
                              </span>
                            </h1>
                            <div className="row">
                              <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                                <p
                                  className="section-descr mb-0 wow fadeIn"
                                  data-wow-delay="0.2s"
                                  data-wow-duration="1.2s"
                                >
                                  Branding, UI/UX Design, Front-end Development,
                                  Back-end Development
                                </p>
                              </div>
                            </div>
                          </div>
                          {/* End Page Title */}
                        </div>
                      </div>
                      {/* End Section Content */}
                      {/* Scroll Down */}
                      <div
                        className="local-scroll scroll-down-wrap wow fadeInUp"
                        data-wow-offset={0}
                      >
                        <a href="#start" className="scroll-down">
                          <i className="mi-chevron-down" />
                          <span className="visually-hidden">
                            Scroll to the next section
                          </span>
                        </a>
                      </div>
                      {/* End Scroll Down */}
                    </div>
                  </>
                </ParallaxContainer>
              </section>
              <>
                <>
                  {/* Section */}
                  <section className="page-section bg-dark-1 light-content">
                    <div className="container relative">
                      <div className="row mb-80 mb-sm-40">
                        {/* Project Details */}
                        <div className="col-md-6 mb-sm-40">
                          <h2 className="h3 mb-20">Project Details</h2>
                          <div className="row text-gray">
                            <div className="col-sm-4">
                              <b>Date:</b>
                            </div>
                            <div className="col-sm-8">May 1th, 2023</div>
                          </div>
                          <hr className="mb-20" />
                          <div className="row text-gray">
                            <div className="col-sm-4">
                              <b>Client:</b>
                            </div>
                            <div className="col-sm-8">Envato Users</div>
                          </div>
                          <hr className="mb-20" />
                          <div className="row text-gray">
                            <div className="col-sm-4">
                              <b>Services:</b>
                            </div>
                            <div className="col-sm-8">
                              Branding, UI/UX Design, Front-end Development,
                              Back-end Development
                            </div>
                          </div>
                          <hr className="mb-20" />
                        </div>
                        {/* End Project Details */}
                        {/* Project Description */}
                        <div className="col-md-6">
                          <h2 className="h3 mb-20">Description</h2>
                          <p className="text-gray mb-0">
                            Lorem ipsum dolor sit amet conseur adipisci inerene
                            maximus ligula sempe metuse pelente mattis. Maecenas
                            volutpat, diam eni sagittis quam porta quam. Sed id
                            dolor consectetur fermentum volutpat accumsan purus
                            iaculis libero. Donec vel ultricies purus iaculis
                            libero. Etiam sit amet fringilla lacus susantebe sit
                            ullamcorper pulvinar neque porttitor. Integere
                            lectus. Praesent sede nisi eleifend fermum orci
                            amet, iaculis libero. Donec vel ultricies purus
                            quam.
                          </p>
                        </div>
                        {/* End Project Description */}
                      </div>
                      <div className="mt-n30">
                        {/* Photo Item */}
                        <div className="mt-30 wow fadeInUp">
                          <Image
                            src="/assets/images/portfolio/full-project-1.jpg"
                            alt="Image Description"
                            width={1350}
                            height={865}
                          />
                        </div>
                        {/* End Photo Item */}
                        {/* Photo Item */}
                        <div className="mt-30 wow fadeInUp">
                          <Image
                            src="/assets/images/portfolio/full-project-2.jpg"
                            alt="Image Description"
                            width={1350}
                            height={865}
                          />
                        </div>
                        {/* End Photo Item */}
                        {/* Photo Item */}
                        <div className="mt-30 wow fadeInUp">
                          <Image
                            src="/assets/images/portfolio/full-project-3.jpg"
                            alt="Image Description"
                            width={1350}
                            height={865}
                          />
                        </div>
                        {/* End Photo Item */}
                        {/* Photo Item */}
                        <div className="mt-30 wow fadeInUp">
                          <Image
                            src="/assets/images/portfolio/full-project-4.jpg"
                            alt="Image Description"
                            width={1350}
                            height={865}
                          />
                        </div>
                        {/* End Photo Item */}
                      </div>
                    </div>
                  </section>
                  {/* End Section */}
                  {/* Divider */}
                  <hr className="mt-0 mb-0 white" />
                  {/* End Divider */}
                </>

                {/* End Divider */}
                {/* Section */}
                <section className="page-section bg-dark-1 light-content">
                  <RelatedProject10 />
                </section>
                {/* End Section */}
                {/* Divider */}
                <hr className="mt-0 mb-0 white" />
                {/* End Divider */}
                {/* Work Navigation */}
                <div className="work-navigation clearfix bg-dark-1 light-content">
                  <Link
                    href={`/main-portfolio-single-3/1`}
                    className="work-prev"
                  >
                    <span>
                      <i className="mi-arrow-left size-24 align-middle" />{" "}
                      Previous
                    </span>
                  </Link>
                  <a href="#" className="work-all">
                    <span>
                      <i className="mi-close size-24 align-middle" /> All works
                    </span>
                  </a>
                  <Link
                    href={`/main-portfolio-single-2/1`}
                    className="work-next"
                  >
                    <span>
                      Next <i className="mi-arrow-right size-24 align-middle" />
                    </span>
                  </Link>
                </div>
              </>
            </main>
            <Footer1 dark />
          </div>{" "}
        </div>
      </div>
    </>
  );
}
