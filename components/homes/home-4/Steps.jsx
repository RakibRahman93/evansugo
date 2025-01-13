import { stepsItems } from "@/data/steps";
import React from "react";

export default function Steps() {
  return (
    <div className="container position-relative">
      <div className="row">
        <div className="col-md-10 offset-md-1 col-lg-6 offset-lg-3">
          <h2 className="section-title mb-70 mb-sm-50 text-center">
            Three Simple Steps to Succeed at Investing
          </h2>
          {/* Steps Grid */}
          <div className="mb-n20">
            {/* Steps Item */}
            {stepsItems.map((item, index) => (
              <div
                key={index}
                className="steps-2-item d-block d-sm-flex mb-20 light-content-2"
              >
                <div className="steps-2-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d={item.iconPath} />
                  </svg>
                </div>
                <div className="steps-2-intro pb-xs-30">
                  <h3 className="steps-2-title">{item.title}</h3>
                  <p className="steps-2-text mb-0">{item.description}</p>
                </div>
                <div className="steps-2-number">{item.number}</div>
              </div>
            ))}
            {/* End Steps Item */}
          </div>
          {/* End Steps Grid */}
        </div>
      </div>
    </div>
  );
}
