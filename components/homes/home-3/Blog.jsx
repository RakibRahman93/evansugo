import AnimatedText from "@/components/common/AnimatedText";
import { blogs3 } from "@/data/blogs";
import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Blog() {
  return (
    <div className="container position-relative">
      <div className="row mb-100 mb-md-80 mb-sm-40">
        <div className="col-md-8 col-lg-9 mb-sm-20">
          <h2 className="section-title-large font-alt uppercase mb-0">
            <span className="wow charsAnimInLong" data-splitting="chars">
              <AnimatedText text="Latest News" />
            </span>
          </h2>
        </div>
        <div className="col-md-4 col-lg-3 text-md-end pt-20 pt-md-10 pt-sm-0">
          <Link
            href={`/brutalist-blog`}
            className="link-hover-anim align-middle"
            data-link-animate="y"
          >
            <span className="link-strong link-strong-unhovered">
              Our blog{" "}
              <i className="icon-arrow-right size-14" aria-hidden="true"></i>
            </span>
            <span
              className="link-strong link-strong-hovered"
              aria-hidden="true"
            >
              Our blog{" "}
              <i className="icon-arrow-right size-14" aria-hidden="true"></i>
            </span>
          </Link>
        </div>
      </div>
      <div className="row mt-n30">
        {/* Post Item */}

        {/* End Post Item */}
        {/* Post Item */}
        {blogs3.map((post, i) => (
          <div
            key={post.id}
            className={`post-prev-1 ${
              !i ? "col-lg-6" : "col-sm-6 col-lg-3"
            }  mt-30 wow fadeInLeft`}
            data-wow-delay={post.delay}
          >
            <div className="post-prev-1-img">
              <Link href={`/brutalist-blog-single/${post.id}`}>
                <Image
                  src={post.imgSrc}
                  alt={post.alt}
                  width={750}
                  height={620}
                />
              </Link>
            </div>
            <div className="post-prev-1-info">
              <span className="post-prev-1-infro-item">
                <span className="visually-hidden">Author:</span>
                {post.author}
              </span>
              <span className="post-prev-1-infro-item">
                <span className="visually-hidden">Date:</span>
                {post.date}
              </span>
            </div>
            <h3 className="post-prev-1-title">
              <Link href={`/brutalist-blog-single/${post.id}`}>
                {post.title}
              </Link>
            </h3>
          </div>
        ))}
        {/* End Post Item */}
      </div>
    </div>
  );
}
