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
    "Element Page Header Icons Brands Dark || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function ElementPageHeaderIconsBrands() {
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
                              <AnimatedText text="Brand Icons" />
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
              <section className="page-section bg-dark-1 light-content">
                <div className="container relative">
                  <div className="row">
                    <div className="col-md-8 offset-md-2 mb-30">
                      <div className="text-center">
                        <p>You can use a set of 50+ brand icons.</p>
                        <div className="mb-30">
                          <div className="highlight">
                            <pre>
                              <code className="html">
                                &lt;i className="fa-youtube"&gt;&lt;/i&gt;
                                fa-youtube
                              </code>
                            </pre>
                          </div>
                          <p>
                            Result: <i className="fa-youtube" /> fa-youtube. To
                            change the icon use one of the classes below.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-n30">
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="fa-px" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">fa-px</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="fa-amazon" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">fa-amazon</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="fa-android" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          fa-android
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="fa-apple" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">fa-apple</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="fa-behance" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          fa-behance
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="fa-blogger" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          fa-blogger
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="fa-codepen" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          fa-codepen
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="fa-deviantart" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          fa-deviantart
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="fa-digg" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">fa-digg</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="fa-dribbble" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          fa-dribbble
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="fa-dropbox" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          fa-dropbox
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="fa-etsy" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">fa-etsy</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="fa-facebook" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          fa-facebook
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="fa-facebook-f" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          fa-facebook-f
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="fa-figma" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">fa-figma</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="fa-flickr" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">fa-flickr</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="fa-github" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">fa-github</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="fa-google" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">fa-google</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="fa-google-drive" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          fa-google-drive
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="fa-google-play" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          fa-google-play
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="fa-hubspot" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          fa-hubspot
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="fa-imdb" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">fa-imdb</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="fa-instagram" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          fa-instagram
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="fa-itunes" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">fa-itunes</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="fa-jsfiddle" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          fa-jsfiddle
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="fa-kickstarter" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          fa-kickstarter
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="fa-linkedin" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          fa-linkedin
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="fa-linkedin-in" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          fa-linkedin-in
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="fa-medium" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">fa-medium</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="fa-paypal" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">fa-paypal</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="fa-pinterest" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          fa-pinterest
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="fa-pinterest-p" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          fa-pinterest-p
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="fa-product-hunt" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          fa-product-hunt
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="fa-reddit" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">fa-reddit</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="fa-shopify" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          fa-shopify
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="fa-skype" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">fa-skype</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="fa-slack" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">fa-slack</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="fa-soundcloud" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          fa-soundcloud
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="fa-spotify" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          fa-spotify
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="fa-stack-overflow" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          fa-stack-overflow
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="fa-steam" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">fa-steam</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="fa-stripe" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">fa-stripe</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="fa-tiktok" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">fa-tiktok</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="fa-tumblr" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">fa-tumblr</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="fa-twitch" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">fa-twitch</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="fa-twitter" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          fa-twitter
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="fa-x-twitter" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          fa-x-twitter
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="fa-square-x-twitter" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          fa-square-x-twitter
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="fa-viber" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">fa-viber</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="fa-vimeo" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">fa-vimeo</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="fa-vimeo-v" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          fa-vimeo-v
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="fa-whatsapp" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          fa-whatsapp
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="fa-yelp" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">fa-yelp</div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                    {/* Icon Box Item */}
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-30 d-flex align-items-stretch">
                      <div className="icons-example-box">
                        <div className="icons-example-box-icon">
                          {/* Icon Code */}
                          <i className="fa-youtube" />
                          {/* End Icon Code */}
                        </div>
                        <div className="icons-example-box-class">
                          fa-youtube
                        </div>
                      </div>
                    </div>
                    {/* End Icon Box Item */}
                  </div>
                </div>
              </section>
            </main>
            <Footer1 dark />
          </div>{" "}
        </div>
      </div>
    </>
  );
}
