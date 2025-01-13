import Footer5 from "@/components/footers/Footer5";

import Header5 from "@/components/headers/Header5";
import Image from "next/image";
import { elegantMultipage, elegantMultipageDark } from "@/data/menu";
import Link from "next/link";
import RelatedProjects6 from "@/components/portfolio/relatedProjects/RelatedProjects6";
import { allPortfolios } from "@/data/portfolio";
export const metadata = {
  title:
    "Elegant Portfolio Single Dark || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function ElegantPortfolioSinglePageDark({ params }) {
  const portfolioItem =
    allPortfolios.filter((elm) => elm.id == params.id)[0] || allPortfolios[0];
  return (
    <>
      <div className="theme-elegant">
        <div className="dark-mode">
          <div className="page bg-dark-1" id="top">
            <nav className="main-nav dark transparent stick-fixed wow-menubar">
              <Header5 links={elegantMultipageDark} />
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
                    {portfolioItem.title}
                  </h1>

                  <div className="row wow fadeIn" data-wow-delay="0.2s">
                    <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                      <p className="section-title-tiny mb-0 opacity-075">
                        Branding, UI/UX Design, No-code Development
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              <>
                {/* Section */}
                <section className="page-section bg-dark-1 light-content">
                  <div className="container relative">
                    <div className="row mb-80 mb-sm-40">
                      {/* Project Details */}
                      <div className="col-md-6 mb-sm-40">
                        <h2 className="section-title-small mb-20">
                          Project Details
                        </h2>
                        <hr className="mb-20" />
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
                        <h2 className="section-title-small mb-20">
                          Description
                        </h2>
                        <hr className="mb-20" />
                        <p className="text-gray mb-0">
                          Lorem ipsum dolor sit amet conseur adipisci inerene
                          maximus ligula sempe metuse pelente mattis. Maecenas
                          volutpat, diam eni sagittis quam porta quam. Sed id
                          dolor consectetur fermentum volutpat accumsan purus
                          iaculis libero. Donec vel ultricies purus iaculis
                          libero. Etiam sit amet fringilla lacus susantebe sit
                          ullamcorper pulvinar neque porttitor. Integere lectus.
                          Praesent sede nisi eleifend fermum orci amet, iaculis
                          libero. Donec vel ultricies purus quam.
                        </p>
                      </div>
                      {/* End Project Description */}
                    </div>
                    <div className="row mb-n30">
                      {/* Photo Item */}
                      <div className="col-md-6 mb-30 wow fadeInUp">
                        <Image
                          src="/assets/images/demo-elegant/portfolio/1-large.jpg"
                          alt="Image Description"
                          width={970}
                          height={1136}
                        />
                      </div>
                      {/* End Photo Item */}
                      {/* Photo Item */}
                      <div className="col-md-6 mb-30 wow fadeInUp">
                        <Image
                          src="/assets/images/demo-elegant/portfolio/6-large.jpg"
                          alt="Image Description"
                          width={970}
                          height={1136}
                        />
                      </div>
                      {/* End Photo Item */}
                      {/* Photo Item */}
                      <div className="col-md-6 mb-30 wow fadeInUp">
                        <Image
                          src="/assets/images/demo-elegant/portfolio/8-large.jpg"
                          alt="Image Description"
                          width={970}
                          height={1136}
                        />
                      </div>
                      {/* End Photo Item */}
                      {/* Photo Item */}
                      <div className="col-md-6 mb-30 wow fadeInUp">
                        <Image
                          src="/assets/images/demo-elegant/portfolio/3-large.jpg"
                          alt="Image Description"
                          width={970}
                          height={1136}
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
              <section className="page-section bg-dark-1 light-content">
                <RelatedProjects6 />
              </section>
              <>
                {/* Divider */}
                <hr className="mt-0 mb-0 white" />
                {/* End Divider */}
                {/* Work Navigation */}
                <div className="work-navigation bg-dark-1 light-content clearfix z-index-1 position-relative">
                  <Link
                    href={`/main-portfolio-single-1/1`}
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
                    href={`/main-portfolio-single-3/1`}
                    className="work-next"
                  >
                    <span>
                      Next <i className="mi-arrow-right size-24 align-middle" />
                    </span>
                  </Link>
                </div>
                {/* End Work Navigation */}
              </>
            </main>
            <footer className="bg-dark-2 light-content footer z-index-1 position-relative">
              <Footer5 />
            </footer>
          </div>{" "}
        </div>
      </div>
    </>
  );
}
