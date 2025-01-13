import AnimatedText from "@/components/common/AnimatedText";
import Pagination from "@/components/common/Pagination";
import Footer3 from "@/components/footers/Footer3";
import Header3 from "@/components/headers/Header3";
import NewsLetter from "@/components/homes/home-3/NewsLetter";
import { archiveLinks } from "@/data/archeve";
import { blogs17 } from "@/data/blogs";
import { categories } from "@/data/categories";

const onePage = false;
const dark = false;
import { brutalistMultipage } from "@/data/menu";
import { tags } from "@/data/tags";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);
export const metadata = {
  title:
    "Brutalist Blog || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function BrutalistBlogPage() {
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
                    <AnimatedText text="LATEST NEWS" />
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
            <>
              {/* Blog Section */}
              <section className="page-section" id="blog">
                <div className="container position-relative">
                  <div className="row gx-5 mt-n50 mt-sm-n30 mb-50 mb-sm-30">
                    {/* Post Item */}
                    {blogs17.map((elm, i) => (
                      <div
                        key={i}
                        className="post-prev-1 col-lg-6 mt-50 mt-sm-30"
                      >
                        <div className="post-prev-1-img">
                          <Link href={`/brutalist-blog-single/${elm.id}`}>
                            <Image
                              src={elm.imgSrc}
                              loading="lazy"
                              width={750}
                              height={620}
                              alt="Image Description"
                            />
                          </Link>
                        </div>
                        <div className="post-prev-1-info">
                          <span className="post-prev-1-infro-item">
                            <span className="visually-hidden">Author:</span>
                            {elm.author}
                          </span>{" "}
                          <span className="post-prev-1-infro-item">
                            <span className="visually-hidden">Date:</span>
                            {elm.date}
                          </span>
                        </div>
                        <h3 className="post-prev-1-title large">
                          <Link href={`/brutalist-blog-single/${elm.id}`}>
                            {elm.title}
                          </Link>
                        </h3>
                      </div>
                    ))}
                    {/* End Post Item */}
                  </div>
                  {/* Pagination */}
                  <Pagination className={"pagination"} />
                  {/* End Pagination */}
                </div>
              </section>
              {/* End Blog Section */}
              {/* Divider */}
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
              <section
                className={`small-section   ${
                  dark
                    ? "bg-dark-2 bg-dark-alpha-90 light-content"
                    : "bg-gray-light-2 bg-light-alpha-90 "
                } bg-scroll`}
                style={{
                  backgroundImage:
                    "url(/assets/images/demo-brutalist/section-bg-3.jpg)",
                }}
              >
                <div
                  className={
                    dark ? "section-gradient-top-dark" : "section-gradient-top"
                  }
                />
                <NewsLetter />{" "}
              </section>
            </>
          </main>
          <footer className="page-section footer-1 bg-dark-1 light-content">
            <Footer3 />
          </footer>
        </div>
      </div>
    </>
  );
}
