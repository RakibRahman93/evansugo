"use client";
import { portfolios7 } from "@/data/portfolio";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Gallery, Item } from "react-photoswipe-gallery";
import Link from "next/link";
const filters = [
  { name: "All works", category: "all" },
  { name: "Branding", category: "branding" },
  { name: "Design", category: "design" },
  { name: "Development", category: "development" },
];
export default function Portfolio() {
  const [currentCategory, setCurrentCategory] = useState("all");
  const [filtered, setFiltered] = useState(portfolios7);
  useEffect(() => {
    if (currentCategory == "all") {
      setFiltered(portfolios7);
    } else {
      setFiltered(
        [...portfolios7].filter((elm) =>
          elm.categories.includes(currentCategory)
        )
      );
    }
  }, [currentCategory]);
  return (
    <>
      <div className="container position-relative">
        <div className="text-center mb-60 mb-sm-40">
          <div className="works-filter works-filter-gradient">
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
        </div>
      </div>
      <div className="full-wrapper ps-lg-3 pe-lg-3">
        <div className="ps-lg-4 pe-lg-4">
          {/* Works Grid */}
          <ul
            className="works-grid work-grid-3 work-grid-gut-lg work-grid-hover-alt work-grid-round masonry"
            id="work-grid"
          >
            <Gallery>
              {/* Work Item (Lightbox) */}
              {filtered.map((item, index) => (
                <li
                  key={index}
                  className={`work-item mix ${item.categories.join(" ")}`}
                >
                  {" "}
                  {item.description == "Lightbox" ? (
                    <>
                      <a className="work-lightbox-link mfp-image">
                        <Item
                          original={item.imgSrc}
                          thumbnail={item.imgSrc}
                          width={698}
                          height={508}
                        >
                          {({ ref, open }) => (
                            <div onClick={open} className="work-img">
                              <div className="work-img-bg " />
                              <Image
                                ref={ref}
                                src={item.imgSrc}
                                width={698}
                                height={508}
                                alt="Work Description"
                                data-wow-delay={item.dataWowDelay}
                              />
                            </div>
                          )}
                        </Item>
                        <div className="work-intro">
                          <h3 className="work-title">{item.title}</h3>
                          <div className="work-descr">{item.description}</div>
                        </div>
                      </a>{" "}
                    </>
                  ) : (
                    <>
                      <Link
                        href={`/gradient-portfolio-single/${item.id}`}
                        className="work-ext-link"
                      >
                        <div className="work-img">
                          <div className="work-img-bg " />
                          <Image
                            src={item.imgSrc}
                            width={698}
                            height={508}
                            alt="Work Description"
                            data-wow-delay={item.dataWowDelay}
                          />
                        </div>
                        <div className="work-intro">
                          <h3 className="work-title">{item.title}</h3>
                          <div className="work-descr">{item.description}</div>
                        </div>
                      </Link>
                    </>
                  )}
                </li>
              ))}{" "}
            </Gallery>
            {/* End Work Item */}
          </ul>
          {/* End Works Grid */}
        </div>
      </div>
    </>
  );
}
