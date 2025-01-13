import Faq from "@/components/common/Faq";
import React from "react";

export default function Faqs() {
  return (
    <div className="row position-relative">
      <div className="col-md-6 col-lg-5 mb-md-50 mb-sm-30">
        <h3 className="section-title mb-30">Frequently Asked Questions</h3>
        <p className="text-gray mb-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar
          vitae neque et porttitor. Integer non dapibus diam, ac eleifend lectus
          lorem ipsum. In maximus ligula semper metus pellentesque mattis.
          Maecenas volutpat, diam enim sagittis quam.
        </p>
      </div>
      <div className="col-md-6 offset-lg-1 pt-10 pt-sm-0">
        {/* Accordion */}
        <Faq />
        {/* End Accordion */}
      </div>
    </div>
  );
}
