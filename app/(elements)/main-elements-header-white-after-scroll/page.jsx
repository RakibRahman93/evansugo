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
    "Element Page Header White After Scroll || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function ElementPageHeaderWhiteAfterScroll() {
  return (
    <>
      <div className="theme-main">
        <div className="page" id="top">
          <nav className="main-nav dark transparent light-after-scroll stick-fixed wow-menubar">
            <Header1Multipage links={menuItems} />
          </nav>
          <main id="main">
            <section className="page-section pt-0 pb-0" id="home">
              <ParallaxContainer
                className="page-section bg-dark-1 bg-dark-alpha-90 light-content parallax-5"
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
                            <AnimatedText text="Header Dark Transparent" />
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
            <section className="page-section">
              <div className="container position-relative">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  neque velit, ultrices in vulputate vitae, volutpat iaculis
                  velit. In congue dolor a ligula cursus aliquam. Aliquam id
                  malesuada metus. Donec ultricies lorem augue, ac fringilla
                  felis aliquet et. Integer a rutrum dui, id varius neque. Donec
                  orci massaleger, porttitor sit amet velit non, interdum
                  feugiat lacus. Fusce tincidunt id erat at consequat. Cras vel
                  aliquet mauris, ac tempor lorem. Donec faucibus sodales eros
                  sed pretium. Praesent ut scelerisque lectus, ut feugiat mi.
                </p>
                <p className="mb-0">
                  Nunc vulputate semper erat, non iaculis sapien congue sit
                  amet. Duis non nulla volutpat, dignissim leo sit amet, porta
                  nunc. Donec placerat fermentum metusere ac scelerisque. In id
                  sollicitudin nulla. Suspendisse potenti. Integer aliquam orci
                  aliquam eros posuere ornare. Fusce augue felis, maximus non
                  lacus vitae, ullamcorper dignissim leo. Ut congue feugiat
                  turpis at aliquam. Donec eros neque, accumsan sed venenatis
                  volutpat, tempor at metus. Curabitur vel vestibulum ipsum,
                  convallis cursus nisl. Mauris scelerisque gravida faucibus.
                  Morbi vitae sapien nibh. Integer libero orci, ullamcorper in
                  tincidunt at, lorem ipsum bereme molestie quis ipsum.
                </p>
              </div>
            </section>
          </main>
          <Footer1 />
        </div>{" "}
      </div>
    </>
  );
}
