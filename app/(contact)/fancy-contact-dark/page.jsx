import AnimatedText from "@/components/common/AnimatedText";
import Faq from "@/components/common/Faq";
import Footer6 from "@/components/footers/Footer6";
import Header6 from "@/components/headers/Header6";
import Contact from "@/components/homes/home-6/Contact";

import { fancyMultipage, fancyMultipageDark } from "@/data/menu";
import Image from "next/image";
import Link from "next/link";

const onePage = false;
const dark = true;
export const metadata = {
  title:
    "Fancy Contact Dark || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function FancyContactPageDark() {
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
                          <AnimatedText text="Contact" />
                          <span className="mark-decoration-3-wrap">
                            <AnimatedText text="Us" />
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
                        Reach out and let's bring your vision to life.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              <section
                className={`page-section  scrollSpysection  ${
                  dark ? "bg-dark-1 light-content" : ""
                } `}
                id="contact"
              >
                <Contact />
              </section>
              <>
                <hr className="mt-0 mb-0 white" />
                {/* End Divider */}
                {/* FAQ Section */}
                <section className="page-section bg-dark-1 light-content z-index-1">
                  <div className="container position-relative">
                    <div className="row position-relative">
                      <div className="col-md-6 col-lg-5 mb-md-50 mb-sm-30">
                        <h3 className="section-title mb-30">
                          Frequently Asked Questions
                        </h3>
                        <p className="text-gray mb-0">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nam pulvinar vitae neque et porttitor. Integer
                          non dapibus diam, ac eleifend lectus lorem ipsum. In
                          maximus ligula semper metus pellentesque mattis.
                          Maecenas volutpat, diam enim sagittis quam.
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
            <footer className="page-section footer bg-dark-2 light-content pb-30">
              <Footer6 />
            </footer>
          </div>{" "}
        </div>
      </div>
    </>
  );
}
