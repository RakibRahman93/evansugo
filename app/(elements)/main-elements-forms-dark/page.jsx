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
    "Element Page Forms Dark || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function ElementPageFormsDark() {
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
                              <AnimatedText text="Form Fields" />
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
                  <div className="container position-relative">
                    <div className="text-center mb-60 mb-sm-40">
                      <h2 className="section-title-small">Different Types</h2>
                    </div>
                    {/* Row */}
                    <div className="row">
                      {/* Col */}
                      <div className="col-sm-4 mb-40">
                        {/* Form */}
                        <div className="form">
                          <div className="mb-20 mb-md-10">
                            {/* Name */}
                            <input
                              type="text"
                              name="name"
                              id="name"
                              className="input-lg round form-control"
                              placeholder="Name"
                              maxLength={100}
                            />
                          </div>
                          <div className="mb-20 mb-md-10">
                            {/* Email */}
                            <input
                              type="email"
                              name="email"
                              id="email"
                              className="input-lg round form-control"
                              placeholder="Email"
                              maxLength={100}
                            />
                          </div>
                          <div className="mb-20 mb-md-10">
                            {/* Password */}
                            <input
                              type="password"
                              name="password"
                              id="password"
                              className="input-lg round form-control"
                              placeholder="Password"
                              maxLength={100}
                            />
                          </div>
                          <div className="mb-20 mb-md-10">
                            <textarea
                              name="text"
                              id="text"
                              className="input-lg round form-control"
                              rows={6}
                              placeholder="Text"
                              maxLength={400}
                              defaultValue={""}
                            />
                          </div>
                        </div>
                        {/* End Form */}
                      </div>
                      {/* End Col */}
                      {/* Col */}
                      <div className="col-sm-4 mb-40">
                        {/* Form */}
                        <div className="form">
                          <div className="mb-20 mb-md-10">
                            <select className="input-lg round form-control">
                              <option>One</option>
                              <option>Two</option>
                              <option>Three</option>
                            </select>
                          </div>
                          <div className="mb-20 mb-md-10">
                            <select
                              multiple
                              className="input-lg round form-control"
                              style={{ height: 100 }}
                            >
                              <option>One</option>
                              <option>Two</option>
                              <option>Three</option>
                              <option>Four</option>
                              <option>Five</option>
                            </select>
                          </div>
                          <div className="mb-20 mb-md-10">
                            {/* Date*/}
                            <input
                              type="date"
                              name="date"
                              id="date"
                              className="input-lg round form-control"
                            />
                          </div>
                          <div className="mb-20 mb-md-10">
                            {/* Color*/}
                            <input
                              type="color"
                              name="color"
                              id="color"
                              className="input-lg round form-control"
                            />
                          </div>
                          <div className="mb-20 mb-md-10">
                            {/* Number */}
                            <input
                              type="number"
                              name="number"
                              id="number"
                              className="input-lg round form-control"
                              placeholder={0}
                              max={100}
                            />
                          </div>
                        </div>
                        {/* End Form */}
                      </div>
                      {/* End Col */}
                      {/* Col */}
                      <div className="col-sm-4 mb-40">
                        {/* Form */}
                        <div className="form">
                          <div className="mb-20 mb-md-10">
                            <input
                              className="input-lg round form-control"
                              id="disabledInput"
                              type="text"
                              placeholder="Disabled input here..."
                              disabled
                            />
                          </div>
                          <div className="mb-20 mb-md-10">
                            <label htmlFor="exampleInputFile">
                              {" "}
                              File input{" "}
                            </label>
                            <input type="file" id="exampleInputFile" />
                            <p className="text-gray">
                              Example block-level help text here.
                            </p>
                          </div>
                          <div className="mb-20 mb-md-10">
                            <label className="checkbox-inline me-3">
                              <input
                                type="checkbox"
                                id="inlineCheckbox1"
                                className="form-check-input"
                                defaultValue="option1"
                              />{" "}
                              <span className="form-check-label">Label 1</span>
                            </label>
                            <label className="checkbox-inline me-3">
                              <input
                                type="checkbox"
                                id="inlineCheckbox2"
                                className="form-check-input"
                                defaultValue="option2"
                              />{" "}
                              <span className="form-check-label">Label 2</span>
                            </label>
                            <label className="checkbox-inline me-3">
                              <input
                                type="checkbox"
                                id="inlineCheckbox3"
                                className="form-check-input"
                                defaultValue="option3"
                              />{" "}
                              <span className="form-check-label">Label 3</span>
                            </label>
                          </div>
                          <div className="mb-20 mb-md-10">
                            <label className="radio-inline me-3">
                              <input
                                type="radio"
                                name="inlineRadioOptions"
                                className="form-check-input"
                                id="inlineRadio1"
                                defaultValue="option1"
                              />{" "}
                              <span className="form-check-label">Label 1</span>
                            </label>
                            <label className="radio-inline me-3">
                              <input
                                type="radio"
                                name="inlineRadioOptions"
                                className="form-check-input"
                                id="inlineRadio2"
                                defaultValue="option2"
                              />{" "}
                              <span className="form-check-label">Label 2</span>
                            </label>
                            <label className="radio-inline me-3">
                              <input
                                type="radio"
                                name="inlineRadioOptions"
                                className="form-check-input"
                                id="inlineRadio3"
                                defaultValue="option3"
                              />{" "}
                              <span className="form-check-label">Label 3</span>
                            </label>
                          </div>
                        </div>
                        {/* End Form */}
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
                  <div className="container position-relative">
                    <div className="text-center mb-60 mb-sm-40">
                      <h2 className="section-title-small">Different Sizes</h2>
                    </div>
                    {/* Row */}
                    <div className="row">
                      {/* Col */}
                      <div className="col-sm-4 mb-40">
                        {/* Form */}
                        <div className="form">
                          <div className="mb-20 mb-md-10">
                            {/* Name */}
                            <input
                              type="text"
                              name="name"
                              id="name-1"
                              className="form-control input-sm round"
                              placeholder="Name"
                              maxLength={100}
                            />
                          </div>
                          <div className="mb-20 mb-md-10">
                            {/* Email */}
                            <input
                              type="email"
                              name="email"
                              id="email-1"
                              className="form-control input-sm round"
                              placeholder="Email"
                              maxLength={100}
                            />
                          </div>
                          <div className="mb-20 mb-md-10">
                            {/* Password */}
                            <input
                              type="password"
                              name="password"
                              id="password-1"
                              className="form-control input-sm round"
                              placeholder="Password"
                              maxLength={100}
                            />
                          </div>
                          <div className="mb-20 mb-md-10">
                            <select className="form-control input-sm round">
                              <option>One</option>
                              <option>Two</option>
                              <option>Three</option>
                            </select>
                          </div>
                        </div>
                        {/* End Form */}
                      </div>
                      {/* End Col */}
                      {/* Col */}
                      <div className="col-sm-4 mb-40">
                        {/* Form */}
                        <div className="form">
                          <div className="mb-20 mb-md-10">
                            {/* Name */}
                            <input
                              type="text"
                              name="name"
                              id="name-2"
                              className="input-md round form-control"
                              placeholder="Name"
                              maxLength={100}
                            />
                          </div>
                          <div className="mb-20 mb-md-10">
                            {/* Email */}
                            <input
                              type="email"
                              name="email"
                              id="email-2"
                              className="input-md round form-control"
                              placeholder="Email"
                              maxLength={100}
                            />
                          </div>
                          <div className="mb-20 mb-md-10">
                            {/* Password */}
                            <input
                              type="password"
                              name="password"
                              id="password-3"
                              className="input-md round form-control"
                              placeholder="Password"
                              maxLength={100}
                            />
                          </div>
                          <div className="mb-20 mb-md-10">
                            <select className="input-md round form-control">
                              <option>One</option>
                              <option>Two</option>
                              <option>Three</option>
                            </select>
                          </div>
                        </div>
                        {/* End Form */}
                      </div>
                      {/* End Col */}
                      {/* Col */}
                      <div className="col-sm-4 mb-40">
                        {/* Form */}
                        <div className="form">
                          <div className="mb-20 mb-md-10">
                            {/* Name */}
                            <input
                              type="text"
                              name="name"
                              id="name-4"
                              className="form-control input-lg round"
                              placeholder="Name"
                              maxLength={100}
                            />
                          </div>
                          <div className="mb-20 mb-md-10">
                            {/* Email */}
                            <input
                              type="email"
                              name="email"
                              id="email-4"
                              className="form-control input-lg round"
                              placeholder="Email"
                              maxLength={100}
                            />
                          </div>
                          <div className="mb-20 mb-md-10">
                            {/* Password */}
                            <input
                              type="password"
                              name="password"
                              id="password-4"
                              className="form-control input-lg round"
                              placeholder="Password"
                              maxLength={100}
                            />
                          </div>
                          <div className="mb-20 mb-md-10">
                            <select className="form-control input-lg round">
                              <option>One</option>
                              <option>Two</option>
                              <option>Three</option>
                            </select>
                          </div>
                        </div>
                        {/* End Form */}
                      </div>
                      {/* End Col */}
                    </div>
                    {/* End Row */}
                  </div>
                </section>
                {/* End Section */}
              </>
            </main>
            <Footer1 dark />
          </div>{" "}
        </div>
      </div>
    </>
  );
}
