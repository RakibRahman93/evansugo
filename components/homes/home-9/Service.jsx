import { services5 } from "@/data/services";
import React from "react";

export default function Service() {
  return (
    <div className="col-lg-7 col-xl-6 offset-xl-1">
      {/* Services Grid */}
      <div className="row mt-n50 mt-sm-n40">
        {/* Services Item */}
        {services5.map((service, index) => (
          <div
            key={index}
            className="col-md-6 mt-50 mt-sm-40 wow fadeIn"
            data-wow-delay={`${service.delay}s`}
          >
            <h4 className="services-6-caption">{service.caption}</h4>
            <div className="services-6-separator" />
            <h5 className="services-6-title">{service.title}</h5>
            <p className="services-6-text mb-0">{service.text}</p>
          </div>
        ))}
        {/* End services Item */}
      </div>
      {/* Services Grid */}
    </div>
  );
}
