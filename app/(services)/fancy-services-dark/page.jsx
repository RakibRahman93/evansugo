import AnimatedText from "@/components/common/AnimatedText";
import Footer6 from "@/components/footers/Footer6";
import Header6 from "@/components/headers/Header6";
import Pricing from "@/components/homes/home-6/Pricing";
import Service from "@/components/homes/home-6/Service";

import { fancyMultipage, fancyMultipageDark } from "@/data/menu";
import Image from "next/image";
import Link from "next/link";
const onePage = false;
const dark = true;
export const metadata = {
  title:
    "Fancy Services Dark || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function FancyServicesPageDark() {
  return (
    <>
      <div className="theme-fancy">
        <div className="dark-mode">
          <div className="page bg-dark-1" id="top">
            <nav className="main-nav dark dark-mode transparent stick-fixed wow-menubar wch-unset">
              <Header6 links={fancyMultipageDark} />
            </nav>
            <main id="main">
              <section className="page-section bg-dark-1 bg-gradient-gray-dark-1 light-content bg-scroll overflow-hidden">
                {/* <!-- Background Shape --> */}
                <div className="bg-shape-1 opacity-003 wow fadeIn">
                  <Image
                    width="1443"
                    height="844"
                    src="/assets/images/demo-fancy/bg-shape-1.svg"
                    alt=""
                  />
                </div>
                {/* <!-- End Background Shape --> */}

                <div className="container position-relative pt-10 pt-sm-40 text-center">
                  <div className="row">
                    <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                      <h1 className="hs-title-10 mb-10">
                        <span
                          className="wow charsAnimIn"
                          data-splitting="chars"
                        >
                          <AnimatedText text="Our" />
                          <span className="mark-decoration-3-wrap">
                            <AnimatedText text="Services" />
                            <b
                              className="mark-decoration-3 wow scalexIn"
                              data-wow-delay="0.5s"
                            ></b>
                          </span>
                        </span>
                      </h1>

                      <p
                        className="section-descr mb-0 wow fadeIn"
                        data-wow-delay="0.2s"
                      >
                        Web design that leaves an impression.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              <section
                className={`page-section scrollSpysection  ${
                  dark ? "bg-dark-1 bg-gradient-gray-dark-1 light-content" : " "
                } bg-scroll`}
                id="services"
              >
                <div className="container position-relative">
                  {/* Services Grid */}

                  <Service />
                </div>
              </section>{" "}
              <hr className={`mt-0 mb-0 ${dark ? "white" : ""}`} />
              <section
                className={`page-section  scrollSpysection  ${
                  dark ? "bg-dark-1 light-content" : ""
                } `}
                id="pricing"
              >
                <Pricing />
              </section>
            </main>
            <footer className="page-section footer bg-dark-2 light-content pb-30">
              <Footer6 />
            </footer>
          </div>{" "}
        </div>
      </div>
    </>
  );
}
