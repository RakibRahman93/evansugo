import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  homeMultipages,
  homeOnepages,
  homeOnepagesDark,
  homesMultipagesDark,
} from "@/data/preview";
export default function Intro() {
  return (
    <div className="pt-30 pt-md-0 pb-30 pb-md-0">
      <div className="container position-relative text-center">
        <h3 className="section-title-repeat mb-40 mb-sm-30">
          <span className="section-title-repeat-left" aria-hidden="true">
            Intro Sections
          </span>
          <span className="section-title-repeat-right" aria-hidden="true">
            Intro Sections
          </span>
          <span className="wow charsAnimInLong-1" data-splitting="chars">
            Intro Sections
          </span>
        </h3>
      </div>
      {/* Nav Tabs */}
      <div className="text-center mb-100 mb-sm-60">
        <ul className="nav nav-tabs tpl-minimal-tabs animate" role="tablist">
          <li className="nav-item" role="presentation">
            <a
              href="#i-s-multi-page"
              aria-controls="i-s-multi-page"
              className="nav-link active"
              data-bs-toggle="tab"
              role="tab"
              aria-selected="true"
            >
              Multi Page
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              href="#i-s-one-page"
              aria-controls="i-s-one-page"
              className="nav-link"
              data-bs-toggle="tab"
              role="tab"
              aria-selected="false"
            >
              One Page
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              href="#i-s-multi-page-dark"
              aria-controls="i-s-multi-page-dark"
              className="nav-link"
              data-bs-toggle="tab"
              role="tab"
              aria-selected="false"
            >
              Multi Page Dark
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              href="#i-s-one-page-dark"
              aria-controls="i-s-one-page-dark"
              className="nav-link"
              data-bs-toggle="tab"
              role="tab"
              aria-selected="false"
            >
              One Page Dark
            </a>
          </li>
        </ul>
      </div>
      {/* End Nav Tabs */}
      {/* Tab panes */}
      <div className="tab-content tpl-minimal-tabs-cont text-center">
        <div
          className="tab-pane fade show active"
          id="i-s-multi-page"
          role="tabpanel"
        >
          <div className="full-wrapper ps-lg-3 pe-lg-3">
            <div className="ps-lg-4 pe-lg-4">
              {/* Grid */}
              <ul className="works-grid work-grid-gut-lg work-grid-hover-alt grid-intro-2">
                {homeMultipages.map((item, index) => (
                  <li key={index} className="work-item">
                    <Link
                      href={item.href}
                      target="_blank"
                      className="work-ext-link"
                    >
                      <div className="work-img">
                        <Image
                          src={item.imgSrc}
                          width={650}
                          height={375}
                          alt={item.imgAlt}
                        />
                      </div>
                      <div className="work-intro">
                        <h3 className="work-title">{item.title}</h3>
                        <div className="work-descr">{item.descr}</div>
                      </div>
                    </Link>
                  </li>
                ))}
                {/* End Item */}
              </ul>
              {/* End Grid */}
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="i-s-one-page" role="tabpanel">
          <div className="full-wrapper ps-lg-3 pe-lg-3">
            <div className="ps-lg-4 pe-lg-4">
              {/* Grid */}
              <ul className="works-grid work-grid-gut-lg work-grid-hover-alt">
                {homeOnepages.map((item, index) => (
                  <li key={index} className="work-item">
                    <Link href={item.href} className="work-image">
                      <Image
                        className="img-responsive"
                        src={item.imgSrc}
                        width={480}
                        height={650}
                        alt={item.imgAlt}
                      />
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
        <div className="tab-pane fade" id="i-s-multi-page-dark" role="tabpanel">
          <div className="full-wrapper ps-lg-3 pe-lg-3">
            <div className="ps-lg-4 pe-lg-4">
              {/* Grid */}
              <ul className="works-grid work-grid-gut-lg work-grid-hover-alt grid-intro-2">
                {homesMultipagesDark.map((work, index) => (
                  <li key={index} className="work-item">
                    <Link href={work.href}>
                      <Image
                        src={work.imgSrc}
                        alt={work.imgAlt}
                        width={300}
                        height={200}
                      />
                      <div className="work-item-details">
                        <h3>{work.title}</h3>
                        <p>{work.descr}</p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
              {/* End Grid */}
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="i-s-one-page-dark" role="tabpanel">
          <div className="full-wrapper ps-lg-3 pe-lg-3">
            <div className="ps-lg-4 pe-lg-4">
              {/* Grid */}
              <ul className="works-grid work-grid-gut-lg work-grid-hover-alt grid-intro-2">
                {homeOnepagesDark.map((work, index) => (
                  <li key={index} className="work-item">
                    <Link href={work.href}>
                      <Image
                        src={work.imgSrc}
                        alt={work.imgAlt}
                        width={300}
                        height={200}
                      />
                      <div className="work-item-details">
                        <h3>{work.title}</h3>
                        <p>{work.descr}</p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
              {/* End Grid */}
            </div>
          </div>
        </div>
      </div>
      {/* End Tab panes */}
    </div>
  );
}
