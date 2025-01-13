import AnimatedText from "@/components/common/AnimatedText";
import React from "react";
import Image from "next/image";
export default function Banner() {
  return (
    <div className="container position-relative">
      <div className="row">
        <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
          <h2 className="section-title-medium font-alt uppercase text-center mb-10">
            <span className="wow charsAnimInLong" data-splitting="chars">
              <AnimatedText text="Established in 2019" />
            </span>
          </h2>
          <p
            className="section-title-descr font-alt text-center wow fadeInUp"
            data-wow-delay="0.1s"
          >
            We believe that things should be useful yet beautiful.
          </p>
          <Image
            src="/assets/images/demo-brutalist/section-image-2.jpg"
            width={1200}
            height={675}
            className="mt-70 mt-md-40 mt-sm-20 mb-n100 mb-md-n70 mb-sm-n50"
            alt="Image Description"
          />
        </div>
      </div>
    </div>
  );
}
