import Footer2 from "@/components/footers/Footer2";
import Header8 from "@/components/headers/Header8";

import Service from "@/components/homes/home-8/Service";
const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);

import { modernMultipage } from "@/data/menu";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
const onePage = false;
const dark = false;
export const metadata = {
  title:
    "Modern Services || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function ModernServicesPage() {
  return (
    <>
      <div className="theme-modern">
        <div className="page" id="top">
          <nav className="main-nav dark transparent stick-fixed wow-menubar">
            <Header8 links={modernMultipage} />
          </nav>{" "}
          <main id="main">
            <ParallaxContainer
              className="page-section pt-90 pb-90 pb-xs-40 bg-dark-alpha-60 parallax-5 light-content"
              style={{
                backgroundImage:
                  "url(/assets/images/demo-modern/section-bg-4.jpg)",
              }}
              id="home"
            >
              <div className="container position-relative">
                <div className="mb-20">
                  <div className="mb-10">
                    <Link
                      href="/modern-multi-page"
                      className="link-hover-anim align-middle"
                      data-btn-animate="y"
                    >
                      <span className="btn-animate-y">
                        <span className="btn-animate-y-1">
                          <i
                            className="icon-arrow-left2 size-14"
                            aria-hidden="true"
                          ></i>{" "}
                          Back to home
                        </span>
                        <span className="btn-animate-y-2" aria-hidden="true">
                          <i
                            className="icon-arrow-left2 size-14"
                            aria-hidden="true"
                          ></i>{" "}
                          Back to home
                        </span>
                      </span>
                    </Link>
                  </div>
                  <hr className="white mt-0 mb-0" />
                </div>
                <div className="row">
                  <div className="col-9 col-sm-8">
                    <h1 className="hs-title-5 font-alt overflow-hidden mb-0">
                      <span className="d-block wow fadeRotateIn"> Modern </span>
                      <span className="d-block text-end wow fadeRotateIn">
                        Services
                      </span>
                    </h1>
                  </div>
                </div>
              </div>
              {/* Scroll Down */}
              <div
                className="local-scroll scroll-down-wrap-2 d-none d-lg-block wow fadeInUp"
                data-wow-offset={0}
              >
                <div className="full-wrapper text-end">
                  <span className="scroll-down-2">
                    <Image
                      width="50"
                      height="73"
                      src="/assets/images/demo-modern/arrow-down-1-white.svg"
                      alt="Scroll Down"
                    />
                  </span>
                </div>
              </div>
              {/* End Scroll Down */}
            </ParallaxContainer>
            <section className="page-section">
              <div className="container">
                <div className="row mb-100 mb-md-60">
                  <div className="col-lg-8 mb-md-50">
                    <div
                      className="section-descr-extralarge wow linesAnimIn"
                      data-wow-offset="0"
                      data-splitting="lines"
                    >
                      <h2 className="section-title-inline-1">Our Values</h2>
                      As an award-winning group of passionate professionals, we
                      excel in the realms of branding, design, and engineering.
                      Our team is driven by a shared mission to make work
                      meaningful, striving to infuse each project with purpose,
                      creativity, and innovation.
                    </div>
                  </div>

                  <div className="col-lg-4 wow fadeInUp" data-offset="0">
                    <Image
                      src="/assets/images/demo-modern/section-image-3.jpg"
                      alt="Image Description"
                      width={502}
                      height={548}
                    />
                  </div>
                </div>

                <hr
                  className={` ${
                    dark ? "white opacity-1" : "black"
                  }  mt-0 mb-80`}
                />
                <Service />
                <div className="row">
                  <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                    <hr
                      className={` ${
                        dark ? "white opacity-1" : "black"
                      }  mt-0 mb-20`}
                    />

                    <div className="row">
                      <div className="col-sm-6 col-md-7 text-center text-sm-start mb-xs-20">
                        <p className="section-descr mb-0 black">
                          We use the power of design to solve complex problems
                          and cultivate business solutions.
                        </p>
                      </div>
                      <div className="col-sm-6 col-md-5 text-center text-sm-end local-scroll">
                        <Link
                          href={`/modern-contact${dark ? "-dark" : ""}`}
                          className="btn btn-mod btn-border btn-medium btn-circle"
                          data-btn-animate="y"
                        >
                          <span className="btn-animate-y">
                            <span className="btn-animate-y-1">
                              Get a proposal
                            </span>
                            <span
                              className="btn-animate-y-2"
                              aria-hidden="true"
                            >
                              Get a proposal
                            </span>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
          <footer className="footer-1 bg-dark-1 light-content">
            <Footer2 />
          </footer>
        </div>{" "}
      </div>
    </>
  );
}
