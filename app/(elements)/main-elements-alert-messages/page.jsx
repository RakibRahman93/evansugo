import Footer1 from "@/components/footers/Footer1";

import dynamic from "next/dynamic";

const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);

import Header1Multipage from "@/components/headers/Header1Multipage";
import AnimatedText from "@/components/common/AnimatedText";
import Image from "next/image";
import { menuItems } from "@/data/menu";

export const metadata = {
  title:
    "Element Page Alert Message || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function ElementPageAlertMessage() {
  return (
    <>
      <div className="theme-main">
        <div className="page" id="top">
          <nav className="main-nav transparent stick-fixed wow-menubar">
            <Header1Multipage links={menuItems} />
          </nav>
          <main id="main">
            <section className="page-section pt-0 pb-0" id="home">
              <ParallaxContainer
                className="page-section bg-gray-light-1 bg-light-alpha-90 parallax-5"
                style={{
                  backgroundImage:
                    "url(/assets/images/full-width-images/section-bg-1.jpg)",
                }}
              >
                <div className="container position-relative pt-30 pt-sm-50">
                  {/* Section Content */}
                  <div className="text-center">
                    <div className="row">
                      {/* Page Title */}
                      <div className="col-md-8 offset-md-2">
                        <h1 className="hs-title-1 mb-20">
                          <span
                            className="wow charsAnimIn"
                            data-splitting="chars"
                          >
                            <AnimatedText text="Alert Messages" />
                          </span>
                        </h1>
                        <div className="row">
                          <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                            <p
                              className="section-descr mb-0 wow fadeIn"
                              data-wow-delay="0.2s"
                              data-wow-duration="1.2s"
                            >
                              Open this file in the HTML editor and copy the
                              code of the wished component.
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* End Page Title */}
                    </div>
                  </div>
                  {/* End Section Content */}
                </div>
              </ParallaxContainer>
            </section>
            <>
              {/* Section */}
              <section className="page-section">
                <div className="container relative">
                  <div className="row">
                    <div className="col-md-8 offset-md-2">
                      {/* Primary Message */}
                      <div
                        className="alert alert-primary alert-dismissible"
                        role="alert"
                      >
                        <i className="mi-circle-information" /> A simple alert
                        with
                        <a href="#" className="alert-link">
                          an example link
                        </a>
                        . Give it a click if you like.
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="alert"
                          aria-label="Close"
                        />
                      </div>
                      {/* End Primary Message */}
                      {/* Secondary Message */}
                      <div
                        className="alert alert-secondary alert-dismissible"
                        role="alert"
                      >
                        <i className="mi-circle-information" /> A simple alert
                        with
                        <a href="#" className="alert-link">
                          an example link
                        </a>
                        . Give it a click if you like.
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="alert"
                          aria-label="Close"
                        />
                      </div>
                      {/* End Secondary Message */}
                      {/* Success Message */}
                      <div
                        className="alert alert-success alert-dismissible"
                        role="alert"
                      >
                        <i className="mi-circle-check" /> A simple alert with
                        <a href="#" className="alert-link">
                          an example link
                        </a>
                        . Give it a click if you like.
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="alert"
                          aria-label="Close"
                        />
                      </div>
                      {/* End Success Message */}
                      {/* Danger Notice */}
                      <div
                        className="alert alert-danger alert-dismissible"
                        role="alert"
                      >
                        <i className="mi-circle-error" /> A simple alert with
                        <a href="#" className="alert-link">
                          an example link
                        </a>
                        . Give it a click if you like.
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="alert"
                          aria-label="Close"
                        />
                      </div>
                      {/* End Danger Notice */}
                      {/* Warning Message */}
                      <div
                        className="alert alert-warning alert-dismissible"
                        role="alert"
                      >
                        <i className="mi-circle-warning" /> A simple alert with
                        <a href="#" className="alert-link">
                          an example link
                        </a>
                        . Give it a click if you like.
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="alert"
                          aria-label="Close"
                        />
                      </div>
                      {/* End Warning Message */}
                      {/* Info Message */}
                      <div
                        className="alert alert-info alert-dismissible"
                        role="alert"
                      >
                        <i className="mi-circle-information" /> A simple alert
                        with
                        <a href="#" className="alert-link">
                          an example link
                        </a>
                        . Give it a click if you like.
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="alert"
                          aria-label="Close"
                        />
                      </div>
                      {/* End Info Message */}
                      {/* Light Message */}
                      <div
                        className="alert alert-light alert-dismissible"
                        role="alert"
                      >
                        <i className="mi-circle-information" /> A simple alert
                        with
                        <a href="#" className="alert-link">
                          an example link
                        </a>
                        . Give it a click if you like.
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="alert"
                          aria-label="Close"
                        />
                      </div>
                      {/* End Light Message */}
                      {/* Dark Message */}
                      <div
                        className="alert alert-dark alert-dismissible"
                        role="alert"
                      >
                        <i className="mi-circle-information" /> A simple alert
                        with
                        <a href="#" className="alert-link">
                          an example link
                        </a>
                        . Give it a click if you like.
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="alert"
                          aria-label="Close"
                        />
                      </div>
                      {/* End Dark Message */}
                    </div>
                  </div>
                </div>
              </section>
            </>
          </main>
          <Footer1 />
        </div>{" "}
      </div>
    </>
  );
}
