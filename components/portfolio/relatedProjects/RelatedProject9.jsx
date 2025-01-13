import { portfolios2 } from "@/data/portfolio";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function RelatedProject9() {
  return (
    <div className="container">
      <h2 className="section-title-medium font-alt text-outline-cont mt-20 mb-50 mb-md-30">
        <span className="text-outline">Next Project</span>
      </h2>
      {/* Portfolio Item */}
      {portfolios2.slice(4, 5).map((item, index) => (
        <div
          key={index}
          className={`portfolio-2-item mb-100 mb-sm-50 mix ${item.categories.join(
            " "
          )}`}
        >
          <div className="row">
            {!(index % 2) ? (
              <>
                <div className="col-md-8 mb-sm-30 order-md-first">
                  <div className="portfolio-2-image">
                    <Link href={`/bold-portfolio-single/${item.id}`}>
                      <Image
                        width={1200}
                        height={819}
                        src={item.imageUrl}
                        alt="Image Description"
                      />
                    </Link>
                  </div>
                </div>
                <div className={`col-md-4  `}>
                  <hr className="black thick mt-0 mb-20 d-none d-md-block" />
                  <h3 className="portfolio-2-title font-alt mb-20">
                    <Link href={`/bold-portfolio-single/${item.id}`}>
                      {item.title}
                    </Link>
                  </h3>
                  <p className="portfolio-2-descr">{item.description}</p>
                  <div>
                    <Link
                      href={`/bold-portfolio-single/${item.id}`}
                      className="link-hover-anim underline align-middle"
                      data-link-animate="y"
                    >
                      <span className="link-strong link-strong-unhovered">
                        View Project
                      </span>
                      <span
                        className="link-strong link-strong-hovered"
                        aria-hidden="true"
                      >
                        View Project
                      </span>
                    </Link>
                  </div>
                </div>{" "}
              </>
            ) : (
              <>
                <div className={`col-md-4`}>
                  <hr className="black thick mt-0 mb-20 d-none d-md-block" />
                  <h3 className="portfolio-2-title font-alt mb-20">
                    <Link href={`/bold-portfolio-single/${item.id}`}>
                      {item.title}
                    </Link>
                  </h3>
                  <p className="portfolio-2-descr">{item.description}</p>
                  <div>
                    <Link
                      href={`/bold-portfolio-single/${item.id}`}
                      className="link-hover-anim underline align-middle"
                      data-link-animate="y"
                    >
                      <span className="link-strong link-strong-unhovered">
                        View Project
                      </span>
                      <span
                        className="link-strong link-strong-hovered"
                        aria-hidden="true"
                      >
                        View Project
                      </span>
                    </Link>
                  </div>
                </div>{" "}
                <div
                  className={`col-md-8 mb-sm-30 ${
                    index % 2 ? "order-first order-md-last" : ""
                  } `}
                >
                  <div className="portfolio-2-image">
                    <Link href={`/bold-portfolio-single/${item.id}`}>
                      <Image
                        width={1200}
                        height={819}
                        src={item.imageUrl}
                        alt="Image Description"
                      />
                    </Link>
                  </div>
                </div>{" "}
              </>
            )}
          </div>
        </div>
      ))}
      {/* End Portfolio Item */}
    </div>
  );
}
