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
import { progressData } from "@/data/skills";
import { menuItemsDark } from "@/data/menu";

export const metadata = {
  title:
    "Element Page Bars Dark || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function ElementPageBarsDark() {
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
                              <AnimatedText text="Progress Bars" />
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
                <section className="page-section bg-dark-1 light-content">
                  <div className="container relative">
                    {/* Row */}
                    <div className="row">
                      {/* Col */}
                      <div className="col-md-8 offset-md-2">
                        {/* Bar Item */}
                        {progressData.map((elm, i) => (
                          <div key={i} className="progress tpl-progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: `${elm.value}%` }}
                            >
                              <div>{elm.label}, %</div>
                              <span>{elm.label}</span>
                            </div>
                          </div>
                        ))}
                        {/* End Bar Item */}
                      </div>
                      {/* End Col */}
                    </div>
                    {/* End Row */}
                  </div>
                </section>
                {/* End Section */}
                {/* Divider */}
                <hr className="mt-0 mb-0 white" />
                {/* End Divider */}
                {/* Section */}
                <section className="page-section bg-dark-1 light-content">
                  <div className="container relative">
                    {/* Row */}
                    <div className="row">
                      {/* Col */}
                      <div className="col-md-8 offset-md-2">
                        {progressData.map((elm, i) => (
                          <div key={i} className="progress tpl-progress-alt">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: `${elm.value}%` }}
                            >
                              {elm.label}, {elm.value}%
                            </div>
                          </div>
                        ))}
                        {/* End Bar Item */}
                      </div>
                      {/* End Col */}
                    </div>
                    {/* End Row */}
                  </div>
                </section>
                {/* End Section */}
              </>
            </main>
            <Footer1 dark />
          </div>{" "}
        </div>
      </div>
    </>
  );
}
