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
    "Element Page Animation Dark || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function ElementPageAnimationDark() {
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
                              <AnimatedText text="Animation" />
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
                    <div className="col-md-8 offset-md-2">
                      <div className="text-center mb-30">
                        <div className="row">
                          <div className="col-md-8 offset-md-2">
                            <p>
                              Use the following code to add animation to some
                              element:
                            </p>
                            <div className="highlight">
                              <pre>
                                <code className="html">
                                  &lt;div className="wow fadeIn"&gt;Element with
                                  animation&lt;/div&gt;
                                </code>
                              </pre>
                            </div>
                            <p>
                              Copy the animation class from one of the elements
                              below:
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* Divider */}
                      <hr className="mt-0 mb-70 mb-xs-40" />
                      {/* End Divider */}
                      <div className="mb-30 wow fadeIn" data-wow-offset={0}>
                        <Image
                          src="/assets/images/full-width-images/section-bg-7.jpg"
                          alt="Your Image Description"
                          width={1920}
                          height={1080}
                        />
                      </div>
                      <div className="overflow-hidden">
                        <div
                          className="mb-30 wow fadeScaleOutIn"
                          data-wow-duration="1.2s"
                        >
                          <Image
                            src="/assets/images/full-width-images/section-bg-7.jpg"
                            alt="Your Image Description"
                            width={1920}
                            height={1080}
                          />
                        </div>
                      </div>
                      <div className="overflow-hidden">
                        <div
                          className="mb-30 wow scaleOutIn"
                          data-wow-duration="1.2s"
                        >
                          <Image
                            src="/assets/images/full-width-images/section-bg-7.jpg"
                            alt="Your Image Description"
                            width={1920}
                            height={1080}
                          />
                        </div>
                      </div>
                      <div className="mb-30 wow fadeInUp">
                        <Image
                          src="/assets/images/full-width-images/section-bg-7.jpg"
                          alt="Your Image Description"
                          width={1920}
                          height={1080}
                        />
                      </div>
                      <div className="mb-30 wow fadeInDown">
                        <Image
                          src="/assets/images/full-width-images/section-bg-7.jpg"
                          alt="Your Image Description"
                          width={1920}
                          height={1080}
                        />
                      </div>
                      <div className="mb-30 wow fadeInLeft">
                        <Image
                          src="/assets/images/full-width-images/section-bg-7.jpg"
                          alt="Your Image Description"
                          width={1920}
                          height={1080}
                        />
                      </div>
                      <div className="mb-30 wow fadeInRight">
                        <Image
                          src="/assets/images/full-width-images/section-bg-7.jpg"
                          alt="Your Image Description"
                          width={1920}
                          height={1080}
                        />
                      </div>
                      <div className="overflow-hidden mb-30 wow scalexIn">
                        <div className="position-absolute top-0 bottom-0 start-0 end-0 bg-gray-light-1 wow scalexIn" />
                        <Image
                          src="/assets/images/full-width-images/section-bg-7.jpg"
                          alt="Your Image Description"
                          className="wow fadeIn"
                          data-wow-delay="1s"
                          width={1920}
                          height={1080}
                        />
                      </div>
                      <div className="mb-30 wow fadeScaleIn">
                        <Image
                          src="/assets/images/full-width-images/section-bg-7.jpg"
                          alt="Your Image Description"
                          width={1920}
                          height={1080}
                        />
                      </div>
                      <div className="mb-30 wow clipRightIn">
                        <Image
                          src="/assets/images/full-width-images/section-bg-7.jpg"
                          alt="Your Image Description"
                          width={1920}
                          height={1080}
                        />
                      </div>
                      <div className="mb-30 wow fadeRotateIn">
                        <Image
                          src="/assets/images/full-width-images/section-bg-7.jpg"
                          alt="Your Image Description"
                          width={1920}
                          height={1080}
                        />
                      </div>
                      {/* Divider */}
                      <hr className="mt-70 mt-xs-40 mb-70 mb-xs-40" />
                      {/* End Divider */}
                      <div className="mb-60 mb-sm-40">
                        <h2>Text Lines Animation</h2>
                        <p>
                          <span
                            className="wow linesAnimIn"
                            data-wow-offset={0}
                            data-splitting="lines"
                          >
                            Lorem ipsum dolor sit amet conseur adipisci inerene
                            maximus ligula sempe metuse pelente mattis. Maecenas
                            volutpat, diam eni sagittis quam porta quam. Sed id
                            dolor consectetur fermentum volutpat accumsan purus.
                            Etiam sit amet fringilla lacus susantebe sit
                            ullamcorper pulvinar neque porttitor. Lorem ipsum
                            dolor sit amet conseur adipisci inerene maximus
                            ligula sempe metuse pelente mattis. Maecenas
                            volutpat, diam eni sagittis quam porta quam. Sed id
                            dolor consectetur fermentum volutpat accumsan purus.
                            Integere lectus. Praesent sede nisi eleifend fermum
                            orci amet, iaculis libero. Donec vel ultricies
                            purus. Name dictum sem ipsumebe euliquam.
                          </span>
                        </p>
                      </div>
                      <div className="mb-60 mb-sm-40">
                        <h2>Text Words Animation</h2>
                        <p>
                          <span
                            className="wow wordsAnimIn"
                            data-wow-offset={0}
                            data-splitting="words"
                          >
                            Lorem ipsum dolor sit amet conseur adipisci inerene
                            maximus ligula sempe metuse pelente mattis. Maecenas
                            volutpat, diam eni sagittis quam porta quam. Sed id
                            dolor consectetur fermentum volutpat accumsan purus.
                            Etiam sit amet fringilla lacus susantebe sit
                            ullamcorper pulvinar neque porttitor. Lorem ipsum
                            dolor sit amet conseur adipisci inerene maximus
                            ligula sempe metuse pelente mattis. Maecenas
                            volutpat, diam eni sagittis quam porta quam. Sed id
                            dolor consectetur fermentum volutpat accumsan purus.
                            Integere lectus. Praesent sede nisi eleifend fermum
                            orci amet, iaculis libero. Donec vel ultricies
                            purus. Name dictum sem ipsumebe euliquam.
                          </span>
                        </p>
                      </div>
                      <div className="mb-0">
                        <h2>Text Chars Animation</h2>
                        <p>
                          <span
                            className="wow charsAnimIn"
                            data-wow-offset={0}
                            data-splitting="chars"
                          >
                            Lorem ipsum dolor sit amet conseur adipisci inerene
                            maximus ligula sempe metuse pelente mattis. Maecenas
                            volutpat, diam eni sagittis quam porta quam. Sed id
                            dolor consectetur fermentum volutpat accumsan purus.
                            Etiam sit amet fringilla lacus susantebe sit
                            ullamcorper pulvinar neque porttitor. Lorem ipsum
                            dolor sit amet conseur adipisci inerene maximus
                            ligula sempe metuse pelente mattis. Maecenas
                            volutpat, diam eni sagittis quam porta quam. Sed id
                            dolor consectetur fermentum volutpat accumsan purus.
                            Integere lectus. Praesent sede nisi eleifend fermum
                            orci amet, iaculis libero. Donec vel ultricies
                            purus. Name dictum sem ipsumebe euliquam.
                          </span>
                        </p>
                      </div>
                    </div>
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
