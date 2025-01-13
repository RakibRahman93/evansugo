import AnimatedText from "@/components/common/AnimatedText";
import Footer6 from "@/components/footers/Footer6";
import Header6 from "@/components/headers/Header6";
import Portfolio from "@/components/homes/home-6/Portfolio";

import { fancyMultipage, fancyMultipageDark } from "@/data/menu";
import Image from "next/image";
import Link from "next/link";
const onePage = false;
const dark = true;
export const metadata = {
  title:
    "Fancy Portfolio Dark || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function FancyPortfolioPageDark() {
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
                          <AnimatedText text="Selected" />
                          <span className="mark-decoration-3-wrap">
                            <AnimatedText text="Work" />
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
              <>
                {/* Marquee Section */}
                <div className="page-section overflow-hidden">
                  {/* Marquee Text Line */}
                  <div className="marquee marquee-style-1 bg-dark-3 light-content mb-30">
                    <div className="marquee-track marquee-animation">
                      <div>Branding</div>
                      <div aria-hidden="true">UI/UX Design</div>
                      <div aria-hidden="true">Art Direction</div>
                      <div aria-hidden="true">Branding</div>
                      <div aria-hidden="true">UI/UX Design</div>
                      <div aria-hidden="true">Art Direction</div>
                      <div aria-hidden="true">Branding</div>
                      <div aria-hidden="true">UI/UX Design</div>
                      <div aria-hidden="true">Art Direction</div>
                      <div aria-hidden="true">Branding</div>
                      <div aria-hidden="true">UI/UX Design</div>
                      <div aria-hidden="true">Art Direction</div>
                      <div aria-hidden="true">Branding</div>
                      <div aria-hidden="true">UI/UX Design</div>
                      <div aria-hidden="true">Art Direction</div>
                      <div aria-hidden="true">Branding</div>
                      <div aria-hidden="true">UI/UX Design</div>
                      <div aria-hidden="true">Art Direction</div>
                      <div aria-hidden="true">Branding</div>
                      <div aria-hidden="true">UI/UX Design</div>
                      <div aria-hidden="true">Art Direction</div>
                      <div aria-hidden="true">Branding</div>
                      <div aria-hidden="true">UI/UX Design</div>
                      <div aria-hidden="true">Art Direction</div>
                    </div>
                  </div>
                  {/* End Marquee Text Line */}
                  {/* Marquee Text Line */}
                  <div className="marquee marquee-style-1 bg-dark-3 light-content">
                    <div className="marquee-track marquee-animation">
                      <div>Development</div>
                      <div aria-hidden="true">SEO Optimization</div>
                      <div aria-hidden="true">Development</div>
                      <div aria-hidden="true">SEO Optimization</div>
                      <div aria-hidden="true">Development</div>
                      <div aria-hidden="true">SEO Optimization</div>
                      <div aria-hidden="true">Development</div>
                      <div aria-hidden="true">SEO Optimization</div>
                      <div aria-hidden="true">Development</div>
                      <div aria-hidden="true">SEO Optimization</div>
                      <div aria-hidden="true">Development</div>
                      <div aria-hidden="true">SEO Optimization</div>
                      <div aria-hidden="true">Development</div>
                      <div aria-hidden="true">SEO Optimization</div>
                      <div aria-hidden="true">Development</div>
                      <div aria-hidden="true">SEO Optimization</div>
                      <div aria-hidden="true">Development</div>
                      <div aria-hidden="true">SEO Optimization</div>
                      <div aria-hidden="true">Development</div>
                      <div aria-hidden="true">SEO Optimization</div>
                      <div aria-hidden="true">Development</div>
                      <div aria-hidden="true">SEO Optimization</div>
                      <div aria-hidden="true">Development</div>
                      <div aria-hidden="true">SEO Optimization</div>
                    </div>
                  </div>
                  {/* End Marquee Text Line */}
                </div>
                {/* End Marquee Section */}
                {/* Call Action Section */}
                <section className="page-section bg-dark-1 light-content pt-0">
                  <div className="container position-relative">
                    <div className="row text-center wow fadeInUp">
                      <div className="col-md-10 offset-md-1 col-lg-6 offset-lg-3">
                        <p className="section-descr mb-50 mb-sm-30">
                          The power of design help us to solve complex problems
                          and cultivate business solutions.
                        </p>
                        <div className="local-scroll">
                          <Link
                            href={`/elegant-contact`}
                            className="btn btn-mod btn-large btn-color btn-round btn-hover-anim"
                          >
                            <span>Contact us</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {/* End Call Action Section */}
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
