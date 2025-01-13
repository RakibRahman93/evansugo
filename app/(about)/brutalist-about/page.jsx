import AnimatedText from "@/components/common/AnimatedText";
import Footer3 from "@/components/footers/Footer3";
import Header3 from "@/components/headers/Header3";
import Features from "@/components/homes/home-10/Features";
import Banner from "@/components/homes/home-3/Banner";
import { qualities } from "@/data/features";
const onePage = false;
const dark = false;
import { brutalistMultipage } from "@/data/menu";
import dynamic from "next/dynamic";
import Image from "next/image";
const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);
export const metadata = {
  title:
    "Brutalist About || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function BrutalistAboutPage() {
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
                    <AnimatedText text="About Studio" />
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
              className={`page-section  scrollSpysection pt-0 pb-0 ${
                dark ? "bg-dark-1 light-content" : ""
              } `}
              id="about"
            >
              <div className="container position-relative">
                <div className="row page-section relative z-index-1">
                  <div className="col-sm-9">
                    <p
                      className="section-descr-large mb-60 mb-sm-40 wow fadeInUp"
                      data-wow-delay="0.1s"
                    >
                      Resonance is a full-service creative studio creating
                      beautiful digital experiences and products. We are an
                      award winning studio specializing in branding, design and
                      engineering. Our mission is to make work meaningful.
                    </p>
                    <ul
                      className="section-features font-alt clearlist uppercase wow fadeInUp"
                      data-wow-delay="0.2s"
                    >
                      {qualities.map((quality, index) => (
                        <li key={index}>{quality}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                {/* Image */}
                <div
                  className="row section-image-1-wrap"
                  data-rellax-y=""
                  data-rellax-speed={1}
                  data-rellax-percentage="0.3"
                >
                  <div className="col-5 offset-7 col-sm-4 offset-sm-8">
                    <Image
                      src="/assets/images/demo-brutalist/section-image-1.jpg"
                      width={689}
                      height={855}
                      className="section-image-1"
                      alt="Image Description"
                    />
                  </div>
                </div>
                {/* End Image */}
              </div>
            </section>
            <section
              className="page-section bg-dark-1 bg-dark-alpha-70 light-content bg-scroll pb-0 z-index-1"
              style={{
                backgroundImage:
                  "url(/assets/images/demo-brutalist/section-bg-2.jpg)",
              }}
            >
              <Banner />
            </section>

            <section
              className={`page-section overflow-hidden  ${
                dark ? "bg-dark-1 light-content" : ""
              }`}
            >
              <Features />
            </section>
          </main>
          <footer className="page-section footer-1 bg-dark-1 light-content">
            <Footer3 />
          </footer>
        </div>
      </div>
    </>
  );
}
