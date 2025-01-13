import AnimatedText from "@/components/common/AnimatedText";
import Footer4 from "@/components/footers/Footer4";
import Header4 from "@/components/headers/Header4";
import { categories } from "@/data/categories";
import { tags } from "@/data/tags";
import { archiveLinks } from "@/data/archeve";
const onePage = false;
const dark = false;
import Image from "next/image";
import { corporateMultipage } from "@/data/menu";
import Link from "next/link";
import { blogs16, widgetPosts } from "@/data/blogs";
import Pagination from "@/components/common/Pagination";
import { comments } from "@/data/comments";
import Form2 from "@/components/newsletterForms/Form2";

export const metadata = {
  title:
    "Corporate Blog || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function CorporateBlogPage() {
  return (
    <>
      <div className="theme-corporate">
        <div className="page" id="top">
          <nav className="main-nav transparent stick-fixed wow-menubar wch-unset">
            <Header4 links={corporateMultipage} />
          </nav>

          <main id="main">
            <section className="page-section bg-gradient-gray-light-1 bg-scroll overflow-hidden">
              {/* Background Shape */}
              <div className="bg-shape-1 wow fadeIn">
                <Image
                  className="opacity-05"
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
                      <span className="wow charsAnimIn" data-splitting="chars">
                        <AnimatedText text="Latest" />
                        <span className="mark-decoration-3-wrap">
                          <AnimatedText text="News" />
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
                      Insights and inspiration at your fingertips.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section className="page-section">
              <div className="container relative">
                <div className="row">
                  {/* Content */}
                  <div className="col-lg-8 mb-md-80">
                    {/* Blog Posts Grid */}
                    <div className="row mt-n50 mb-60 mb-sm-40">
                      {/* Blog Post Item */}
                      {blogs16.map((elm, i) => (
                        <div key={i} className="post-prev-2 col-md-6 mt-50">
                          <div className="post-prev-2-img">
                            <Link href={`/corporate-blog-single/${elm.id}`}>
                              <Image
                                src={elm.imgUrl}
                                width={610}
                                height={436}
                                alt="Image Description"
                              />
                            </Link>
                          </div>
                          <h3 className="post-prev-2-title">
                            <Link href={`/corporate-blog-single/${elm.id}`}>
                              {elm.title}
                            </Link>
                          </h3>
                          <p className="post-prev-2-text">{elm.desc}</p>
                          <div className="post-prev-2-tags">
                            <span className="post-prev-2-tag">{elm.date}</span>{" "}
                            <span className="post-prev-2-tag">
                              <i className={`mi-circle ${elm.colorClass} `} />
                              {elm.category}
                            </span>
                          </div>
                        </div>
                      ))}
                      {/* End Blog Post Item */}
                    </div>
                    {/* End Blog Posts Grid */}
                    {/* Pagination */}
                    <Pagination className="pagination" />
                    {/* End Pagination */}
                  </div>
                  {/* End Content */}
                  {/* Sidebar */}
                  <div className="col-lg-4 col-xl-3 offset-xl-1">
                    {/* Search Widget */}
                    <div className="widget">
                      <div className="form">
                        <div className="search-wrap">
                          <button
                            className="search-button animate"
                            type="submit"
                            title="Start Search"
                          >
                            <i className="mi-search size-18" />
                            <span className="visually-hidden">
                              Start search
                            </span>
                          </button>
                          <input
                            type="text"
                            className="form-control input-lg search-field round"
                            placeholder="Search..."
                          />
                        </div>
                      </div>
                    </div>
                    {/* End Search Widget */}
                    {/* Widget */}
                    <div className="widget">
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
                    {/* Widget */}
                    <div className="widget">
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
                    {/* Widget */}
                    <div className="widget">
                      <h3 className="widget-title">Latest posts</h3>
                      <div className="widget-body">
                        <ul className="clearlist widget-posts">
                          {widgetPosts.map((post, index) => (
                            <li key={index} className="clearfix">
                              <a href="#">
                                <Image
                                  src={post.imgUrl}
                                  height={140}
                                  style={{ height: "fit-content" }}
                                  alt=""
                                  width={100}
                                  className="widget-posts-img"
                                />
                              </a>
                              <div className="widget-posts-descr">
                                <a href="#" title="">
                                  {post.title}
                                </a>
                                <span>Posted by {post.author}</span>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    {/* End Widget */}
                    {/* Widget */}
                    <div className="widget">
                      <h3 className="widget-title">Comments</h3>
                      <div className="widget-body">
                        <ul className="clearlist widget-comments">
                          {comments.map((comment, index) => (
                            <li key={index}>
                              {comment.author} on{" "}
                              <a href="#" title="">
                                {comment.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    {/* End Widget */}
                    {/* Widget */}
                    <div className="widget">
                      <h3 className="widget-title">Text widget</h3>
                      <div className="widget-body">
                        <div className="widget-text clearfix">
                          <Image
                            src="/assets/images/blog/previews/post-prev-6.jpg"
                            alt="Image Description"
                            style={{ height: "fit-content" }}
                            height={140}
                            width={100}
                            className="left img-left"
                          />
                          Consectetur adipiscing elit. Quisque magna ante
                          eleifend eleifend. Purus ut dignissim consectetur,
                          nulla erat ultrices purus, ut consequat sem elit non
                          sem. Quisque magna ante eleifend eleifend.
                        </div>
                      </div>
                    </div>
                    {/* End Widget */}
                    {/* Widget */}
                    <div className="widget">
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
                    {/* Widget */}
                    <div className="widget mb-0">
                      <h3 className="widget-title">Newsletter</h3>
                      <div className="widget-body">
                        <div className="widget-text clearfix">
                          <Form2 />
                        </div>
                      </div>
                    </div>
                    {/* End Widget */}
                  </div>
                  {/* End Sidebar */}
                </div>
              </div>
            </section>
            <hr className={`mt-0 mb-0 ${dark ? "white" : ""} `} />
          </main>
          <footer className="footer-2 pb-50">
            <Footer4 />
          </footer>
        </div>{" "}
      </div>
    </>
  );
}
