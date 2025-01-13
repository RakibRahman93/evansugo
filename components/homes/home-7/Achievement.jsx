import { numberItems3 } from "@/data/facts";
import React from "react";

export default function Achievement() {
  return (
    <div className="col-lg-7 offset-lg-1">
      <div className="row mb-n50 mb-xs-n30">
        {/* Number Item */}
        {numberItems3.map((item, index) => (
          <div
            key={index}
            className={`col-sm-6 col-lg-5 mb-50 mb-xs-30 wow fadeScaleIn ${item.offset}`}
            data-wow-delay={`${0.4 + index * 0.2}s`}
          >
            <div className="number-title mb-10">{item.number}</div>
            <div className="number-descr">{item.descr}</div>
          </div>
        ))}
        {/* End Number Item */}
      </div>
    </div>
  );
}
