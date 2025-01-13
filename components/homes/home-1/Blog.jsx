import { blogs1 } from "@/data/blogs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Blog() {
  return (
    <div className="row mt-n50">
      {/* Post Item */}
      {blogs1.map((elm, i) => (
        <div
          key={i}
          className="post-prev col-md-6 col-lg-4 mt-50 wow fadeInLeft"
          data-wow-delay={elm.delay}
        >
          <div className="post-prev-container">
            <div className="post-prev-img">
              <Link href={`/main-blog-single-sidebar-right/${elm.id}`}>
                <Image
                  width={650}
                  height={412}
                  src={elm.imgSrc}
                  alt="Add Image Description"
                />
              </Link>
            </div>
            <h4 className="post-prev-title">
              <Link href={`/main-blog-single-sidebar-right/${elm.id}`}>
                {elm.title}
              </Link>
            </h4>
            <div className="post-prev-text">{elm.text}</div>
            <div className="post-prev-info clearfix">
              <div className="float-start">
                <a href="#">
                  <Image
                    className="post-prev-author-img"
                    width={30}
                    height={30}
                    src={elm.authorImg}
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
      ))}
      {/* End Post Item */}
      {/* Post Item */}

      {/* End Post Item */}
    </div>
  );
}
