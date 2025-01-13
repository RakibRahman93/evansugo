import React from "react";
import Image from "next/image";
export default function Hero4({ dark }) {
  return (
    <>
      <div className="container" />
      <div className="row g-0">
        <div className="col-lg-6">
          <div
            className={`split-column-right rounded-0 ${
              dark ? "light-content" : ""
            } position-relative d-flex align-items-center`}
          >
            <div className="w-100 text-center text-lg-start">
              <h1 className="hs-title-9 mb-40 mb-sm-20 wow fadeInUp">
                Global Marketing Consulting Agency
              </h1>
              <p
                className="hs-descr mb-50 mb-sm-40 wow fadeInUp"
                data-wow-delay="0.15s"
              >
                We’re a global marketing company delivering innovative solutions
                to our clients.
              </p>
              <div
                className="wow fadeInUp wch-unset"
                data-wow-delay="0.3s"
                data-wow-offset={0}
              >
                <div className="local-scroll mb-60 mb-sm-50">
                  <a
                    href="#contact"
                    className="btn btn-mod btn-color btn-large btn-round btn-hover-anim"
                  >
                    <span>Get a Consultation</span>
                  </a>
                </div>
                {/* Features List */}
                <div className="mt-n10">
                  {/* Features List Item */}
                  <div className="d-flex justify-content-center justify-content-lg-start mt-10">
                    <div
                      className={`features-list-icon ${
                        dark ? "features-list-color-1" : ""
                      }`}
                    >
                      <i className="mi-check" />
                    </div>
                    <div className="features-list-text">
                      No credit card required
                    </div>
                  </div>
                  {/* End Features List Item */}
                  {/* Features List Item */}
                  <div className="d-flex justify-content-center justify-content-lg-start mt-10">
                    <div
                      className={`features-list-icon ${
                        dark ? "features-list-color-1" : ""
                      }`}
                    >
                      <i className="mi-check" />
                    </div>
                    <div className="features-list-text">
                      Free 30 minute consultation
                    </div>
                  </div>
                  {/* End Features List Item */}
                  {/* Features List Item */}
                  <div className="d-flex justify-content-center justify-content-lg-start mt-10">
                    <div
                      className={`features-list-icon ${
                        dark ? "features-list-color-1" : ""
                      }`}
                    >
                      <i className="mi-check" />
                    </div>
                    <div className="features-list-text">
                      Free marketing report
                    </div>
                  </div>
                  {/* End Features List Item */}
                </div>
                {/* End Features List */}
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 d-flex align-items-stretch order-lg-first">
          <div className="split-image-left rounded-0 pb-xs-70">
            <Image
              src="/assets/images/demo-corporate/hs-image-1.jpg"
              width={960}
              height={1080}
              alt="Image Description"
              className="wow fadeScaleOutIn"
              data-wow-duration="1.3s"
            />
            {/* Services Buttons */}
            <div
              className="local-scroll container position-absolute bottom-0 start-0 pb-30 pb-xs-0 wow fadeIn animated"
              data-wow-duration="1.3s"
              data-wow-offset={0}
              style={{
                visibility: "visible",
                animationDuration: "1.3s",
                animationName: "fadeIn",
              }}
            >
              <div className="mt-10">
                <a
                  href="#services"
                  className={`btn btn-mod ${
                    dark ? "btn-dark" : "btn-w"
                  }  btn-with-icon btn-circle`}
                >
                  <span className="btn-icon color-3">
                    <i className="mi-user" aria-hidden="true" />
                  </span>
                  <span data-btn-animate="y">
                    <span className="btn-animate-y">
                      <span className="btn-animate-y-1">
                        Marketing Consulting
                      </span>
                      <span className="btn-animate-y-2" aria-hidden="true">
                        Marketing Consulting
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="mt-10">
                <a
                  href="#services"
                  className={`btn btn-mod ${
                    dark ? "btn-dark" : "btn-w"
                  }  btn-with-icon btn-circle`}
                >
                  <span className="btn-icon color-2">
                    <i className="mi-search" aria-hidden="true" />
                  </span>
                  <span data-btn-animate="y">
                    <span className="btn-animate-y">
                      <span className="btn-animate-y-1">
                        Search Engine Optimization
                      </span>
                      <span className="btn-animate-y-2" aria-hidden="true">
                        Search Engine Optimization
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="mt-10">
                <a
                  href="#services"
                  className={`btn btn-mod ${
                    dark ? "btn-dark" : "btn-w"
                  }  btn-with-icon btn-circle`}
                >
                  <span className="btn-icon color-4">
                    <i className="mi-message" aria-hidden="true" />
                  </span>
                  <span data-btn-animate="y">
                    <span className="btn-animate-y">
                      <span className="btn-animate-y-1">
                        Social Media Marketing
                      </span>
                      <span className="btn-animate-y-2" aria-hidden="true">
                        Social Media Marketing
                      </span>
                    </span>
                  </span>
                </a>
              </div>
            </div>

            {/* End Services Buttons */}
          </div>
        </div>
      </div>
    </>
  );
}
