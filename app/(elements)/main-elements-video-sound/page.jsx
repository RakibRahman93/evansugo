import Footer1 from "@/components/footers/Footer1";

import dynamic from "next/dynamic";

const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);
import { menuItems } from "@/data/menu";
import Header1Multipage from "@/components/headers/Header1Multipage";
import AnimatedText from "@/components/common/AnimatedText";

export const metadata = {
  title:
    "Element Page Video Sound || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function ElementPageVideoSound() {
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
                            <AnimatedText text="Video & Sound" />
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
                  <div className="row mb-n40">
                    {/* Col */}
                    <div className="col-12 mb-40">
                      <div className="video">
                        <video loop="" autoPlay controls="controls">
                          <source
                            src="/assets/videos/video-1.mp4"
                            type="video/mp4"
                          />
                        </video>
                      </div>
                    </div>
                    {/* Col */}
                    {/* Col */}
                    <div className="col-md-6 mb-40 relative">
                      <div className="video">
                        <iframe
                          loading="lazy"
                          src="https://player.vimeo.com/video/79876010?title=0&byline=0&portrait=0&color=ffffff"
                          width={"100%"}
                          height={350}
                          allowFullScreen=""
                        ></iframe>
                      </div>
                    </div>
                    {/* End Col */}
                    {/* Col */}
                    <div className="col-md-6 mb-40 relative">
                      <div className="video">
                        <iframe
                          width={"100%"}
                          height={350}
                          src="https://www.youtube.com/embed/JuyB7NO0EYY?si=DWLAjYRhgbjBuY95"
                          title="YouTube video player"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen=""
                        />
                      </div>
                    </div>
                    {/* End Col */}
                  </div>
                  {/* End Row */}
                </div>
              </section>
              {/* End Section */}
              {/* Divider */}
              <hr className="mt-0 mb-0" />
              {/* End Divider */}
              {/* Section */}
              <section className="page-section">
                <div className="container relative">
                  <iframe
                    loading="lazy"
                    className="w-100"
                    height={166}
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/3752929&color=111111&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false"
                  />
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
