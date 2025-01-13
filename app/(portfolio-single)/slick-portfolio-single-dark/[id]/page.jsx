import Footer8 from "@/components/footers/Footer8";
import Header9 from "@/components/headers/Header9";
import RelatedProject2 from "@/components/portfolio/relatedProjects/RelatedProject2";
import Link from "next/link";
import { slickMultipages, slickMultipagesDark } from "@/data/menu";
import Image from "next/image";
import { allPortfolios } from "@/data/portfolio";
export const metadata = {
  title:
    "Slick Portfolio SingleDark || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
const onePage = false;
const dark = true;
export default function SlickPortfolioSinglePageDark({ params }) {
  const portfolioItem =
    allPortfolios.filter((elm) => elm.id == params.id)[0] || allPortfolios[0];
  return (
    <>
      <div className="theme-slick">
        <div className="dark-mode">
          <div className="page bg-dark-1" id="top">
            <nav className="main-nav dark dark-mode transparent stick-fixed wow-menubar wch-unset">
              <Header9 links={slickMultipagesDark} />
            </nav>
            <main id="main">
              <section
                className="page-section bg-dark-1 bg-gradient-gray-dark-1 light-content bg-scroll overflow-hidden"
                id="home"
              >
                {/* <!-- Background Shape --> */}
                <div className="bg-shape-1 opacity-003">
                  <Image
                    src="/assets/images/demo-fancy/bg-shape-1.svg"
                    width={1443}
                    height={844}
                    alt=""
                  />
                </div>
                {/* <!-- End Background Shape --> */}

                <div className="container position-relative pt-sm-40 text-center">
                  <div className="row">
                    <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                      <h1 className="hs-title-10 mb-10 wow fadeInUp">
                        {portfolioItem.title}
                      </h1>

                      <p
                        className="section-descr mb-0 wow fadeInUp"
                        data-wow-delay="0.2s"
                      >
                        Branding, UI/UX Design, No-code Development
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              <>
                <section className="page-section bg-dark-1 light-content">
                  <div className="container relative">
                    {/* Image */}
                    <div className="mb-80 mb-sm-40">
                      <Image
                        src="/assets/images/demo-slick/portfolio/project-4-large.jpg"
                        className="round"
                        width={1700}
                        height={1050}
                        alt="Image Description"
                      />
                    </div>
                    {/* End Image */}
                    <div className="row mb-80 mb-sm-40">
                      {/* Project Details */}
                      <div className="col-md-6 mb-sm-40">
                        <h2 className="section-title-small mb-20">
                          Project Details
                        </h2>
                        <hr className="mb-20" />
                        <div className="row text-gray">
                          <div className="col-sm-4">
                            <b>Date:</b>
                          </div>
                          <div className="col-sm-8">May 1th, 2023</div>
                        </div>
                        <hr className="mb-20" />
                        <div className="row text-gray">
                          <div className="col-sm-4">
                            <b>Client:</b>
                          </div>
                          <div className="col-sm-8">Envato Users</div>
                        </div>
                        <hr className="mb-20" />
                        <div className="row text-gray">
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
                        <h2 className="section-title-small mb-20">
                          Description
                        </h2>
                        <hr className="mb-20" />
                        <p className="text-gray mb-0">
                          Lorem ipsum dolor sit amet conseur adipisci inerene
                          maximus ligula sempe metuse pelente mattis. Maecenas
                          volutpat, diam eni sagittis quam porta quam. Sed id
                          dolor consectetur fermentum volutpat accumsan purus
                          iaculis libero. Donec vel ultricies purus iaculis
                          libero. Etiam sit amet fringilla lacus susantebe sit
                          ullamcorper pulvinar neque porttitor. Integere lectus.
                          Praesent sede nisi eleifend fermum orci amet, iaculis
                          libero. Donec vel ultricies purus quam lorem ipsum.
                        </p>
                      </div>
                      {/* End Project Description */}
                    </div>
                    <div className="row mb-n30 wow fadeInUp">
                      {/* Photo Item */}
                      <div className="col-md-6 mb-30">
                        <Image
                          src="/assets/images/demo-slick/portfolio/project-1-large.jpg"
                          className="round"
                          width={880}
                          height={1046}
                          alt="Image Description"
                        />
                      </div>
                      {/* End Photo Item */}
                      {/* Photo Item */}
                      <div className="col-md-6 mb-30">
                        <Image
                          src="/assets/images/demo-slick/portfolio/project-6-large.jpg"
                          className="round"
                          width={880}
                          height={1046}
                          alt="Image Description"
                        />
                      </div>
                      {/* End Photo Item */}
                    </div>
                  </div>
                </section>
                {/* End Section */}
                {/* Divider */}
                <hr className="mt-0 mb-0 white" />
                <section className="page-section bg-dark-1 light-content">
                  <RelatedProject2 />
                </section>
                <>
                  <hr className="mt-0 mb-0 white" />
                  {/* End Divider */}
                  {/* Work Navigation */}
                  <div className="work-navigation bg-dark-1 light-content clearfix">
                    <Link
                      href={`/main-portfolio-single-1/1`}
                      className="work-prev"
                    >
                      <span>
                        <i className="mi-arrow-left size-24 align-middle color-primary-1" />
                        Previous
                      </span>
                    </Link>
                    <a href="#" className="work-all">
                      <span>
                        <i className="mi-close size-24 align-middle color-primary-1" />{" "}
                        All works
                      </span>
                    </a>
                    <Link
                      href={`/main-portfolio-single-3/1`}
                      className="work-next"
                    >
                      <span>
                        Next
                        <i className="mi-arrow-right size-24 align-middle color-primary-1" />
                      </span>
                    </Link>
                  </div>
                  {/* End Work Navigation */}
                </>
              </>
            </main>
            <footer className="page-section footer bg-dark-2 dark light-content position-relative overflow-hidden pb-30">
              <div className="bg-shape-4 opacity-003">
                <Image
                  src="/assets/images/demo-slick/bg-shape-4.svg"
                  width={1600}
                  height={268}
                  alt=""
                />
              </div>
              <Footer8 />
            </footer>
          </div>{" "}
        </div>
      </div>
    </>
  );
}
