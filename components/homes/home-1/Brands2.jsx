import React from "react";
import Image from "next/image";
export default function Brands2() {
  return (
    <div className="container position-relative">
      <div className="row">
        <div className="col-md-8 offset-md-2 text-center">
          <h2 className="section-title-tiny mb-30">
            Trusted by Leading Companies
          </h2>

          <div className="logo-grid">
            <Image
              className="logo-grid-img"
              src="/assets/images/clients-logos/logo-grid/logo-1-white.png"
              width="110"
              height="33"
              alt="Image description is here"
            />
            <Image
              className="logo-grid-img"
              src="/assets/images/clients-logos/logo-grid/logo-2-white.png"
              width="119"
              height="33"
              alt="Image description is here"
            />
            <Image
              className="logo-grid-img"
              src="/assets/images/clients-logos/logo-grid/logo-3-white.png"
              width="79"
              height="33"
              alt="Image description is here"
            />
            <Image
              className="logo-grid-img"
              src="/assets/images/clients-logos/logo-grid/logo-4-white.png"
              width="122"
              height="33"
              alt="Image description is here"
            />
            <Image
              className="logo-grid-img"
              src="/assets/images/clients-logos/logo-grid/logo-5-white.png"
              width="100"
              height="33"
              alt="Image description is here"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
