"use client";

import { teamMembers3 } from "@/data/team";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
export default function Team() {
  const isotopContainer = useRef();
  const initIsotop = async () => {
    const Isotope = (await import("isotope-layout")).default;
    const imagesloaded = (await import("imagesloaded")).default;

    // Initialize Isotope in the mounted hook
    const isotope = new Isotope(isotopContainer.current, {
      itemSelector: ".col-sm-6",
      layoutMode: "masonry", // or 'fitRows', depending on your layout needs
    });
    imagesloaded(isotopContainer.current).on(
      "progress",
      function (instance, image) {
        // Trigger Isotope layout
        isotope.layout();
      }
    );
  };

  useEffect(() => {
    /////////////////////////////////////////////////////
    // Magnate Animation

    initIsotop();
  }, []);
  return (
    <div ref={isotopContainer} className="row mb-n30 masonry">
      {/* Team Item */}
      {teamMembers3.map((member, index) => (
        <div
          key={index}
          className={`col-sm-6 mb-30 ${
            index == 1 ? "mt-140 mt-xs-0 pt-140 pt-xs-0" : ""
          } `}
        >
          <div className="team-1-item round">
            <h4 className="team-1-title">
              {member.name.split(" ").map((part, idx) => (
                <React.Fragment key={idx}>
                  {part}
                  <br className="d-sm-none" />
                </React.Fragment>
              ))}
            </h4>
            <div className="team-1-image">
              <Image
                width={288}
                height={392}
                src={member.imgSrc}
                alt="Image Description"
              />
            </div>
            <h5 className="team-1-role">{member.role}</h5>
            <p className="team-1-descr">{member.description}</p>
            <div className="team-1-social-links">
              <a href="#" target="_blank" rel="noopener nofollow">
                <div className="visually-hidden">Facebook</div>
                <i className="fa-facebook-f" />
              </a>
              <a href="#" target="_blank" rel="noopener nofollow">
                <div className="visually-hidden">Twitter</div>
                <i className="fa-twitter" />
              </a>
              <a href="#" target="_blank" rel="noopener nofollow">
                <div className="visually-hidden">Behance</div>
                <i className="fa-behance" />
              </a>
            </div>
          </div>
        </div>
      ))}
      {/* End Team Item */}
    </div>
  );
}
