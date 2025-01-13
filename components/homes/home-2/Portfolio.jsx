"use client";
import React, { useEffect, useState } from "react";
import { portfolios2 } from "@/data/portfolio";
import Image from "next/image";
import Link from "next/link";
import ReactPlayer from "react-player";

const filters = [
  { name: "All works", category: "all" },
  { name: "Branding", category: "branding" },
  { name: "Design", category: "design" },
  { name: "Development", category: "development" },
];

export default function Portfolio({ desc }) {
  const [currentCategory, setCurrentCategory] = useState("all");
  const [filtered, setFiltered] = useState(portfolios2);

  useEffect(() => {
    if (currentCategory === "all") {
      setFiltered(portfolios2);
    } else {
      setFiltered(
        portfolios2.filter((elm) =>
          elm.categories.includes(currentCategory)
        )
      );
    }
  }, [currentCategory]);

  return (
    <div className="container">
      <div className="row mb-90 mb-md-40">
        <div className="col-lg-7 pb-20 pb-md-0 d-flex align-items-end">
          <div className="works-filter works-filter-bold text-start text-lg-end w-100">
            {filters.map((elm, i) => (
              <a
                onClick={() => setCurrentCategory(elm.category)}
                key={i}
                className={`filter ${
                  currentCategory === elm.category ? "active" : ""
                }`}
              >
                {elm.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div id="isotope" className="mb-n100 mb-sm-n50">
        {filtered.map((item, index) => (
          <div key={index} className={`portfolio-2-item mb-100 mix`}>
            <div className="row">
              <div className="col-md-8 mb-sm-30">
                <div className="portfolio-2-media">
                  {item.mediaType === "video" ? (
                    <ReactPlayer
                      url={item.mediaUrl}
                      width="100%"
                      height="100%"
                      controls
                      style={{ aspectRatio: "16/9" }}
                    />
                  ) : (
                    <video
                      src={item.mediaUrl}
                      width="100%"
                      height="auto"
                      controls
                      style={{ maxHeight: "600px" }}
                    />
                  )}
                </div>
              </div>
              <div className="col-md-4">
                <h3 className="portfolio-2-title font-alt mb-20">
                  <Link href={`/bold-portfolio-single/${item.id}`}>
                    {item.title}
                  </Link>
                </h3>
                <p className="portfolio-2-descr">{item.description}</p>
                <Link
                  href={`/bold-portfolio-single/${item.id}`}
                  className="link-hover-anim underline align-middle"
                >
                  View Project
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
