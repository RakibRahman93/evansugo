import React from "react";
import Image from "next/image";
export default function About() {
  return (
    <div className="row">
      <div className="col-sm-4 mb-xs-50">
        <div className="me-xl-4 pe-sm-2">
          <div className="composition-1">
            <div className="composition-1-image-1">
              <Image
                src="/assets/images/demo-fancy/section-image-1.jpg"
                width={480}
                height={358}
                alt="Image Description"
              />
            </div>
            <div className="composition-1-image-2">
              <Image
                src="/assets/images/demo-fancy/section-image-2.jpg"
                width={440}
                height={330}
                alt="Image Description"
              />
            </div>
            <div
              className="composition-1-decoration-1"
              data-rellax-y=""
              data-rellax-speed="-0.5"
              data-rellax-percentage="0.65"
            >
              <Image
                src="/assets/images/demo-fancy/decoration-1.svg"
                width={159}
                height={74}
                alt=""
              />
            </div>
            <div
              className="composition-1-decoration-2"
              data-rellax-y=""
              data-rellax-speed="0.5"
              data-rellax-percentage="0.2"
            >
              <Image
                src="/assets/images/demo-fancy/decoration-2.svg"
                width={102}
                height={113}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-4 mb-xs-50">
        <div className="ms-xl-5 ps-sm-2 me-xl-4 pe-sm-2 pe-xl-3">
          <div className="composition-2">
            <div className="composition-2-image-1 mt-xs-0">
              <Image
                src="/assets/images/demo-fancy/section-image-3.jpg"
                width={372}
                height={500}
                alt="Image Description"
              />
            </div>
            <div className="composition-2-image-2">
              <Image
                src="/assets/images/demo-fancy/section-image-4.jpg"
                alt="Image Description"
                width={440}
                height={330}
              />
            </div>
            <div
              className="composition-2-decoration"
              data-rellax-y=""
              data-rellax-speed="0.5"
              data-rellax-percentage="0.2"
            >
              <Image
                src="/assets/images/demo-fancy/decoration-3.svg"
                width={102}
                height={97}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="ms-xl-4 ps-sm-2">
          <div className="composition-3">
            <div className="composition-3-image-1">
              <Image
                src="/assets/images/demo-fancy/section-image-6.jpg"
                width={500}
                height={372}
                alt="Image Description"
              />
            </div>
            <div className="composition-3-image-2">
              <Image
                src="/assets/images/demo-fancy/section-image-5.jpg"
                width={440}
                height={330}
                alt="Image Description"
              />
            </div>
            <div
              className="composition-3-decoration-1"
              data-rellax-y=""
              data-rellax-speed="0.5"
              data-rellax-percentage="0.7"
            >
              <Image
                src="/assets/images/demo-fancy/decoration-4.svg"
                width={108}
                height={106}
                alt=""
              />
            </div>
            <div
              className="composition-3-decoration-2"
              data-rellax-y=""
              data-rellax-speed="-0.5"
              data-rellax-percentage="0.5"
            >
              <Image
                src="/assets/images/demo-fancy/decoration-5.svg"
                width={148}
                height={148}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
