import React from "react";

export default function Marquee() {
  return (
    <div className="pt-40 pb-40 pt-md-0 pb-md-0">
      {/* Marquee Text Line */}
      <div className="marquee marquee-style-3 mb-30 mb-md-0 z-index-1">
        <div className="marquee-track marquee-animation-1a">
          <div>Benefits</div>
          <div aria-hidden="true">Benefits</div>
          <div aria-hidden="true">Benefits</div>
          <div aria-hidden="true">Benefits</div>
          <div aria-hidden="true">Benefits</div>
          <div aria-hidden="true">Benefits</div>
          <div aria-hidden="true">Benefits</div>
          <div aria-hidden="true">Benefits</div>
          <div aria-hidden="true">Benefits</div>
          <div aria-hidden="true">Benefits</div>
        </div>
      </div>
      {/* End Marquee Text Line */}
      {/* Marquee Text Line */}
      <div className="marquee marquee-style-4 clearfix">
        <div className="marquee-track marquee-animation-2a float-end">
          <div>Unique Design</div>
          <div>Premium Support</div>
          <div aria-hidden="true">Unique Design</div>
          <div aria-hidden="true">Premium Support</div>
          <div aria-hidden="true">Unique Design</div>
          <div aria-hidden="true">Premium Support</div>
          <div aria-hidden="true">Unique Design</div>
          <div aria-hidden="true">Premium Support</div>
          <div aria-hidden="true">Unique Design</div>
          <div aria-hidden="true">Premium Support</div>
          <div aria-hidden="true">Unique Design</div>
          <div aria-hidden="true">Premium Support</div>
        </div>
      </div>
      {/* End Marquee Text Line */}
    </div>
  );
}
