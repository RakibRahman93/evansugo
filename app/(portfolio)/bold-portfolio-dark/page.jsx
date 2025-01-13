import AnimatedText from "@/components/common/AnimatedText";
import Footer2 from "@/components/footers/Footer2";
import Header2 from "@/components/headers/Header2";
import Portfolio from "@/components/homes/home-2/Portfolio";

import { boldMultipage, boldMultipageDark } from "@/data/menu";
import dynamic from "next/dynamic";

import Link from "next/link";
import React from "react";
const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);
export const metadata = {
  title:
    "Bold Portfolio Dark || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
const onePage = false;
const dark = true;
export default function BoldPortfolioPageDark() {
  return (
    <>
      <div className="theme-bold">
        <div className="dark-mode">
          <div className="page bg-dark-1" id="top">
            <nav className="main-nav dark dark-mode transparent stick-fixed wow-menubar">
              <Header2 links={boldMultipageDark} />
            </nav>
            <main id="main">
              <ParallaxContainer
                className="page-section bg-dark-alpha-60 light-content parallax-5"
                style={{
                  backgroundImage:
                    "url(/assets/images/full-width-images/section-bg-13.jpg)",
                }}
                id="home"
              >
                <div className="container position-relative pt-sm-40">
                  <div className="text-center">
                    <h1 className="hs-title-4 font-alt mb-0">
                      <span
                        className="wow charsAnimInLong-1"
                        data-splitting="chars"
                      >
                        <AnimatedText text="Selected Work" />
                      </span>
                    </h1>
                  </div>
                </div>
              </ParallaxContainer>
              <section
                className={`page-section  scrollSpysection  ${
                  dark ? "bg-dark-1 light-content" : ""
                } `}
                id="portfolio"
              >
                <Portfolio desc />
              </section>
              <hr
                className={`${
                  dark ? "white opacity-015" : "black"
                } black mt-0 mb-0"`}
              />
              <section className="page-section bg-dark-1 light-content">
                <div className="container text-center">
                  <div className="row">
                    <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                      <h2 className="section-title-medium font-alt text-outline-cont mt-20 mb-50 mb-md-30">
                        <span className="text-outline-2" aria-hidden="true">
                          Like what you see?
                        </span>
                        <span className="text-outline-1" aria-hidden="true">
                          Like what you see?
                        </span>
                        <span className="text-outline">Like what you see?</span>
                      </h2>

                      <p className="section-text mb-60 mb-md-40 mb-sm-30">
                        <span className="section-title-inline">WOW!</span> Are
                        you impressed by my portfolio of creative works? If so,
                        I invite you to take the next step and get in touch with
                        me. By contacting me, you can benefit from a
                        complimentary online consultation tailored specifically
                        to your brand.
                      </p>

                      <div className="local-scroll">
                        <Link
                          href={`/bold-contact`}
                          className="link-hover-anim underline align-middle"
                          data-link-animate="y"
                        >
                          <span className="link-strong link-strong-unhovered">
                            Start a Project
                          </span>
                          <span
                            className="link-strong link-strong-hovered"
                            aria-hidden="true"
                          >
                            Start a Project
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </main>
            <footer className="footer-1 bg-dark-2 light-content">
              <Footer2 />
            </footer>
          </div>{" "}
        </div>
      </div>{" "}
    </>
  );
}
