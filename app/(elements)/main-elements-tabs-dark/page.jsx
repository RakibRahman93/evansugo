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
    "Element Page Tabs Dark || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function ElementPageTabsDark() {
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
                              <AnimatedText text="Tabs" />
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
                    <div className="text-center mb-60 mb-sm-40">
                      <h2 className="section-title-small">Standard Tabs</h2>
                    </div>
                    <div className="row">
                      <div className="col-sm-8 offset-sm-2">
                        {/* Nav Tabs */}
                        <div className="text-center mb-40 mb-xxs-30">
                          <ul
                            className="nav nav-tabs tpl-tabs animate"
                            role="tablist"
                          >
                            <li className="nav-item" role="presentation">
                              <a
                                href="#item-1"
                                aria-controls="item-1"
                                className="nav-link active"
                                data-bs-toggle="tab"
                                role="tab"
                                aria-selected="true"
                              >
                                First Tab
                              </a>
                            </li>
                            <li className="nav-item" role="presentation">
                              <a
                                href="#item-2"
                                aria-controls="item-2"
                                className="nav-link"
                                data-bs-toggle="tab"
                                role="tab"
                                aria-selected="false"
                              >
                                Second Tab
                              </a>
                            </li>
                            <li className="nav-item" role="presentation">
                              <a
                                href="#item-3"
                                aria-controls="item-3"
                                className="nav-link"
                                data-bs-toggle="tab"
                                role="tab"
                                aria-selected="false"
                              >
                                Third Tab
                              </a>
                            </li>
                          </ul>
                        </div>
                        {/* End Nav Tabs */}
                        {/* Tab panes */}
                        <div className="tab-content tpl-minimal-tabs-cont">
                          <div
                            className="tab-pane fade show active"
                            id="item-1"
                            role="tabpanel"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Quisque mollis lacus augue, pharetra non
                            congue sit amet, bibendum sit amet enim. a hendrerit
                            leo tristique vitae. Mauris non ipsum molestie,
                            sagittis elit ac, vulputate odio. Fusce quam augue,
                            gravida tincidunt dui nec, tempor iaculis justo.
                            Aliquam tortor leo, pharetra non congue sit amet,
                            bibendum sit amet enim.
                          </div>
                          <div
                            className="tab-pane fade"
                            id="item-2"
                            role="tabpanel"
                          >
                            Nam porta elementum tortor, eget tempor orci
                            ullamcorper eget. Aliquam fermentum sem non
                            vulputate dapibus. Vestibulum ante ipsum primis in
                            faucibus orci luctus et ultrices posuere cubilia
                            Curae; Nulla at porttitor massa. Aliquam tortor leo,
                            pharetra non congue sit amet pharetra non congue sit
                            amet, bibendum sit amet enim.
                          </div>
                          <div
                            className="tab-pane fade"
                            id="item-3"
                            role="tabpanel"
                          >
                            Pellentesque sed vehicula velit, vitae vulputate
                            velit. Morbi nec porta augue, et dignissim enim.
                            Vivamusere suscipit, lorem vitae rhoncus pharetra,
                            erat nisl scelerisque magna, ut mollis dui eros eget
                            libero. Vivamus ut ornare tellus. Aliquam tortor
                            leo, pharetra pharetra non congue sit amet non
                            congue sit amet, bibendum sit amet enim.
                          </div>
                        </div>
                        {/* End Tab panes */}
                      </div>
                    </div>
                  </div>
                </section>
                {/* End Section */}
                {/* Divider */}
                <hr className="mt-0 mb-0 white" />
                {/* End Divider */}
                {/* Section */}
                <section className="page-section bg-dark-1 light-content">
                  <div className="container relative">
                    <div className="text-center mb-60 mb-sm-40">
                      <h2 className="section-title-small">Minimal Tabs</h2>
                    </div>
                    <div className="row">
                      <div className="col-sm-8 offset-sm-2">
                        {/* Nav Tabs */}
                        <div className="text-center mb-40 mb-xxs-30">
                          <ul
                            className="nav nav-tabs tpl-minimal-tabs animate"
                            role="tablist"
                          >
                            <li className="nav-item" role="presentation">
                              <a
                                href="#mission"
                                aria-controls="mission"
                                className="nav-link active"
                                data-bs-toggle="tab"
                                role="tab"
                                aria-selected="true"
                              >
                                Mission
                              </a>
                            </li>
                            <li className="nav-item" role="presentation">
                              <a
                                href="#vision"
                                aria-controls="vision"
                                className="nav-link"
                                data-bs-toggle="tab"
                                role="tab"
                                aria-selected="false"
                              >
                                Vision
                              </a>
                            </li>
                            <li className="nav-item" role="presentation">
                              <a
                                href="#ideas"
                                aria-controls="ideas"
                                className="nav-link"
                                data-bs-toggle="tab"
                                role="tab"
                                aria-selected="false"
                              >
                                Ideas
                              </a>
                            </li>
                          </ul>
                        </div>
                        {/* End Nav Tabs */}
                        {/* Tab panes */}
                        <div className="tab-content tpl-minimal-tabs-cont text-center">
                          <div
                            className="tab-pane fade show active"
                            id="mission"
                            role="tabpanel"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Quisque mollis lacus augue, pharetra non
                            congue sit amet, bibendum sit amet enim. a hendrerit
                            leo tristique vitae. Mauris non ipsum molestie,
                            sagittis elit ac, vulputate odio. Fusce quam augue,
                            gravida tincidunt dui nec, tempor iaculis justo.
                            Aliquam tortor leo, pharetra non congue sit amet,
                            bibendum sit amet enim.
                          </div>
                          <div
                            className="tab-pane fade"
                            id="vision"
                            role="tabpanel"
                          >
                            Nam porta elementum tortor, eget tempor orci
                            ullamcorper eget. Aliquam fermentum sem non
                            vulputate dapibus. Vestibulum ante ipsum primis in
                            faucibus orci luctus et ultrices posuere cubilia
                            Curae; Nulla at porttitor massa. Aliquam tortor leo,
                            pharetra non congue sit amet pharetra non congue sit
                            amet, bibendum sit amet enim.
                          </div>
                          <div
                            className="tab-pane fade"
                            id="ideas"
                            role="tabpanel"
                          >
                            Pellentesque sed vehicula velit, vitae vulputate
                            velit. Morbi nec porta augue, et dignissim enim.
                            Vivamus suscipit, lorem vitae rhoncus pharetra, erat
                            nisl scelerisque magna, ut mollis dui eros eget
                            libero. Vivamus ut ornare tellus. Aliquam tortor
                            leo, pharetra pharetra non congue sit amet non
                            congue sit amet, bibendum sit amet enim.
                          </div>
                        </div>
                        {/* End Tab panes */}
                      </div>
                    </div>
                  </div>
                </section>
              </>
            </main>
            <Footer1 dark />
          </div>{" "}
        </div>
      </div>
    </>
  );
}
