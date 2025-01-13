"use client";
import Pagination from "../common/Pagination";
import { blogs19 } from "@/data/blogs";
import Image from "next/image";
import Link from "next/link";
export default function Blogs1({
  itemClass = "post-prev col-md-6 col-lg-4 mt-30",
}) {
  return (
    <div className="container relative">
      {/* Search Form */}
      <div className="mb-60 mb-sm-40">
        <form onSubmit={(e) => e.preventDefault()} className="form">
          <div className="search-wrap">
            <button
              className="search-button animate"
              type="submit"
              title="Start Search"
            >
              <i className="mi-search size-18" />
              <span className="visually-hidden">Start search</span>
            </button>
            <input
              type="text"
              className="form-control input-lg search-field round"
              placeholder="Search..."
              required
            />
          </div>
        </form>
      </div>
      {/* End Search Form */}
      {/* Blog Posts Grid */}
      <div className="row mt-n30 mb-60 mb-sm-40">
        {/* Post Item */}
        {blogs19.map((elm, i) => (
          <div key={i} className={itemClass}>
            <div className="post-prev-container">
              <div className="post-prev-img">
                <Link href={`/main-blog-single-sidebar-right/${elm.id}`}>
                  <Image
                    src={elm.imgSrc}
                    width={650}
                    height={412}
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
                      className={elm.authorImgSrc}
                      width={30}
                      height={30}
                      src="/assets/images/blog/author/author-1.jpg"
                      alt="Image Description"
                    />
                  </a>
                  <a href="#">{elm.authorName}</a>
                </div>
                <div className="float-end">
                  <a href="#">{elm.authorName}</a>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* End Post Item */}
      </div>
      {/* End Blog Posts Grid */}
      {/* Pagination */}
      <Pagination
        className={"pagination justify-content-center mt-30 mt-xs-10"}
      />
      {/* End Pagination */}
    </div>
  );
}
