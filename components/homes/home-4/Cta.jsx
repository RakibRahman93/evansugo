import { clients } from "@/data/brands";
import React from "react";
import Image from "next/image";
export default function Cta() {
  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <h2 className="section-title-tiny opacity-09 mb-30">
            Trusted by leading companies
          </h2>
          <div className="logo-grid">
            {clients.map((logo) => (
              <Image
                key={logo.id}
                className="logo-grid-img"
                src={logo.src}
                width={logo.width}
                height={logo.height}
                alt={logo.alt}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
