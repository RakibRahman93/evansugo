import React from "react";
import Image from "next/image";
import {
  showcasescol1,
  showcasescol2,
  showcasescol3,
  showcasesCol4,
  showcasesCol5,
} from "@/data/preview";
export default function Showcase() {
  return (
    <div className="section-showcases">
      <div className="section-showcases-container">
        {/* Showcases Column 1 */}
        <div
          className="section-showcases-column"
          data-rellax-y=""
          data-rellax-speed="2.25"
          data-rellax-percentage={0}
        >
          {/* Showcases Item */}
          {showcasescol1.map((elm, i) => (
            <div key={i} className="section-showcases-item">
              <Image
                src={elm.src}
                width={320}
                height={369}
                alt="Image Description"
              />
            </div>
          ))}
          {/* End Showcases Item */}
        </div>
        {/* End Showcases Column 1 */}
        {/* Showcases Column 2 */}
        <div
          className="section-showcases-column"
          data-rellax-y=""
          data-rellax-speed="0.8"
          data-rellax-percentage={0}
        >
          {/* Showcases Item */}
          {showcasescol2.map((elm, i) => (
            <div key={i} className="section-showcases-item">
              <Image
                src={elm.src}
                width={640}
                height={1052}
                alt="Image Description"
              />
            </div>
          ))}
          {/* End Showcases Item */}
        </div>
        {/* End Showcases Column 2 */}
        {/* Showcases Column 3 */}
        <div
          className="section-showcases-column"
          data-rellax-y=""
          data-rellax-speed="2.25"
          data-rellax-percentage="0.02"
        >
          {/* Showcases Item */}
          {showcasescol3.map((elm, i) => (
            <div key={i} className="section-showcases-item">
              <Image
                src={elm.src}
                width={640}
                height={370}
                alt="Image Description"
              />
            </div>
          ))}
          {/* End Showcases Item */}
        </div>
        {/* End Showcases Column 3 */}
        {/* Showcases Column 4 */}
        <div
          className="section-showcases-column"
          data-rellax-y=""
          data-rellax-speed="0.8"
          data-rellax-percentage={0}
        >
          {/* Showcases Item */}
          {showcasesCol4.map((elm, i) => (
            <div key={i} className="section-showcases-item">
              <Image
                src={elm.src}
                width={640}
                height={1051}
                alt="Image Description"
              />
            </div>
          ))}
          {/* End Showcases Item */}
        </div>
        {/* End Showcases Column 4 */}
        {/* Showcases Column 5 */}
        <div
          className="section-showcases-column"
          data-rellax-y=""
          data-rellax-speed="2.25"
          data-rellax-percentage={0}
        >
          {/* Showcases Item */}
          {showcasesCol5.map((elm, i) => (
            <div key={i} className="section-showcases-item">
              <Image
                src={elm.src}
                width={320}
                height={370}
                alt="Image Description"
              />
            </div>
          ))}
          {/* End Showcases Item */}

          {/* End Showcases Item */}
        </div>
        {/* End Showcases Column 5 */}
      </div>
    </div>
  );
}
