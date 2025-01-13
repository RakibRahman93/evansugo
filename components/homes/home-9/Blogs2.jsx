import Pagination from "@/components/common/Pagination";
import { blogs11 } from "@/data/blogs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Blogs2() {
  return (
    <div className="container position-relative">
      {/* Blog Posts Grid */}
      <div className="row mt-n50 mb-50">
        {/* Post Item */}
        {blogs11.map((elm, i) => (
          <div
            key={i}
            className="post-prev-3 col-12 col-lg-10 offset-lg-1 col-xl-6 offset-xl-0 mt-50"
          >
            <div className="post-prev-3-container d-block d-sm-flex">
              <div className="post-prev-3-img">
                <Link href={`/slick-blog-single/${elm.id}`}>
                  <Image
                    width={400}
                    height={488}
                    src={elm.imgSrc}
                    alt="Add Image Description"
                  />
                </Link>
              </div>
              <div className="post-prev-3-intro">
                <h4 className="post-prev-3-title">
                  <Link href={`/slick-blog-single/${elm.id}`}>{elm.title}</Link>
                </h4>
                <div className="post-prev-3-text">{elm.text}</div>
                <div className="post-prev-3-info clearfix">
                  <div className="float-start">
                    <a href="#">
                      <Image
                        className="post-prev-3-author-img"
                        width={30}
                        height={30}
                        src={elm.authorImg}
                        alt="Image Description"
                      />
                    </a>
                    <a href="#">{elm.author}</a>
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
      {/* Pagination */}
      <Pagination />
      {/* End Pagination */}
    </div>
  );
}
