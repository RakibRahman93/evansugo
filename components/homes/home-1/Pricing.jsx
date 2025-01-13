"use client";
import { pricing2 } from "@/data/pricing";

import Image from "next/image";
import React, { useState } from "react";

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  return (
    <>
      {/* Nav Tabs */}
      <div className="mb-60 mb-sm-40 text-center">
        <ul className="nav nav-tabs tpl-minimal-tabs animate" role="tablist">
          <li
            onClick={() => setIsYearly(true)}
            className="nav-item"
            role="presentation"
          >
            <a className={`nav-link ${isYearly ? "active" : ""} `}>Annual</a>
          </li>
          <li
            onClick={() => setIsYearly(false)}
            className="nav-item"
            role="presentation"
          >
            <a className={`nav-link ${!isYearly ? "active" : ""} `}>Monthly</a>
          </li>
        </ul>
        <div className="small text-gray mt-10">
          Save up to <strong>15%</strong> with Annual Plan.
        </div>
      </div>
      {/* End Nav Tabs */}
      {/* Tab panes */}
      <div className="tab-content tpl-minimal-tabs-cont position-relative">
        {/* Decorative Waves */}
        <div
          className="decoration-10 d-none d-sm-block z-index-n1"
          data-rellax-y=""
          data-rellax-speed="-0.7"
          data-rellax-percentage="0.37"
        >
          <Image
            src="/assets/images/decoration-3.svg"
            className="svg-shape"
            width={148}
            height={148}
            alt=""
          />
        </div>
        {/* End Decorative Waves */}
        <div className="tab-pane show active" id="tab-annual" role="tabpanel">
          <div className="row mt-n30">
            {/* Pricing Item */}
            {pricing2.map((elm, i) => (
              <div
                key={i}
                className="col-md-6 col-lg-4 mt-30 d-flex align-items-stretch"
              >
                <div className="pricing-item">
                  <div className="pricing-item-inner round">
                    <div className="pricing-wrap">
                      <div className="pricing-icon mb-0">
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          width={elm.width}
                          height={elm.height}
                          viewBox={`0 0 ${elm.width} ${elm.height}`}
                          aria-hidden="true"
                        >
                          <path d={elm.svgPath} />
                        </svg>
                      </div>
                      <h4 className="pricing-title">{elm.title}</h4>
                      <div className="pricing-num">
                        <sup>$</sup>
                        {isYearly
                          ? Math.round((elm.price * 12 * 75) / 100)
                          : elm.price}
                      </div>
                      <div className="pr-per">
                        {isYearly ? "per year" : "per month"}
                      </div>
                      <div className="pricing-features">
                        <ul className="pr-list">
                          {elm.features?.map((elm, i) => (
                            <li key={i}>
                              <i className="mi-check" /> {elm}
                            </li>
                          ))}
                          {elm.disabledFeatures?.map((elm, i) => (
                            <li key={i} className="opacity-055">
                              <i className="mi-close" /> {elm}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-auto local-scroll">
                        <a
                          href="#"
                          className="btn btn-mod btn-medium btn-white btn-round btn-hover-anim btn-full"
                        >
                          <span>Buy {elm.title}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* End Pricing Item */}

            {/* End Pricing Item */}
          </div>
        </div>
      </div>
      {/* End Tab panes */}
    </>
  );
}
