import { services2 } from "@/data/services";
import React from "react";
const ServiceItem = ({
  iconColorClass,
  path,
  title,
  text,
  categories,
  delay,
}) => (
  <div className="col-md-6 col-xl-3 d-flex">
    <div
      className="services-8-item p-4 p-sm-5 wow fadeIn"
      data-wow-duration="1.2s"
      data-wow-delay={delay}
    >
      <div className={`services-8-icon ${iconColorClass}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d={path} />
        </svg>
      </div>
      <h3 className="services-8-title">{title}</h3>
      <p className="services-8-text">{text}</p>
      {categories.map((category, index) => (
        <div key={index} className="pb-1">
          <div className="services-8-category">{category}</div>
        </div>
      ))}
    </div>
  </div>
);
export default function Service() {
  return (
    <>
      <>
        {/* Services Grid */}
        <div className="row g-0 mb-70 mb-sm-50">
          {/* Services Item */}
          {services2.map((service) => (
            <ServiceItem key={service.id} {...service} />
          ))}
          {/* End Services Item */}
        </div>
      </>
    </>
  );
}
