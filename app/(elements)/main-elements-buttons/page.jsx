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
import { menuItems } from "@/data/menu";

export const metadata = {
  title:
    "Element Page Buttons || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function ElementPageButtons() {
  return (
    <>
      <div className="theme-main">
        <div className="page" id="top">
          <nav className="main-nav transparent stick-fixed wow-menubar">
            <Header1Multipage links={menuItems} />
          </nav>
          <main id="main">
            <section className="page-section pt-0 pb-0" id="home">
              <ParallaxContainer
                className="page-section bg-gray-light-1 bg-light-alpha-90 parallax-5"
                style={{
                  backgroundImage:
                    "url(/assets/images/full-width-images/section-bg-1.jpg)",
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
                            <AnimatedText text="Buttons" />
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
            <>
              {/* Section */}
              <section className="page-section">
                <div className="container relative">
                  {/* Row */}
                  <div className="row">
                    {/* Col */}
                    <div className="col-sm-6 col-md-3 col-lg-3 mb-40">
                      <div className="mb-10">
                        <a
                          href="#"
                          className="btn btn-mod btn-large btn-round btn-hover-anim"
                        >
                          <span>Button</span>
                        </a>
                      </div>
                      <div className="mb-10">
                        <a
                          href="#"
                          className="btn btn-mod btn-medium btn-round btn-hover-anim"
                        >
                          <span>Button</span>
                        </a>
                      </div>
                      <div className="mb-10">
                        <a
                          href="#"
                          className="btn btn-mod btn-small btn-round btn-hover-anim"
                        >
                          <span>Button</span>
                        </a>
                      </div>
                      <div className="mb-10">
                        <a
                          href="#"
                          className="btn btn-mod btn-round btn-hover-anim"
                        >
                          <span>Button</span>
                        </a>
                      </div>
                    </div>
                    {/* End Col */}
                    {/* Col */}
                    <div className="col-sm-6 col-md-3 col-lg-3 mb-40">
                      <div className="mb-10">
                        <a
                          href="#"
                          className="btn btn-mod btn-border btn-large btn-round"
                          data-btn-animate="y"
                        >
                          Button
                        </a>
                      </div>
                      <div className="mb-10">
                        <a
                          href="#"
                          className="btn btn-mod btn-border btn-medium btn-round"
                          data-btn-animate="y"
                        >
                          Button
                        </a>
                      </div>
                      <div className="mb-10">
                        <a
                          href="#"
                          className="btn btn-mod btn-border btn-small btn-round"
                          data-btn-animate="y"
                        >
                          Button
                        </a>
                      </div>
                      <div className="mb-10">
                        <a
                          href="#"
                          className="btn btn-mod btn-border btn-round"
                          data-btn-animate="y"
                        >
                          Button
                        </a>
                      </div>
                    </div>
                    {/* End Col */}
                    {/* Col */}
                    <div className="col-sm-6 col-md-3 col-lg-3 mb-40">
                      <div className="mb-10">
                        <a
                          href="#"
                          className="btn btn-mod btn-circle btn-large btn-hover-anim"
                        >
                          <span>Button</span>
                        </a>
                      </div>
                      <div className="mb-10">
                        <a
                          href="#"
                          className="btn btn-mod btn-circle btn-medium btn-hover-anim"
                        >
                          <span>Button</span>
                        </a>
                      </div>
                      <div className="mb-10">
                        <a
                          href="#"
                          className="btn btn-mod btn-circle btn-small btn-hover-anim"
                        >
                          <span>Button</span>
                        </a>
                      </div>
                      <div className="mb-10">
                        <a
                          href="#"
                          className="btn btn-mod btn-circle btn-hover-anim"
                        >
                          <span>Button</span>
                        </a>
                      </div>
                    </div>
                    {/* End Col */}
                    {/* Col */}
                    <div className="col-sm-6 col-md-3 col-lg-3 mb-40">
                      <div className="mb-10">
                        <a
                          href="#"
                          className="btn btn-mod btn-border btn-circle btn-large"
                          data-btn-animate="y"
                        >
                          Button
                        </a>
                      </div>
                      <div className="mb-10">
                        <a
                          href="#"
                          className="btn btn-mod btn-border btn-circle btn-medium"
                          data-btn-animate="y"
                        >
                          Button
                        </a>
                      </div>
                      <div className="mb-10">
                        <a
                          href="#"
                          className="btn btn-mod btn-border btn-circle btn-small"
                          data-btn-animate="y"
                        >
                          Button
                        </a>
                      </div>
                      <div className="mb-10">
                        <a
                          href="#"
                          className="btn btn-mod btn-border btn-circle"
                          data-btn-animate="y"
                        >
                          Button
                        </a>
                      </div>
                    </div>
                    {/* End Col */}
                    {/* Col */}
                    <div className="col-sm-6 col-md-3 col-lg-3 mb-40">
                      <div className="mb-10">
                        <a
                          href="#"
                          className="btn btn-mod btn-gray btn-large btn-round"
                        >
                          Button
                        </a>
                      </div>
                      <div className="mb-10">
                        <a
                          href="#"
                          className="btn btn-mod btn-gray btn-medium btn-round"
                        >
                          Button
                        </a>
                      </div>
                      <div className="mb-10">
                        <a
                          href="#"
                          className="btn btn-mod btn-gray btn-small btn-round"
                        >
                          Button
                        </a>
                      </div>
                      <div className="mb-10">
                        <a href="#" className="btn btn-mod btn-gray btn-round">
                          Button
                        </a>
                      </div>
                    </div>
                    {/* End Col */}
                    {/* Col */}
                    <div className="col-sm-6 col-md-3 col-lg-3 mb-40">
                      <div className="mb-10">
                        <a
                          href="#"
                          className="btn btn-mod btn-gray btn-large btn-circle"
                        >
                          Button
                        </a>
                      </div>
                      <div className="mb-10">
                        <a
                          href="#"
                          className="btn btn-mod btn-gray btn-medium btn-circle"
                        >
                          Button
                        </a>
                      </div>
                      <div className="mb-10">
                        <a
                          href="#"
                          className="btn btn-mod btn-gray btn-small btn-circle"
                        >
                          Button
                        </a>
                      </div>
                      <div className="mb-10">
                        <a href="#" className="btn btn-mod btn-gray btn-circle">
                          Button
                        </a>
                      </div>
                    </div>
                    {/* End Col */}
                  </div>
                  {/* End Row */}
                </div>
              </section>
              {/* End Section */}
              {/* Section */}
              <section className="page-section bg-dark-2">
                <div className="container relative">
                  {/* Row */}
                  <div className="row">
                    {/* Col */}
                    <div className="col-sm-6 col-md-3 col-lg-3 mb-40">
                      <div className="mb-10">
                        <a
                          href="#"
                          className="btn btn-mod btn-w btn-round btn-large btn-hover-anim"
                        >
                          <span>Button</span>
                        </a>
                      </div>
                      <div className="mb-10">
                        <a
                          href="#"
                          className="btn btn-mod btn-w btn-round btn-medium btn-hover-anim"
                        >
                          <span>Button</span>
                        </a>
                      </div>
                      <div className="mb-10">
                        <a
                          href="#"
                          className="btn btn-mod btn-w btn-round btn-small btn-hover-anim"
                        >
                          <span>Button</span>
                        </a>
                      </div>
                      <div className="mb-10">
                        <a
                          href="#"
                          className="btn btn-mod btn-w btn-round btn-hover-anim"
                        >
                          <span>Button</span>
                        </a>
                      </div>
                    </div>
                    {/* End Col */}
                    {/* Col */}
                    <div className="col-sm-6 col-md-3 col-lg-3 mb-40">
                      <div className="mb-10">
                        <a
                          href="#"
                          className="btn btn-mod btn-border-w btn-round btn-large"
                          data-btn-animate="y"
                        >
                          Button
                        </a>
                      </div>
                      <div className="mb-10">
                        <a
                          href="#"
                          className="btn btn-mod btn-border-w btn-round btn-medium"
                          data-btn-animate="y"
                        >
                          Button
                        </a>
                      </div>
                      <div className="mb-10">
                        <a
                          href="#"
                          className="btn btn-mod btn-border-w btn-round btn-small"
                          data-btn-animate="y"
                        >
                          Button
                        </a>
                      </div>
                      <div className="mb-10">
                        <a
                          href="#"
                          className="btn btn-mod btn-border-w btn-round"
                          data-btn-animate="y"
                        >
                          Button
                        </a>
                      </div>
                    </div>
                    {/* End Col */}
                    {/* Col */}
                    <div className="col-sm-6 col-md-3 col-lg-3 mb-40">
                      <div className="mb-10">
                        <a
                          href="#"
                          className="btn btn-mod btn-w btn-circle btn-large btn-hover-anim"
                        >
                          <span>Button</span>
                        </a>
                      </div>
                      <div className="mb-10">
                        <a
                          href="#"
                          className="btn btn-mod btn-w btn-circle btn-medium btn-hover-anim"
                        >
                          <span>Button</span>
                        </a>
                      </div>
                      <div className="mb-10">
                        <a
                          href="#"
                          className="btn btn-mod btn-w btn-circle btn-small btn-hover-anim"
                        >
                          <span>Button</span>
                        </a>
                      </div>
                      <div className="mb-10">
                        <a
                          href="#"
                          className="btn btn-mod btn-w btn-circle btn-hover-anim"
                        >
                          <span>Button</span>
                        </a>
                      </div>
                    </div>
                    {/* End Col */}
                    {/* Col */}
                    <div className="col-sm-6 col-md-3 col-lg-3 mb-40">
                      <div className="mb-10">
                        <a
                          href="#"
                          className="btn btn-mod btn-border-w btn-circle btn-large"
                          data-btn-animate="y"
                        >
                          Button
                        </a>
                      </div>
                      <div className="mb-10">
                        <a
                          href="#"
                          className="btn btn-mod btn-border-w btn-circle btn-medium"
                          data-btn-animate="y"
                        >
                          Button
                        </a>
                      </div>
                      <div className="mb-10">
                        <a
                          href="#"
                          className="btn btn-mod btn-border-w btn-circle btn-small"
                          data-btn-animate="y"
                        >
                          Button
                        </a>
                      </div>
                      <div className="mb-10">
                        <a
                          href="#"
                          className="btn btn-mod btn-border-w btn-circle"
                          data-btn-animate="y"
                        >
                          Button
                        </a>
                      </div>
                    </div>
                    {/* End Col */}
                  </div>
                  {/* End Row */}
                </div>
              </section>
              {/* End Section */}
            </>
          </main>
          <Footer1 />
        </div>{" "}
      </div>
    </>
  );
}
