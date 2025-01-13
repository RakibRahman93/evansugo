"use client";

import { portfolios5 } from "@/data/portfolio";
import Image from "next/image";
import Link from "next/link";
import { Gallery, Item } from "react-photoswipe-gallery";

export default function RelatedProjects6() {
  return (
    <div className="container relative">
      <div className="text-center mb-60 mb-sm-40">
        <h2 className="section-title-small">Related Projects</h2>
      </div>
      {/* Works Grid */}
      <ul
        className="works-grid work-grid-4 work-grid-gut-sm hide-titles"
        id="work-grid"
      >
        {/* Work Item (External Page) */}
        <Gallery>
          {/* Work Item (Lightbox) */}
          {portfolios5.slice(1, 5).map((item, index) => (
            <li
              key={index}
              className={`work-item mix ${item.categories.join(" ")}`}
            >
              {item.type === "Lightbox" ? (
                <Item
                  original={item.imageSrc}
                  thumbnail={item.imageSrc}
                  width={650}
                  height={773}
                >
                  {({ ref, open }) => (
                    <a onClick={open} className="work-lightbox-link mfp-image">
                      <div className="work-img">
                        <div className="work-img-bg wow-p scalexIn" />

                        <Image
                          src={item.imageSrc}
                          ref={ref}
                          width={650}
                          height={761}
                          alt="Work Description"
                        />
                      </div>
                      <div className="work-intro">
                        <h3 className="work-title">{item.title}</h3>
                        <div className="work-descr">{item.type}</div>
                      </div>
                    </a>
                  )}
                </Item>
              ) : (
                <Link
                  href={`/elegant-portfolio-single/${item.id}`}
                  className="work-ext-link"
                >
                  <div className="work-img">
                    <div className="work-img-bg" />
                    <Image
                      src={item.imageSrc}
                      width={650}
                      height={761}
                      alt="Work Description"
                    />
                  </div>
                  <div className="work-intro">
                    <h3 className="work-title">{item.title}</h3>
                    <div className="work-descr">{item.type}</div>
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
