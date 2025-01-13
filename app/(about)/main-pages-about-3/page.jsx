import Footer1 from "@/components/footers/Footer1";

import dynamic from "next/dynamic";
const onePage = false;
const dark = false;
const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);

import Header1Multipage from "@/components/headers/Header1Multipage";
import AnimatedText from "@/components/common/AnimatedText";
import Features from "@/components/homes/home-1/Features";
import { teamMembers } from "@/data/team";
import Split from "@/components/homes/home-1/Split";
import Image from "next/image";
import { featuresListData } from "@/data/features";
import { progressData } from "@/data/skills";
import Link from "next/link";
import { menuItems } from "@/data/menu";

export const metadata = {
  title:
    "Main About 3 || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function MainAboutPage3() {
  return (
    <>
      <div className="theme-main">
        <div className="page" id="top">
          <nav className="main-nav dark light-after-scroll transparent stick-fixed wow-menubar">
            <Header1Multipage links={menuItems} />
          </nav>
          <main id="main">
            <section className="page-section pt-0 pb-0" id="home">
              <ParallaxContainer
                className="page-section bg-dark-1 bg-dark-alpha-80 light-content parallax-5"
                style={{
                  backgroundImage:
                    "url(/assets/images/full-width-images/section-bg-7.jpg)",
                }}
              >
                <div className="container position-relative pt-50">
                  {/* Section Content */}
                  <div className="text-center">
                    <div className="row">
                      {/* Page Title */}
                      <div className="col-md-8 offset-md-2">
                        <h2
                          className="section-caption-border mb-30 mb-xs-20 wow fadeInUp"
                          data-wow-duration="1.2s"
                        >
                          We are design studio
                        </h2>
                        <h1 className="hs-title-1 mb-40">
                          <span
                            className="wow charsAnimIn"
                            data-splitting="chars"
                          >
                            <AnimatedText text="Creating beautiful virtual experiences and products." />
                          </span>
                        </h1>
                        {/* Feature List */}
                        <div
                          className="mt-n10 wow fadeInUp"
                          data-wow-delay="0.6s"
                          data-wow-duration="1.2s"
                        >
                          {/* Features List Item */}
                          <div className="d-inline-flex mt-10 mx-3">
                            <div className="features-list-icon">
                              <i className="mi-check" />
                            </div>
                            <div className="features-list-text">
                              Based in London
                            </div>
                          </div>
                          {/* End Features List Item */}
                          {/* Features List Item */}
                          <div className="d-inline-flex mt-10 mx-3">
                            <div className="features-list-icon">
                              <i className="mi-check" />
                            </div>
                            <div className="features-list-text">
                              Established in 2010
                            </div>
                          </div>
                          {/* End Features List Item */}
                          {/* Features List Item */}
                          <div className="d-inline-flex mt-10 mx-3">
                            <div className="features-list-icon">
                              <i className="mi-check" />
                            </div>
                            <div className="features-list-text">
                              200+ Projects Done
                            </div>
                          </div>
                          {/* End Features List Item */}
                        </div>
                        {/* End Feature List */}
                      </div>
                      {/* End Page Title */}
                    </div>
                  </div>
                  {/* End Section Content */}
                </div>
              </ParallaxContainer>
            </section>
            <section className="page-section">
              <div className="container">
                <div className="row">
                  <div className="col-sm-5 mb-xs-50">
                    <div className="call-action-4-images">
                      <div className="call-action-4-image-1">
                        <Image
                          src="/assets/images/demo-strong/section-image-1.jpg"
                          alt="Image description"
                          width={500}
                          height={692}
                          className="wow scaleOutIn"
                          data-wow-duration="1.2s"
                        />
                      </div>
                      <div
                        className="call-action-4-image-2"
                        data-rellax-y=""
                        data-rellax-speed="0.7"
                        data-rellax-percentage="0.25"
                      >
                        <Image
                          src="/assets/images/demo-strong/section-image-2.jpg"
                          alt="Image description"
                          width={500}
                          height={692}
                          className="wow scaleOutIn"
                          data-wow-duration="1.2s"
                          data-wow-offset={0}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-7 col-xl-6 offset-xl-1 mt-n10">
                    <div className="wow linesAnimIn" data-splitting="lines">
                      <p className="lead mt-0 mb-40">
                        Resonance is an innovative and dynamic full-service
                        creative studio that is passionate about crafting
                        exceptional digital experiences and products. We
                        specialize in a wide range of creative disciplines,
                        including branding, design, and engineering, and we are
                        committed to producing work that not only looks amazing
                        but also functions seamlessly.
                      </p>
                      <p className="text-gray mb-40">
                        Our design team is made up of skilled professionals who
                        are passionate about creating beautiful and engaging
                        digital experiences. We work closely with our clients to
                        develop websites, apps, and other digital products that
                        are not only visually stunning but also intuitive and
                        user-friendly. Our design process is iterative and
                        collaborative, and we always strive to ensure that our
                        clients are completely satisfied with the final product.
                        Finally, our engineering team is dedicated to bringing
                        our designs to life.
                      </p>
                    </div>
                    <div
                      className="local-scroll wow fadeInUp"
                      data-wow-offset={0}
                    >
                      <Link
                        href={`/main-pages-services-1`}
                        className="btn btn-mod btn-large btn-round btn-hover-anim"
                      >
                        <span>Our Services</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              className="page-section bg-dark bg-dark-alpha-70 light-content"
              style={{
                backgroundImage:
                  "url(/assets/images/full-width-images/section-bg-4.jpg)",
              }}
            >
              <Features />
            </section>
            <>
              <section className="page-section" id="team">
                <div className="container">
                  <div className="row">
                    <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
                      <h2 className="section-caption mb-xs-10 wow fadeInUp">
                        Our Creative Team
                      </h2>
                      <h3 className="section-title mb-50 mb-sm-30">
                        <span
                          className="wow charsAnimIn"
                          data-splitting="chars"
                        >
                          Discover the people who make our web studio stand out.
                        </span>
                      </h3>
                    </div>
                  </div>
                  <div
                    className="row position-relative mt-n40 wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    {/* Decorative Waves */}
                    <div
                      className="decoration-8 d-none d-sm-block"
                      data-rellax-y=""
                      data-rellax-speed="-0.6"
                      data-rellax-percentage={0}
                    >
                      <Image
                        src="/assets/images/decoration-1.svg"
                        width={159}
                        height={74}
                        alt=""
                      />
                    </div>
                    {/* End Decorative Waves */}
                    {/* Team item */}
                    {teamMembers.map((elm, i) => (
                      <div key={i} className="col-sm-6 col-lg-3 mt-40">
                        <div className="team-item">
                          <div className="team-item-image">
                            <Image
                              src={elm.image}
                              width={600}
                              height={800}
                              alt="Image Description"
                            />
                            <div className="team-item-detail">
                              <div className="team-social-links">
                                {elm.socials.map((elm, i) => (
                                  <a
                                    key={i}
                                    href={elm.url}
                                    target="_blank"
                                    rel="noopener nofollow"
                                  >
                                    <div className="visually-hidden">
                                      {elm.platform}
                                    </div>
                                    <i className={elm.icon} />
                                  </a>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="team-item-descr">
                            <div className="team-item-name">{elm.name}</div>
                            <div className="team-item-role">{elm.role}</div>
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* End Team item */}
                  </div>
                </div>
              </section>
              {/* End Team Section */}
              {/* Divider */}
              <hr className="mt-0 mb-0" />
              <section className="page-section">
                <div className="container position-relative">
                  {/* Grid */}
                  <div className="row mb-n30">
                    {/* Text */}
                    <div className="col-md-12 col-lg-3 mb-md-50">
                      <h2 className="section-title-small mb-20">
                        How we work?
                      </h2>
                      <p className="text-gray mb-0">
                        Lorem ipsum dolor sit amet casume adipisin elit. Maximus
                        ligula semper metus pellentesque mattis volutpat, lorem
                        diam enim.
                      </p>
                    </div>
                    {/* End Text */}
                    {/* Item */}
                    <div className="col-md-4 col-lg-3 mb-30">
                      <div className="work-process-item text-center pt-20">
                        <div className="work-process-icon">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                            focusable="false"
                            xmlns="http://www.w3.org/2000/svg"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          >
                            <path d="M20 15c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1m-3 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1m-3 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1m5.415 4.946c-1 .256-1.989.482-3.324.482-3.465 0-7.091-2.065-7.091-5.423 0-3.128 3.14-5.672 7-5.672 3.844 0 7 2.542 7 5.672 0 1.591-.646 2.527-1.481 3.527l.839 2.686-2.943-1.272zm-13.373-3.375l-4.389 1.896 1.256-4.012c-1.121-1.341-1.909-2.665-1.909-4.699 0-4.277 4.262-7.756 9.5-7.756 5.018 0 9.128 3.194 9.467 7.222-1.19-.566-2.551-.889-3.967-.889-4.199 0-8 2.797-8 6.672 0 .712.147 1.4.411 2.049-.953-.126-1.546-.272-2.369-.483m17.958-1.566c0-2.172-1.199-4.015-3.002-5.21l.002-.039c0-5.086-4.988-8.756-10.5-8.756-5.546 0-10.5 3.698-10.5 8.756 0 1.794.646 3.556 1.791 4.922l-1.744 5.572 6.078-2.625c.982.253 1.932.407 2.85.489 1.317 1.953 3.876 3.314 7.116 3.314 1.019 0 2.105-.135 3.242-.428l4.631 2-1.328-4.245c.871-1.042 1.364-2.384 1.364-3.75" />
                          </svg>
                        </div>
                        <h3 className="work-process-title">1. Disscussion.</h3>
                      </div>
                    </div>
                    {/* End Item */}
                    {/* Item */}
                    <div className="col-md-4 col-lg-3 mb-30">
                      <div className="work-process-item text-center pt-20">
                        <div className="work-process-icon">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                            focusable="false"
                            xmlns="http://www.w3.org/2000/svg"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          >
                            <path d="M6 3.447h-1v-1.447h19v16h-7.731l2.731 4h-1.311l-2.736-4h-1.953l-2.736 4h-1.264l2.732-4h-2.732v-1h8v-1h3v1h3v-14h-17v.447zm2.242 17.343c-.025.679-.576 1.21-1.256 1.21-.64 0-1.179-.497-1.254-1.156l-.406-4.034-.317 4.019c-.051.656-.604 1.171-1.257 1.171-.681 0-1.235-.531-1.262-1.21l-.262-6.456-.308.555c-.241.437-.8.638-1.265.459-.404-.156-.655-.538-.655-.951 0-.093.012-.188.039-.283l1.134-4.098c.17-.601.725-1.021 1.351-1.021h4.096c.511 0 1.012-.178 1.285-.33.723-.403 2.439-1.369 3.136-1.793.394-.243.949-.147 1.24.217.32.396.286.95-.074 1.297l-3.048 2.906c-.375.359-.595.849-.617 1.381-.061 1.397-.3 8.117-.3 8.117zm-5.718-10.795c-.18 0-.34.121-.389.294-.295 1.04-1.011 3.666-1.134 4.098l1.511-2.593c.172-.295.623-.18.636.158l.341 8.797c.01.278.5.287.523.002 0 0 .269-3.35.308-3.944.041-.599.449-1.017.992-1.017.547.002.968.415 1.029 1.004.036.349.327 3.419.385 3.938.043.378.505.326.517.022 0 0 .239-6.725.3-8.124.033-.791.362-1.523.925-2.061l3.045-2.904c-.661.492-2.393 1.468-3.121 1.873-.396.221-1.07.457-1.772.457h-4.096zm16.476 1.005h-5v-1h5v1zm2-2h-7v-1h7v1zm-15.727-4.994c-1.278 0-2.315 1.038-2.315 2.316 0 1.278 1.037 2.316 2.315 2.316s2.316-1.038 2.316-2.316c0-1.278-1.038-2.316-2.316-2.316zm0 1c.726 0 1.316.59 1.316 1.316 0 .726-.59 1.316-1.316 1.316-.725 0-1.315-.59-1.315-1.316 0-.726.59-1.316 1.315-1.316zm15.727 1.994h-7v-1h7v1z" />
                          </svg>
                        </div>
                        <h3 className="work-process-title">2. Prototyping.</h3>
                      </div>
                    </div>
                    {/* End Item */}
                    {/* Item */}
                    <div className="col-md-4 col-lg-3 mb-30">
                      <div className="work-process-item text-center pt-20">
                        <div className="work-process-icon">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                            focusable="false"
                            xmlns="http://www.w3.org/2000/svg"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          >
                            <path d="M15.551 14.703c.474 1.372 2.049 2.459 3.801 1.868l.021-.007c1.565-.544 2.391-2.242 1.854-3.807-.187-.546-.425-1.137-.695-1.757h-5.967c.299 1.366.625 2.647.986 3.703m2.264-9.232l-4.051 1.388c.183 1.037.379 2.103.59 3.141h5.726c-.655-1.404-1.445-2.94-2.265-4.529m.492-1.226c1.524 2.958 3.086 5.915 3.866 8.187.598 1.744-.045 3.895-2.028 4.874l1.211 3.529c.291.812 1.322.926 2.392.808l.252.735-4.728 1.622-.272-.788c.903-.479 1.688-1.215 1.41-2.054l-1.208-3.52c-2.162.439-3.994-.861-4.596-2.61-.791-2.304-1.405-5.566-1.976-8.837l5.677-1.946zm-8.872 6.755h-5.967c-.27.62-.508 1.211-.695 1.757-.536 1.565.289 3.263 1.854 3.807l.021.007c1.753.591 3.328-.496 3.801-1.868.362-1.056.688-2.337.986-3.703m-5.515-1h5.726c.211-1.038.407-2.104.591-3.141l-4.051-1.388c-.821 1.589-1.611 3.125-2.266 4.529m7.45-3.809c-.571 3.271-1.185 6.533-1.976 8.837-.602 1.749-2.434 3.049-4.596 2.61l-1.208 3.52c-.278.839.507 1.575 1.41 2.054l-.271.788-4.729-1.622.252-.735c1.07.118 2.102.004 2.392-.808l1.211-3.529c-1.983-.979-2.625-3.13-2.028-4.874.78-2.272 2.342-5.229 3.867-8.187l5.676 1.946zm7.13 7.811c.414 0 .75.336.75.75 0 .413-.336.75-.75.75s-.75-.337-.75-.75c0-.414.336-.75.75-.75m-14.5.248c0 .414.336.75.75.75s.75-.336.75-.75c0-.413-.336-.75-.75-.75s-.75.337-.75.75m3.25-2.25c.414 0 .75.337.75.75 0 .414-.336.75-.75.75s-.75-.336-.75-.75c0-.413.336-.75.75-.75m10.5-.499c.414 0 .75.336.75.751 0 .413-.336.75-.75.75s-.75-.337-.75-.75c0-.415.336-.751.75-.751m-5.249-7.977v-3.023c0-.277-.223-.5-.5-.5-.275 0-.499.223-.499.5v3.023c0 .276.224.5.499.5.277 0 .5-.224.5-.5m1.932.462l1.641-2.79c.142-.238.062-.545-.176-.685-.239-.139-.544-.062-.684.177l-1.643 2.79c-.14.238-.06.545.176.685.08.047.167.069.254.069.172 0 .339-.088.432-.246m-4.552.246c-.171 0-.337-.088-.432-.246l-1.642-2.79c-.14-.238-.061-.545.177-.685.237-.14.544-.061.685.177l1.643 2.79c.139.238.061.545-.178.685-.08.047-.166.069-.253.069" />
                          </svg>
                        </div>
                        <h3 className="work-process-title">3. Production.</h3>
                      </div>
                    </div>
                    {/* End Item */}
                  </div>
                  {/* End Grid */}
                </div>
              </section>
              <section className="pt-30">
                <div id="paddingRightContainer" className="container" />
                <div className="row g-0">
                  <div className="col-lg-6 mt-n30 mt-md-0 mb-30 mb-md-0">
                    <div
                      id="paddingRight"
                      className={`split-column-right ${
                        dark ? "bg-dark-2" : "bg-dark-1"
                      } light-content position-relative d-flex align-items-center`}
                      data-rellax-y=""
                      data-rellax-speed="0.5"
                      data-rellax-percentage="0.5"
                    >
                      {/* Decorative Dots */}
                      <div className="position-absolute top-0 start-0 pt-2 ps-2 opacity-02">
                        <Image
                          width={192}
                          height={222}
                          src="/assets/images/demo-strong/decoration.svg"
                          alt=""
                        />
                      </div>
                      {/* End Decorative Dots */}
                      <div>
                        <h2 className="section-title mb-30">
                          Responsive, <span className="font-alt">flexible</span>{" "}
                          and customizable.
                        </h2>
                        <p className="mb-50">
                          Phasellus nisl lectus, tincidunt eget fermentum quis,
                          accumsan a sem efficitur augue ac ex maximus, eget
                          viverra sem aliquam. Donec blandit ante nunc, nec
                          pellentesque arcu egestas a lorem.
                        </p>
                        {/* Features List */}
                        <div className="row mt-n20">
                          {/* Features List Item */}
                          {featuresListData.map((item, index) => (
                            <div
                              key={index}
                              className="col-sm-6 col-lg-12 col-xl-6 d-flex mt-20"
                            >
                              <div className="features-list-icon">
                                <i className="mi-check" />
                              </div>
                              <div className="features-list-text">
                                {item.text}
                              </div>
                            </div>
                          ))}
                          {/* End Features List Item */}
                        </div>
                        {/* End Features List */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-stretch order-lg-first">
                    <div className="split-image-left">
                      <Image
                        width={1100}
                        height={930}
                        src="/assets/images/demo-strong/split-image-2.jpg"
                        alt="Image Description"
                      />
                      {/* Circle Text */}
                      <div className="position-absolute bottom-0 start-0 ps-4 pb-4 d-none d-sm-block">
                        <Image
                          src="/assets/images/demo-strong/circle-text.svg"
                          width={138}
                          height={138}
                          alt="Image Description"
                        />
                      </div>
                      {/* End Circle Text */}
                    </div>
                  </div>
                </div>{" "}
                <Split />
              </section>
            </>
            <>
              {/* Skills Section */}
              <section className="page-section z-index-1">
                <div className="container position-relative">
                  <div className="row position-relative">
                    <div className="col-md-6 col-lg-5 mb-md-50 mb-sm-30">
                      <h3 className="section-title mb-30">
                        What our area of&nbsp;expertise?
                      </h3>
                      <p className="text-gray mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nam pulvinar vitae neque et porttitor. Integer non
                        dapibus diam, ac eleifend lectus. In maximus ligula
                        semper metus pellentesque mattis. Maecenas volutpat,
                        diam enim sagittis quam.
                      </p>
                    </div>
                    <div className="col-md-6 offset-lg-1 pt-10 pt-sm-0">
                      {/* Bar Item */}
                      {progressData.map((elm, i) => (
                        <div key={i} className="progress tpl-progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: `${elm.value}%` }}
                          >
                            <div>{elm.label}, %</div>
                            <span>{elm.value}</span>
                          </div>
                        </div>
                      ))}
                      {/* End Bar Item */}

                      {/* End Bar Item */}
                    </div>
                  </div>
                </div>
              </section>
              {/* End Skill Section */}
              {/* Divider */}
            </>
            <hr className={`mt-0 mb-0 ${dark ? "white" : ""}`} />
            <section
              className={`page-section  ${
                dark ? "bg-dark-1 light-content z-index-1" : ""
              }`}
            >
              <div className="container position-relative">
                {/* Decorative Waves */}
                <div
                  className="decoration-21 d-none d-lg-block"
                  data-rellax-y
                  data-rellax-speed="0.7"
                  data-rellax-percentage="0.5"
                >
                  <Image
                    width={148}
                    height={148}
                    className="svg-shape"
                    src="/assets/images/decoration-3.svg"
                    alt=""
                  />
                </div>
                {/* End Decorative Waves */}
                <div className="row text-center wow fadeInUp">
                  <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                    <p className="section-descr mb-50 mb-sm-30">
                      The power of design help us to solve complex problems and
                      cultivate business solutions.
                    </p>
                    <div className="local-scroll">
                      <Link
                        href={`/main-pages-contact-1${dark ? "-dark" : ""}`}
                        className="btn btn-mod btn-large btn-round btn-hover-anim"
                      >
                        <span>Contact us</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
          <Footer1 />
        </div>{" "}
      </div>
    </>
  );
}
