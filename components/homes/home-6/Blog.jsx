import { blogs6 } from "@/data/blogs";
import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Blog() {
  return (
    <div className="container">
      <div className="row mb-60 mb-sm-40">
        <div className="col-lg-8 offset-lg-2 text-center mb-md-30">
          <h2 className="section-caption-fancy mb-20 mb-xs-10">Our Blog</h2>
          <h3 className="section-title mb-0 mb-xs-20">
            Check the latest news about our company in our blog.
          </h3>
        </div>
        <div className="col-lg-2 d-flex align-items-end">
          <div className="local-scroll text-center text-lg-end w-100">
            <Link
              href={`/fancy-blog`}
              className="link-hover-anim"
              data-link-animate="y"
            >
              Our blog <i className="mi-arrow-right size-24" />
            </Link>
          </div>
        </div>
      </div>
      {/* Blog Posts Grid */}
      <div className="row position-relative mt-n30">
        {/* Decorative Waves */}
        {blogs6.map((post, index) => (
          <div
            key={index}
            className={`post-prev col-md-6 col-lg-4 mt-30 wow fadeInLeft`}
            data-wow-offset={0}
            data-wow-delay={post.delay}
          >
            <div className="post-prev-container">
              <div className="post-prev-img">
                <Link href={`/fancy-blog-single/${post.id}`}>
                  <Image
                    width={620}
                    height={436}
                    src={post.imgSrc}
                    alt={post.imgAlt}
                  />
                </Link>
              </div>
              <h4 className="post-prev-title">
                <Link href={`/fancy-blog-single/${post.id}`}>{post.title}</Link>
              </h4>
              <div className="post-prev-text">{post.text}</div>
              <div className="post-prev-info clearfix">
                <div className="float-start">
                  <a href="#">
                    <Image
                      className="post-prev-author-img"
                      width={30}
                      height={30}
                      src={post.authorImgSrc}
                      alt={post.authorImgAlt}
                    />
                  </a>
                  <a href="#">{post.author}</a>
                </div>
                <div className="float-end">
                  <a href="#">{post.date}</a>
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
