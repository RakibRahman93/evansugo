import Footer5 from "@/components/footers/Footer5";

import Header5 from "@/components/headers/Header5";
import Image from "next/image";
import Link from "next/link";
const onePage = false;
const dark = false;
import { elegantMultipage } from "@/data/menu";
import MarqueeDark from "@/components/homes/home-5/MarqueeDark";
import Marquee from "@/components/homes/home-5/Marquee";
import { features5 } from "@/data/features";

export const metadata = {
  title:
    "Elegant Services || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function ElegantServicesPage() {
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
                  SERVICES
                </h1>
                <div className="row wow fadeIn" data-wow-delay="0.2s">
                  <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                    <p className="section-title-tiny mb-0 opacity-075">
                      Web design that leaves an impression.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <>
              {/* Services Section */}
              <section className="page-section pb-0" id="services">
                <div className="container">
                  <div className="row mb-n30">
                    {/* Services Item*/}
                    <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-30">
                      <div className="services-3-item round text-center">
                        <div className="wow fadeInUpShort" data-wow-offset={50}>
                          <div className="services-3-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={48}
                              height={64}
                              viewBox="0 0 48 64"
                              aria-hidden="true"
                            >
                              <path d="M16 18.75l32 32-4.25 4.25-32-32zM18.625 27l25.125 25.125 1.375-1.375-25.125-25.25zM15 13v-5h2v5h-2zM15 38.5v-5h2v5h-2zM27 24v-2h5v2h-5zM0 24v-2h5v2h-5zM5.875 11.75l3.625 3.625-1.5 1.375-3.5-3.5zM9.5 31.25l-3.625 3.5-1.375-1.375 3.5-3.5zM27.5 13.25l-3.5 3.5-1.5-1.375 3.625-3.625z" />
                            </svg>
                          </div>
                          <h3 className="services-3-title">Brand Strategy</h3>
                          <div className="services-3-text">
                            A brand is a name, term, design, lorem ipsum symbol
                            or any other feature that identifies one seller's
                            good or service as distinct from those of other
                            sellers.
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Services Item*/}
                    {/* Services Item*/}
                    <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-30">
                      <div className="services-3-item round text-center">
                        <div className="wow fadeInUpShort" data-wow-offset={50}>
                          <div className="services-3-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={60}
                              height={64}
                              viewBox="0 0 60 64"
                              aria-hidden="true"
                            >
                              <path d="M60 48h-22v2h8v2h-32.125v-2h8v-2h-21.875v-36h60v36zM2 14v32h56v-32h-56z" />
                            </svg>
                          </div>
                          <h3 className="services-3-title">UI/UX Design</h3>
                          <div className="services-3-text">
                            Product design is sometimes confused with industrial
                            design, and has recently become a broad term
                            inclusive of service, and physical product design.
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Services Item*/}
                    {/* Services Item*/}
                    <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-30">
                      <div className="services-3-item round text-center">
                        <div className="wow fadeInUpShort" data-wow-offset={50}>
                          <div className="services-3-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={50}
                              height={64}
                              viewBox="0 0 50 64"
                              aria-hidden="true"
                            >
                              <path d="M0 11h50v42h-50v-42zM9 51v-6h-7v6h7zM9 43v-6h-7v6h7zM9 35v-6h-7v6h7zM9 27v-6h-7v6h7zM9 19v-6h-7v6h7zM39 51v-18h-28v18h28zM39 31v-18h-28v18h28zM48 51v-6h-7v6h7zM48 43v-6h-7v6h7zM48 35v-6h-7v6h7zM48 27v-6h-7v6h7zM48 19v-6h-7v6h7z" />
                            </svg>
                          </div>
                          <h3 className="services-3-title">Animation Design</h3>
                          <div className="services-3-text">
                            In traditional animation, images are drawn or
                            painted by hand on transparent celluloid sheets to
                            be photographed and exhibited on film or other
                            media.
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Services Item*/}
                    {/* Services Item*/}
                    <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-30">
                      <div className="services-3-item round text-center">
                        <div className="wow fadeInUpShort" data-wow-offset={50}>
                          <div className="services-3-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={48}
                              height={64}
                              viewBox="0 0 48 64"
                              aria-hidden="true"
                            >
                              <path d="M24.125 20c3.25 0 6.25 1.25 8.5 3.5s3.5 5.25 3.5 8.5-1.25 6.25-3.5 8.5-5.25 3.5-8.5 3.5-6.25-1.25-8.5-3.5-3.5-5.25-3.5-8.5 1.25-6.25 3.5-8.5 5.25-3.5 8.5-3.5zM24.125 42c5.5 0 10-4.5 10-10s-4.5-10-10-10-10 4.5-10 10 4.5 10 10 10zM17.25 10.375c-1.25 0.375-2.5 0.875-3.75 1.5 0.25 1 0.125 2 0 3-0.25 1.625-1 3.125-2.25 4.375-1.5 1.5-3.625 2.375-5.75 2.375-0.5 0-1.125 0-1.625-0.125-0.625 1.25-1.125 2.5-1.5 3.75 0.875 0.5 1.5 1.25 2.125 2.125 1 1.375 1.5 3 1.5 4.625s-0.5 3.25-1.5 4.625c-0.625 0.875-1.25 1.625-2.125 2.125 0.375 1.25 0.875 2.5 1.5 3.75 0.5-0.125 1.125-0.125 1.625-0.125 2.125 0 4.25 0.875 5.75 2.375 1.25 1.25 2 2.75 2.25 4.375 0.125 1 0.25 2 0 3 1.25 0.625 2.5 1.125 3.75 1.5 0.5-0.875 1.25-1.5 2.125-2.125 1.375-1 3-1.5 4.625-1.5s3.25 0.5 4.625 1.5c0.875 0.625 1.625 1.25 2.125 2.125 1.25-0.375 2.5-0.875 3.75-1.5-0.25-1-0.125-2 0-3 0.25-1.625 1-3.125 2.25-4.375 1.5-1.5 3.625-2.375 5.75-2.375 0.5 0 1.125 0 1.625 0.125 0.625-1.25 1.125-2.5 1.5-3.75-0.875-0.5-1.5-1.25-2.125-2.125-1-1.375-1.5-3-1.5-4.625s0.5-3.25 1.5-4.625c0.625-0.875 1.25-1.625 2.125-2.125-0.375-1.25-0.875-2.5-1.5-3.75-0.5 0.125-1.125 0.125-1.625 0.125-2.125 0-4.25-0.875-5.75-2.375-1.25-1.25-2-2.75-2.25-4.375-0.125-1-0.25-2 0-3-1.25-0.625-2.5-1.125-3.75-1.5-0.5 0.875-1.25 1.5-2.125 2.125-1.375 1-3 1.5-4.625 1.5s-3.25-0.5-4.625-1.5c-0.875-0.625-1.625-1.25-2.125-2.125zM29.75 8v0c2.5 0.625 5 1.625 7.125 3-1 2.25-0.625 5 1.25 6.875 1.25 1.25 2.75 1.75 4.375 1.75 0.875 0 1.75-0.125 2.5-0.5 1.375 2.125 2.375 4.625 3 7.125-2.375 0.875-4 3.125-4 5.75s1.75 4.875 4 5.75c-0.625 2.5-1.625 5-3 7.125-0.75-0.375-1.625-0.5-2.5-0.5-1.625 0-3.125 0.5-4.375 1.75-1.875 1.875-2.25 4.625-1.25 6.875-2.125 1.375-4.625 2.375-7.125 3-0.875-2.25-3.125-4-5.75-4s-4.875 1.75-5.75 4c-2.5-0.625-5-1.625-7.125-3 1-2.25 0.625-5-1.25-6.875-1.25-1.25-2.75-1.75-4.375-1.75-0.875 0-1.75 0.125-2.5 0.5-1.375-2.125-2.375-4.625-3-7.125 2.25-0.875 4-3.125 4-5.75s-1.625-4.875-4-5.75c0.625-2.5 1.625-5 3-7.125 0.75 0.375 1.625 0.5 2.5 0.5 1.625 0 3.125-0.5 4.375-1.75 1.875-1.875 2.25-4.625 1.25-6.875 2.125-1.375 4.625-2.375 7.125-3 0.875 2.375 3.125 4 5.75 4s4.875-1.625 5.75-4z" />
                            </svg>
                          </div>
                          <h3 className="services-3-title">Development</h3>
                          <div className="services-3-text">
                            Web development can range from developing a simple
                            single static page of plain text to complex web
                            applications, electronic businesses, and social
                            network services.
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Services Item*/}
                    {/* Services Item*/}
                    <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-30">
                      <div className="services-3-item round text-center">
                        <div className="wow fadeInUpShort" data-wow-offset={50}>
                          <div className="services-3-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={48}
                              height={64}
                              viewBox="0 0 48 64"
                              aria-hidden="true"
                            >
                              <path d="M44.25 20c2.25 0 3.75 1.625 3.75 3.875v22c0 2.25-1.5 4.125-3.75 4.125h-40c-2.25 0-4.25-1.875-4.25-4.125v-22c0-2.25 2-3.875 4.25-3.875h1.625v-2h4.25v2h1.625c4-4.5 5.375-6 6.875-6h11c1.5 0 2.875 1.5 6.875 6h7.75zM46 45.875v-22c0-1.125-0.625-1.875-1.75-1.875h-8.625l-0.625-0.375c-0.375-0.5-0.875-1-1.25-1.375-1.5-1.625-2.5-3-3.25-3.75-0.625-0.625-0.875-0.5-0.875-0.5h-11s-0.25 0-0.875 0.5c-0.75 0.625-1.75 1.75-3.125 3.375-0.375 0.5-0.875 1.25-1.375 1.75l-0.625 0.375h-8.375c-1.125 0-2.25 0.875-2.25 1.875v22c0 1.125 1.125 2.125 2.25 2.125h40c1 0 1.75-1 1.75-2.125zM24 23.75c5.875 0 10.75 4.75 10.75 10.625s-4.875 10.625-10.75 10.625-10.75-4.75-10.75-10.625 4.875-10.625 10.75-10.625zM24 43c4.75 0 8.75-3.875 8.75-8.625s-4-8.625-8.75-8.625-8.75 3.875-8.75 8.625 4 8.625 8.75 8.625zM36 26.125v-2.125h2.125v2.125h-2.125zM20 34.375c0-2.625 1.375-4 4-4s4 1.375 4 4-1.375 4-4 4-4-1.375-4-4z" />
                            </svg>
                          </div>
                          <h3 className="services-3-title">Photography</h3>
                          <div className="services-3-text">
                            A brand is a name, term, design, symbol or any other
                            feature that identifies one seller's good or service
                            as distinct from those of other sellers.
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Services Item*/}
                    {/* Services Item*/}
                    <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-30">
                      <div className="services-3-item round text-center">
                        <div className="wow fadeInUpShort" data-wow-offset={50}>
                          <div className="services-3-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={36}
                              height={64}
                              viewBox="0 0 36 64"
                              aria-hidden="true"
                            >
                              <path d="M4 20v-8h28v8h-28zM6 14v4h24v-4h-24zM32 8c2.25 0 4 1.75 4 4v40c0 2.25-1.75 4-4 4h-28c-2.25 0-4-1.75-4-4v-40c0-2.25 1.75-4 4-4h28zM34 52v-40c0-1.125-0.875-2-2-2h-28c-1.125 0-2 0.875-2 2v40c0 1.125 0.875 2 2 2h28c1.125 0 2-0.875 2-2zM6 30h6v2h-8v-8h2v6zM6 40h6v2h-8v-8h2v6zM6 50h6v2h-8v-8h2v6zM16 30h6v2h-8v-8h2v6zM26 30h6v2h-8v-8h2v6zM16 40h6v2h-8v-8h2v6zM16 50h6v2h-8v-8h2v6zM26 50h6v2h-8v-18h2v16z" />
                            </svg>
                          </div>
                          <h3 className="services-3-title">Marketing</h3>
                          <div className="services-3-text">
                            Marketing is typically done by the seller or
                            retailer. Sometimes tasks are contracted to a
                            dedicated marketing firm or advertising agency and
                            business.
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Services Item*/}
                  </div>
                </div>
              </section>
              {/* End Services Section */}
              {/* Marquee Section */}
              <div className="page-section overflow-hidden">
                {dark ? <MarqueeDark /> : <Marquee />}
              </div>
              {/* End Marquee Section */}
              {/* Benefits Section */}
              <section className="page-section pt-0">
                <div className="container position-relative">
                  {/* Grid */}
                  <div className="row">
                    {/* Text */}
                    <div className="col-md-12 col-lg-3 mb-md-50">
                      <h2 className="section-caption mb-xs-10">
                        Primary Benefits
                      </h2>
                      <h3 className="section-title-small mb-40">
                        Why choose Resonance?
                      </h3>
                      <div className="section-line" />
                    </div>
                    {/* End Text */}
                    {/* Feature Item */}
                    {features5.slice(0, 3).map((elm, i) => (
                      <div
                        key={i}
                        className="col-md-4 col-lg-3 d-flex align-items-stretch mb-sm-30"
                      >
                        <div className="alt-features-item border-left mt-0">
                          <div className="alt-features-icon">
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
                  </div>
                  {/* End Grid */}
                </div>
              </section>
              {/* End Benefits Section */}
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
