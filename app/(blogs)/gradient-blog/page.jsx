import Pagination from "@/components/common/Pagination";
import Footer7 from "@/components/footers/Footer7";
import Header7 from "@/components/headers/Header7";
import Form4 from "@/components/newsletterForms/Form4";
import { archiveLinks } from "@/data/archeve";
import { blogs13 } from "@/data/blogs";
import { categories } from "@/data/categories";

import { gradientMultipage } from "@/data/menu";
import { tags } from "@/data/tags";
import Image from "next/image";
import Link from "next/link";

const onePage = false;
const dark = false;
export const metadata = {
  title:
    "Gradient Blogs || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function GradientBlogPage() {
  return (
    <>
      <div className="theme-gradient">
        <div className="page" id="top">
          <nav className="main-nav transparent stick-fixed wow-menubar wch-unset">
            <Header7 links={gradientMultipage} />
          </nav>
          <main id="main">
            <section className="page-section bg-gradient-gray-light-1 bg-scroll overflow-hidden">
              <div className="bg-shape-1 wow fadeIn">
                <Image
                  src="/assets/images/demo-fancy/bg-shape-1.svg"
                  width={1443}
                  height={844}
                  alt=""
                />
              </div>

              <div className="container position-relative pt-10 pt-sm-40 text-center">
                <div className="row">
                  <div className="col-lg-10 offset-lg-1">
                    <h1
                      className="hs-title-1 mb-10 wow fadeInUpShort"
                      data-wow-duration="0.75s"
                    >
                      Portfolio
                    </h1>

                    <p
                      className="section-descr mb-0 wow fadeIn"
                      data-wow-delay="0.2s"
                    >
                      Explore captivating web design solutions.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <>
              <section className="page-section" id="blog">
                <div className="container position-relative">
                  {/* Blog Posts Grid */}
                  <div className="row mt-n50 mb-50">
                    {/* Post Item */}
                    {blogs13.map((elm, i) => (
                      <div
                        key={i}
                        className="post-prev-3 gradient col-12 col-lg-10 offset-lg-1 col-xl-6 offset-xl-0 mt-50"
                      >
                        <div className="post-prev-3-container d-block d-sm-flex">
                          <div className="post-prev-3-img">
                            <Link href={`/gradient-blog-single/${elm.id}`}>
                              <Image
                                src={elm.imgSrc}
                                width={400}
                                height={488}
                                alt="Add Image Description"
                              />
                            </Link>
                          </div>
                          <div className="post-prev-3-intro">
                            <h4 className="post-prev-3-title">
                              <Link href={`/gradient-blog-single/${elm.id}`}>
                                {elm.title}
                              </Link>
                            </h4>
                            <div className="post-prev-3-text">
                              {elm.description}
                            </div>
                            <div className="post-prev-3-info clearfix">
                              <div className="float-start">
                                <a href="#">
                                  <Image
                                    className="post-prev-3-author-img"
                                    width={30}
                                    height={30}
                                    src={elm.authorImg}
                                    alt="Image Description"
                                  />
                                </a>
                                <a href="#">{elm.author}</a>
                              </div>
                              <div className="float-end">
                                <a href="#">{elm.date}</a>
                              </div>
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
                            <Form4 />
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
          <footer className="page-section footer bg-dark-1 light-content overflow-hidden pb-30">
            <div className="bg-shape-4">
              <Image
                width="1443"
                height="644"
                src="/assets/images/demo-gradient/bg-shape-1.svg"
                alt=""
              />
            </div>
            <Footer7 />
          </footer>
        </div>{" "}
      </div>
    </>
  );
}
