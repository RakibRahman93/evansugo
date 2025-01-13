import { numbers } from "@/data/facts";
import React from "react";

export default function Facts() {
  return (
    <div className="container position-relative">
      {/* Numbers Grid */}
      <div className="row mt-n30 wow fadeInUp">
        {/* Numbers Item */}
        {numbers.map((number, index) => (
          <div
            key={index}
            className="col-sm-6 col-xl-3 d-flex align-items-stretch mt-30"
          >
            <div className="number-2-item">
              <div className="number-2-title">{number.title}</div>
              <div className="number-2-descr">{number.descr}</div>
            </div>
          </div>
        ))}
        {/* End Numbers Item */}
      </div>
      {/* End Numbers Grid */}
    </div>
  );
}
