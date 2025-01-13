import { blogs5 } from "@/data/blogs";
import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Blog() {
  return (
    <div className="container">
      <div className="row mb-70 mb-sm-50">
        <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3 text-center">
          <h2 className="section-title mb-30 mb-sm-20">
            <span className="text-gray">Our</span> Blog
            <span className="text-gray">.</span>
          </h2>
          <div className="text-gray">
            Organic shapes are irregular shapes that are often complex and
            resemble shapes that are found in nature.
          </div>
        </div>
        <div className="col-md-2 col-lg-3 text-center text-md-end mt-10 mt-sm-30">
          <Link href={`/elegant-blog`} className="section-more">
            All News <i className="mi-chevron-right size-14" />
          </Link>
        </div>
      </div>
      <div className="row mt-n30">
        {/* Post Item */}
        {blogs5.map((post, index) => (
          <div
            key={index}
            className={`post-prev col-md-6 col-lg-4 mt-30 wow fadeInLeft`}
            data-wow-delay={`${post.delay}s`}
          >
            <div className="post-prev-container">
              <div className="post-prev-img">
                <Link href={`/elegant-blog-single/${post.id}`}>
                  <Image
                    src={post.imageSrc}
                    width={607}
                    height={358}
                    alt="Add Image Description"
                  />
                </Link>
              </div>
              <h3 className="post-prev-title">
                <Link href={`/elegant-blog-single/${post.id}`}>
                  {post.title}
                </Link>
              </h3>
              <div className="post-prev-text">{post.text}</div>
              <div className="post-prev-info clearfix">
                <div className="float-start">
                  <a href="#" className="icon-author">
                    <i className="mi-user size-14 align-middle" />
                  </a>
                  <a href="#">{post.author}</a>
                </div>
                <div className="float-end">
                  <i className="mi-calendar size-14 align-middle" />
                  <a href="#">{post.date}</a>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* End Post Item */}
      </div>
    </div>
  );
}
