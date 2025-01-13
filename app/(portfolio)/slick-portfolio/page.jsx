import Footer8 from "@/components/footers/Footer8";
import Header9 from "@/components/headers/Header9";
import Portfolio from "@/components/homes/home-9/Portfolio";

import { slickMultipages } from "@/data/menu";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title:
    "Slick Portfolio || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
const onePage = false;
const dark = false;
export default function SlickPortfolioPage() {
  return (
    <>
      <div className="theme-slick">
        <div className="page" id="top">
          <nav className="main-nav transparent stick-fixed wow-menubar wch-unset">
            <Header9 links={slickMultipages} />
          </nav>
          <main id="main">
            <section
              className="page-section bg-gradient-gray-light-1 bg-scroll overflow-hidden"
              id="home"
            >
              {/* <!-- Background Shape --> */}
              <div className="bg-shape-1 wow fadeIn">
                <Image
                  src="/assets/images/demo-fancy/bg-shape-1.svg"
                  width={1443}
                  height={844}
                  alt=""
                />
              </div>
              {/* <!-- End Background Shape --> */}

              <div className="container position-relative pt-sm-40 text-center">
                <div className="row">
                  <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                    <h1 className="hs-title-10 mb-10 wow fadeInUp">
                      Portfolio
                    </h1>

                    <p
                      className="section-descr mb-0 wow fadeInUp"
                      data-wow-delay="0.2s"
                    >
                      Explore captivating web design solutions.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section
              className={`page-section  scrollSpysection  ${
                dark ? "bg-dark-1 light-content" : ""
              } `}
              id="portfolio"
            >
              <div className="container position-relative">
                <Portfolio />
              </div>
            </section>

            <section className="page-section pt-0">
              <div className="container">
                <div
                  className={`small-section ${
                    dark ? "bg-dark-2 light-content" : "bg-gray-light-1"
                  }  ps-4 ps-lg-0 pe-4 pe-lg-0 round position-relative overflow-hidden`}
                >
                  {/* Decoration Circles */}
                  <div className="decoration-12" />
                  <div className="decoration-13" />
                  {/* End Decoration Circles */}
                  <div className="row">
                    <div className="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                      <div className="row">
                        <div className="col-md-7 col-lg-8 text-center text-md-start mb-sm-20">
                          <h2 className="section-title-small mb-20">
                            Like our creative works?
                          </h2>
                          <p className="text-gray mb-0">
                            Quisque posuere mollis ullamcorper. Ut eget metus
                            lorem ipsum posuere eget at ex. Aenean consequat
                            vitae lorem in vehicula.
                          </p>
                        </div>
                        <div className="col-md-5 col-lg-4 text-center text-md-end pt-2">
                          <Link
                            href={`/slick-portfolio${dark ? "-dark" : ""}`}
                            className="btn btn-mod btn-color btn-large btn-circle btn-hover-anim"
                          >
                            <span>View all works</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
          <footer className="page-section footer position-relative overflow-hidden pb-30">
            <div className="bg-shape-4">
              <Image
                src="/assets/images/demo-slick/bg-shape-4.svg"
                width={1600}
                height={268}
                alt=""
              />
            </div>
            <Footer8 />
          </footer>
        </div>
      </div>
    </>
  );
}
