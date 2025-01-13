import Footer8 from "@/components/footers/Footer8";
import Header9 from "@/components/headers/Header9";
import Blogs2 from "@/components/homes/home-9/Blogs2";
import { categories } from "@/data/categories";
import { tags } from "@/data/tags";
import { archiveLinks } from "@/data/archeve";
import { slickMultipages, slickMultipagesDark } from "@/data/menu";
import Image from "next/image";
import Form6 from "@/components/newsletterForms/Form6";

export const metadata = {
  title:
    "Slick Blogs Dark || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
const onePage = false;
const dark = true;
export default function SlickBlogPageDark() {
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
                        Portfolio
                      </h1>

                      <p
                        className="section-descr mb-0 wow fadeInUp"
                        data-wow-delay="0.2s"
                      >
                        Explore captivating web design solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              <section className="page-section bg-dark-1 light-content">
                <Blogs2 />
              </section>

              <>
                {/* Divider */}
                <hr className="mt-0 mb-0 white" />
                {/* End Divider */}
                {/* Section */}
                <section className="page-section bg-dark-1 light-content">
                  <div className="container relative">
                    <div className="row mt-n60">
                      <div className="col-sm-6 col-lg-3 mt-60">
                        {/* Widget */}
                        <div className="widget mb-0">
                          <h3 className="widget-title">Categories</h3>
                          <div className="widget-body">
                            <ul className="clearlist widget-menu">
                              {categories.map((elm, i) => (
                                <li key={i}>
                                  <a href="#" title="">
                                    {elm.name}
                                  </a>
                                  <small> - {elm.count} </small>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        {/* End Widget */}
                      </div>
                      <div className="col-sm-6 col-lg-3 mt-60">
                        {/* Widget */}
                        <div className="widget mb-0">
                          <h3 className="widget-title">Tags</h3>
                          <div className="widget-body">
                            <div className="tags">
                              {tags.map((elm, i) => (
                                <a key={i} href="">
                                  {elm.name}
                                </a>
                              ))}
                            </div>
                          </div>
                        </div>
                        {/* End Widget */}
                      </div>
                      <div className="col-sm-6 col-lg-3 mt-60">
                        {/* Widget */}
                        <div className="widget mb-0">
                          <h3 className="widget-title">Archive</h3>
                          <div className="widget-body">
                            <ul className="clearlist widget-menu">
                              {archiveLinks.map((elm, i) => (
                                <li key={i}>
                                  <a href="#" title="">
                                    {elm.date}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        {/* End Widget */}
                      </div>
                      <div className="col-sm-6 col-lg-3 mt-60">
                        {/* Widget */}
                        <div className="widget mb-0">
                          <h3 className="widget-title">Newsletter</h3>
                          <div className="widget-body">
                            <div className="widget-text clearfix">
                              <Form6 />
                            </div>
                          </div>
                        </div>
                        {/* End Widget */}
                      </div>
                    </div>
                  </div>
                </section>
              </>
            </main>
            <footer className="page-section footer bg-dark-2 light-content position-relative overflow-hidden pb-30">
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
