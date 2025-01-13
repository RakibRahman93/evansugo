import { blogs8 } from "@/data/blogs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Blog() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-5 mb-md-90 mb-sm-50">
          <h2 className="section-caption-border">Our Blog</h2>
          <h3 className="section-title-strong mb-40">
            Latest <span className="font-alt">News</span>
          </h3>
          <p className="mb-40">
            Etiam metus felis, dapibus sit amet consequat a, convallis mollis
            odio. Quisque scelerisque dui id fermentum venenatis. Aliquam
            lobortis ligula id efficitur iaculis.
          </p>
          <div className="local-scroll">
            <Link
              href={`/strong-blog`}
              className="btn btn-mod btn-white btn-large btn-round btn-hover-anim"
            >
              <span>View Blog</span>
            </Link>
          </div>
        </div>
      </div>
      {/* Blog Grid */}
      <div className="row gy-4">
        {/* Post Item */}
        {blogs8.map((post, index) => (
          <div
            key={index}
            className={`post-prev-2 col-md-6 col-lg-4`}
            data-rellax-y={post.rellaxY}
            data-rellax-speed={post.rellaxSpeed}
            data-rellax-percentage={post.rellaxPercentage}
          >
            <div
              className={`
              ${index == 0 ? "mt-140 mt-md-0" : ""}
              ${index == 2 ? "mt-n140 mt-md-0" : ""}
            `}
            >
              <div className="post-prev-2-img">
                <Link href={`/modern-blog-single/${post.id}`}>
                  <Image
                    width={700}
                    height={479}
                    src={post.imageSrc}
                    alt="Image Description"
                  />
                </Link>
              </div>
              <h3 className="post-prev-2-title">
                <Link href={`/modern-blog-single/${post.id}`}>
                  {post.title}
                </Link>
              </h3>
              <div className="post-prev-2-info">{post.date}</div>
            </div>
          </div>
        ))}
        {/* End Post Item */}
      </div>
      {/* End Blog Grid */}
    </div>
  );
}
