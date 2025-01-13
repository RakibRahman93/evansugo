import Footer2 from "@/components/footers/Footer2";
import Header8 from "@/components/headers/Header8";
import Contact from "@/components/homes/home-8/Contact";

import { modernMultipage, modernMultipageDark } from "@/data/menu";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
const onePage = false;
const dark = true;
const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);
export const metadata = {
  title:
    "Modern Contact Dark || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function ModernContactPageDark() {
  return (
    <>
      <div className="theme-modern">
        <div className="dark-mode">
          <div className="page bg-dark-1" id="top">
            <nav className="main-nav dark transparent stick-fixed wow-menubar">
              <Header8 links={modernMultipageDark} />
            </nav>{" "}
            <main id="main">
              <ParallaxContainer
                className="page-section pt-90 pb-90 pb-xs-40 bg-dark-alpha-60 parallax-5 light-content"
                style={{
                  backgroundImage:
                    "url(/assets/images/demo-modern/section-bg-3.jpg)",
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
                    <div className="col-11 col-sm-10">
                      <h1 className="hs-title-5 font-alt overflow-hidden mb-0">
                        <span className="d-block wow fadeRotateIn">
                          {" "}
                          LET’S WORK{" "}
                        </span>
                        <span className="d-block text-end wow fadeRotateIn">
                          TOGETHER
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
              <section
                className={`page-section  scrollSpysection  ${
                  dark ? "bg-dark-1 light-content" : ""
                } `}
                id="contact"
              >
                <div className="container">
                  <Contact />
                </div>
              </section>
            </main>
            <footer className="footer-1 bg-dark-2 light-content">
              <Footer2 />
            </footer>
          </div>{" "}
        </div>
      </div>
    </>
  );
}
