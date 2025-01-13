import AnimatedText from "@/components/common/AnimatedText";
import Footer9 from "@/components/footers/Footer9";
import Header10 from "@/components/headers/Header10";
import RetaledProject1 from "@/components/portfolio/relatedProjects/RetaledProject1";
import Image from "next/image";
import { strongMultiPages } from "@/data/menu";
import dynamic from "next/dynamic";
import Link from "next/link";
const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);
import { allPortfolios } from "@/data/portfolio";
export const metadata = {
  title:
    "Strong Portfolio Single || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function StrongPortfolioSinglePage({ params }) {
  const portfolioItem =
    allPortfolios.filter((elm) => elm.id == params.id)[0] || allPortfolios[0];
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
                      <AnimatedText
                        text={portfolioItem.title
                          .split(" ")
                          .slice(0, 1)
                          .join(" ")}
                      />{" "}
                      <span className="font-alt">
                        <AnimatedText
                          text={portfolioItem.title
                            .split(" ")
                            .slice(1)
                            .join(" ")}
                        />
                      </span>
                    </span>
                  </h1>
                </div>
                {/* End Home Section Content */}
              </div>
            </ParallaxContainer>
            <>
              <section className="page-section">
                <div className="container relative">
                  <div className="row mb-80 mb-sm-40">
                    {/* Project Details */}
                    <div className="col-md-6 mb-sm-40">
                      <h2 className="h3 font-alt mb-20">Project Details</h2>
                      <hr className="mb-20" />
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
                      <h2 className="h3 font-alt mb-20">Description</h2>
                      <p className="mb-0">
                        Lorem ipsum dolor sit amet conseur adipisci inerene
                        maximus ligula sempe metuse pelente mattis. Maecenas
                        volutpat, diam eni sagittis quam porta quam. Sed id
                        dolor consectetur fermentum volutpat accumsan purus
                        iaculis libero. Donec vel ultricies purus iaculis
                        libero. Etiam sit amet fringilla lacus susantebe lorem
                        ipsum sit ullamcorper pulvinar neque porttitor. Integere
                        lectus. Praesent sede nisi eleifend fermum orci amet,
                        iaculis libero. Donec vel ultricies purus quam.
                      </p>
                    </div>
                    {/* End Project Description */}
                  </div>
                  <div className="mb-80 mb-sm-40">
                    <div className="mb-n30">
                      {/* Photo Item */}
                      <div className="mb-30 wow fadeInUp">
                        <Image
                          src="/assets/images/demo-brutalist/portfolio/project-single-2.jpg"
                          alt="Image Description"
                          width={1700}
                          height={900}
                        />
                      </div>
                      {/* End Photo Item */}
                      {/* Photo Item */}
                      <div className="mb-30 wow fadeInUp">
                        <Image
                          src="/assets/images/demo-brutalist/portfolio/project-single-1.jpg"
                          alt="Image Description"
                          width={1700}
                          height={900}
                        />
                      </div>
                      {/* End Photo Item */}
                      {/* Photo Item */}
                      <div className="mb-30 wow fadeInUp">
                        <Image
                          src="/assets/images/demo-brutalist/portfolio/project-single-3.jpg"
                          alt="Image Description"
                          width={1700}
                          height={900}
                        />
                      </div>
                      {/* End Photo Item */}
                    </div>
                  </div>
                </div>
              </section>
              {/* End Section */}
              {/* Divider */}
              <hr className="mt-0 mb-0" />
              <section className="page-section">
                <RetaledProject1 />
              </section>
              <>
                {/* Related Projects Section */}

                {/* End Related Projects Section */}
                {/* Divider */}
                <hr className="mt-0 mb-0" />
                {/* End Divider */}
                {/* Work Navigation */}
                <div className="work-navigation clearfix">
                  <Link
                    href={`/main-portfolio-single-1/1`}
                    className="work-prev"
                  >
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
                  <Link
                    href={`/main-portfolio-single-3/1`}
                    className="work-next"
                  >
                    <span>
                      Next{" "}
                      <i className="icon-arrow-right2 size-16 align-middle" />
                    </span>
                  </Link>
                </div>
              </>
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
