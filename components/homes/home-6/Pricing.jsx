"use client";
import { pricing } from "@/data/pricing";
import Image from "next/image";
import React, { useState } from "react";

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  return (
    <div className="container">
      <div className="row mb-50 mb-sm-30">
        <div className="col-md-8 offset-md-2 text-center">
          <h2 className="section-caption-fancy mb-20 mb-xs-10">Our Pricing</h2>
          <h3 className="section-title mb-0">
            Get the power of the professional services with the simple price.
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-10 offset-xl-1">
          {/* Nav Tabs */}
          <div className="mb-60 mb-sm-40 text-center">
            <ul
              className="nav nav-tabs tpl-minimal-tabs animate"
              role="tablist"
            >
              <li
                className="nav-item"
                onClick={() => setIsYearly(true)}
                role="presentation"
              >
                <a
                  href="#tab-annual"
                  aria-controls="tab-annual"
                  className="nav-link"
                  data-bs-toggle="tab"
                  role="tab"
                  aria-selected="true"
                >
                  Annual
                </a>
              </li>
              <li
                className="nav-item"
                onClick={() => setIsYearly(false)}
                role="presentation"
              >
                <a
                  href="#tab-monthly"
                  aria-controls="tab-monthly"
                  className="nav-link  active"
                  data-bs-toggle="tab"
                  role="tab"
                  aria-selected="false"
                >
                  Monthly
                </a>
              </li>
            </ul>
            <div className="small text-gray mt-10">
              Save up to <strong>15%</strong> with Annual Plan.
            </div>
          </div>
          {/* End Nav Tabs */}
          {/* Tab panes */}
          <div className="tab-content tpl-minimal-tabs-cont position-relative wow fadeInUp">
            {/* Decoration Dots */}
            <div
              className="decoration-9 d-none d-sm-block z-index-n1"
              data-rellax-y=""
              data-rellax-speed="0.5"
              data-rellax-percentage="0.5"
            >
              <Image
                width="182"
                height="171"
                src="/assets/images/demo-fancy/decoration-7.svg"
                alt=""
              />
            </div>
            {/* End Decoration Dots */}
            {/* Decorative Waves */}
            <div
              className="decoration-10 d-none d-sm-block opacity-055 z-index-n1"
              data-rellax-y=""
              data-rellax-speed="-0.7"
              data-rellax-percentage="0.37"
            >
              <Image
                src="/assets/images/demo-fancy/decoration-6.svg"
                width={148}
                height={148}
                alt=""
              />
            </div>
            {/* End Decorative Waves */}
            <div className="tab-pane show active">
              <div className="row mt-n30">
                {/* Pricing Item */}
                {pricing.map((elm, i) => (
                  <div
                    key={i}
                    className="col-md-6 col-lg-4 mt-30 d-flex align-items-stretch"
                  >
                    <div className="pricing-item">
                      <div className="pricing-item-inner round">
                        <div className="pricing-wrap">
                          <div className="pricing-icon">
                            <Image
                              src={elm.image}
                              width={110}
                              height={110}
                              alt="Image Description"
                            />
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
                              {elm.features.map((elm, i) => (
                                <li key={i}>
                                  <i className="mi-check color-primary-1" /> 1
                                  {elm}
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
                              className="btn btn-mod btn-color btn-medium btn-round btn-hover-anim btn-full"
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
                {/* Pricing Item */}

                {/* End Pricing Item */}
              </div>
            </div>
          </div>
          {/* End Tab panes */}
        </div>
      </div>
    </div>
  );
}
