"use client";
import { useEffect } from "react";
import tippy from "tippy.js";
export default function Tooltips() {
  useEffect(() => {
    tippy("[data-tippy-content]");
  }, []);

  return (
    <div className="container position-relative">
      <div className="text-center mb-20">
        <a
          href="#"
          className="btn btn-mod btn-white btn-large btn-round btn-hover-anim"
          data-tippy-content="Title text here"
          data-tippy-placement="top"
        >
          <span>Tooltip Top</span>
        </a>
      </div>
      <div className="text-center mb-20">
        <a
          href="#"
          className="btn btn-mod btn-white btn-large btn-round btn-hover-anim"
          data-tippy-content="Title text here"
          data-tippy-placement="left"
        >
          <span>Tooltip Left</span>
        </a>
      </div>
      <div className="text-center mb-20">
        <a
          href="#"
          className="btn btn-mod btn-white btn-large btn-round btn-hover-anim"
          data-tippy-content="Title text here"
          data-tippy-placement="right"
        >
          <span>Tooltip Right</span>
        </a>
      </div>
      <div className="text-center mb-20">
        <a
          href="#"
          className="btn btn-mod btn-white btn-large btn-round btn-hover-anim"
          data-tippy-content="Title text here"
          data-tippy-placement="bottom"
        >
          <span>Tooltip Bottom</span>
        </a>
      </div>
    </div>
  );
}
