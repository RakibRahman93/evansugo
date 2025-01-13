import { portfolios11 } from "@/data/portfolio";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function RelatedProjects7() {
  return (
    <div className="container relative">
      <div className="text-center mb-80 mb-sm-60 position-relative z-index-1">
        <h2 className="section-title">Related Projects</h2>
      </div>
      {/* Portfolio Grid */}
      <div className="row mt-n50 mt-sm-n40">
        {/* Portfolio Item */}
        {portfolios11.slice(0, 3).map((elm, i) => (
          <div key={i} className="col-md-6 col-lg-4 mt-50 mt-sm-40">
            <Link
              href={`/corporate-portfolio-single/${elm.id}`}
              className="portfolio-5-link"
            >
              <div className="portfolio-5-image">
                <div className="portfolio-5-image-bg wow scalexIn" />
                <div className="wow fadeIn" data-wow-delay="1s">
                  <Image
                    src={elm.imageUrl}
                    width={660}
                    height={472}
                    alt="Image Description"
                  />
                </div>
              </div>
              <h3 className="portfolio-5-title">
                <span>{elm.title}</span>
              </h3>
              <div className="portfolio-5-number">{elm.number}</div>
              <div className="portfolio-5-number-descr">{elm.description}</div>
            </Link>
          </div>
        ))}
        {/* End Portfolio Item */}
      </div>
      {/* End Portfolio Grid */}
    </div>
  );
}
