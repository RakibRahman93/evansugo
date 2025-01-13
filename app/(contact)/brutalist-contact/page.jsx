import AnimatedText from "@/components/common/AnimatedText";
import Map from "@/components/common/Map";
import Footer3 from "@/components/footers/Footer3";
import Header3 from "@/components/headers/Header3";
import Contact from "@/components/homes/home-3/Contact";
import ContactDark from "@/components/homes/home-3/ContactDark";

const onePage = false;
const dark = false;
import { brutalistMultipage } from "@/data/menu";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);
export const metadata = {
  title:
    "Brutalist Contact || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function BrutalistContactPage() {
  return (
    <>
      <div className="theme-brutalist">
        <div className="page" id="top">
          <nav className="main-nav dark transparent stick-fixed wow-menubar">
            <Header3 links={brutalistMultipage} />
          </nav>
          <main id="main">
            <ParallaxContainer
              className="page-section parallax-5 light-content"
              style={{
                backgroundImage:
                  "url(/assets/images/demo-brutalist/section-bg-1.jpg)",
              }}
              id="home"
            >
              <div className="container position-relative pt-20 pt-sm-40">
                <h1 className="hs-title-2 font-alt uppercase mb-0">
                  <span className="wow charsAnimIn" data-splitting="chars">
                    <AnimatedText text="LATEST NEWS" />
                  </span>
                  <span
                    className="section-title-image wow fadeScaleIn"
                    data-wow-delay="0.3s"
                  >
                    <Image
                      src="/assets/images/demo-brutalist/shape-2.svg"
                      alt=""
                      width={35}
                      height={35}
                    />
                  </span>
                </h1>
              </div>
            </ParallaxContainer>
            <section
              className={`page-section  scrollSpysection  ${
                dark ? "bg-dark-1 light-content" : ""
              } `}
              id="contact"
            >
              <div className="container position-relative">
                <div
                  className="row mb-80 mb-md-50 wow fadeInUp"
                  data-wow-offset="0"
                >
                  <div className="col-lg-5 mb-md-40">
                    <p className="section-descr-large mb-0">
                      We’re open to talk to
                      <span className="mark-decoration-2">good people</span>.
                      Say hello and we’ll start a productive cooperation.
                    </p>
                  </div>

                  <div className="col-lg-7">
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc semper aliquam est, a egestas ex vestibulum ac.
                      Curabitur cursus sem vitae arcu placerat cursus. Aenean
                      condimentum, justo eu cursus commodo, dolor mauris porta
                      nisi, vitae placerat diam dolor vel urna. In iaculis
                      placerat est pharetra dignissim.
                    </p>
                  </div>
                </div>
                {dark ? <ContactDark /> : <Contact />}
              </div>
            </section>
            <div className="google-map">
              <Map />
            </div>
          </main>
          <footer className="page-section footer-1 bg-dark-1 light-content">
            <Footer3 />
          </footer>
        </div>
      </div>
    </>
  );
}
