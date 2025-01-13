import AnimateButton from "@/components/common/AnimateButton";
import AnimatedText from "@/components/common/AnimatedText";
import Footer4 from "@/components/footers/Footer4";
import Header4 from "@/components/headers/Header4";
import Testimonials2 from "@/components/homes/home-4/Testimonials2";
const onePage = false;
const dark = false;
import Image from "next/image";
import { corporateMultipage } from "@/data/menu";
import Link from "next/link";
import Cta from "@/components/homes/home-4/Cta";
import Testimonials from "@/components/homes/home-4/Testimonials";
import { features5 } from "@/data/features";

export const metadata = {
  title:
    "Corporate About || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function CorporateAboutPage() {
  return (
    <>
      <div className="theme-corporate">
        <div className="page" id="top">
          <nav className="main-nav transparent stick-fixed wow-menubar wch-unset">
            <Header4 links={corporateMultipage} />
          </nav>

          <main id="main">
            <section className="page-section bg-gradient-gray-light-1 bg-scroll overflow-hidden">
              {/* Background Shape */}
              <div className="bg-shape-1 wow fadeIn">
                <Image
                  className="opacity-05"
                  src="/assets/images/demo-corporate/bg-shape-1.svg"
                  alt=""
                  width={1443}
                  height={844}
                />
              </div>
              {/* End Background Shape */}
              <div className="container position-relative pt-10 pt-sm-40 text-center">
                <div className="row">
                  <div className="col-lg-10 offset-lg-1">
                    <h1 className="hs-title-9 mb-10">
                      <span className="wow charsAnimIn" data-splitting="chars">
                        <AnimatedText text="About" />
                        <span className="mark-decoration-3-wrap">
                          <AnimatedText text="Studio" />
                          <b
                            className="mark-decoration-3 wow scalexIn"
                            data-wow-delay="0.5s"
                          />
                        </span>
                      </span>
                    </h1>
                    <p
                      className="hs-descr mb-0 wow fadeIn"
                      data-wow-delay="0.2s"
                    >
                      Crafting immersive digital journeys for brands.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section
              className={`page-section scrollSpysection  ${
                dark ? "bg-dark-1 light-content" : ""
              } `}
              id="about"
            >
              <div className="bg-line-1 opacity-025">
                <Image
                  src="/assets/images/demo-corporate/decoration-2.svg"
                  width={1600}
                  height={513}
                  alt=""
                  className="wow fadeIn"
                  data-wow-delay="0.4s"
                />
              </div>
              {/* End Decorative Line */}
              <div className="container position-relative">
                <div className="row mb-70 mb-sm-50">
                  <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
                    <p className="section-descr dark-white mb-0">
                      Marketing is the activity, set of institutions, and
                      processes for creating, communicating, delivering, and
                      exchanging offerings that have value for customers
                      partners, and society at large. However, the definition of
                      marketing has evolved over the years.
                    </p>
                  </div>
                </div>
                {/* Testimonials Grid */}
                <Testimonials2 />
                {/* End Testimonials Grid */}
                <div className="local-scroll text-center">
                  <Link
                    href={`/corporate-about${dark ? "-dark" : ""}`}
                    className={`btn btn-mod ${
                      dark ? "btn-dark" : "btn-w"
                    } btn-with-icon btn-circle`}
                  >
                    <span className="btn-icon color-3">
                      <i className="mi-favorite" />
                    </span>
                    <span data-btn-animate="y">
                      <AnimateButton text={"View Our Services"} />
                    </span>
                  </Link>
                </div>
              </div>
            </section>
            <section
              className="page-section bg-scroll light-content"
              style={{
                backgroundImage:
                  "url(/assets/images/demo-corporate/section-bg-1.jpg)",
              }}
            >
              {/* Desktop Overlay */}
              <div className="bg-overlay bg-gradient-primary-alpha-1 d-none d-md-block" />
              {/* End Desktop Overlay */}
              {/* Mobile Overlay */}
              <div className="bg-overlay bg-primary-1 opacity-09 d-md-none" />
              {/* End Mobile Overlay */}
              <div className="container position-relative">
                <div className="row">
                  <div className="col-md-7 col-lg-6 col-xl-5">
                    <h2 className="section-title mb-40 mb-xs-30">
                      Get <span className="mark-decoration-5">free</span>{" "}
                      marketing consultation online
                    </h2>
                    <p className="section-descr mb-50 mb-sm-40">
                      Contact us and get free marketing consultation for your
                      business.
                    </p>
                    <div className="local-scroll mb-70 mb-sm-50">
                      <Link
                        href={`/corporate-contact${dark ? "-dark" : ""}`}
                        className="btn btn-mod btn-w-c btn-large btn-round btn-hover-anim opacity-09"
                      >
                        <span>Get a Consultation</span>
                      </Link>
                    </div>
                  </div>
                </div>
                {/* Logotypes */}
                <Cta />
                {/* End Logotypes */}
              </div>{" "}
            </section>
            <>
              <hr className="mt-0 mb-0" />
              {/* End Divider */}
              {/* Benefits Section */}
              <section className="page-section">
                <div className="container position-relative">
                  {/* Grid */}
                  <div className="row">
                    {/* Text */}
                    <div className="col-md-12 col-lg-3 mb-md-50">
                      <h2 className="section-caption mb-xs-10">
                        Primary Benefits
                      </h2>
                      <h3 className="section-title-small mb-40">
                        Why choose Resonance?
                      </h3>
                      <div className="section-line" />
                    </div>
                    {/* End Text */}
                    {/* Feature Item */}
                    {features5.slice(0, 3).map((elm, i) => (
                      <div
                        key={i}
                        className="col-md-4 col-lg-3 d-flex align-items-stretch mb-sm-30"
                      >
                        <div className="alt-features-item border-left mt-0">
                          <div className="alt-features-icon">
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              aria-hidden="true"
                              focusable="false"
                              xmlns="http://www.w3.org/2000/svg"
                              fillRule="evenodd"
                              clipRule="evenodd"
                            >
                              <path d={elm.svgPath} />
                            </svg>
                          </div>
                          <h4 className="alt-features-title">{elm.title}</h4>
                          <div className="alt-features-descr">
                            {elm.description}
                          </div>
                        </div>
                      </div>
                    ))}
                    {/* End Feature Item */}

                    {/* End Feature Item */}
                  </div>
                  {/* End Grid */}
                </div>
              </section>
            </>
            <hr className={`mt-0 mb-0 ${dark ? "white" : ""} `} />
            <section
              className={`page-section  scrollSpysection  ${
                dark ? "bg-dark-1 light-content" : ""
              } `}
              id="clients-stories"
            >
              <Testimonials />
            </section>
            <hr className={`mt-0 mb-0 ${dark ? "white" : ""} `} />
          </main>
          <footer className="footer-2 pb-50">
            <Footer4 />
          </footer>
        </div>{" "}
      </div>
    </>
  );
}
