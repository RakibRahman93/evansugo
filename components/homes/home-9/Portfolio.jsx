"use client";

import { portfolios9 } from "@/data/portfolio";
import { useEffect, useRef, useState } from "react";
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
  const isotopContainer = useRef();
  const isotope = useRef();
  const initIsotop = async () => {
    const Isotope = (await import("isotope-layout")).default;
    const imagesloaded = (await import("imagesloaded")).default;

    // Initialize Isotope in the mounted hook
    isotope.current = new Isotope(isotopContainer.current, {
      itemSelector: ".work-item",
      layoutMode: "masonry", // or 'fitRows', depending on your layout needs
    });
    imagesloaded(isotopContainer.current).on("progress", function () {
      // Trigger Isotope layout
      isotope.current.layout();
    });
  };
  const updateCategory = (val) => {
    setCurrentCategory(val);
    isotope.current.arrange({
      filter: val == "all" ? "*" : "." + val,
    });
    //   isotope.value.layout();
  };
  useEffect(() => {
    /////////////////////////////////////////////////////
    // Magnate Animation

    initIsotop();
  }, []);
  return (
    <>
      {/* End Background Shape */}
      {/* Works Filter */}
      <div className="text-center mb-60 mb-sm-40">
        <div className="works-filter works-filter-slick">
          {filters.map((elm, i) => (
            <a
              onClick={() => updateCategory(elm.category)}
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
      {/* End Works Filter */}
      {/* Works Grid */}
      <ul
        className="works-grid work-grid-3 work-grid-gut-xl work-grid-hover-alt work-grid-round masonry"
        ref={isotopContainer}
      >
        <Gallery>
          {/* Work Item (Lightbox) */}
          {portfolios9.map((item, index) => (
            <li
              key={index}
              className={`work-item ${item.categories.join(" ")} ${
                index == 1 ? "mt-80 mt-sm-0" : ""
              }`}
            >
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
    </>
  );
}
