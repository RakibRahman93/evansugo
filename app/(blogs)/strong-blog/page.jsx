import Pagination from "@/components/common/Pagination";
import Footer9 from "@/components/footers/Footer9";
import Header10 from "@/components/headers/Header10";

import { blogs10 } from "@/data/blogs";
import { categories } from "@/data/categories";
import { tags } from "@/data/tags";
import { archiveLinks } from "@/data/archeve";
import { strongMultiPages } from "@/data/menu";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import Form7 from "@/components/newsletterForms/Form7";
const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);
const dark = false;
const onePage = false;
export const metadata = {
  title:
    "Home 10 Blog || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function StrongBlogPage() {
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
                      Latest <span className="font-alt">News</span>
                    </span>
                  </h1>
                </div>
                {/* End Home Section Content */}
              </div>
            </ParallaxContainer>
            <>
              <section className="page-section" id="blog">
                <div className="container position-relative">
                  {/* Blog Grid */}
                  <div
                    className="row mt-n50 mt-sm-n30 mb-50 mb-sm-30 wow fadeInUp"
                    data-wow-offset={0}
                  >
                    {/* Post Item */}

                    {/* End Post Item */}
                    {blogs10.map((post) => (
                      <div
                        className="post-prev-2 col-md-6 col-lg-4 mt-50 mt-sm-30"
                        key={post.id}
                      >
                        <div className="post-prev-2-img">
                          <Link href={`/strong-blog-single/${post.id}`}>
                            <Image
                              src={post.imgSrc}
                              width={700}
                              height={479}
                              alt={post.imgAlt}
                            />
                          </Link>
                        </div>
                        <h3 className="post-prev-2-title">
                          {" "}
                          <Link href={`/strong-blog-single/${post.id}`}>
                            {post.title}
                          </Link>
                        </h3>
                        <div className="post-prev-2-info">{post.date}</div>
                      </div>
                    ))}
                    {/* End Post Item */}
                  </div>
                  {/* End Blog Grid */}
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
                            <Form7 />
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

          <footer className="footer-1 bg-dark-1 light-content">
            <Footer9 />
          </footer>
        </div>
      </div>{" "}
    </>
  );
}
