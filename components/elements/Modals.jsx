"use client";

import { useState } from "react";
import ModalVideo from "react-modal-video";
import Image from "next/image";
export default function Modals() {
  const [textModalOpen, setTextModalOpen] = useState(false);
  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [mapModalOpen, setMapModalOpen] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [isOpen2, setOpen2] = useState(false);

  return (
    <>
      {/* Section */}

      <div className="container relative">
        <div className="text-center mb-60 mb-sm-40">
          <h2 className="section-title-small">Lightbox Links</h2>
        </div>
        <div className="row">
          <div className="col-md-8 offset-md-2 text-center">
            {/* Lightbox Image */}
            <a
              onClick={() => setImageModalOpen(true)}
              className="btn btn-mod btn-white btn-large round mt-10 btn-hover-anim lightbox-gallery-1 mfp-image"
            >
              <span>Image</span>
            </a>{" "}
            {/* End Lightbox Image */}
            {/* Lightbox Youtube Video */}
            <a
              onClick={() => setOpen(true)}
              className="btn btn-mod btn-white btn-large round mt-10 btn-hover-anim lightbox-gallery-2 mfp-iframe"
            >
              <span>Youtube Video</span>
            </a>{" "}
            {/* End Lightbox Youtube Video */}
            {/* Lightbox Vimeo Video */}
            <a
              onClick={() => setOpen2(true)}
              className="btn btn-mod btn-white btn-large round mt-10 btn-hover-anim lightbox-gallery-3 mfp-iframe"
            >
              <span>Vimeo Video</span>
            </a>{" "}
            {/* End Lightbox Vimeo Video */}
            {/* Lightbox Google Map */}
            <a
              onClick={() => setMapModalOpen(true)}
              className="btn btn-mod btn-white btn-large round mt-10 btn-hover-anim lightbox-gallery-4 mfp-iframe"
            >
              <span>Google Map</span>
            </a>{" "}
            {/* End Lightbox Google Map */}
            {/* Lightbox Modal */}
            <a
              onClick={() => setTextModalOpen(true)}
              className="btn btn-mod btn-white btn-large round mt-10 btn-hover-anim lightbox-gallery-5 mfp-inline"
            >
              <span>Modal</span>
            </a>{" "}
            <div className="mfp-hide">
              <h3>This is lightbox modal window</h3>
              <p className="mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque felis risus, elementum sed purus consectetur,
                mollis lobortis lectus. Etiam augue sem, finibus nec facilisis
                sit amet, tristique et ligula. Maecenas ut eleifend nibh.
                Aliquam velit sem, auctor venenatis libero a, pharetra interdum
                urna. Vivamus eu orci non libero sollicitudin aliquam.
                Suspendisse cursus ante eu nulla tempus, at porttitor massa
                ultricies. Curabitur a egestas turpis. Sed eu accumsan justo. Ut
                imperdiet mattis semper. Integer interdum commodo metus, in
                ornare nisi placerat sit amet. Nullam porta condimentum ante, at
                euismod tortor dignissim sit amet. Pellentesque a fermentum
                arcu, eu feugiat tortor. Ut gravida vel velit quis sagittis. Nam
                laoreet elementum tortor et consequat. Mauris accumsan nulla ut
                eros euismod posuere. In volutpat mollis tortor. Suspendisse in
                eleifend est. Suspendisse in nunc quis risus suscipit porta eu
                in libero. Sed tempor pharetra porttitor. Integer vitae leo sed
                nulla efficitur dignissim in vel nisl. Maecenas enim ex,
                malesuada quis malesuada quis, lobortis in massa. Morbi
                scelerisque tincidunt nulla, sit amet tristique eros lacinia ut.
                Sed est sem, consectetur ac eros a, luctus convallis ligula.
              </p>
            </div>
            {/* End Lightbox Modal */}
          </div>
        </div>
      </div>

      {textModalOpen && (
        <>
          <div
            className="mfp-bg mfp-fade mfp-ready"
            onClick={() => setTextModalOpen(false)}
          ></div>
          <div
            className="mfp-wrap mfp-gallery mfp-close-btn-in mfp-auto-cursor mfp-fade mfp-ready"
            tabIndex="-1"
            style={{ overflow: "hidden auto" }}
          >
            <div className="mfp-container mfp-s-ready mfp-inline-holder">
              <div className="mfp-content">
                <div id="test-modal" className="">
                  <h3>This is lightbox modal window</h3>
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque felis risus, elementum sed purus consectetur,
                    mollis lobortis lectus. Etiam augue sem, finibus nec
                    facilisis sit amet, tristique et ligula. Maecenas ut
                    eleifend nibh. Aliquam velit sem, auctor venenatis libero a,
                    pharetra interdum urna. Vivamus eu orci non libero
                    sollicitudin aliquam. Suspendisse cursus ante eu nulla
                    tempus, at porttitor massa ultricies. Curabitur a egestas
                    turpis. Sed eu accumsan justo. Ut imperdiet mattis semper.
                    Integer interdum commodo metus, in ornare nisi placerat sit
                    amet. Nullam porta condimentum ante, at euismod tortor
                    dignissim sit amet. Pellentesque a fermentum arcu, eu
                    feugiat tortor. Ut gravida vel velit quis sagittis. Nam
                    laoreet elementum tortor et consequat. Mauris accumsan nulla
                    ut eros euismod posuere. In volutpat mollis tortor.
                    Suspendisse in eleifend est. Suspendisse in nunc quis risus
                    suscipit porta eu in libero. Sed tempor pharetra porttitor.
                    Integer vitae leo sed nulla efficitur dignissim in vel nisl.
                    Maecenas enim ex, malesuada quis malesuada quis, lobortis in
                    massa. Morbi scelerisque tincidunt nulla, sit amet tristique
                    eros lacinia ut. Sed est sem, consectetur ac eros a, luctus
                    convallis ligula.
                  </p>
                  <button
                    onClick={() => setTextModalOpen(false)}
                    title="Close (Esc)"
                    type="button"
                    className="mfp-close"
                  >
                    ×<span className="visually-hidden">Close</span>
                  </button>
                </div>
              </div>
              <div className="mfp-preloader">Loading...</div>
            </div>
          </div>{" "}
        </>
      )}
      {imageModalOpen && (
        <>
          <div
            className="mfp-bg mfp-fade mfp-ready"
            onClick={() => setImageModalOpen(false)}
          ></div>
          <div
            className="mfp-wrap mfp-gallery mfp-close-btn-in mfp-auto-cursor mfp-fade mfp-ready"
            tabIndex="-1"
            style={{ overflow: "hidden auto" }}
          >
            <div className="mfp-container mfp-s-ready mfp-inline-holder">
              <div className="mfp-content">
                <div id="test-modal" className="">
                  <Image
                    src="/assets/images/portfolio/full-project-5.jpg"
                    alt=""
                    width={1350}
                    height={865}
                  />
                  <button
                    onClick={() => setImageModalOpen(false)}
                    title="Close (Esc)"
                    type="button"
                    className="mfp-close"
                  >
                    ×<span className="visually-hidden">Close</span>
                  </button>
                </div>
              </div>
              <div className="mfp-preloader">Loading...</div>
            </div>
          </div>{" "}
        </>
      )}
      {mapModalOpen && (
        <>
          <div
            className="mfp-bg mfp-fade mfp-ready"
            onClick={() => setMapModalOpen(false)}
          ></div>
          <div
            className="mfp-wrap mfp-gallery mfp-close-btn-in mfp-auto-cursor mfp-fade mfp-ready"
            tabIndex="-1"
            style={{ overflow: "hidden auto" }}
          >
            <div className="mfp-container mfp-s-ready mfp-iframe-holder">
              <div className="mfp-content">
                <div className="mfp-iframe-scaler">
                  <button
                    onClick={() => setMapModalOpen(false)}
                    title="Close (Esc)"
                    type="button"
                    className="mfp-close"
                  >
                    ×<span className="visually-hidden">Close</span>
                  </button>
                  <iframe
                    className="mfp-iframe"
                    src="https://maps.google.com/maps?q=London,+United+Kingdom&amp;hl=en,+London+NW1+6XE,+United+Kingdom&amp;output=embed"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen=""
                  ></iframe>
                </div>
              </div>
              <div className="mfp-preloader">Loading...</div>
            </div>
          </div>{" "}
        </>
      )}
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId="jTea_8Fk5Ns"
        onClose={() => setOpen(false)}
      />
      <ModalVideo
        channel="vimeo"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen2}
        player_id="37066208"
        onClose={() => setOpen2(false)}
      />
    </>
  );
}
