"use client";
import React, { useEffect, useState } from "react";
import { portfolios2 } from "@/data/portfolio";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const filters = [
  { name: "All works", category: "all" },
  // { name: "Branding", category: "branding" },
  // { name: "Design", category: "design" },
  // Add additional categories here if needed
];

export default function Portfolio() {
  const [currentCategory, setCurrentCategory] = useState("all");
  const [filtered, setFiltered] = useState([]);

  // Initialize filtered portfolio items after the component mounts
  useEffect(() => {
    setFiltered(portfolios2);
  }, []);

  // Filter portfolio items based on the selected category
  useEffect(() => {
    if (currentCategory === "all") {
      setFiltered(portfolios2);
    } else {
      setFiltered(
        portfolios2.filter((item) => item.categories.includes(currentCategory))
      );
    }
  }, [currentCategory]);

  return (
    <div className="container">
      <div className="row mb-90 mb-md-40">
        <div className="col-lg-7 pb-20 pb-md-0 d-flex align-items-end">
          <div className="works-filter works-filter-bold text-start text-lg-end w-100">
            {filters.map((filter, index) => (
              <a
                key={index}
                onClick={() => setCurrentCategory(filter.category)}
                className={`filter ${
                  currentCategory === filter.category ? "active" : ""
                }`}
              >
                {filter.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div id="isotope" className="mb-n100 mb-sm-n50">
        {filtered.map((item, index) => (
          <div key={index} className="portfolio-2-item mb-100 mix">
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
                    <img
                      src={item.mediaUrl}
                      alt={item.title}
                      style={{ maxWidth: "100%", maxHeight: "600px" }}
                    />
                  )}
                </div>
              </div>
              <div className="col-md-4">
                <h3 className="portfolio-2-title font-alt mb-20">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="portfolio-2-descr">{item.description}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
