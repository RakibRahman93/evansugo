"use client";

import { portfolios9 } from "@/data/portfolio";
import Image from "next/image";
import Link from "next/link";
import { Gallery, Item } from "react-photoswipe-gallery";

export default function RelatedProject2() {
  return (
    <div className="container relative">
      <div className="text-center mb-60 mb-sm-40 position-relative z-index-1">
        <h2 className="section-title-small">Related Projects</h2>
      </div>
      {/* Works Grid */}
      <ul className="works-grid work-grid-3 work-grid-gut-xl work-grid-hover-alt work-grid-round">
        {/* Work Item (External Page) */}
        <Gallery>
          {/* Work Item (Lightbox) */}
          {portfolios9.slice(1, 4).map((item, index) => (
            <li key={index} className={`work-item mix`}>
              {item.isLightbox ? (
                <Item
                  original={item.imgSrc}
                  thumbnail={item.imgSrc}
                  width={520}
                  height={618}
                >
                  {({ ref, open }) => (
                    <a
                      onClick={open}
                      className={"work-lightbox-link mfp-image"}
                    >
                      <div className="work-img">
                        <div className="work-img-bg wow-p scalexIn" />
                        <Image
                          ref={ref}
                          src={item.imgSrc}
                          width={520}
                          height={618}
                          alt={item.imgAlt}
                          className="wow-p fadeIn"
                          data-wow-delay="1s"
                        />
                      </div>
                      <div className="work-intro">
                        <h3 className="work-title">{item.title}</h3>
                        <div className="work-descr">{item.description}</div>
                      </div>
                    </a>
                  )}
                </Item>
              ) : (
                <Link
                  href={`/slick-portfolio-single/${item.id}`}
                  className={"work-ext-link"}
                >
                  <div className="work-img">
                    <div className="work-img-bg wow-p scalexIn" />
                    <Image
                      src={item.imgSrc}
                      width={520}
                      height={618}
                      alt={item.imgAlt}
                      className="wow-p fadeIn"
                      data-wow-delay="1s"
                    />
                  </div>
                  <div className="work-intro">
                    <h3 className="work-title">{item.title}</h3>
                    <div className="work-descr">{item.description}</div>
                  </div>
                </Link>
              )}
            </li>
          ))}{" "}
        </Gallery>
        {/* End Work Item */}
      </ul>
      {/* End Works Grid */}
    </div>
  );
}
