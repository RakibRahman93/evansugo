"use client";
import { useEffect } from "react";
import tippy from "tippy.js";

export default function Grid() {
  useEffect(() => {
    tippy("[data-tippy-content]");
  }, []);

  return (
    <div className="container relative">
      {/* Row */}
      <div className="row">
        {/* Col */}
        <div className="col-sm-6 mb-40">
          <h5>One Half</h5>
          <p className="text-gray mb-0">
            Lorem ipsum dolor sit amet,{" "}
            <a
              href="#"
              data-tippy-content="Title text here"
              data-tippy-placement="top"
            >
              tooltip top
            </a>{" "}
            consectetur adipiscing elit. Quisque mollis lacus augue, a hendrerit
            leo tristique vitae. Mauris non ipsum molestie, sagittis elit ac,
            vulputate odio. Fusce quam augue, gravida tincidunt dui nec, tempor
            iaculis justo.
          </p>
        </div>
        {/* End Col */}
        {/* Col */}
        <div className="col-sm-6 mb-40">
          <h5>One Half</h5>
          <p className="text-gray mb-0">
            Lorem ipsum dolor
            <a
              href="#"
              data-tippy-content="Title text here"
              data-tippy-placement="bottom"
            >
              {" "}
              tooltip bottom{" "}
            </a>
            sit amet, consectetur adipiscing elit. Quisque mollis lacus augue, a
            hendrerit leo tristique vitae. Mauris non ipsum molestie, sagittis
            elit ac, vulputate odio. Fusce quam augue, gravida tincidunt dui
            nec, tempor iaculis justo.
          </p>
        </div>
        {/* End Col */}
      </div>
      {/* End Row */}
      <hr className="mb-40" />
      {/* Row */}
      <div className="row">
        {/* Col */}
        <div className="col-sm-6 col-md-4 mb-40">
          <h5>One Third</h5>
          <p className="text-gray mb-0">
            Lorem ipsum
            <a
              href="#"
              data-tippy-content="Title text here"
              data-tippy-placement="left"
            >
              {" "}
              tooltip left{" "}
            </a>
            dolor sit amet, consectetur adipiscing elit. Quisque mollis lacus
            augue, a hendrerit leo tristique vitae. Mauris non ipsum molestie,
            sagittis elit ac, vulputate odio. Fusce quam augue, gravida
            tincidunt dui nec, tempor iaculis justo.
          </p>
        </div>
        {/* End Col */}
        {/* Col */}
        <div className="col-sm-6 col-md-4 mb-40">
          <h5>One Third</h5>
          <p className="text-gray mb-0">
            Lorem ipsum
            <a
              href="#"
              data-tippy-content="Title text here"
              data-tippy-placement="right"
            >
              {" "}
              tooltip right{" "}
            </a>
            dolor sit amet, consectetur adipiscing elit. Quisque mollis lacus
            augue, a hendrerit leo tristique vitae. Mauris non ipsum molestie,
            sagittis elit ac, vulputate odio. Fusce quam augue, gravida
            tincidunt dui nec, tempor iaculis justo.
          </p>
        </div>
        {/* End Col */}
        {/* Col */}
        <div className="col-sm-6 col-md-4 mb-40">
          <h5>One Third</h5>
          <p className="text-gray mb-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            mollis lacus augue, a hendrerit leo tristique vitae. Mauris non
            ipsum molestie, sagittis elit ac, vulputate odio. Fusce quam augue,
            gravida tincidunt dui nec, tempor iaculis justo.
          </p>
        </div>
        {/* End Col */}
      </div>
      {/* End Row */}
      <hr className="mb-40" />
      {/* Row */}
      <div className="row">
        {/* Col */}
        <div className="col-sm-6 col-md-3 mb-40">
          <h5>One Fourth</h5>
          <p className="text-gray mb-0">
            Quisque mollis lacus augue, a hendrerit leo tristique vitae. Mauris
            non ipsum molestie, sagittis elit ac, vulputate odio. Fusce quam
            augue, gravida tincidunt dui nec, tempor iaculis justo.
          </p>
        </div>
        {/* End Col */}
        {/* Col */}
        <div className="col-sm-6 col-md-3 mb-40">
          <h5>One Fourth</h5>
          <p className="text-gray mb-0">
            Quisque mollis lacus augue, a hendrerit leo tristique vitae. Mauris
            non ipsum molestie, sagittis elit ac, vulputate odio. Fusce quam
            augue, gravida tincidunt dui nec, tempor iaculis justo.
          </p>
        </div>
        {/* End Col */}
        {/* Col */}
        <div className="col-sm-6 col-md-3 mb-40">
          <h5>One Fourth</h5>
          <p className="text-gray mb-0">
            Quisque mollis lacus augue, a hendrerit leo tristique vitae. Mauris
            non ipsum molestie, sagittis elit ac, vulputate odio. Fusce quam
            augue, gravida tincidunt dui nec, tempor iaculis justo.
          </p>
        </div>
        {/* End Col */}
        <div className="col-sm-6 col-md-3 mb-40">
          <h5>One Fourth</h5>
          <p className="text-gray mb-0">
            Quisque mollis lacus augue, a hendrerit leo tristique vitae. Mauris
            non ipsum molestie, sagittis elit ac, vulputate odio. Fusce quam
            augue, gravida tincidunt dui nec, tempor iaculis justo.
          </p>
        </div>
      </div>
      {/* End Row */}
    </div>
  );
}
