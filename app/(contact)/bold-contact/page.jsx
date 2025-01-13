import AnimatedText from "@/components/common/AnimatedText";
import Footer2 from "@/components/footers/Footer2";
import Header2 from "@/components/headers/Header2";
import Contact from "@/components/homes/home-2/Contact";
import Experience from "@/components/homes/home-2/Experience";
import Services from "@/components/homes/home-2/Services";

import { boldMultipage } from "@/data/menu";
import dynamic from "next/dynamic";

import React from "react";
const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);
export const metadata = {
  title:
    "Bold Contact || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
const onePage = false;
const dark = false;
export default function BoldContactPage() {
  return (
    <>
      <div className="theme-bold">
        <div className="page" id="top">
          <nav className="main-nav transparent stick-fixed wow-menubar">
            <Header2 links={boldMultipage} />
          </nav>
          <main id="main">
            <ParallaxContainer
              className="page-section bg-light-alpha-70 parallax-5"
              style={{
                backgroundImage:
                  "url(/assets/images/demo-bold/section-bg-1.jpg)",
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
                      <AnimatedText text="Contact Me" />
                    </span>
                  </h1>
                </div>
              </div>
            </ParallaxContainer>
            <section
              className={`page-section  scrollSpysection pb-0  ${
                dark ? "bg-dark-1 light-content" : ""
              } `}
              id="contact"
            >
              <Contact heading={"Let's Talk"} />
            </section>
            <div className="page-section overflow-hidden ">
              <Experience />
            </div>
            <section className="page-section pt-0 mt-0">
              <div className="container">
                <h2 className="section-title-medium font-alt text-outline-cont mt-20 mb-50 mb-md-30">
                  <span className="text-outline-2" aria-hidden="true">
                    How I work
                  </span>
                  <span className="text-outline-1" aria-hidden="true">
                    How I work
                  </span>
                  <span className="text-outline">How I work</span>
                </h2>

                <Services />
              </div>
            </section>
          </main>
          <footer className="footer-1 bg-dark-1 light-content">
            <Footer2 />
          </footer>
        </div>{" "}
      </div>{" "}
    </>
  );
}
