import Footer8 from "@/components/footers/Footer8";
import Header9 from "@/components/headers/Header9";
import { slickMultipages } from "@/data/menu";
import Image from "next/image";
import Comments from "@/components/blog/Comments";
import Form8 from "@/components/blog/commentForm/Form8";
import Widget2 from "@/components/blog/widgets/Widget2";
import { allBlogs } from "@/data/blogs";
export const metadata = {
  title:
    "Slick Blogs Single || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};

export default function SlickBlogSinglePage({ params }) {
  const blog = allBlogs.filter((elm) => elm.id == params.id)[0] || allBlogs[0];
  return (
    <>
      <div className="theme-slick">
        <div className="page" id="top">
          <nav className="main-nav transparent stick-fixed wow-menubar wch-unset">
            <Header9 links={slickMultipages} />
          </nav>
          <main id="main">
            <section
              className="page-section bg-gradient-gray-light-1 bg-scroll overflow-hidden"
              id="home"
            >
              {/* <!-- Background Shape --> */}
              <div className="bg-shape-1 wow fadeIn">
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
                      {blog.title || blog.postTitle}
                    </h1>
                    {/* Author, Categories, Comments */}
                    <div
                      className="blog-item-data mb-0 wow fadeIn"
                      data-wow-delay="0.2s"
                    >
                      <div className="d-inline-block me-3">
                        <a href="#">
                          <i className="mi-clock size-16" />
                          <span className="visually-hidden">Date:</span>{" "}
                          December 25
                        </a>
                      </div>
                      <div className="d-inline-block me-3">
                        <a href="#">
                          <i className="mi-user size-16" />
                          <span className="visually-hidden">Author:</span> John
                          Doe
                        </a>
                      </div>
                      <div className="d-inline-block me-3">
                        <i className="mi-folder size-16" />
                        <span className="visually-hidden">Categories:</span>
                        <a href="#">Design</a>, <a href="#">Branding</a>
                      </div>
                      <div className="d-inline-block me-3">
                        <a href="#">
                          <i className="mi-message size-16" /> 5 Comments
                        </a>
                      </div>
                    </div>
                    {/* End Author, Categories, Comments */}
                  </div>
                </div>
              </div>
            </section>
            <>
              {/* Section */}
              <section className="page-section">
                <div className="container relative">
                  <div className="row">
                    {/* Content */}
                    <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                      {/* Post */}
                      <div className="blog-item mb-80 mb-xs-40">
                        <div className="blog-item-body">
                          <div className="mb-40 mb-xs-30">
                            <Image
                              src="/assets/images/demo-fancy/blog/post-prev-3-large.jpg"
                              alt="Image Description"
                              width={1350}
                              height={759}
                              className="round"
                            />
                          </div>
                          <p>
                            Morbi lacus massa, euismod ut turpis molestie,
                            tristique sodales est. Integer sit amet mi id sapien
                            tempor molestie in nec massa. Fusce non ante sed
                            lorem rutrum feugiat. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Mauris non laoreet dui.
                            Morbi lacus massa, euismod ut turpis molestie,
                            tristique sodales est. Integer sit amet mi id sapien
                            tempor molestie in nec massa.
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
                        <Form8 />
                        {/* End Form */}
                      </div>
                      {/* End Add Comment */}
                      {/* Prev/Next Post */}
                      <div className="clearfix mt-40">
                        <a href="#" className="blog-item-more circle left">
                          <i className="mi-chevron-left" />
                          &nbsp;Prev post
                        </a>
                        <a href="#" className="blog-item-more circle right">
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
                    <Widget2
                      inputClass="newsletter-field form-control input-md circle mb-10"
                      btnClass="btn btn-mod btn-color btn-medium btn-circle btn-hover-anim form-control"
                    />
                  </div>
                </div>
              </section>
            </>
          </main>
          <footer className="page-section footer position-relative overflow-hidden pb-30">
            <div className="bg-shape-4">
              <Image
                src="/assets/images/demo-slick/bg-shape-4.svg"
                width={1600}
                height={268}
                alt=""
              />
            </div>
            <Footer8 />
          </footer>
        </div>
      </div>
    </>
  );
}
