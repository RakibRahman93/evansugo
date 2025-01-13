import AnimatedText from "@/components/common/AnimatedText";
import Footer4 from "@/components/footers/Footer4";
import Header4 from "@/components/headers/Header4";

const onePage = false;
const dark = true;
import Image from "next/image";
import { corporateMultipage, corporateMultipageDark } from "@/data/menu";
import Link from "next/link";
import { portfolios11 } from "@/data/portfolio";
import { features2 } from "@/data/features";

export const metadata = {
  title:
    "Corporate Portfolio Dark || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function CorporatePortfolioPageDark() {
  return (
    <>
      <div className="theme-corporate">
        <div className="dark-mode">
          <div className="page bg-dark-1" id="top">
            <nav className="main-nav dark dark-mode transparent stick-fixed wow-menubar wch-unset">
              <Header4 links={corporateMultipageDark} />
            </nav>

            <main id="main">
              <section className="page-section bg-dark-1 bg-gradient-gray-dark-1 light-content bg-scroll overflow-hidden">
                {/* Background Shape */}
                <div className="bg-shape-1 wow fadeIn">
                  <Image
                    className="opacity-003"
                    src="/assets/images/demo-corporate/bg-shape-1.svg"
                    alt=""
                    width={1443}
                    height={844}
                  />
                </div>
                {/* End Background Shape */}
                <div className="container position-relative pt-10 pt-sm-40 text-center">
                  <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                      <h1 className="hs-title-9 mb-10">
                        <span
                          className="wow charsAnimIn"
                          data-splitting="chars"
                        >
                          <AnimatedText text="Selected" />
                          <span className="mark-decoration-3-wrap">
                            <AnimatedText text="Work" />
                            <b
                              className="mark-decoration-3 wow scalexIn"
                              data-wow-delay="0.5s"
                            />
                          </span>
                        </span>
                      </h1>
                      <p
                        className="hs-descr mb-0 wow fadeIn"
                        data-wow-delay="0.2s"
                      >
                        Explore captivating web design solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              <>
                {/* Portfolio Section */}
                <section
                  className="page-section bg-dark-1 light-content"
                  id="portfolio"
                >
                  <div className="container position-relative">
                    <div
                      className="row mb-70 mb-sm-50 wow fadeInUp"
                      data-wow-offset={0}
                    >
                      <div className="col-lg-5 mb-md-40">
                        <p className="section-descr mb-0">
                          We help brands and businesses stand out in the
                          changing digital landscape.
                        </p>
                      </div>
                      <div className="col-lg-6 offset-lg-1 d-flex align-items-end pb-10">
                        {/* Features List */}
                        <div className="row mt-n10">
                          {/* Features List Item */}
                          {features2.map((elm, i) => (
                            <div key={i} className="col-sm-6 d-flex mt-10">
                              <div className="features-list-icon features-list-color-1">
                                <i className="mi-check" />
                              </div>
                              <div className="features-list-text">
                                {elm.text}
                              </div>
                            </div>
                          ))}
                          {/* End Features List Item */}

                          {/* End Features List Item */}
                        </div>
                        {/* End Features List */}
                      </div>
                    </div>
                    {/* Portfolio Grid */}
                    <div className="row mt-n50 mt-sm-n40">
                      {/* Portfolio Item */}
                      {portfolios11.map((elm, i) => (
                        <div
                          key={i}
                          className="col-md-6 col-lg-4 mt-50 mt-sm-40"
                        >
                          <Link
                            href={`/corporate-portfolio-single/${elm.id}`}
                            className="portfolio-5-link"
                          >
                            <div className="portfolio-5-image">
                              <div className="portfolio-5-image-bg wow scalexIn" />
                              <div className="wow fadeIn" data-wow-delay="1s">
                                <Image
                                  src={elm.imageUrl}
                                  width={660}
                                  height={472}
                                  alt="Image Description"
                                />
                              </div>
                            </div>
                            <h3 className="portfolio-5-title">
                              <span>{elm.title}</span>
                            </h3>
                            <div className="portfolio-5-number">
                              {elm.number}
                            </div>
                            <div className="portfolio-5-number-descr">
                              {elm.description}
                            </div>
                          </Link>
                        </div>
                      ))}
                      {/* End Portfolio Item */}

                      {/* End Portfolio Item */}
                    </div>
                    {/* End Portfolio Grid */}
                  </div>
                </section>
                {/* End Portfolio Section */}
                {/* Divider */}
                <hr className="mt-0 mb-0 white" />
                {/* End Divider */}
                {/* Call to Action Section */}
                <section className="page-section bg-dark-1 light-content">
                  <div className="container position-relative z-index-1">
                    <div className="row text-center">
                      <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                        <div className="text-center mb-40 mb-sm-30">
                          <Image
                            src="/assets/images/demo-corporate/section-image-1.png"
                            width={100}
                            height={100}
                            alt="Image Description"
                          />
                        </div>
                        <p className="section-descr-medium mb-50 mb-sm-40">
                          Looking for exclusive marketing services? Contact us
                          and get free online consultation for your brand or
                          your client's brand.
                        </p>
                        <div className="local-scroll text-center">
                          <Link
                            href={`/corporate-contact`}
                            className="btn btn-mod btn-w btn-with-icon btn-circle"
                          >
                            <span className="btn-icon color-1">
                              <i className="mi-heart" aria-hidden="true"></i>
                            </span>{" "}
                            <span data-btn-animate="y">
                              <span className="btn-animate-y">
                                <span className="btn-animate-y-1">
                                  Get Free Consultation{" "}
                                  <i
                                    className="mi-arrow-right"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                                <span
                                  className="btn-animate-y-2"
                                  aria-hidden="true"
                                >
                                  Get Free Consultation{" "}
                                  <i
                                    className="mi-arrow-right"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                              </span>
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <hr className={`mt-0 mb-0 ${dark ? "white" : ""} `} />
              </>
            </main>
            <footer className="footer-2 bg-dark-1 light-content pb-50">
              <Footer4 />
            </footer>
          </div>{" "}
        </div>
      </div>
    </>
  );
}
