import { features5 } from "@/data/features";
import React from "react";

export default function Features() {
  return (
    <div className="row mt-n30">
      {/* Feature Item */}
      {features5.map((elm, i) => (
        <div key={i} className="col-sm-6 col-xl-3 d-flex align-items-stretch">
          <div className="alt-features-item box-shadow text-center mt-30">
            <div className="alt-features-icon mb-10 color-primary-1">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path d={elm.svgPath} />
              </svg>
            </div>
            <h4 className="alt-features-title">{elm.title}</h4>
            <div className="alt-features-descr">{elm.description}</div>
          </div>
        </div>
      ))}
      {/* End Feature Item */}

      {/* End Feature Item */}
    </div>
  );
}
