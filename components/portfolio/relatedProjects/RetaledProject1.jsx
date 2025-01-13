import { portfolioItems } from "@/data/portfolio";
import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function RetaledProject1() {
  return (
    <div className="container position-relative">
      <div className="row">
        <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
          <h2 className="section-title-strong mb-90 mb-sm-50">
            Related <span className="font-alt">Projects</span>
          </h2>
        </div>
      </div>
      {/* Portfolio Grid */}
      <div className="row mb-n40 wow fadeInUp" data-wow-offset={0}>
        {/* Portfolio item */}
        {portfolioItems.slice(3, 7).map((elm, i) => (
          <div key={i} className="col-md-6 col-lg-4 mb-40">
            <div className="portfolio-4-item">
              <Link href={`/strong-portfolio-single/${elm.id}`}>
                <div className="portfolio-4-image">
                  <Image
                    src={elm.imgSrc}
                    width={902}
                    height={564}
                    alt="Image Description"
                  />
                </div>
                <div className="portfolio-4-intro">
                  <h4 className="portfolio-4-title">{elm.title}</h4>
                  <div className="portfolio-4-descr">{elm.descr}</div>
                </div>
              </Link>
            </div>
          </div>
        ))}
        {/* End Portfolio item */}

        {/* End Portfolio item */}
      </div>
      {/* End Portfolio Grid */}
    </div>
  );
}
