"use client";

import { portfolios6 } from "@/data/portfolio";
import Image from "next/image";
import Link from "next/link";
import { Gallery, Item } from "react-photoswipe-gallery";

export default function RelatedProjects5() {
  return (
    <div className="container relative">
      <div className="text-center mb-60 mb-sm-40">
        <h2 className="section-title-small">Related Projects</h2>
      </div>
      {/* Works Grid */}
      <ul className="works-grid work-grid-3 work-grid-gut work-grid-fancy">
        {/* Work Item (External Page) */}
        <Gallery>
          {/* Work Item (Lightbox) */}
          {portfolios6.slice(1, 4).map((item, index) => (
            <li
              key={index}
              className={`work-item mix ${item.categories.join(" ")}`}
            >
              <div>
                {item.lightbox ? (
                  <Item
                    original={item.imgSrc}
                    thumbnail={item.imgSrc}
                    width={746}
                    height={524}
                  >
                    {({ ref, open }) => (
                      <a
                        onClick={open}
                        className={"work-lightbox-link mfp-image"}
                      >
                        <div className="work-img">
                          <Image
                            ref={ref}
                            src={item.imgSrc}
                            width={746}
                            height={524}
                            alt="Work Description"
                          />
                        </div>
                        <div className="work-intro text-start">
                          <h3 className="work-title">{item.title}</h3>
                          <div className="work-descr">{item.description}</div>
                        </div>
                      </a>
                    )}
                  </Item>
                ) : (
                  <Link
                    href={`/fancy-portfolio-single/${item.id}`}
                    className={"work-ext-link"}
                  >
                    <div className="work-img">
                      <Image
                        src={item.imgSrc}
                        width={746}
                        height={524}
                        alt="Work Description"
                      />
                    </div>
                    <div className="work-intro text-start">
                      <h3 className="work-title">{item.title}</h3>
                      <div className="work-descr">{item.description}</div>
                    </div>
                  </Link>
                )}
              </div>
            </li>
          ))}
        </Gallery>
        {/* End Work Item */}
      </ul>
      {/* End Works Grid */}
    </div>
  );
}
