"use client";
import AnimatedText from "@/components/common/AnimatedText";
import { services } from "@/data/services";
import React, { useState } from "react";
import Image from "next/image";
export default function Services() {
  const [activeService, setActiveService] = useState(-1);
  return (
    <div className="mt-n30">
      {/* Services Item */}
      {services.map((elm, i) => (
        <div
          key={i}
          className="service-2-item pt-30 pt-md-20 wow fadeInUp"
          data-wow-delay="0.2s"
        >
          <div
            className={`services-2-button  ${
              activeService == i ? "active" : ""
            } `}
            onClick={() => setActiveService((pre) => (pre == i ? -1 : i))}
            role="button"
            tabIndex={0}
          >
            <div className="row">
              <div className="col-7 d-flex align-items-center">
                <h3 className="services-2-title font-alt mb-0">
                  <span className="services-2-number">{elm.number}</span>
                  {elm.title}
                </h3>
              </div>
              <div className="col-5 d-flex align-items-center">
                <div className="services-2-image">
                  <Image
                    width={434}
                    height={216}
                    src={elm.image}
                    alt="Image Description"
                  />
                </div>
              </div>
            </div>
            <div className="services-2-button-close" />
          </div>
          <div
            className={`services-2-descr ${
              activeService == i ? "js-visible" : ""
            } `}
          >
            <div className="services-2-descr-inner">
              <p>{elm.description}</p>
            </div>
          </div>
        </div>
      ))}
      {/* End Services Item */}

      {/* End Services Item */}
    </div>
  );
}
