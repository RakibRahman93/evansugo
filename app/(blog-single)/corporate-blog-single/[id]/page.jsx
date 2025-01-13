import AnimatedText from "@/components/common/AnimatedText";
import Footer4 from "@/components/footers/Footer4";
import Header4 from "@/components/headers/Header4";

const dark = false;
import Image from "next/image";
import { corporateMultipage } from "@/data/menu";

import NewsLetterForm2 from "@/components/blog/newsletterForms/NewsLetterForm2";
import Widget1 from "@/components/blog/widgets/Widget1";
import Form3 from "@/components/blog/commentForm/Form3";
import Comments from "@/components/blog/Comments";
import { allBlogs } from "@/data/blogs";
export const metadata = {
  title:
    "Corporate Blog Single || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function CorporateBlogSinglePage({ params }) {
  const blog = allBlogs.filter((elm) => elm.id == params.id)[0] || allBlogs[0];
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
                    <h1 className="hs-title-9 mb-20">
                      <span className="wow charsAnimIn" data-splitting="chars">
                        <AnimatedText text={blog.title || blog.postTitle} />
                      </span>
                    </h1>
                    {/* 
                <!-- Author, Categories, Comments --> */}
                    <div
                      className="blog-item-data mt-30 mt-sm-10 mb-0 wow fadeIn"
                      data-wow-delay="0.2s"
                    >
                      <div className="d-inline-block me-3">
                        <a href="#">
                          <i className="mi-clock size-16"></i>
                          <span className="visually-hidden">Date:</span>{" "}
                          December 25
                        </a>
                      </div>
                      <div className="d-inline-block me-3">
                        <a href="#">
                          <i className="mi-user size-16"></i>
                          <span className="visually-hidden">Author:</span> John
                          Doe
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
                  </div>
                </div>
              </div>
            </section>
            <section className="page-section">
              <div className="container relative">
                <div className="row">
                  {/* Content */}
                  <div className="col-lg-8 mb-md-80">
                    {/* Post */}
                    <div className="blog-item mb-80 mb-xs-40">
                      <div className="blog-item-body">
                        <div className="mb-40 mb-xs-30">
                          <Image
                            className="round"
                            src="/assets/images/demo-corporate/blog/post-single.jpg"
                            alt="Image Description"
                            width={1350}
                            height={865}
                          />
                        </div>
                        <p className="lead">
                          Morbi lacus massa, euismod ut turpis molestie,
                          tristique sodales est. Integer sit amet mi id sapien
                          tempor molestie in nec massa. Fusce non ante sed lorem
                          rutrum feugiat.
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
                          nulla erat ultrices purus, ut&nbsp;consequat sem elit
                          non sem. Morbi lacus massa, euismod ut turpis
                          molestie, tristique sodales est. Integer sit amet mi
                          id sapien tempor molestie in nec massa. Fusce non ante
                          sed lorem rutrum feugiat.
                        </p>
                        <blockquote>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Integer posuere erat a&nbsp;ante. Vestibulum
                            pellentesque, purus ut dignissim consectetur, nulla
                            erat ultrices purus.
                          </p>
                          <footer>
                            Someone famous in
                            <cite title="Source Title"> Source Title </cite>
                          </footer>
                        </blockquote>
                        <p>
                          Praesent ultricies ut ipsum non laoreet. Nunc ac
                          <a href="#">ultricies</a> leo. Nulla ac ultrices arcu.
                          Nullam adipiscing lacus in consectetur posuere. Nunc
                          malesuada tellus turpis, ac pretium orci molestie vel.
                          Morbi lacus massa, euismod ut turpis molestie,
                          tristique sodales est. Integer sit amet mi id sapien
                          tempor molestie in nec massa. Fusce non ante sed lorem
                          rutrum feugiat.
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
                        {/* Comment Item */}
                        <Comments />
                        {/* End Comment Item */}
                      </ul>
                    </div>
                    {/* End Comments */}
                    {/* Add Comment */}
                    <div className="mb-80 mb-xs-40">
                      <h4 className="blog-page-title">Leave a comment</h4>
                      {/* Form */}
                      <Form3 />
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
                  {/* Sidebar */}
                  <div className="col-lg-4 col-xl-3 offset-xl-1">
                    {/* Search Widget */}
                    <Widget1 searchInputClass="form-control input-lg search-field round" />
                    {/* End Widget */}
                    {/* Widget */}
                    <div className="widget mb-0">
                      <h3 className="widget-title">Newsletter</h3>
                      <div className="widget-body">
                        <div className="widget-text clearfix">
                          <NewsLetterForm2 />
                        </div>
                      </div>
                    </div>
                    {/* End Widget */}
                  </div>
                  {/* End Sidebar */}
                </div>
              </div>
            </section>
          </main>
          <hr className={`mt-0 mb-0 ${dark ? "white" : ""} `} />
          <footer className="footer-2 pb-50">
            <Footer4 />
          </footer>
        </div>{" "}
      </div>
    </>
  );
}
