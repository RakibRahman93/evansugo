import Footer9 from "@/components/footers/Footer9";
import Header10 from "@/components/headers/Header10";

import { strongMultiPages } from "@/data/menu";
import { portfolios10 } from "@/data/portfolio";
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
    "Strong Portfolio || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function StrongPortfolioPage() {
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
                      Selected <span className="font-alt">Work</span>
                    </span>
                  </h1>
                </div>
                {/* End Home Section Content */}
              </div>
            </ParallaxContainer>
            <>
              <section className="page-section" id="portfolio">
                <div className="container">
                  <div className="row mb-n40 wow fadeInUp" data-wow-offset={0}>
                    {/* Portfolio item */}

                    {/* End Portfolio item */}
                    {/* Portfolio item */}
                    {portfolios10.map((item) => (
                      <div className="col-md-6 mb-40" key={item.id}>
                        <div className="portfolio-4-item">
                          <Link href={`/strong-portfolio-single/${item.id}`}>
                            <div className="portfolio-4-image">
                              <Image
                                src={item.imgSrc}
                                width={902}
                                height={564}
                                alt={item.imgAlt}
                              />
                            </div>
                            <div className="portfolio-4-intro">
                              <h4 className="portfolio-4-title">
                                {item.title}
                              </h4>
                              <div className="portfolio-4-descr">
                                {item.description}
                              </div>
                            </div>{" "}
                          </Link>
                        </div>
                      </div>
                    ))}
                    {/* End Portfolio item */}
                  </div>
                </div>
              </section>
              {/* End Portfolio Section */}
              {/* Divider */}
              <hr className="mt-0 mb-0" />
              {/* End Divider */}
              {/* Section */}
              <section className="page-section">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6 mb-md-40 mb-sm-30">
                      <h2 className="section-title-strong mt-n20 mb-40 mb-sm-30">
                        Creativity meets{" "}
                        <span className="font-alt">technology</span> here
                      </h2>
                      <div className="local-scroll">
                        <Link
                          href={`/strong-contact`}
                          className="btn btn-mod btn-large btn-round btn-hover-anim"
                        >
                          <span>Start a Project</span>
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <p className="mb-40 mb-sm-30">
                        Suspendisse pellentesque mi non ipsum finibus
                        vestibulum. Vestibulum posuere magna auctor malesuada
                        scelerisque. Sed sed sem id magna congue interdum et sit
                        amet leo. Praesent sit amet ipsum orci. Fusce faucibus
                        nibh at quam facilisis venenatis posuere non quis lacus.
                        Quisque massa lectus, tincidunt non sem non, placerat
                        bibendum nibh.
                      </p>
                      {/* Features List */}
                      <div className="row mt-n20">
                        {/* Features List Item */}
                        <div className="col-sm-6 col-lg-12 col-xl-6 d-flex mt-20">
                          <div className="features-list-icon">
                            <i className="mi-check" />
                          </div>
                          <div className="features-list-text">
                            Agency Website
                          </div>
                        </div>
                        {/* End Features List Item */}
                        {/* Features List Item */}
                        <div className="col-sm-6 col-lg-12 col-xl-6 col-lg-6 d-flex mt-20">
                          <div className="features-list-icon">
                            <i className="mi-check" />
                          </div>
                          <div className="features-list-text">
                            Personal Website
                          </div>
                        </div>
                        {/* End Features List Item */}
                        {/* Features List Item */}
                        <div className="col-sm-6 col-lg-12 col-xl-6 d-flex mt-20">
                          <div className="features-list-icon">
                            <i className="mi-check" />
                          </div>
                          <div className="features-list-text">Landing Page</div>
                        </div>
                        {/* End Features List Item */}
                        {/* Features List Item */}
                        <div className="col-sm-6 col-lg-12 col-xl-6 d-flex mt-20">
                          <div className="features-list-icon">
                            <i className="mi-check" />
                          </div>
                          <div className="features-list-text">
                            Portfolio and Gallery
                          </div>
                        </div>
                        {/* End Features List Item */}
                      </div>
                      {/* End Features List */}
                    </div>
                  </div>
                </div>
              </section>
            </>
          </main>

          <footer className="footer-1 bg-dark-1 light-content">
            <Footer9 />
          </footer>
        </div>
      </div>{" "}
    </>
  );
}
