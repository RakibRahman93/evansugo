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

import { categories } from "@/data/categories";
import { tags } from "@/data/tags";
import { archiveLinks } from "@/data/archeve";
import Slider1 from "@/components/blog/sliders/Slider1";
import Comments from "@/components/blog/Comments";
import Form9 from "@/components/blog/commentForm/Form9";
import { menuItems } from "@/data/menu";
import { allBlogs } from "@/data/blogs";
export const metadata = {
  title:
    "Main Blog Single Page Full Width || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function MainBlogSinglePageFullWidth({ params }) {
  const blog = allBlogs.filter((elm) => elm.id == params.id)[0] || allBlogs[0];
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
                            <AnimatedText text={blog.title || blog.postTitle} />
                          </span>
                        </h1>

                        {/* <!-- Author, Categories, Comments --> */}
                        <div
                          className="blog-item-data mt-30 mt-sm-10 mb-0 wow fadeInUp"
                          data-wow-delay="0.2s"
                        >
                          <div className="d-inline-block me-3">
                            <a href="#">
                              <i className="mi-clock size-16"></i>
                              <span className="visually-hidden">
                                Date:
                              </span>{" "}
                              December 25
                            </a>
                          </div>
                          <div className="d-inline-block me-3">
                            <a href="#">
                              <i className="mi-user size-16"></i>
                              <span className="visually-hidden">
                                Author:
                              </span>{" "}
                              John Doe
                            </a>
                          </div>
                          <div className="d-inline-block me-3">
                            <i className="mi-folder size-16"></i>
                            <span className="visually-hidden">Categories:</span>
                            <a href="#">Design</a>, <a href="#">Branding</a>
                          </div>
                          <div className="d-inline-block me-3">
                            <a href="#">
                              <i className="mi-message size-16"></i> 5 Comments
                            </a>
                          </div>
                        </div>
                        {/* <!-- End Author, Categories, Comments --> */}
                      </div>
                      {/* End Page Title */}
                    </div>
                  </div>
                  {/* End Section Content */}
                </div>
              </ParallaxContainer>
            </section>
            <>
              {/* Section */}
              <section className="page-section">
                <div className="container relative">
                  <div className="row">
                    {/* Content */}
                    <div className="col-lg-8 offset-lg-2">
                      {/* Post */}
                      <div className="blog-item mb-80 mb-xs-40">
                        <div className="blog-item-body">
                          {/* Media Gallery */}
                          <div className="blog-media mb-40 mb-xs-30">
                            <Slider1 />
                          </div>
                          <p className="lead">
                            Morbi lacus massa, euismod ut turpis molestie,
                            tristique sodales est. Integer sit amet mi id sapien
                            tempor molestie in nec massa. Fusce non ante sed
                            lorem rutrum feugiat.
                          </p>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Mauris non laoreet dui. Morbi lacus massa,
                            euismod ut turpis molestie, tristique sodales est.
                            Integer sit amet mi id sapien tempor molestie in nec
                            massa.
                          </p>
                          <p>
                            Fusce non ante sed lorem rutrum feugiat. Vestibulum
                            pellentesque, purus ut&nbsp;dignissim consectetur,
                            nulla erat ultrices purus, ut&nbsp;consequat sem
                            elit non sem. Morbi lacus massa, euismod ut turpis
                            molestie, tristique sodales est. Integer sit amet mi
                            id sapien tempor molestie in nec massa. Fusce non
                            ante sed lorem rutrum feugiat.
                          </p>
                          <blockquote>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Integer posuere erat a&nbsp;ante. Vestibulum
                              pellentesque, purus ut dignissim consectetur,
                              nulla erat ultrices purus.
                            </p>
                            <footer>
                              Someone famous in
                              <cite title="Source Title"> Source Title </cite>
                            </footer>
                          </blockquote>
                          <p>
                            Praesent ultricies ut ipsum non laoreet. Nunc ac
                            <a href="#">ultricies</a> leo. Nulla ac ultrices
                            arcu. Nullam adipiscing lacus in consectetur
                            posuere. Nunc malesuada tellus turpis, ac pretium
                            orci molestie vel. Morbi lacus massa, euismod ut
                            turpis molestie, tristique sodales est. Integer sit
                            amet mi id sapien tempor molestie in nec massa.
                            Fusce non ante sed lorem rutrum feugiat.
                          </p>
                          <ul>
                            <li>First item of the list</li>
                            <li>Second item of the list</li>
                            <li>Third item of the list</li>
                          </ul>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Mauris non laoreet dui. Morbi lacus massa,
                            euismod ut turpis molestie, tristique sodales est.
                            Integer sit amet mi id sapien tempor molestie in nec
                            massa. Fusce non ante sed lorem rutrum feugiat.
                            Vestibulum pellentesque, purus ut&nbsp;dignissim
                            consectetur, nulla erat ultrices purus,
                            ut&nbsp;consequat sem elit non sem.
                          </p>
                        </div>
                      </div>
                      {/* End Post */}
                      {/* Comments */}
                      <div className="mb-80 mb-xs-40">
                        <h4 className="blog-page-title">
                          Comments <small className="number">(3)</small>
                        </h4>
                        <ul className="media-list comment-list clearlist">
                          <Comments />
                        </ul>
                      </div>
                      {/* End Comments */}
                      {/* Add Comment */}
                      <div className="mb-80 mb-xs-40">
                        <h4 className="blog-page-title">Leave a comment</h4>
                        {/* Form */}
                        <Form9 />
                        {/* End Form */}
                      </div>
                      {/* End Add Comment */}
                      {/* Prev/Next Post */}
                      <div className="clearfix mt-40">
                        <a href="#" className="blog-item-more left">
                          <i className="mi-chevron-left" />
                          &nbsp;Prev post
                        </a>
                        <a href="#" className="blog-item-more right">
                          Next post&nbsp;
                          <i className="mi-chevron-right" />
                        </a>
                      </div>
                      {/* End Prev/Next Post */}
                    </div>
                    {/* End Content */}
                  </div>
                </div>
              </section>
              {/* End Section */}
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
              {/* End Section */}
            </>
          </main>
          <Footer1 />
        </div>{" "}
      </div>
    </>
  );
}
