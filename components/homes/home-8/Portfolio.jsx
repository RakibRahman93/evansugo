import AnimatedText from "@/components/common/AnimatedText";
import { portfolios8 } from "@/data/portfolio";
import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Portfolio() {
  return (
    <>
      {/* Portfolio Grid */}
      <div className="mb-n100 mb-md-n60 mb-sm-n40">
        {/* Portfolio Item */}
        {portfolios8.map((elm, i) => (
          <React.Fragment key={i}>
            {!(i % 2) ? (
              <div className="mb-100 mb-md-60 mb-sm-40">
                <div className="row">
                  <div className="col-md-7 col-lg-8 mb-sm-30 mb-xs-20">
                    <div className="portfolio-3-image">
                      <Link href={`/modern-portfolio-single/${elm.id}`}>
                        <Image
                          src={elm.imageSrc}
                          width={1200}
                          height={782}
                          alt="Image Description"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-5 col-lg-4 d-md-flex align-items-end">
                    <div className="text-center text-md-start">
                      <h3 className="portfolio-3-title font-alt mb-md-10">
                        <Link href={`/modern-portfolio-single/${elm.id}`}>
                          <span
                            className="wow charsAnimInLong"
                            data-splitting="chars"
                          >
                            <AnimatedText text={elm.title} />
                          </span>
                        </Link>
                      </h3>
                      <div className="portfolio-3-descr">{elm.categories}</div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="mb-100 mb-md-60 mb-sm-40">
                <div className="row">
                  <div className="col-md-5 col-lg-4 d-md-flex align-items-end">
                    <div className="text-center text-md-end">
                      <h3 className="portfolio-3-title font-alt mb-md-10">
                        <Link href={`/modern-portfolio-single/${elm.id}`}>
                          <span
                            className="wow charsAnimInLong"
                            data-splitting="chars"
                          >
                            <AnimatedText text={elm.title} />
                          </span>
                        </Link>
                      </h3>
                      <div className="portfolio-3-descr">{elm.categories}</div>
                    </div>
                  </div>
                  <div className="col-md-7 col-lg-8 mb-sm-30 mb-xs-20 order-first order-md-last">
                    <div className="portfolio-3-image">
                      <Link href={`/modern-portfolio-single/${elm.id}`}>
                        <Image
                          src={elm.imageSrc}
                          width={1200}
                          height={782}
                          alt="Image Description"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
        {/* End Portfolio Item */}
        {/* Portfolio Item */}

        {/* End Portfolio Item */}
      </div>{" "}
    </>
  );
}
