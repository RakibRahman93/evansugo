import Footer8 from "@/components/footers/Footer8";
import Header9 from "@/components/headers/Header9";
import Features from "@/components/homes/home-9/Features";
import Service from "@/components/homes/home-9/Service";

import { slickMultipages } from "@/data/menu";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title:
    "Slick Services || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
const onePage = false;
const dark = false;
export default function SlickServicesPage() {
  return (
    <>
      <div className="theme-slick">
        <div className="page" id="top">
          <nav className="main-nav transparent stick-fixed wow-menubar wch-unset">
            <Header9 links={slickMultipages} />
          </nav>
          <main id="main">
            <section
              className="page-section bg-gradient-gray-light-1 bg-scroll overflow-hidden"
              id="home"
            >
              {/* <!-- Background Shape --> */}
              <div className="bg-shape-1 wow fadeIn">
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
                      Our Services
                    </h1>

                    <p
                      className="section-descr mb-0 wow fadeInUp"
                      data-wow-delay="0.2s"
                    >
                      Web design that leaves an impression.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section
              className={`page-section  scrollSpysection  ${
                dark ? "bg-dark-1 light-content" : ""
              } `}
              id="services"
            >
              <div className="container position-relative">
                <div className="row">
                  {/* Left Column */}
                  <div className="col-lg-5 mb-md-60 mb-sm-40">
                    <h2 className="section-caption-slick mb-30 mb-sm-20">
                      WHAT WE DO
                    </h2>
                    <h3 className="section-title mb-30">
                      We provide the best development solutions.
                    </h3>
                    <p className="section-descr mb-50 mb-sm-40">
                      The power of design help us to solve complex problems and
                      cultivate business solutions.
                    </p>
                    <div className="local-scroll">
                      <Link
                        href={`/slick-contact${dark ? "-dark" : ""}`}
                        className="btn btn-mod btn-color btn-large btn-circle btn-hover-anim mb-xs-10"
                      >
                        <span>Request a quote</span>
                      </Link>
                    </div>
                  </div>
                  {/* End Left Column */}
                  {/* Right Column */}
                  <Service />
                  {/* End Right Column */}
                </div>
                <div className="page-section">
                  <hr className="mt-0 mb-0" />
                </div>
                <div className="row mb-50 mb-sm-50">
                  <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3 text-center">
                    <h2 className="section-title-small mb-20">
                      Why choose Resonance?
                    </h2>
                    <p className="text-gray mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
                {/* Features Grid */}
                <Features />
                {/* End Features Grid */}
              </div>
            </section>
            <hr className={`mt-0 mb-0 ${dark ? "white" : ""} `} />
            <section
              className={`page-section  ${
                dark ? "bg-dark-1 light-content" : ""
              }`}
            >
              <div className="container position-relative">
                <div className="row">
                  {/* Images */}
                  <div className="col-lg-7 d-flex align-items-start mb-md-60 mb-xs-30">
                    <div className="call-action-2-images">
                      <div
                        className="call-action-2-image-1"
                        data-rellax-y=""
                        data-rellax-speed="0.5"
                        data-rellax-percentage="0.7"
                      >
                        <Image
                          width={386}
                          height={400}
                          src="/assets/images/promo-3.jpg"
                          alt="Image Description"
                          className="wow scaleOutIn"
                          data-wow-duration="1.2s"
                          data-wow-offset={255}
                        />
                      </div>
                      <div className="call-action-2-image-2">
                        <Image
                          width={810}
                          height={512}
                          src="/assets/images/promo-4.jpg"
                          alt="Image Description"
                          className="wow scaleOutIn"
                          data-wow-duration="1.2s"
                          data-wow-offset={134}
                        />
                      </div>
                      <div
                        className="call-action-2-image-3"
                        data-rellax-y=""
                        data-rellax-speed="-0.5"
                        data-rellax-percentage="0.5"
                      >
                        <Image
                          width={386}
                          height={500}
                          src="/assets/images/promo-5.jpg"
                          alt="Image Description"
                          className="wow scaleOutIn"
                          data-wow-duration="1.2s"
                          data-wow-offset={0}
                        />
                      </div>
                    </div>
                  </div>
                  {/* End Images */}
                  {/* Text */}
                  <div className="col-lg-5 d-flex align-items-center">
                    <div
                      className="wow fadeInUp"
                      data-wow-duration="1.2s"
                      data-wow-offset="255"
                    >
                      <h2 className="section-caption-slick mb-30 mb-sm-20">
                        How we work?
                      </h2>

                      <h2 className="section-title mb-30">
                        Get the power of the professional services
                      </h2>

                      <p className="text-gray">
                        Pellentesque ultrices purus sit amet velit eleifend, eu
                        iaculis velit malesuada. Proin id mattis elit. Nullam a
                        nisi tellus. Mauris rhoncus diam in sem maximus, nec
                        luctus justo imperdiet. Etiam fermentum vehicula
                        faucibus.
                      </p>

                      <p className="text-gray mb-0">
                        Praesent ullamcorper urna id arcu molestie scelerisque.
                        Sed imperdiet tristique mauris et faucibus. Maecenas
                        semper augue non fringilla placerat. Curabitur luctus
                        erat sit amet ultricies aliquam. Donec dictum convallis
                        mauris et maximus. Nullam massa arcu, porta quis felis
                        et, eleifend varius quam.
                      </p>
                    </div>
                  </div>
                  {/* End Text */}
                </div>
              </div>
            </section>

            <section className="page-section pt-0">
              <div className="container">
                <div
                  className={`small-section ${
                    dark ? "bg-dark-2 light-content" : "bg-gray-light-1"
                  }  ps-4 ps-lg-0 pe-4 pe-lg-0 round position-relative overflow-hidden`}
                >
                  {/* Decoration Circles */}
                  <div className="decoration-12" />
                  <div className="decoration-13" />
                  {/* End Decoration Circles */}
                  <div className="row">
                    <div className="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                      <div className="row">
                        <div className="col-md-7 col-lg-8 text-center text-md-start mb-sm-20">
                          <h2 className="section-title-small mb-20">
                            Like our creative works?
                          </h2>
                          <p className="text-gray mb-0">
                            Quisque posuere mollis ullamcorper. Ut eget metus
                            lorem ipsum posuere eget at ex. Aenean consequat
                            vitae lorem in vehicula.
                          </p>
                        </div>
                        <div className="col-md-5 col-lg-4 text-center text-md-end pt-2">
                          <Link
                            href={`/slick-portfolio${dark ? "-dark" : ""}`}
                            className="btn btn-mod btn-color btn-large btn-circle btn-hover-anim"
                          >
                            <span>View all works</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
          <footer className="page-section footer position-relative overflow-hidden pb-30">
            <div className="bg-shape-4">
              <Image
                src="/assets/images/demo-slick/bg-shape-4.svg"
                width={1600}
                height={268}
                alt=""
              />
            </div>
            <Footer8 />
          </footer>
        </div>
      </div>
    </>
  );
}
