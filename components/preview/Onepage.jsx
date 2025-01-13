import React from "react";
import Image from "next/image";
import Link from "next/link";
import { allOnepagesHome } from "@/data/preview";
export default function Onepage() {
  return (
    <div className="pt-30 pt-md-0 pb-30 pb-md-0">
      <div className="container position-relative text-center">
        <h3 className="section-title-repeat mb-40 mb-sm-30">
          <span className="section-title-repeat-left" aria-hidden="true">
            One Page Demos
          </span>
          <span className="section-title-repeat-right" aria-hidden="true">
            One Page Demos
          </span>
          <span className="wow charsAnimInLong-1" data-splitting="chars">
            One Page Demos
          </span>
        </h3>
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <p className="text-gray mb-100 mb-sm-60">
              Explore a diverse selection of 10 meticulously crafted pre-built
              one page websites, each showcasing a&nbsp;unique visual style.
              Furthermore, each template comes with both light and dark
              versions.
            </p>
          </div>
        </div>
      </div>
      <div className="full-wrapper ps-lg-3 pe-lg-3">
        <div className="ps-lg-4 pe-lg-4">
          {/* Grid */}
          <ul className="works-grid work-grid-3 work-grid-gut-lg work-grid-hover-alt grid-intro-1">
            {allOnepagesHome.map((item) => (
              <li
                key={item.id}
                className={`work-item ${
                  item.isLocalScroll ? "local-scroll" : ""
                }`}
              >
                <Link
                  href={item.href}
                  target="_blank"
                  className="work-ext-link"
                >
                  <div className="work-img">
                    <div className="work-img-bg wow scalexIn" />
                    <Image
                      src={item.src}
                      width={770}
                      height={893}
                      alt={item.alt}
                      className="wow fadeIn"
                      data-wow-delay="1s"
                    />
                  </div>
                  <div className="work-intro">
                    <h3 className="work-title">{item.title}</h3>
                    <div className="work-descr">{item.descr}</div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          {/* End Grid */}
        </div>
      </div>
    </div>
  );
}
