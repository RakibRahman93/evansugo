import Footer9 from "@/components/footers/Footer9";
import Header10 from "@/components/headers/Header10";
import Features from "@/components/homes/home-10/Features";
import Service from "@/components/homes/home-10/Service";
import { featuresListData } from "@/data/features";

import { strongMultiPages } from "@/data/menu";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);
const dark = false;
const onePage = false;
export const metadata = {
  title:
    "Strong Services || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function StrongServicesPage() {
  return (
    <>
      <div className="theme-strong">
        <div className="page" id="top">
          <nav className="main-nav dark transparent stick-fixed wow-menubar wch-unset">
            <Header10 links={strongMultiPages} />
          </nav>
          <main className="main">
            <ParallaxContainer
              className="page-section bg-dark-alpha-30 light-content parallax-5"
              style={{
                backgroundImage:
                  "url(/assets/images/demo-strong/section-bg-1.jpg)",
              }}
              id="home"
            >
              <div className="container position-relative pt-sm-30">
                {/* Home Section Content */}
                <div className="home-content text-center">
                  <h1 className="hs-title-7 mb-0">
                    <span className="wow charsAnimIn-2" data-splitting="chars">
                      Our <span className="font-alt">Services</span>
                    </span>
                  </h1>
                </div>
                {/* End Home Section Content */}
              </div>
            </ParallaxContainer>
            <section
              className={`page-section  scrollSpysection  ${
                dark ? "bg-dark-1 light-content" : ""
              }`}
              id="services"
            >
              <div className="container">
                {/* Nav tabs */}

                <Service />
                {/* End Tab panes */}
              </div>
            </section>
            <section className="pt-30">
              <div id="paddingRightContainer" className="container" />
              <div className="row g-0">
                <div className="col-lg-6 mt-n30 mt-md-0 mb-30 mb-md-0">
                  <div
                    id="paddingRight"
                    className={`split-column-right ${
                      dark ? "bg-dark-2" : "bg-dark-1"
                    } light-content position-relative d-flex align-items-center`}
                    data-rellax-y=""
                    data-rellax-speed="0.5"
                    data-rellax-percentage="0.5"
                  >
                    {/* Decorative Dots */}
                    <div className="position-absolute top-0 start-0 pt-2 ps-2 opacity-02">
                      <Image
                        width={192}
                        height={222}
                        src="/assets/images/demo-strong/decoration.svg"
                        alt=""
                      />
                    </div>
                    {/* End Decorative Dots */}
                    <div>
                      <h2 className="section-title mb-30">
                        Responsive, <span className="font-alt">flexible</span>{" "}
                        and customizable.
                      </h2>
                      <p className="mb-50">
                        Phasellus nisl lectus, tincidunt eget fermentum quis,
                        accumsan a sem efficitur augue ac ex maximus, eget
                        viverra sem aliquam. Donec blandit ante nunc, nec
                        pellentesque arcu egestas a lorem.
                      </p>
                      {/* Features List */}
                      <div className="row mt-n20">
                        {/* Features List Item */}
                        {featuresListData.map((item, index) => (
                          <div
                            key={index}
                            className="col-sm-6 col-lg-12 col-xl-6 d-flex mt-20"
                          >
                            <div className="features-list-icon">
                              <i className="mi-check" />
                            </div>
                            <div className="features-list-text">
                              {item.text}
                            </div>
                          </div>
                        ))}
                        {/* End Features List Item */}
                      </div>
                      {/* End Features List */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-stretch order-lg-first">
                  <div className="split-image-left">
                    <Image
                      width={1100}
                      height={930}
                      src="/assets/images/demo-strong/split-image-2.jpg"
                      alt="Image Description"
                    />
                    {/* Circle Text */}
                    <div className="position-absolute bottom-0 start-0 ps-4 pb-4 d-none d-sm-block">
                      <Image
                        src="/assets/images/demo-strong/circle-text.svg"
                        width={138}
                        height={138}
                        alt="Image Description"
                      />
                    </div>
                    {/* End Circle Text */}
                  </div>
                </div>
              </div>
            </section>
            <section
              className={`page-section overflow-hidden  ${
                dark ? "bg-dark-1 light-content" : ""
              }`}
            >
              <Features />
            </section>
          </main>

          <footer className="footer-1 bg-dark-1 light-content">
            <Footer9 />
          </footer>
        </div>
      </div>{" "}
    </>
  );
}
