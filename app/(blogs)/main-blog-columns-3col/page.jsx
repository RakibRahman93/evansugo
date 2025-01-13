import Footer1 from "@/components/footers/Footer1";

import dynamic from "next/dynamic";

const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);

import Header1Multipage from "@/components/headers/Header1Multipage";
import AnimatedText from "@/components/common/AnimatedText";

import Blogs1 from "@/components/blog/Blogs1";
import { archiveLinks } from "@/data/archeve";
import { tags } from "@/data/tags";
import { categories } from "@/data/categories";
import { menuItems } from "@/data/menu";

export const metadata = {
  title:
    "Main Blog Columns Page 3 Col || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function MainBlogColumnsPage3Col() {
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
                            <AnimatedText text="Blog" />
                          </span>
                        </h1>
                        <div className="row">
                          <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                            <p
                              className="section-descr mb-0 wow fadeIn"
                              data-wow-delay="0.2s"
                              data-wow-duration="1.2s"
                            >
                              Discovering our brilliant insights and
                              inspiration.
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
            <section className="page-section">
              <Blogs1 />
            </section>
            <hr className="mt-0 mb-0" />
            {/* End Divider */}
            {/* Section */}
            <section className="page-section">
              <div className="container relative">
                <div className="row mt-n60">
                  <div className="col-sm-6 col-lg-3 mt-60">
                    {/* Widget */}
                    <div className="widget mb-0">
                      <h3 className="widget-title">Categories</h3>
                      <div className="widget-body">
                        <ul className="clearlist widget-menu">
                          {categories.map((category) => (
                            <li key={category.id}>
                              <a href="#" title="">
                                {category.name}
                              </a>
                              <small> - {category.count} </small>
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
                          {tags.map((tag) => (
                            <a href="#" key={tag.id}>
                              {tag.name}
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
                          {archiveLinks.map((link) => (
                            <li key={link.id}>
                              <a href="#" title="">
                                {link.date}
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
                      <h3 className="widget-title">Text widget</h3>
                      <div className="widget-body">
                        <div className="widget-text clearfix">
                          Consectetur adipiscing elit. Quisque magna ante
                          eleifend eleifend. Purus ut dignissim consectetur,
                          nulla erat ultrices purus, ut consequat sem elit non
                          sem. Quisque magna ante eleifend eleifend.
                        </div>
                      </div>
                    </div>
                    {/* End Widget */}
                  </div>
                </div>
              </div>
            </section>
          </main>
          <Footer1 />
        </div>{" "}
      </div>
    </>
  );
}
