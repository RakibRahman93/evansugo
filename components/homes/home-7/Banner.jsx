"use client";

import { useState } from "react";
import ModalVideo from "react-modal-video";

export default function Banner() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="container position-relative text-center pt-50 pt-sm-0 pb-50 pb-sm-0">
        <a
          onClick={() => setOpen(true)}
          className="big-icon-link lightbox-gallery-1 mfp-iframe"
        >
          <span className="big-icon-gradient">
            <i className="icon-play" />
          </span>
        </a>
        <div>
          <a
            onClick={() => setOpen(true)}
            className="big-icon-link-gradient lightbox-gallery-2 mfp-iframe"
          >
            Play Showreel
          </a>
        </div>
        <div className="opacity-06">1 min. 27 sec.</div>
      </div>{" "}
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId="jTea_8Fk5Ns"
        onClose={() => setOpen(false)}
      />{" "}
    </>
  );
}
