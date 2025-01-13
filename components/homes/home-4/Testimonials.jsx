import { testimonialItems } from "@/data/testimonials";
import React from "react";
import Image from "next/image";
export default function Testimonials() {
  return (
    <div className="container position-relative">
      <div className="row">
        <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
          <h2 className="section-title mb-70 mb-sm-50 text-center">
            Clients Stories
          </h2>
        </div>
      </div>
      {/* Testimonial */}
      {testimonialItems.map((elm, i) => (
        <React.Fragment key={i}>
          {!(i % 2) ? (
            <div className="row mb-80 mb-sm-60">
              <div className="col-md-5 col-lg-4 offset-lg-1 mb-sm-40">
                <div className="overflow-hidden round">
                  <Image
                    src={elm.imageSrc}
                    width={656}
                    height={800}
                    alt="Image Description"
                    className="wow scaleOutIn"
                  />
                </div>
              </div>
              <div className="col-md-6 offset-md-1 col-lg-5 offset-lg-1 d-flex align-items-center wow fadeInUp">
                <blockquote className="testimonials-6-item">
                  <div
                    className="testimonials-6-icon opacity-01-dark"
                    aria-hidden="true"
                  >
                    “
                  </div>
                  <p className="testimonials-6-text mb-40">{elm.quote}</p>
                  <div className="section-line mb-10" />
                  <footer>
                    <div className="testimonials-6-author">{elm.author}</div>
                    <div className="testimonials-6-position">
                      {elm.position}
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
          ) : (
            <div className="row">
              <div className="col-md-5 offset-md-1 col-lg-4 offset-lg-1 order-md-last mb-sm-40">
                <div className="overflow-hidden round">
                  <Image
                    src={elm.imageSrc}
                    width={656}
                    height={800}
                    alt="Image Description"
                    className="wow scaleOutIn"
                  />
                </div>
              </div>
              <div className="col-md-6 col-lg-5 offset-lg-1 d-flex align-items-center wow fadeInUp">
                <blockquote className="testimonials-6-item">
                  <div
                    className="testimonials-6-icon opacity-01-dark"
                    aria-hidden="true"
                  >
                    “
                  </div>
                  <p className="testimonials-6-text mb-40">{elm.quote}</p>
                  <div className="section-line mb-10" />
                  <footer>
                    <div className="testimonials-6-author">{elm.author}</div>
                    <div className="testimonials-6-position">
                      {elm.position}
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
          )}
        </React.Fragment>
      ))}
      {/* End Testimonial */}
    </div>
  );
}
