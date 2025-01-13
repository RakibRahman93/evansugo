import { awards } from "@/data/awards";
import React from "react";
import Image from "next/image";
export default function Awards() {
  return (
    <div className="container">
      <h2 className="section-title-medium font-alt text-outline-cont mt-20 mb-50 mb-md-30">
        <span className="text-outline-2">Awards / Recognitions</span>
        <span className="text-outline-1">Awards / Recognitions</span>
        <span className="text-outline">Awards / Recognitions</span>
      </h2>
      <hr className="mt-0 mb-40" />
      {/* Timeline Row */}
      {awards.map((item, index) => (
        <React.Fragment key={index}>
          <div className="row">
            <div className="col-md-3 mb-sm-20">
              <h3 className="section-title-inline rotate-5">{item.month}</h3>
            </div>
            <div className="col-md-8 offset-md-1">
              <div className="row">
                <div className="col-7">
                  <h4 className="section-title-small mb-0">{item.title}</h4>
                  <div className="text-gray serif fs-5 lh-sm">
                    {item.description}
                  </div>
                </div>
                <div className="col-5 text-end">
                  <Image
                    width={362}
                    height={208}
                    src={item.imgSrc}
                    className="mt-n10 mt-xs-0 mb-n10 mb-xs-0 circle-large"
                    alt="Image Description"
                  />
                </div>
              </div>
            </div>
          </div>
          <hr className="mt-40 mb-40" />
        </React.Fragment>
      ))}
    </div>
  );
}
