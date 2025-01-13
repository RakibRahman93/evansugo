import Image from "next/image";
import Link from "next/link";
import Awards from "./Awards";
import Blog from "./Blog";
import Contact from "./Contact";
import Experience from "./Experience";
import Faq from "./Faq";
import Portfolio from "./Portfolio";
import Services from "./Services";
import Testimonials from "./Testimonials";
export default function Home2({ onePage = false, dark = false }) {
  return (
    <>
      <section
        className={`page-section  scrollSpysection  pb-0 ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="about"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-5 order-last order-md-first">
              <div className="overflow-hidden">
                <Image
                  width={800}
                  height={1095}
                  src="/assets/images/Evans.jpeg"
                  className="w-100 wow scaleOutIn"
                  alt="Evans Ugo"
                />
              </div>
            </div>
            <div className="col-md-7 col-lg-6 offset-lg-1 d-flex align-items-center mb-sm-80">
              <div className="wow fadeInUp">
                <h2 className="section-title-medium font-alt text-outline-cont mt-20 mb-50 mb-md-30">
                  <span className="text-outline-2" aria-hidden="true">
                    About
                  </span>
                  <span className="text-outline-1" aria-hidden="true">
                    About
                  </span>
                  <span className="text-outline">About</span>
                </h2>
                <p className="section-text mb-60 mb-md-40 mb-sm-30">
                  <span className="section-title-inline">Who?</span>Evans is a
                  creative visionary who specializes in crafting cinematic ad
                  content and social-first visuals that reflect the style and
                  storytelling quality of luxury brands. His speculative ad work
                  includes standout campaigns designed for fashion, beauty, and
                  lifestyle, With a keen eye for detail and innovation, Evans
                  transforms concepts into polished, premium-level creative
                  experiences.
                </p>
                <div className="local-scroll">
                  {onePage ? (
                    <a
                      href="#services"
                      className="link-hover-anim underline align-middle"
                      data-link-animate="y"
                    >
                      <span className="link-strong link-strong-unhovered">
                        Learn more{" "}
                        <span className="visually-hidden">about us</span>
                      </span>
                      <span
                        className="link-strong link-strong-hovered"
                        aria-hidden="true"
                      >
                        Learn more{" "}
                        <span className="visually-hidden">about us</span>
                      </span>
                    </a>
                  ) : (
                    <Link
                      href={`/bold-about${dark ? "-dark" : ""}`}
                      className="link-hover-anim underline align-middle"
                      data-link-animate="y"
                    >
                      <span className="link-strong link-strong-unhovered">
                        Learn more{" "}
                        <span className="visually-hidden">about us</span>
                      </span>
                      <span
                        className="link-strong link-strong-hovered"
                        aria-hidden="true"
                      >
                        Learn more{" "}
                        <span className="visually-hidden">about us</span>
                      </span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-section overflow-hidden">
        <Experience />
      </div>
      {/* <section
        className={`page-section scrollSpysection  pt-0  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="awards"
      >
        <Awards />
      </section> */}
      <hr
        className={`${dark ? "white opacity-015" : "black"} black mt-0 mb-0"`}
      />
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="services"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-5 mb-md-80">
              <h2 className="section-title-medium font-alt text-outline-cont mt-20 mb-50 mb-md-30">
                <span className="text-outline-2">Services</span>
                <span className="text-outline-1">Services</span>
                <span className="text-outline">Services</span>
              </h2>
              <p className="section-text mb-60 mb-md-40 mb-sm-30">
                <span className="section-title-inline">Why?</span> I go beyond
                creating ads—I tackle real-world marketing challenges by
                combining human creativity, data-driven insights, and advanced
                AI technology.
              </p>
              <div className="local-scroll">
                {onePage ? (
                  <>
                    {" "}
                    <a
                      href="#contact"
                      className="link-hover-anim underline align-middle"
                      data-link-animate="y"
                    >
                      <span className="link-strong link-strong-unhovered">
                        Request a quote
                      </span>
                      <span
                        className="link-strong link-strong-hovered"
                        aria-hidden="true"
                      >
                        Request a quote
                      </span>
                    </a>
                  </>
                ) : (
                  <>
                    <Link
                      href={`/bold-contact${dark ? "-dark" : ""}`}
                      className="link-hover-anim underline align-middle"
                      data-link-animate="y"
                    >
                      <span className="link-strong link-strong-unhovered">
                        Request a quote
                      </span>
                      <span
                        className="link-strong link-strong-hovered"
                        aria-hidden="true"
                      >
                        Request a quote
                      </span>
                    </Link>
                  </>
                )}
              </div>
            </div>
            <div className="col-lg-7 col-xl-6 offset-xl-1">
              {/* Accordion */}
              <Faq />
              {/* End Accordion */}
            </div>
          </div>
          {/* Divider */}
          <div className="page-section">
            <hr
              className={`${
                dark ? "white opacity-015" : "black"
              } black mt-0 mb-0"`}
            />
          </div>
          {/* End Divider */}
          {/* Steps */}

          <Services />
          {/* End Steps */}
        </div>
      </section>
      <hr
        className={`${dark ? "white opacity-015" : "black"} black mt-0 mb-0"`}
      />
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="portfolio"
      >
        <Portfolio />
      </section>
      <hr
        className={`${dark ? "white opacity-015" : "black"} black mt-0 mb-0"`}
      />
      {/* <section
        className={`page-section  ${dark ? "bg-dark-1 light-content" : ""} `}
      >
        <Testimonials />
      </section> */}
      {/* <hr
        className={`${dark ? "white opacity-015" : "black"} black mt-0 mb-0"`}
      /> */}
      {/* <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="blog"
      >
        <Blog />
      </section> */}
      {/* <hr
        className={`${dark ? "white opacity-015" : "black"} black mt-0 mb-0"`}
      /> */}
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="contact"
      >
        <Contact />
      </section>
    </>
  );
}
