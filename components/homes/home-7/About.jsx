import React from "react";
import Image from "next/image";
export default function About() {
  return (
    <>
      <div className="container position-relative">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 text-center">
            <div className="wow fadeInUp">
              <h2 className="section-caption-gradient mb-20 mb-xs-10">
                About Studio
              </h2>
              <div className="section-line-gradient mx-auto mb-20" />
              <h3 className="section-title mb-40 mb-sm-30">
                The best way to create stanning layouts for your website.
              </h3>
            </div>
            <div className="row text-start text-gray mb-80 mb-sm-60">
              <div
                className="col-md-6 mb-sm-20 wow linesAnimInLong"
                data-splitting="lines"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                maximus ligula semper metus pellentesque mattis. Maecenas
                volutpat, diam enim sagittis quam, id porta quam. Sed id dolor
                consectetur fermentum nibh volutpat.
              </div>
              <div
                className="col-md-6 wow linesAnimInLong"
                data-splitting="lines"
              >
                Etiam sit amet fringilla lacus. Pellentesque suscipit ante
                ullamcorper pulvinar neque porttitor integer lectus. Praesent
                sed nisi eleifend, fermentum orcilorem amet, iaculis libero
                lorem. Donec vel ultricies purus lorem ipsum sit amet.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Images Composition */}
      <div className="possition-relaive">
        {/* Decorative Line */}
        <div className="bg-line-1 z-index-1">
          <Image
            src="/assets/images/demo-gradient/decoration-2.png"
            width={1920}
            height={616}
            alt=""
          />
        </div>
        {/* End Decorative Line */}
        <div className="container position-relative">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="composition-7">
                <div className="composition-7-image-1">
                  <div className="composition-7-border" />
                  <div className="composition-7-inner">
                    <Image
                      src="/assets/images/demo-gradient/section-image-1.jpg"
                      alt="Image Description"
                      width={238}
                      height={296}
                    />
                  </div>
                </div>
                <div className="composition-7-image-2">
                  <div className="composition-7-border" />
                  <div className="composition-7-inner">
                    <Image
                      src="/assets/images/demo-gradient/section-image-2.jpg"
                      alt="Image Description"
                      width={398}
                      height={482}
                    />
                  </div>
                </div>
                <div className="composition-7-image-3">
                  <div className="composition-7-border" />
                  <div className="composition-7-inner">
                    <Image
                      src="/assets/images/demo-gradient/section-image-3.jpg"
                      alt="Image Description"
                      width={460}
                      height={308}
                    />
                  </div>
                </div>
                <div className="composition-7-image-4">
                  <div className="composition-7-border" />
                  <div className="composition-7-inner">
                    <Image
                      src="/assets/images/demo-gradient/section-image-4.jpg"
                      alt="Image Description"
                      width={368}
                      height={456}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
