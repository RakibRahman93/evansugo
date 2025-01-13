import Footer2 from "@/components/footers/Footer2";
import Header8 from "@/components/headers/Header8";
import RelatedProject3 from "@/components/portfolio/relatedProjects/RelatedProject3";
const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);
import Link from "next/link";
import { modernMultipage } from "@/data/menu";
import dynamic from "next/dynamic";
import Image from "next/image";
import { allPortfolios } from "@/data/portfolio";
export const metadata = {
  title:
    "Modern Portfolio Single|| Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function ModernPortfolioSinglePage({ params }) {
  const portfolioItem =
    allPortfolios.filter((elm) => elm.id == params.id)[0] || allPortfolios[0];
  return (
    <>
      <div className="theme-modern">
        <div className="page" id="top">
          <nav className="main-nav dark transparent stick-fixed wow-menubar">
            <Header8 links={modernMultipage} />
          </nav>{" "}
          <main id="main">
            <ParallaxContainer
              className="page-section pt-90 pb-90 pb-xs-40 bg-dark-alpha-60 parallax-5 light-content"
              style={{
                backgroundImage:
                  "url(/assets/images/demo-modern/section-bg-8.jpg)",
              }}
              id="home"
            >
              <div className="container position-relative">
                <div className="mb-20">
                  <div className="mb-10">
                    <Link
                      href={`/modern-portfolio`}
                      className="link-hover-anim align-middle"
                      data-btn-animate="y"
                    >
                      <i className="icon-arrow-left2 size-14"></i> Back to
                      portfolio
                    </Link>
                  </div>
                  <hr className="white mt-0 mb-0" />
                </div>

                <div className="row">
                  <div className="col-9 col-sm-8">
                    <h1 className="hs-title-5 font-alt overflow-hidden mb-0">
                      <span className="d-block wow fadeRotateIn">
                        {" "}
                        {portfolioItem.title
                          .split(" ")
                          .slice(0, 1)
                          .join(" ")}{" "}
                      </span>
                      <span className="d-block text-end wow fadeRotateIn">
                        {" "}
                        {portfolioItem.title.split(" ").slice(1).join(" ")}{" "}
                      </span>
                    </h1>
                  </div>
                </div>
              </div>
              {/* Scroll Down */}
              <div
                className="local-scroll scroll-down-wrap-2 d-none d-lg-block wow fadeInUp"
                data-wow-offset={0}
              >
                <div className="full-wrapper text-end">
                  <span className="scroll-down-2">
                    <Image
                      width="50"
                      height="73"
                      src="/assets/images/demo-modern/arrow-down-1-white.svg"
                      alt="Scroll Down"
                    />
                  </span>
                </div>
              </div>
              {/* End Scroll Down */}
            </ParallaxContainer>
            <>
              <section className="page-section">
                <div className="container relative">
                  {/* Work Gallery */}
                  <div className="work-full-media mb-80 mb-sm-40 wow fadeInUp">
                    <div className="clearlist work-full-slider owl-carousel light-content">
                      <div>
                        <Image
                          src="/assets/images/demo-brutalist/portfolio/project-single-2.jpg"
                          alt="Image Description"
                          width={1700}
                          height={900}
                        />
                      </div>
                      <div>
                        <Image
                          className="lazyOwl"
                          src="/assets/images/placeholder.png"
                          data-src="/assets/images/demo-brutalist/portfolio/project-single-1.jpg"
                          alt="Image Description"
                          width={1700}
                          height={900}
                        />
                      </div>
                      <div>
                        <Image
                          className="lazyOwl"
                          src="/assets/images/placeholder.png"
                          data-src="/assets/images/demo-brutalist/portfolio/project-single-3.jpg"
                          alt="Image Description"
                          width={1700}
                          height={900}
                        />
                      </div>
                    </div>
                  </div>
                  {/* End Work Gallery */}
                  <div className="row">
                    {/* Project Details */}
                    <div className="col-md-6 mb-sm-40">
                      <h2 className="h3 mb-20">Project Details</h2>
                      <div className="row">
                        <div className="col-sm-4">
                          <b>Date:</b>
                        </div>
                        <div className="col-sm-8">May 1th, 2023</div>
                      </div>
                      <hr className="mb-20" />
                      <div className="row">
                        <div className="col-sm-4">
                          <b>Client:</b>
                        </div>
                        <div className="col-sm-8">Envato Users</div>
                      </div>
                      <hr className="mb-20" />
                      <div className="row">
                        <div className="col-sm-4">
                          <b>Services:</b>
                        </div>
                        <div className="col-sm-8">
                          Branding, UI/UX Design, Front-end Development,
                          Back-end Development
                        </div>
                      </div>
                      <hr className="mb-20" />
                    </div>
                    {/* End Project Details */}
                    {/* Project Description */}
                    <div className="col-md-6">
                      <h2 className="h3 mb-20">Description</h2>
                      <p className="mb-0">
                        Lorem ipsum dolor sit amet conseur adipisci inerene
                        maximus ligula sempe metuse pelente mattis. Maecenas
                        volutpat, diam eni sagittis quam porta quam. Sed id
                        dolor consectetur fermentum volutpat accumsan purus
                        iaculis libero. Donec vel ultricies purus iaculis
                        libero. Etiam sit amet fringilla lacus susantebe sit
                        ullamcorper pulvinar neque porttitor. Integere lectus.
                        Praesent sede nisi eleifend fermum orci amet, iaculis
                        libero. Donec vel ultricies purus quam.
                      </p>
                    </div>
                    {/* End Project Description */}
                  </div>
                </div>
              </section>
              {/* End Section */}
              {/* Divider */}
              <hr className="mt-0 mb-0" />
            </>
            <section className="page-section">
              <RelatedProject3 />
            </section>
            <>
              {/* Divider */}
              <hr className="mt-0 mb-0" />
              {/* End Divider */}
              {/* Work Navigation */}
              <div className="work-navigation clearfix">
                <Link href={`/main-portfolio-single-3/1`} className="work-prev">
                  <span>
                    <i className="icon-arrow-left2 size-16 align-middle" />
                    Previous
                  </span>
                </Link>
                <a href="#" className="work-all">
                  <span>
                    <i className="mi-close size-24 align-middle" /> All works
                  </span>
                </a>
                <Link href={`/main-portfolio-single-2/1`} className="work-next">
                  <span>
                    Next{" "}
                    <i className="icon-arrow-right2 size-16 align-middle" />
                  </span>
                </Link>
              </div>
            </>
          </main>
          <footer className="footer-1 bg-dark-1 light-content">
            <Footer2 />
          </footer>
        </div>{" "}
      </div>
    </>
  );
}
