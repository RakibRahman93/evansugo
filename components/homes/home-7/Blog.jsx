import { blogs7 } from "@/data/blogs";
import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Blog() {
  return (
    <div className="container position-relative">
      <div className="row mb-80 mb-sm-60">
        <div className="col-lg-8 offset-lg-2 text-center mb-md-30">
          <h2 className="section-caption-gradient mb-20 mb-xs-10">
            Latest News
          </h2>
          <div className="section-line-gradient mx-auto mb-20" />
          <h3 className="section-title mb-40 mb-sm-30">
            Check the latest news about our company in our blog.
          </h3>
          <p className="text-gray mb-0">
            Praesent venenatis justo in ultrices tempor. Donec maximus, dolor a
            condimentum congue, tellus nisi dictum magna, ut viverra massa ex
            sit amet nulla. Duis lobortis nisl sed aliquam sollicitudin.
          </p>
        </div>
        <div className="col-lg-2 d-flex align-items-end">
          <div className="local-scroll text-center text-lg-end w-100">
            <Link
              href={`/gradient-blog`}
              className="link-hover-anim link-gradient"
              data-link-animate="y"
            >
              <span className="link-strong link-strong-unhovered">
                Our blog{" "}
                <i className="mi-arrow-right size-24" aria-hidden="true"></i>
              </span>
              <span
                className="link-strong link-strong-hovered"
                aria-hidden="true"
              >
                Our blog{" "}
                <i className="mi-arrow-right size-24" aria-hidden="true"></i>
              </span>
            </Link>
          </div>
        </div>
      </div>
      {/* Blog Posts Grid */}
      <div className="row mt-n30">
        {/* Post Item */}
        {blogs7.map((item, index) => (
          <div
            key={index}
            className="post-prev-3 gradient col-12 col-lg-10 offset-lg-1 col-xl-6 offset-xl-0 mt-30"
          >
            <div className="post-prev-3-container d-block d-sm-flex">
              <div className="post-prev-3-img">
                <a href="#">
                  <Image
                    src={item.imgSrc}
                    alt={item.imgAlt}
                    width={400}
                    height={498}
                    className="wow scaleOutIn"
                  />
                </a>
              </div>
              <div className="post-prev-3-intro">
                <h4 className="post-prev-3-title">
                  <a href="#">{item.postTitle}</a>
                </h4>
                <div className="post-prev-3-text">{item.postText}</div>
                <div className="post-prev-3-info clearfix">
                  <div className="float-start d-flex">
                    <a href="#">
                      <Image
                        className="post-prev-3-author-img me-1"
                        width={30}
                        height={30}
                        src={item.authorImgSrc}
                        alt="Image Description"
                      />
                    </a>
                    <div>
                      <a href="#">{item.authorName}</a>
                    </div>
                  </div>
                  <div className="float-end">
                    <a href="#">{item.postDate}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* End Post Item */}
      </div>
      {/* End Blog Posts Grid */}
    </div>
  );
}
