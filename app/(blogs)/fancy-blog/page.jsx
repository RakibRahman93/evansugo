import AnimatedText from "@/components/common/AnimatedText";
import Pagination from "@/components/common/Pagination";
import Footer6 from "@/components/footers/Footer6";
import Header6 from "@/components/headers/Header6";

import { categories } from "@/data/categories";
import { tags } from "@/data/tags";
import { archiveLinks } from "@/data/archeve";
import { fancyMultipage } from "@/data/menu";
import Image from "next/image";
import Link from "next/link";
import { blogs14 } from "@/data/blogs";
import Form3 from "@/components/newsletterForms/Form3";
const onePage = false;
const dark = false;
export const metadata = {
  title:
    "Fancy Blog || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function FancyBlogPage() {
  return (
    <>
      <div className="theme-fancy">
        <div className="page" id="top">
          <nav className="main-nav transparent stick-fixed wow-menubar wch-unset">
            <Header6 links={fancyMultipage} />
          </nav>
          <main id="main">
            <section className="page-section bg-gradient-gray-light-1 bg-scroll overflow-hidden">
              {/* <!-- Background Shape --> */}
              <div className="bg-shape-1 wow fadeIn">
                <Image
                  width="1443"
                  height="844"
                  src="/assets/images/demo-fancy/bg-shape-1.svg"
                  alt=""
                />
              </div>
              {/* <!-- End Background Shape --> */}

              <div className="container position-relative pt-10 pt-sm-40 text-center">
                <div className="row">
                  <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                    <h1 className="hs-title-10 mb-10">
                      <span className="wow charsAnimIn" data-splitting="chars">
                        <AnimatedText text="Latest" />
                        <span className="mark-decoration-3-wrap">
                          <AnimatedText text="News" />
                          <b
                            className="mark-decoration-3 wow scalexIn"
                            data-wow-delay="0.5s"
                          ></b>
                        </span>
                      </span>
                    </h1>

                    <p
                      className="section-descr mb-0 wow fadeIn"
                      data-wow-delay="0.2s"
                    >
                      Insights and inspiration at your fingertips.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <>
              <section className="page-section" id="blog">
                <div className="container">
                  {/* Blog Posts Grid */}
                  <div
                    className="row position-relative mt-n50 mb-50 wow fadeInUp"
                    data-wow-offset={0}
                  >
                    {/* Decorative Waves */}
                    <div
                      className="decoration-8 d-none d-sm-block opacity-05"
                      data-rellax-y=""
                      data-rellax-speed="-0.7"
                      data-rellax-percentage={0}
                    >
                      <Image
                        src="/assets/images/demo-fancy/decoration-1.svg"
                        alt=""
                        width={159}
                        height={74}
                      />
                    </div>
                    {/* End Decorative Waves */}
                    {/* Post Item */}
                    {blogs14.map((elm, i) => (
                      <div
                        key={i}
                        className="post-prev col-md-6 col-lg-4 mt-50"
                      >
                        <div className="post-prev-container">
                          <div className="post-prev-img">
                            <Link href={`/fancy-blog-single/${elm.id}`}>
                              <Image
                                src={elm.imgSrc}
                                width={620}
                                height={436}
                                alt="Add Image Description"
                              />
                            </Link>
                          </div>
                          <h4 className="post-prev-title">
                            <Link href={`/fancy-blog-single/${elm.id}`}>
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
                                  src={elm.authorImg}
                                  alt="Image Description"
                                />
                              </a>
                              <a href="#">{elm.authorName}</a>
                            </div>
                            <div className="float-end">
                              <a href="#">{elm.authorName}</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    {/* End Post Item */}

                    {/* End Post Item */}
                  </div>
                  {/* End Blog Posts Grid */}
                  {/* Pagination */}
                  <Pagination />
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
                        <h3 className="widget-title">Newsletter</h3>
                        <div className="widget-body">
                          <div className="widget-text clearfix">
                            <Form3 />
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
          <footer className="page-section footer bg-dark-1 light-content pb-30">
            <Footer6 />
          </footer>
        </div>{" "}
      </div>
    </>
  );
}
