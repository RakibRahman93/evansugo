import Footer5 from "@/components/footers/Footer5";

import Header5 from "@/components/headers/Header5";
import Image from "next/image";
import Link from "next/link";
const onePage = false;
const dark = true;
import { elegantMultipage, elegantMultipageDark } from "@/data/menu";
import Portfolio from "@/components/homes/home-5/Portfolio";
import MarqueeDark from "@/components/homes/home-5/MarqueeDark";
import Marquee from "@/components/homes/home-5/Marquee";

export const metadata = {
  title:
    "Elegant Portfolio Dark || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function ElegantPortfolioPageDark() {
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
                    PORTFOLIO
                  </h1>
                  <div className="row wow fadeIn" data-wow-delay="0.2s">
                    <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                      <p className="section-title-tiny mb-0 opacity-075">
                        Explore captivating web design solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              <section
                className={`page-section pb-0  scrollSpysection  ${
                  dark ? "bg-dark-1 light-content" : ""
                } `}
                id="portfolio"
              >
                <Portfolio />
              </section>
              <div className="page-section overflow-hidden">
                {dark ? <MarqueeDark /> : <Marquee />}
              </div>
              <section className="page-section bg-dark-1 light-content pt-0">
                <div className="container position-relative">
                  {/* Decorative Waves */}

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
                          className="btn btn-mod btn-large btn-w btn-circle btn-hover-anim"
                        >
                          <span>Contact us</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
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
