import { blogs9 } from "@/data/blogs";
import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Blog() {
  return (
    <>
      {/* End Background Shape */}
      <div className="container position-relative">
        <div className="row mb-60 mb-sm-40">
          <div className="col-lg-8 offset-lg-2 text-center mb-md-30">
            <h2 className="section-caption-slick mb-30 mb-sm-20">Our Blog</h2>
            <h3 className="section-title mb-30">
              Check the latest news about our company in our blog.
            </h3>
            <p className="section-descr mb-0">
              There are three kinds of web developer specialization front-end
              developer, back-end developer, and full-stack developer.
            </p>
          </div>
          <div className="col-lg-2 d-flex align-items-end">
            <div className="local-scroll text-center text-lg-end w-100">
              <Link
                href={`/slick-blog-dark`}
                className="link-hover-anim"
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
          {blogs9.map((elm, i) => (
            <div
              key={i}
              className="post-prev-3 col-12 col-lg-10 offset-lg-1 col-xl-6 offset-xl-0 mt-30"
            >
              <div className="post-prev-3-container d-block d-sm-flex">
                <div className="post-prev-3-img">
                  <Link href={`/slick-blog-single/${elm.id}`}>
                    <Image
                      src={elm.imgSrc}
                      width={400}
                      height={488}
                      alt="Add Image Description"
                      className="wow scaleOutIn"
                    />
                  </Link>
                </div>
                <div className="post-prev-3-intro">
                  <h4 className="post-prev-3-title">
                    <Link href={`/slick-blog-single/${elm.id}`}>
                      {elm.title}
                    </Link>
                  </h4>
                  <div className="post-prev-3-text">{elm.intro}</div>
                  <div className="post-prev-3-info clearfix">
                    <div className="float-start">
                      <a href="#">
                        <Image
                          className="post-prev-3-author-img"
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
            </div>
          ))}
          {/* End Post Item */}
        </div>
        {/* End Blog Posts Grid */}
      </div>
    </>
  );
}
