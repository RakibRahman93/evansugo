import { blogs4 } from "@/data/blogs";
import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Blog() {
  return (
    <div className="col-lg-7 col-xl-8">
      <div className="row mt-n50">
        {/* Blog Post Item */}
        {blogs4.map((item, index) => (
          <div
            key={index}
            className={`post-prev-2 col-md-6 mt-50 wow fadeInLeft `}
          >
            <div className="post-prev-2-img">
              <Link href={`/corporate-blog-single/${item.id}`}>
                <Image
                  src={item.imageUrl}
                  width={610}
                  height={436}
                  alt="Image Description"
                />
              </Link>
            </div>
            <h3 className="post-prev-2-title">
              <Link href={`/corporate-blog-single/${item.id}`}>
                {item.title}
              </Link>
            </h3>
            <p className="post-prev-2-text">{item.description}</p>
            <div className="post-prev-2-tags">
              <span className="post-prev-2-tag">{item.date}</span>{" "}
              <span className="post-prev-2-tag">
                <i className={`mi-circle ${item.colorClass}`} />
                {item.category}
              </span>
            </div>
          </div>
        ))}
        {/* End Blog Post Item */}
      </div>
    </div>
  );
}
