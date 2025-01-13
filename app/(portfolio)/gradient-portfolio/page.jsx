import Footer7 from "@/components/footers/Footer7";
import Header7 from "@/components/headers/Header7";

import Portfolio from "@/components/homes/home-7/Portfolio";

import { gradientMultipage } from "@/data/menu";
import Image from "next/image";
import Link from "next/link";
const onePage = false;
const dark = false;
export const metadata = {
  title:
    "Gradient Portfolio || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function GradientPortfolioPage() {
  return (
    <>
      <div className="theme-gradient">
        <div className="page" id="top">
          <nav className="main-nav transparent stick-fixed wow-menubar wch-unset">
            <Header7 links={gradientMultipage} />
          </nav>
          <main id="main">
            <section className="page-section bg-gradient-gray-light-1 bg-scroll overflow-hidden">
              <div className="bg-shape-1 wow fadeIn">
                <Image
                  src="/assets/images/demo-fancy/bg-shape-1.svg"
                  width={1443}
                  height={844}
                  alt=""
                />
              </div>

              <div className="container position-relative pt-10 pt-sm-40 text-center">
                <div className="row">
                  <div className="col-lg-10 offset-lg-1">
                    <h1
                      className="hs-title-1 mb-10 wow fadeInUpShort"
                      data-wow-duration="0.75s"
                    >
                      Portfolio
                    </h1>

                    <p
                      className="section-descr mb-0 wow fadeIn"
                      data-wow-delay="0.2s"
                    >
                      Explore captivating web design solutions.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section
              className={`page-section scrollSpysection  overflow-hidden  ${
                dark ? "bg-dark-1 light-content" : ""
              }`}
              id="portfolio"
            >
              <Portfolio />
            </section>
            <section
              className={`small-section ${
                dark
                  ? "bg-dark-1 bg-gradient-light-1 light-content"
                  : " bg-gradient-light-1"
              }`}
            >
              <div className="container position-relative">
                <div className="row">
                  <div className="col-lg-10 offset-lg-1">
                    <div className="row">
                      <div className="col-md-8 text-center text-md-start mb-sm-20 d-md-flex">
                        <div className="flex-shrink-0 me-md-4 pe-md-1 mb-sm-20">
                          <Image
                            src="/assets/images/demo-gradient/section-image-5.png"
                            width="100"
                            height="100"
                            alt="Image Description"
                          />
                        </div>
                        <div className="d-flex align-items-center pt-2 pt-md-0">
                          <p className="section-descr-medium w-100 mb-0">
                            Like our creative works? Contact us and get free
                            online consultation for your brand.
                          </p>
                        </div>
                      </div>

                      <div className="col-md-4 text-center text-md-end pt-20 local-scroll">
                        <Link
                          href={`/gradient-services${dark ? "-dark" : ""}`}
                          className="btn btn-mod btn-medium btn-grad btn-round"
                          data-btn-animate="y"
                        >
                          <span className="btn-animate-y">
                            <span className="btn-animate-y-1">
                              See all services
                              <i
                                className="mi-arrow-right size-24 align-center"
                                aria-hidden="true"
                              ></i>
                            </span>
                            <span
                              className="btn-animate-y-2"
                              aria-hidden="true"
                            >
                              See all services
                              <i
                                className="mi-arrow-right size-24 align-center"
                                aria-hidden="true"
                              ></i>
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
          <footer className="page-section footer bg-dark-1 light-content overflow-hidden pb-30">
            <div className="bg-shape-4">
              <Image
                width="1443"
                height="644"
                src="/assets/images/demo-gradient/bg-shape-1.svg"
                alt=""
              />
            </div>
            <Footer7 />
          </footer>
        </div>{" "}
      </div>
    </>
  );
}
