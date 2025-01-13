"use client";
import { portfolios5 } from "@/data/portfolio";
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
  const [filtered, setFiltered] = useState(portfolios5);
  useEffect(() => {
    if (currentCategory == "all") {
      setFiltered(portfolios5);
    } else {
      setFiltered(
        [...portfolios5].filter((elm) =>
          elm.categories.includes(currentCategory)
        )
      );
    }
  }, [currentCategory]);
  return (
    <>
      <div className="container">
        {/* Works Filter */}
        <div className="works-filter works-filter-elegant text-center mb-50">
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
      </div>
      <div className="position-relative">
        {/* Works Grid */}
        <ul
          className="works-grid work-grid-4 work-grid-gut-sm hide-titles"
          id="work-grid"
        >
          <Gallery>
            {/* Work Item (Lightbox) */}
            {filtered.map((item, index) => (
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
                      <a
                        onClick={open}
                        className="work-lightbox-link mfp-image"
                      >
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
    </>
  );
}
