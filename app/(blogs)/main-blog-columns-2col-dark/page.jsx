import Footer1 from "@/components/footers/Footer1";

import dynamic from "next/dynamic";

const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);
import Image from "next/image";
import Header1Multipage from "@/components/headers/Header1Multipage";
import AnimatedText from "@/components/common/AnimatedText";
import Link from "next/link";
import { blogs19 } from "@/data/blogs";
import Pagination from "@/components/common/Pagination";
import Widget1 from "@/components/blog/widgets/Widget1";
import { menuItemsDark } from "@/data/menu";

export const metadata = {
  title:
    "Main Blog Columns Page 2 Col Dark || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function MainBlogColumnsPage2ColDark() {
  return (
    <>
      <div className="theme-main">
        <div className="dark-mode">
          <div className="page bg-dark-1" id="top">
            <nav className="main-nav dark dark-mode transparent stick-fixed wow-menubar">
              {" "}
              <Header1Multipage links={menuItemsDark} />
            </nav>
            <main id="main">
              <section className="page-section pt-0 pb-0" id="home">
                <ParallaxContainer
                  className="page-section bg-dark-1 bg-dark-alpha-80 light-content parallax-5"
                  style={{
                    backgroundImage:
                      "url(/assets/images/full-width-images/section-bg-2.jpg)",
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
              <section className="page-section bg-dark-1 light-content">
                <div className="container relative">
                  <div className="row">
                    {/* Content */}
                    <div className="col-md-8 mb-sm-80">
                      {/* Blog Posts Grid */}
                      <div className="row mt-n30 mb-60 mb-sm-40">
                        {/* Post Item */}
                        {blogs19.map((elm, i) => (
                          <div key={i} className="post-prev col-lg-6 mt-30">
                            <div className="post-prev-container">
                              <div className="post-prev-img">
                                <Link
                                  href={`/main-blog-single-sidebar-right/${elm.id}`}
                                >
                                  <Image
                                    src={elm.imgSrc}
                                    width={650}
                                    height={412}
                                    alt="Add Image Description"
                                  />
                                </Link>
                              </div>
                              <h4 className="post-prev-title">
                                <Link
                                  href={`/main-blog-single-sidebar-right/${elm.id}`}
                                >
                                  {elm.title}
                                </Link>
                              </h4>
                              <div className="post-prev-text">{elm.text}</div>
                              <div className="post-prev-info clearfix">
                                <div className="float-start">
                                  <a href="#">
                                    <Image
                                      className="post-prev-author-img"
                                      width={30}
                                      height={30}
                                      src={elm.authorImgSrc}
                                      alt="Image Description"
                                    />
                                  </a>
                                  <a href="#">{elm.authorName}</a>
                                </div>
                                <div className="float-end">
                                  <a href="#">{elm.date}</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                        {/* End Post Item */}
                      </div>
                      {/* End Blog Posts Grid */}
                      {/* Pagination */}
                      <Pagination className={"pagination"} />
                      {/* End Pagination */}
                    </div>
                    {/* End Content */}
                    {/* Sidebar */}
                    <div className="col-md-4 col-lg-3 offset-lg-1">
                      <Widget1 searchInputClass="form-control input-lg search-field round" />
                    </div>
                    {/* End Sidebar */}
                  </div>
                </div>
              </section>
            </main>
            <Footer1 dark />
          </div>{" "}
        </div>
      </div>
    </>
  );
}
