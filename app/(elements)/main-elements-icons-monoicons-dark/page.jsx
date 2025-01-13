import Footer1 from "@/components/footers/Footer1";

import dynamic from "next/dynamic";

const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);

import Header1Multipage from "@/components/headers/Header1Multipage";
import AnimatedText from "@/components/common/AnimatedText";
import Image from "next/image";
import { menuItemsDark } from "@/data/menu";

export const metadata = {
  title:
    "Element Page Icons Monicons Dark || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function ElementPageIconsMoniconsDark() {
  return (
    <>
      <div className="theme-main">
        <div className="dark-mode">
          <div className="page bg-dark-1" id="top">
            <nav className="main-nav dark dark-mode transparent stick-fixed wow-menubar">
              <Header1Multipage links={menuItemsDark} />
            </nav>
            <main id="main">
              <section className="page-section pt-0 pb-0" id="home">
                <ParallaxContainer
                  className="page-section bg-dark-1 bg-dark-alpha-80 light-content parallax-5"
                  style={{
                    backgroundImage:
                      "url(/assets/images/full-width-images/section-bg-2.jpg)",
                  }}
                >
                  <div className="container position-relative pt-30 pt-sm-50">
                    {/* Section Content */}
                    <div className="text-center">
                      <div className="row">
                        {/* Page Title */}
                        <div className="col-md-8 offset-md-2">
                          <h1 className="hs-title-1 mb-20">
                            <span
                              className="wow charsAnimIn"
                              data-splitting="chars"
                            >
                              <AnimatedText text="Mono Icons" />
                            </span>
                          </h1>
                          <div className="row">
                            <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                              <p
                                className="section-descr mb-0 wow fadeIn"
                                data-wow-delay="0.2s"
                                data-wow-duration="1.2s"
                              >
                                Open this file in the HTML editor and copy the
                                code of the wished component.
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* End Page Title */}
                      </div>
                    </div>
                    {/* End Section Content */}
                  </div>
                </ParallaxContainer>
              </section>
              <section className="page-section bg-dark-1 light-content">
                <div className="container relative">
                  <div className="row">
                    <div className="col-md-8 offset-md-2 mb-30">
                      <div className="text-center">
                        <p>You can use a set of 177+ Mono Icons.</p>
                        <div className="mb-30">
                          <div className="highlight">
                            <pre>
                              <code className="html">
                                &lt;i className="mi-heart"&gt;&lt;/i&gt;
                                mi-heart
                              </code>
                            </pre>
                          </div>
                          <p>
                            Result: <i className="mi-heart" />
                            mi-heart. To change the icon use one of the classes
                            below.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-n30">
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-add" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">mi-add</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-archive" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-archive
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-arrow-down" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-arrow-down
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-arrow-left" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-arrow-left
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-arrow-left-down" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-arrow-left-down
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-arrow-left-up" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-arrow-left-up
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-arrow-right" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-arrow-right
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-arrow-right-down" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-arrow-right-down
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-arrow-right-up" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-arrow-right-up
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-arrow-up" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-arrow-up
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-attachment" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-attachment
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-backspace" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-backspace
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-ban" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">mi-ban</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-bar-chart" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-bar-chart
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-bar-chart-alt" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-bar-chart-alt
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-board" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">mi-board</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-bold" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">mi-bold</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-book" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">mi-book</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-bookmark" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-bookmark
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-calendar" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-calendar
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-call" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">mi-call</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-camera" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">mi-camera</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-caret-down" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-caret-down
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-caret-left" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-caret-left
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-caret-right" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-caret-right
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-caret-up" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-caret-up
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-check" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">mi-check</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-chevron-double-down" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-chevron-double-down
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-chevron-double-left" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-chevron-double-left
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-chevron-double-right" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-chevron-double-right
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-chevron-double-up" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-chevron-double-up
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-chevron-down" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-chevron-down
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-chevron-left" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-chevron-left
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-chevron-right" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-chevron-right
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-chevron-up" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-chevron-up
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-circle" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">mi-circle</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-circle-add" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-circle-add
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-circle-arrow-down" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-circle-arrow-down
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-circle-arrow-left" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-circle-arrow-left
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-circle-arrow-right" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-circle-arrow-right
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-circle-arrow-up" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-circle-arrow-up
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-circle-check" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-circle-check
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-circle-error" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-circle-error
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-circle-help" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-circle-help
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-circle-information" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-circle-information
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-circle-remove" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-circle-remove
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-circle-warning" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-circle-warning
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-clipboard" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-clipboard
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-clipboard-check" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-clipboard-check
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-clipboard-list" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-clipboard-list
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-clock" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">mi-clock</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-close" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">mi-close</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-cloud" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">mi-cloud</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-cloud-download" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-cloud-download
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-cloud-upload" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-cloud-upload
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-cloudy" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">mi-cloudy</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-comment" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-comment
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-compass" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-compass
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-computer" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-computer
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-copy" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">mi-copy</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-credit-card" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-credit-card
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-database" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-database
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-delete" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">mi-delete</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-delete-alt" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-delete-alt
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-document" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-document
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-document-add" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-document-add
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-document-check" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-document-check
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-document-download" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-document-download
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-document-empty" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-document-empty
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-document-remove" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-document-remove
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-download" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-download
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-drag" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">mi-drag</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-drop" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">mi-drop</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-edit" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">mi-edit</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-edit-alt" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-edit-alt
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-email" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">mi-email</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-enter" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">mi-enter</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-expand" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">mi-expand</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-export" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">mi-export</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-external-link" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-external-link
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-eye" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">mi-eye</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-eye-off" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-eye-off
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-favorite" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-favorite
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-filter" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">mi-filter</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-filter-1" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-filter-1
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-filter-alt" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-filter-alt
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-flag" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">mi-flag</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-fog" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">mi-fog</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-folder" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">mi-folder</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-folder-add" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-folder-add
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-folder-check" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-folder-check
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-folder-download" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-folder-download
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-folder-remove" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-folder-remove
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-grid" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">mi-grid</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-heart" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">mi-heart</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-home" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">mi-home</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-image" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">mi-image</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-inbox" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">mi-inbox</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-italic" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">mi-italic</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-laptop" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">mi-laptop</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-layers" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">mi-layers</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-layout" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">mi-layout</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-link" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">mi-link</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-link-alt" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-link-alt
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-list" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">mi-list</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-location" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-location
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-lock" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">mi-lock</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-log-in" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">mi-log-in</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-log-out" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-log-out
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-map" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">mi-map</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-megaphone" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-megaphone
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-menu" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">mi-menu</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-message" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-message
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-message-alt" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-message-alt
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-minimize" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-minimize
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-mobile" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">mi-mobile</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-moon" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">mi-moon</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-next" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">mi-next</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-notification" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-notification
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-notification-off" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-notification-off
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-options-horizontal" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-options-horizontal
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-options-vertical" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-options-vertical
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-pause" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">mi-pause</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-pen" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">mi-pen</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-percentage" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-percentage
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-pin" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">mi-pin</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-play" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">mi-play</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-previous" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-previous
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-print" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">mi-print</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-rain" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">mi-rain</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-refresh" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-refresh
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-remove" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">mi-remove</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-reorder" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-reorder
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-reorder-alt" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-reorder-alt
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-repeat" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">mi-repeat</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-save" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">mi-save</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-search" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">mi-search</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-select" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">mi-select</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-send" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">mi-send</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-settings" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-settings
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-share" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">mi-share</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-shopping-cart" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-shopping-cart
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-shopping-cart-add" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-shopping-cart-add
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-shuffle" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-shuffle
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-snow" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">mi-snow</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-snowflake" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-snowflake
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-sort" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">mi-sort</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-speakers" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-speakers
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-stop" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">mi-stop</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-storm" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">mi-storm</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-strikethrough" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-strikethrough
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-sun" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">mi-sun</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-sunrise" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-sunrise
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-sunrise-alt" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-sunrise-alt
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-sunset" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">mi-sunset</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-switch" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">mi-switch</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-table" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">mi-table</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-tablet" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">mi-tablet</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-tag" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">mi-tag</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-temperature" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-temperature
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-text" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">mi-text</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-three-rows" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-three-rows
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-two-columns" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-two-columns
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-two-rows" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-two-rows
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-underline" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-underline
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-undo" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">mi-undo</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-unlock" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">mi-unlock</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-user" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">mi-user</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-user-add" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-user-add
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-user-check" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-user-check
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-user-remove" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-user-remove
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-users" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">mi-users</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-volume-off" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-volume-off
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-volume-up" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-volume-up
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-warning" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-warning
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-webcam" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">mi-webcam</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-wind" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">mi-wind</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-window" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">mi-window</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-zoom-in" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-zoom-in
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="mi-zoom-out" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          mi-zoom-out
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                  </div>
                </div>
              </section>
            </main>
            <Footer1 dark />
          </div>{" "}
        </div>
      </div>
    </>
  );
}
