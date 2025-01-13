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
import { menuItemsDark } from "@/data/menu";
export const metadata = {
  title:
    "Element Page Typography Dark || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function ElementPageTypographyDark() {
  return (
    <>
      <div className="theme-main">
        <div className="dark-mode">
          <div className="page bg-dark-1" id="top">
            <nav className="main-nav dark dark-mode transparent stick-fixed wow-menubar">
              <Header1Multipage links={menuItemsDark} />
            </nav>
            <main id="main">
              <section className="page-section pt-0 pb-0" id="home">
                <ParallaxContainer
                  className="page-section bg-dark-1 bg-dark-alpha-80 light-content parallax-5"
                  style={{
                    backgroundImage:
                      "url(/assets/images/full-width-images/section-bg-2.jpg)",
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
                              <AnimatedText text="Typography" />
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
                <section className="page-section bg-dark-1 light-content">
                  <div className="container relative">
                    <div className="text-center mb-60 mb-sm-40">
                      <h2 className="section-title-small">Formating</h2>
                    </div>
                    {/* Row */}
                    <div className="row mb-n40">
                      {/* Col */}
                      <div className="col-md-6 mb-40">
                        {/* Paragraph */}
                        <h3 className="mb-30">Paragraph</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quisque mollis lacus augue, a hendrerit leo
                          tristique vitae. Consectetur adipiscing elit.
                          Integerem posuere erat a ante. Mauris non ipsum
                          molestie, sagittis elit ac, vulputate lorem ipsum
                          sobere odio.
                        </p>
                        {/* End Paragraph */}
                      </div>
                      {/* End Col */}
                      {/* Col */}
                      <div className="col-md-6 mb-40">
                        {/* Blockquote */}
                        <blockquote>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Integer posuere erat a ante. Quisque mollis
                            lacus augue, a hendrerit leo tristique vitae.
                          </p>
                          <footer>
                            Someone famous in
                            <cite title="Source Title"> Source Title </cite>
                          </footer>
                        </blockquote>
                        {/* End Blockquote */}
                      </div>
                      {/* End Col */}
                    </div>
                    {/* End Row */}
                    <hr className="mb-60 mb-xs-30" />
                    {/* Row */}
                    <div className="row mb-n40">
                      {/* Col */}
                      <div className="col-md-4 mb-40">
                        {/* List UL */}
                        <div>
                          <h3 className="mb-30">List UL</h3>
                          <ul>
                            <li>First item</li>
                            <li>Second item</li>
                            <li>
                              Third item
                              <ul>
                                <li>First item</li>
                                <li>Second item</li>
                                <li>Third item</li>
                              </ul>
                            </li>
                            <li>Fourth item</li>
                            <li>Fives item</li>
                          </ul>
                        </div>
                      </div>
                      {/* End Col */}
                      {/* Col */}
                      <div className="col-md-4 mb-40">
                        {/* List OL */}
                        <div>
                          <h3 className="mb-30">List OL</h3>
                          <ol>
                            <li>First item</li>
                            <li>Second item</li>
                            <li>
                              Third item
                              <ol>
                                <li>First item</li>
                                <li>Second item</li>
                                <li>Third item</li>
                              </ol>
                            </li>
                            <li>Fourth item</li>
                            <li>Fives item</li>
                          </ol>
                        </div>
                      </div>
                      {/* End Col */}
                      {/* Col */}
                      <div className="col-md-4 mb-40">
                        {/* Emphasis */}
                        <div>
                          <h3 className="mb-30">Emphasis</h3>
                          <p>
                            <small>
                              This line of text is meant to be treated as fine
                              print.
                            </small>
                          </p>
                          <p>
                            <strong>Rendered as bold text</strong>
                          </p>
                          <p>
                            <em>Rendered as italicized text</em>
                          </p>
                          <p>
                            <span className="serif">
                              Rendered as italicized text
                            </span>
                          </p>
                        </div>
                        {/* End Emphasis */}
                      </div>
                      {/* End Col */}
                    </div>
                    {/* End Row */}
                  </div>
                </section>
                {/* End Section */}
                {/* Divider */}
                <hr className="mt-0 mb-0 white" />
                {/* End Divider */}
                {/* Section */}
                <section className="page-section bg-dark-1 light-content">
                  <div className="container relative">
                    <div className="text-center mb-60 mb-sm-40">
                      <h2 className="section-title-small">Headings</h2>
                    </div>
                    {/* Row */}
                    <div className="row mb-n40">
                      {/* Col */}
                      <div className="col-md-4 mb-40 align-center">
                        <h1>Heading 1</h1>
                        <h2>Heading 2</h2>
                        <h3>Heading 3</h3>
                        <h4>Heading 4</h4>
                        <h5>Heading 5</h5>
                        <h6>Heading 6</h6>
                      </div>
                      {/* End Col */}
                      {/* Col */}
                      <div className="col-md-4 mb-40 align-center">
                        <h1 className="uppercase">Heading 1</h1>
                        <h2 className="uppercase">Heading 2</h2>
                        <h3 className="uppercase">Heading 3</h3>
                        <h4 className="uppercase">Heading 4</h4>
                        <h5 className="uppercase">Heading 5</h5>
                        <h6 className="uppercase">Heading 6</h6>
                      </div>
                      {/* End Col */}
                      {/* Col */}
                      <div className="col-md-4 mb-40 align-center">
                        <h1 className="serif">Heading 1</h1>
                        <h2 className="serif">Heading 2</h2>
                        <h3 className="serif">Heading 3</h3>
                        <h4 className="serif">Heading 4</h4>
                        <h5 className="serif">Heading 5</h5>
                        <h6 className="serif">Heading 6</h6>
                      </div>
                      {/* End Col */}
                    </div>
                    {/* End Row */}
                  </div>
                </section>
                {/* End Sect
                 */}
              </>
            </main>
            <Footer1 dark />
          </div>{" "}
        </div>
      </div>
    </>
  );
}
