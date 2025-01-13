import AnimatedText from "@/components/common/AnimatedText";
import Pagination from "@/components/common/Pagination";
import Footer2 from "@/components/footers/Footer2";
import Header2 from "@/components/headers/Header2";
import Form1 from "@/components/newsletterForms/Form1";
import { blogs18 } from "@/data/blogs";
import { boldMultipage, boldMultipageDark } from "@/data/menu";
import dynamic from "next/dynamic";
import Image from "next/image";

import Link from "next/link";
import React from "react";
const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);
export const metadata = {
  title:
    "Bold Blog Dark || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
const onePage = false;
const dark = true;
export default function BoldBlogPageDark() {
  return (
    <>
      <div className="theme-bold">
        <div className="dark-mode">
          <div className="page bg-dark-1" id="top">
            <nav className="main-nav dark dark-mode transparent stick-fixed wow-menubar">
              <Header2 links={boldMultipageDark} />
            </nav>
            <main id="main">
              <ParallaxContainer
                className="page-section bg-dark-alpha-60 light-content parallax-5"
                style={{
                  backgroundImage:
                    "url(/assets/images/full-width-images/section-bg-13.jpg)",
                }}
                id="home"
              >
                <div className="container position-relative pt-sm-40">
                  <div className="text-center">
                    <h1 className="hs-title-4 font-alt mb-0">
                      <span
                        className="wow charsAnimInLong-1"
                        data-splitting="chars"
                      >
                        <AnimatedText text="My Blog" />
                      </span>
                    </h1>
                  </div>
                </div>
              </ParallaxContainer>
              <>
                {/* Blog Section */}
                <section
                  className="page-section bg-dark-1 light-content"
                  id="blog"
                >
                  <div className="container position-relative">
                    {/* Blog Grid */}
                    <div className="row gx-5 mt-n50 mt-sm-n30 mb-50 mb-sm-30">
                      {/* Post Item */}
                      {blogs18.map((elm, i) => (
                        <div
                          key={i}
                          className="post-prev-2 col-md-6 col-lg-4 mt-50 mt-sm-30"
                        >
                          <div className="post-prev-2-img">
                            <Link href={`/bold-blog-single/${elm.id}`}>
                              <Image
                                src={elm.imgSrc}
                                width={700}
                                height={479}
                                alt="Image Description"
                              />
                            </Link>
                          </div>
                          <h3 className="post-prev-2-title">
                            <Link href={`/bold-blog-single/${elm.id}`}>
                              {elm.title}
                            </Link>
                          </h3>
                          <div className="post-prev-2-info">{elm.date}</div>
                        </div>
                      ))}
                      {/* End Post Item */}

                      {/* End Post Item */}
                    </div>
                    {/* End Blog Grid */}
                    {/* Pagination */}
                    <Pagination />
                    {/* End Pagination */}
                  </div>
                </section>
                {/* End Blog Section */}
                {/* Divider */}
                <hr className="mt-0 mb-0 white opacity-015" />
                {/* End Divider */}
                {/* Newsletter Section */}
                <section className="small-section bg-dark-1 light-content">
                  <div className="container position-relative">
                    {/* Newsletter Form */}
                    <div className="row wow fadeInUp">
                      <div className="col-lg-8 offset-lg-2">
                        <h2 className="section-title-tiny font-alt mb-30">
                          <span className="icon-ellipse" /> Subscribe our
                          newsletter
                        </h2>
                        <Form1 />
                      </div>
                    </div>
                    {/* End Newsletter Form */}
                  </div>
                </section>
              </>
            </main>
            <footer className="footer-1 bg-dark-2 light-content">
              <Footer2 />
            </footer>
          </div>{" "}
        </div>
      </div>{" "}
    </>
  );
}
