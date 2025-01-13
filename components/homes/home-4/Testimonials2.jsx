import { testimonials4 } from "@/data/testimonials";
import React from "react";

export default function Testimonials2() {
  return (
    <div className="row mt-n50 mb-70 mb-sm-50">
      {/* Testimonials Item */}
      {testimonials4.map((testimonial) => (
        <div
          key={testimonial.id}
          className="col-md-4 mt-50 wow fadeInLeft"
          data-wow-delay={testimonial.delay}
        >
          <div className="text-center px-lg-4">
            <div className="testimonials-5-stars">
              {[...Array(5)].map((_, index) => (
                <i
                  key={index}
                  className={
                    index < Math.floor(testimonial.stars)
                      ? "icon-star-rate"
                      : "icon-star-rate-a"
                  }
                />
              ))}
            </div>
            <div className="testimonials-5-text">{testimonial.text}</div>
            <div className="testimonials-5-caption">{testimonial.caption}</div>
          </div>
        </div>
      ))}
      {/* End Testimonials Item */}
    </div>
  );
}
