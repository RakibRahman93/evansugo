"use client";
import { portfolios6 } from "@/data/portfolio";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Gallery, Item } from "react-photoswipe-gallery";
const filters = [
  { name: "All works", category: "all" },
  { name: "Branding", category: "branding" },
  { name: "Design", category: "design" },
  { name: "Development", category: "development" },
];
export default function Portfolio() {
  const [currentCategory, setCurrentCategory] = useState("all");
  const [filtered, setFiltered] = useState(portfolios6);
  useEffect(() => {
    if (currentCategory == "all") {
      setFiltered(portfolios6);
    } else {
      setFiltered(
        [...portfolios6].filter((elm) =>
          elm.categories.includes(currentCategory)
        )
      );
    }
  }, [currentCategory]);
  return (
    <>
      {/* Works Filter */}
      <div className="works-filter works-filter-fancy text-center mb-60 mb-sm-40 z-1">
        {filters.map((elm, i) => (
          <a
            onClick={() => setCurrentCategory(elm.category)}
            key={i}
            className={`filter ${
              currentCategory == elm.category ? "active" : ""
            }`}
          >
            {elm.name}
          </a>
        ))}
      </div>
      {/* End Works Filter */}
      <div className="position-relative">
        {/* Decorative Waves */}
        <div
          className="decoration-6 d-none d-sm-block opacity-055"
          data-rellax-y=""
          data-rellax-speed="-0.7"
          data-rellax-percentage="0.5"
        >
          <Image
            src="/assets/images/demo-fancy/decoration-6.svg"
            width={148}
            height={148}
            alt=""
          />
        </div>
        {/* End Decorative Waves */}
        {/* Works Grid */}
        <ul
          className="works-grid work-grid-3 work-grid-gut work-grid-fancy"
          id="work-grid"
        >
          <Gallery>
            {/* Work Item (Lightbox) */}
            {filtered.map((item, index) => (
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
      <div className="small text-gray text-center mt-60 mt-sm-40">
        Free Images by{" "}
        <a href="asylab.com" rel="noopener nofollow" target="_blank">
          asylab.com
        </a>
        ,{" "}
        <a href="ui8.net " rel="noopener nofollow" target="_blank">
          ui8.net
        </a>{" "}
        , and{" "}
        <a href="freeui.design" rel="noopener nofollow" target="_blank">
          freeui.design
        </a>
        .
      </div>
    </>
  );
}
